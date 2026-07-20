import "./globals.css";

export const metadata = {
  title: "Digiwell",
  description: "Modern coaching management platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
