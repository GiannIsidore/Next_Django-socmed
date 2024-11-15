import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import { AuthProvider } from "@/app/context/useAuth"
import ClientAuthProvider from "@/lib/ClientAuthProvider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
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
    <html lang="en">
          <body
              cz-shortcut-listen="true"
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800`}
          >
              <ClientAuthProvider>

               <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 shadow-sm">
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
</ClientAuthProvider>
      </body>
    </html>
  )
}
