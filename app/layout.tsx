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
      <head>
        <style dangerouslySetInnerHTML={{ __html: `
          * {
            display: block !important;
            visibility: visible !important;
            opacity: 1 !important;
            height: auto !important;
            width: auto !important;
            min-height: 0 !important;
            max-height: none !important;
            overflow: visible !important;
            position: static !important;
          }
          body, main, div, p, h1, h2, h3, h4, h5, h6, ul, li, span, section, article {
            display: block !important;
            visibility: visible !important;
          }
        ` }} />
      </head>
      <body>{children}</body>
    </html>
  )
}
