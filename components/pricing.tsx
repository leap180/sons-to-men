const STRIPE_US_URL = "https://buy.stripe.com/dRm14o6BU2xk1VK8aP18c01"
const SELAR_AFRICA_URL = "https://selar.com/sonstomen"
const includedFeatures = [
  'A new challenge every single week',
  'Conversation prompts & activities',
  'From boyhood to manhood',
  'Made for moms, grandmas, aunties & guardians',
  'One-time payment, lifetime access',
]

const plans = [
  {
    name: 'Lifetime',
    price: '$49',
    period: ' one-time',
    description: 'One payment. Lifetime access to guide him from boyhood to manhood.',
    href: STRIPE_US_URL,
    featured: true,
    note: 'Lifetime access',
  },
]

export function Pricing() {
  const plan = plans[0]
  return (
    <section id="pricing" className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl border p-8 text-center shadow-lg">
        <h2 className="text-3xl font-bold">{plan.name} Access</h2>
        <p className="mt-2 text-muted-foreground">{plan.description}</p>
        <div className="mt-6">
          <span className="text-5xl font-bold">{plan.price}</span>
          <span className="text-muted-foreground">{plan.period}</span>
        </div>
        <a href={plan.href} className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-foreground text-background">
          Get Lifetime Access - $49
        </a>
        <p className="mt-3 text-sm text-muted-foreground">{plan.note}</p>
        <ul className="mt-8 space-y-3 text-left">
          {includedFeatures.map((f) => (
            <li key={f}>✓ {f}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}