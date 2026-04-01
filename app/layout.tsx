import "./globals.css";

export const metadata = {
  title: "Mutualy",
  description: "B2B matchmaking platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
