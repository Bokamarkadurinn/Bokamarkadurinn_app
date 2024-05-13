import React from 'react';
import Menu from '@/app/ui/menu';
import '@/app/globals.css'


export default function RootLayout({children,}: {children: React.ReactNode}) 
{

  return (
  <html lang="is">
      <body>
        <header>
          <Menu />
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
  </html>
);
}