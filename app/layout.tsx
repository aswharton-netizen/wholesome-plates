import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Wholesome Plates To-Go | Coming Soon',
  description: 'Premium meal prep, delivered. Coming soon to metro Atlanta.',
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>
}
