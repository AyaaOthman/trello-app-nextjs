import './globals.css'
import Navbar from './navbar/page'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Navbar/>

        {children}</body>
    </html>
  )
}