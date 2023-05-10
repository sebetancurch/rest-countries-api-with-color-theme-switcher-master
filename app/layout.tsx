import '../styles/globals.css'
import '../styles/fonts.css'
import Home from './components/main'

export const metadata = {
  title: 'Country list',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body style={{fontFamily: "Nunito Sans", backgroundColor: "hsl(0, 0%, 98%)"}} className="min-h-screen m-0 overflow-y-auto">
          <Home>
            {children}
          </Home>
        </body>
    </html>
  )
}
