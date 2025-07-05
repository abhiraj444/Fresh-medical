'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { AuthProvider } from '@/context/AuthContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { usePathname } from 'next/navigation'; // Import usePathname

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname(); // Get the current pathname
  const section = pathname === '/' ? 'homepage' : pathname.split('/')[1]; // Derive section from pathname

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen font-body antialiased',
          inter.variable
        )}
      >
        <ThemeProvider>
          <AuthProvider>
              <div className="relative flex min-h-screen flex-col bg-background text-foreground" data-section={section}> {/* Apply data-section here */}
              <Header />
              <main className="flex-1">{children}</main>
              </div>
              <Toaster />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
