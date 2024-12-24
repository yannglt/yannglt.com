import Link from "next/link";

import { Pump } from "basehub/react-pump";

export default async function Page() {
  return (
    <Pump
      queries={[
        {
          writing: {
            notes: {
              __args: { orderBy: "date__DESC" },
              items: {
                _id: true,
                _title: true,
                _slug: true,
              },
            },
          },
        },
      ]}
    >
      {async ([{ writing }]) => {
        "use server";

        return (
          <main>
            <h1>Writing</h1>
            <ul>
              {writing.notes.items.map((note) => (
                <li key={note._id}>
                  <Link href={`/writing/${note._slug}`}>{note._title}</Link>
                </li>
              ))}
            </ul>
          </main>
        );
      }}
    </Pump>
  );
}
