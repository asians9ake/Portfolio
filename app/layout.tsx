import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import MainWrapper from "./main-wrapper"

export const metadata: Metadata = {
  title: "Ashutosh Singhania ",
  description:
    "Data Analyst, Business Analyst, and AI & Data Science Graduate skilled in SQL, Python, Power BI, Tableau, Excel, and Machine Learning.",
  keywords:
    "Ashutosh Singhania, Data Analyst, Business Analyst, SQL, Python, Power BI, Tableau, Excel, Machine Learning, Data Science, Analytics",
  authors: [{ name: "Ashutosh Singhania" }],
  creator: "Ashutosh Singhania",
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased text-gray-900 bg-white min-h-screen flex flex-col">
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
      </body>
    </html>
  )
}