export const metadata = {
  title: "Mutualy",
  description: "B2B matchmaking platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, background: "#0a0f1d" }}>{children}</body>
    </html>
  );
}
