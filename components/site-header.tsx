import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { SELAR_URL } from '@/lib/site'

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Pricing', href: '#pricing' },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#top" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-cream font-serif text-lg font-semibold">
            S
          </span>
          <span className="font-serif text-lg font-semibold tracking-tight text-navy">
            Sons to Men
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button
          nativeButton={false}
          render={<a href={SELAR_URL} target="_blank" rel="noopener noreferrer" />}
          className="rounded-full bg-navy px-5 text-cream hover:bg-navy/90"
        >
          Start now
        </Button>
      </div>
    </header>
  )
}
