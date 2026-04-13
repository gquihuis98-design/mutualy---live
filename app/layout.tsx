export const metadata = {
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
      <body>{children}</body>
    </html>
  );
}
