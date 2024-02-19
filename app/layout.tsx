export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <div>{children}</div>
        <p>全てのページに表示される内容です．</p>
      </body>
    </html>
  );
}
