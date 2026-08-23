import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SELAR_URL } from '@/lib/site'

export function SiteFooter() {
  return (
    <footer className="bg-card">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-sage/20 px-6 py-14 text-center sm:px-12">
          <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Start raising an exceptional man this week
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-navy/70">
            Join maternal figures everywhere giving their boys the guidance,
            connection, and character to thrive.
          </p>
          <Button
            size="lg"
            nativeButton={false}
            render={<a href={SELAR_URL} target="_blank" rel="noopener noreferrer" />}
            className="group mt-8 h-12 rounded-full bg-amber px-8 text-base text-white hover:bg-amber/90"
          >
            Get your first challenge
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy text-cream font-serif text-sm font-semibold">
              S
            </span>
            <span className="font-serif font-semibold text-navy">Sons to Men</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sons to Men. Made with love for the next
            generation of good men.
          </p>
        </div>
      </div>
    </footer>
  )
}
