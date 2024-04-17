export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
return (
  <html lang="is">
    <body>
      <header></header>
      <nav></nav>
      <main>
        {children}
      </main>
      <footer></footer>
    </body>
  </html>
);
}
