import './globals.css'
import {Nav} from "@/components/Nav/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="h-screen w-screen w-screen bg-navy-blue">
            <Nav/>
            {children}
      </body>
    </html>
  )
}
