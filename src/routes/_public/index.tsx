import { createFileRoute } from '@tanstack/react-router'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { PhilosophySection } from '@/components/philosophy-section'
import { FoundersSection } from '@/components/founders-section'
import { ResidencySection } from '@/components/residency-section'
import { ClubSection } from '@/components/club-section'
import { CommunitySection } from '@/components/community-section'
import { FinalCtaSection } from '@/components/final-cta-section'
import { SiteFooter } from '@/components/site-footer'
import { ModalProvider } from '@/components/modal-context'
import { ResidencyModal } from '@/components/residency-modal'
import { ClubModal } from '@/components/club-modal'

export const Route = createFileRoute('/_public/')({
  component: Index,
})

function Index() {
  return (
    <ModalProvider>
      <div
        style={{
          background: '#060606',
          minHeight: '100vh',
          color: '#F5F0E8',
        }}
      >
        <Navbar />
        <HeroSection />
        <PhilosophySection />
        <FoundersSection />
        <ResidencySection />
        <ClubSection />
        <CommunitySection />
        <FinalCtaSection />
        <SiteFooter />
      </div>
      <ResidencyModal />
      <ClubModal />
    </ModalProvider>
  )
}
