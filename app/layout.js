import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ConvexClientProvider } from '@/components/providers/ConvexProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'DocLinker',
  description: 'The connected workspace DocLinker',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.png",
        href: "/logo.png",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.png",
        href: "/logo-dark.png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ConvexClientProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="DocLinker-theme"
          >
          {children}
          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}