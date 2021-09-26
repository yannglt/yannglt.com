import client from "~/plugins/contentful";

export const state = () => ({
  notes: null
})

export const mutations = {
  updatePosts: (state, notes) => {
    state.notes = notes
  }
}

export const actions = {
  async getPosts({ commit }) {
    try {
      if (!client) return;
      const response = await client.getEntries({
        content_type: 'note',
        order: '-fields.publishDate',
      });
      if (response.items.length > 0) commit("updatePosts", response.items);
    } catch (err) {
      console.error(err);
    }
  }
}