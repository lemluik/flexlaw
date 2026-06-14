import { Header } from '@/components/Header'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { Cases } from '@/components/sections/Cases'
import { Reviews } from '@/components/sections/Reviews'
import { FAQ } from '@/components/sections/FAQ'
import { Contacts } from '@/components/sections/Contacts'
import { Footer } from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <HowWeWork />
        <Cases />
        <Reviews />
        <FAQ />
        <Contacts />
      </main>
      <Footer />
    </div>
  )
}

export default App
