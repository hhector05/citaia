import './globals.css'

export const metadata = { 
  title: 'CitaIA', 
  description: 'IA para clínicas estéticas' 
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
