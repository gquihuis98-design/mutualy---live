import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mutualy",
  description: "Permission-based B2B matchmaking",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
