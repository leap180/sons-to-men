import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { Benefits } from '@/components/benefits'
import { Inclusive } from '@/components/inclusive'
import { Pricing } from '@/components/pricing'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Benefits />
        <Inclusive />
        <Pricing />
      </main>
      <SiteFooter />
    </div>
  )
}
