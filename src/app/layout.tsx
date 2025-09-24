import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { AuthProvider } from '@/lib/auth-context'
import { ModernNavbar } from '@/components/ui/modern-navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CareerPath Pro | AI-Powered Career Discovery',
  description: 'Discover your ideal career path with our comprehensive psychology-backed assessment using Holland Code and Big Five personality frameworks. Beautiful, modern interface with personalized insights.',
  keywords: 'career assessment, personality test, career guidance, Holland Code, Big Five, psychology, modern design, AI career matching',
  authors: [{ name: 'CareerPath Pro Team' }],
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: 'CareerPath Pro | AI-Powered Career Discovery',
    description: 'Discover your ideal career with our psychology-backed assessment',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
   <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
          themes={['light', 'dark']}
        >
          <AuthProvider>
            <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
              <ModernNavbar />
              <main className="relative">
                {children}
              </main>

              {/* Background decoration */}
              <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
