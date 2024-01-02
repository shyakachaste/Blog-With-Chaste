
import type { Metadata } from 'next'
import { Inter, Narnoor } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/nav/Navbar'
import Sessionprovider from '@/components/session-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata : Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),
  title: {
    template: "%s | Shyaka Chaste blog",
    default: "Shyaka Chaste blog",
  },
  description: "Discover the coding universe with Shyaka Chaste, a full stack developer. Learn cool tricks, explore hands-on project tutorials, and boost your coding skills. Dive into Shyaka's impressive projects and pick up practical knowledge along the way. Start your coding adventure now!",

  openGraph:{
    title: "Shyaka Chaste blog",
    url:process.env.SITE_URL,
    siteName:"Shyaka Chaste blog",
    images:"/public/poster.png",
    type: "website"
  },

  keywords:["Shyaka Chaste","Shyaka Chaste blog","Chaste blog","web development","coding blog"],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

        <ThemeProvider attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
        >

           <main className="max-w-7xl mx-auto p-10 space-y-10">
            <Navbar />
            {children}
           </main>
           <Toaster />

        </ThemeProvider>
        <Sessionprovider/>
      </body>
    </html>
  )
}
