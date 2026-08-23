import Image from 'next/image'
import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SELAR_URL } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:py-24 lg:grid-cols-2 lg:gap-8 lg:px-8">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium text-navy">
            <Sparkles className="h-4 w-4 text-amber" aria-hidden="true" />
            New challenge every week
          </span>

          <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-navy sm:text-5xl lg:text-6xl">
            From boyhood to manhood. Join the movement today.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Join maternal figures everywhere guiding thier boys from boyhood to manhood with connection, character, and strength to thrive.
         
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              nativeButton={false}
              render={<a href={SELAR_URL} target="_blank" rel="noopener noreferrer" />}
              className="group h-12 rounded-full bg-amber px-7 text-base text-white hover:bg-amber/90"
            >
              Get your first challenge
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              nativeButton={false}
              render={<a href="#how-it-works" />}
              className="h-12 rounded-full border-navy/20 bg-transparent px-7 text-base text-navy hover:bg-navy/5"
            >
              See how it works
            </Button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">
            One-time $49. Lifetime access. From boyhood to manhood.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -right-6 -top-6 hidden h-32 w-32 rounded-full bg-sage/30 blur-2xl lg:block" aria-hidden="true" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border shadow-xl shadow-navy/10">
            <Image
              src="/images/hero-mother-son.png"
              alt="A mother embracing her smiling young son"
              width={720}
              height={860}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 max-w-[13rem] rounded-2xl border border-border bg-card p-4 shadow-lg shadow-navy/10">
            <p className="font-serif text-2xl font-semibold text-navy">5 min</p>
            <p className="text-sm text-muted-foreground">
              A week to build lifelong character
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
