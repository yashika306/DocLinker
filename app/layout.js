import { Inter } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ConvexClientProvider } from '@/components/providers/ConvexProvider';
import ModalProvider from '@/components/providers/ModalProvider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CloudNote Pro',
  description: 'CloudNote Pro',
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/CNMS.jpg",
        href: "/CNMS.jpg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/Dark-hero1.png",
        href: "/Dark-hero1.png",
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
          <Toaster position='bottom-center'/>
          <ModalProvider />
          {children}

          </ThemeProvider>
        </ConvexClientProvider>
      </body>
    </html>
  )
}