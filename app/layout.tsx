import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import "./globals.css"

const montserrat = Montserrat({ subsets: ["latin"] })
const openSans = Open_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <head>
        <style>{`
html {
  font-family: ${montserrat.style.fontFamily}, ${openSans.style.fontFamily};
  --font-sans: ${openSans.variable};
  --font-mono: ${openSans.variable}; /* Assuming Open Sans is used for mono as well */
}
        `}</style>
      </head>
      <body className="font-sans bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
