import Image from 'next/image'
import {
  ShieldCheck,
  MessageCircleHeart,
  Compass,
  Users,
  BookOpen,
  Crown,
} from 'lucide-react'

const benefits = [
  {
    icon: MessageCircleHeart,
    title: 'Deeper conversations',
    description:
      'Prompts that open the door to honest talks about feelings, values, and growing up.',
  },
  {
    icon: ShieldCheck,
    title: 'Confidence & character',
    description:
      'Challenges designed to build self-respect, integrity, and quiet inner strength.',
  },
  {
    icon: Compass,
    title: 'Purpose & direction',
    description:
      'Help him discover his interests, set goals, and understand the man he wants to become.',
  },
  {
    icon: Users,
    title: 'Stronger bonds',
    description:
      'Shared moments that bring you closer and make him feel truly seen and supported.',
  },
  {
    icon: BookOpen,
    title: 'Real-life skills',
    description:
      'Practical lessons on responsibility, respect, money, and handling emotions well.',
  },
  {
    icon: Crown,
    title: 'Rooted in dignity',
    description:
      'Content that celebrates and affirms brown boys and the exceptional men they will become.',
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            The benefits
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Everything he needs to grow into an exceptional man
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Thoughtful challenges that nurture the heart, mind, and character of
            boys ages 8 to 16.
          </p>
          <div className="mt-8 overflow-hidden rounded-[2rem] border border-border shadow-lg shadow-navy/10">
            <Image
              src="/images/mother-son-blonde.png"
              alt="A mother embracing her smiling blonde-haired son"
              width={640}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <li
              key={benefit.title}
              className="rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-md hover:shadow-navy/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber/15 text-amber">
                <benefit.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-serif text-lg font-semibold text-navy">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
