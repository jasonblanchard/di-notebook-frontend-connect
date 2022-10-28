import { Atkinson_Hyperlegible } from "@next/font/google";

const atkinson = Atkinson_Hyperlegible({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={atkinson.className}>
      <head>
        <title>Next.js</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
