import "../styles/reset.css";
import "./globals.css";

import localFont from "next/font/local";

export const standard = localFont({
  variable: "--font-standard",
  src: [
    {
      path: "../../public/fonts/gt-america-standard-light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/gt-america-standard-light-italic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../public/fonts/gt-america-standard-medium.woff2",
      weight: "500",
      style: "normal",
    },
  ],
});

export const mono = localFont({
  variable: "--font-mono",
  src: "../../public/fonts/gt-america-mono-medium.woff2",
});

export const expanded = localFont({
  variable: "--font-expanded",
  src: "../../public/fonts/gt-america-expanded-black.woff2",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${standard.variable} ${mono.variable} ${expanded.variable}`}>
      <body>{children}</body>
    </html>
  );
}
