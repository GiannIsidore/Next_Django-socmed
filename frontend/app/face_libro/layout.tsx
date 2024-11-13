import type { Metadata } from "next"
import localFont from "next/font/local"

import { NavbarComponent } from "@/components/navbar"
import PrivateRoute from "@/lib/private_routes"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: "SocialConnect",
  description: "Connect with friends and share your world",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (


      <div>
       <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 shadow-sm">
            <NavbarComponent />
          </header>
          <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {children}
            </div>
          </main>
        </div>
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 via-transparent to-pink-50 dark:from-blue-900 dark:via-transparent dark:to-pink-900 opacity-20"></div>
        </div>
      </div>


  )
}
