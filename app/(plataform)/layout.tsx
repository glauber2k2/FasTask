import { ClerkProvider } from '@clerk/nextjs'
import { ReactNode } from 'react'

export default function layoutPlataform({ children }: { children: ReactNode }) {
  return <ClerkProvider afterSignOutUrl={'/'}>{children}</ClerkProvider>
}
