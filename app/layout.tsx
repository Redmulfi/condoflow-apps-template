export const metadata = {
  title: 'CondoFlow - Multi-Tenant Property Management',
  description: 'Professional property and building management system',
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
