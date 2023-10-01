import 'src/app/styles/global.scss';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Reddit Clone',
  description: 'Developed by: Daniel Luiz Alves',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className} style={{ padding: `0 26px` }}>
        {children}
      </body>
    </html>
  );
}
