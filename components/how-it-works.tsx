import Image from 'next/image'
import { Ticket, Users, CalendarClock } from 'lucide-react'

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  )
}
import { Button } from '@/components/ui/button'
import { SELAR_URL, FACEBOOK_URL } from '@/lib/site'

const steps = [
  {
    icon: Ticket,
    title: 'Subscribe on Selar',
    description:
      'Choose your plan and subscribe securely on Selar. It only takes a minute to get started.',
  },
  {
    icon: Users,
    title: 'Join the private Facebook group',
    description:
      'Get instant access to our private Facebook community of maternal figures raising exceptional men.',
  },
  {
    icon: CalendarClock,
    title: 'A new challenge every Monday',
    description:
      'Every Monday a fresh weekly challenge drops inside the Facebook group, ready for you and your son.',
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            How it works
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Raising a good man, one week at a time
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Challenges delivered weekly inside our private Facebook community.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step.title} className="relative flex flex-col items-start">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-sage/20 text-navy">
                  <step.icon className="h-6 w-6 text-navy" aria-hidden="true" />
                </span>
                <span className="font-serif text-4xl font-semibold text-sage">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 font-serif text-xl font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 grid items-center gap-8 rounded-[2rem] border border-border bg-background p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-sage/20 px-4 py-1.5 text-sm font-medium text-navy">
              <CalendarClock className="h-4 w-4 text-amber" aria-hidden="true" />
              New challenge every Monday
            </p>
            <h3 className="mt-4 text-balance font-serif text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
              Challenges delivered weekly inside our private Facebook community
            </h3>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Subscribe on Selar, then join the private group for instant access.
              Every week you and your son grow alongside other families doing the
              same.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                nativeButton={false}
                render={<a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" />}
                className="h-12 rounded-full bg-navy px-7 text-base text-cream hover:bg-navy/90"
              >
                <FacebookIcon className="mr-1 h-5 w-5" />
                Join the Facebook community
              </Button>
              <Button
                size="lg"
                variant="outline"
                nativeButton={false}
                render={<a href={SELAR_URL} target="_blank" rel="noopener noreferrer" />}
                className="h-12 rounded-full border-navy/20 bg-transparent px-7 text-base text-navy hover:bg-navy/5"
              >
                Subscribe on Selar
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.5rem] border border-border shadow-lg shadow-navy/10">
            <Image
              src="/images/diverse-boys.png"
              alt="A diverse group of boys aged 8 to 16 smiling together"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
