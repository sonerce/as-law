import HeroSlider from '@/components/HeroSlider'
import CitizenshipPrograms from '@/components/CitizenshipPrograms'
import LegalServices from '@/components/LegalServices'
import Memberships from '@/components/Memberships'
import Welcome from '@/components/Welcome'

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Welcome />
      <CitizenshipPrograms />
      <LegalServices />
      <Memberships />
    </main>
  )
}
