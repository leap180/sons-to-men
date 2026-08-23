import Image from 'next/image'

const figures = ['Moms', 'Grandmas', 'Aunties', 'Guardians', 'Big sisters', 'Mentors']

export function Inclusive() {
  return (
    <section className="border-y border-border bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-cream/10 shadow-xl shadow-black/20">
          <Image
            src="/images/grandmother-boy.png"
            alt="A grandmother laughing joyfully with her grandson"
            width={680}
            height={560}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-amber">
            For every maternal figure
          </p>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            It takes a village, and you&apos;re the heart of his
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-cream/80">
            Whether you&apos;re his mom, his grandma raising him, an auntie who shows
            up, or a guardian who chose him, Sons to Men is made for you. Every woman
            shaping a young man deserves the tools to do it with confidence and joy.
          </p>

          <ul className="mt-8 flex flex-wrap gap-3">
            {figures.map((figure) => (
              <li
                key={figure}
                className="rounded-full border border-cream/20 bg-cream/5 px-4 py-2 text-sm font-medium text-cream"
              >
                {figure}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
