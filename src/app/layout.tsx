import './globals.css'

export const metadata = {
  title: 'Starscope - Portfolio',
  description: 'Design Portfolio by Caleb Faulkenr',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}