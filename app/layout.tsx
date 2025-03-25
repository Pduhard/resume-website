import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/ThemeProvider';
import Navbar from '@/components/layout/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio - Paco Duhard-Jourdan',
  description: 'Professional portfolio showcasing my work and experience.',
  openGraph: {
    title: 'Portfolio - Paco Duhard-Jourdan',
    description: 'Professional portfolio showcasing my work and experience.',
    images: [
      {
        url: 'https://paco-duhard-jourdan.vercel.app/portfolio.png',
        width: 1200,
        height: 630,
        alt: 'Portfolio - Paco Duhard-Jourdan',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}