import type React from "react"
import type { Metadata } from "next"
import { Geist_Mono, Amatic_SC } from "next/font/google"
import "./globals.css"
import BodyFade from "@/components/BodyFade"

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const amaticSC = Amatic_SC({
  variable: "--font-amatic",
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Baby Cash",
  description: "A site for little baby boy Cash (idk what else to put here)",
  icons: {
    icon: "/babyico.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} ${amaticSC.variable} antialiased page-fade`}>
        <noscript>
          <style>{`body.page-fade { opacity: 1 !important; }`}</style>
        </noscript>
        <BodyFade>{children}</BodyFade>
      </body>
    </html>
  )
}
