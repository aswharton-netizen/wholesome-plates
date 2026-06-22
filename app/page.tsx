import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import PhotoStrip from '@/components/PhotoStrip'
import Services from '@/components/Services'
import HowItWorks from '@/components/HowItWorks'
import QuoteBand from '@/components/QuoteBand'
import ChefCarousel from '@/components/ChefCarousel'
import MenuSection from '@/components/MenuSection'
import BookingSection from '@/components/BookingSection'
import Footer from '@/components/Footer'

const strip1 = [
  { src: '/images/strip1-a.jpg', caption: 'Citrus-braised pork taco — cochinita pibil-inspired, avocado crema, pickled onion, cotija' },
  { src: '/images/strip1-b.jpg', caption: 'Bún thịt nướng — Vietnamese grilled pork bowl with pickled daikon and carrot' },
  { src: '/images/strip1-c.jpg', caption: 'Whipped ricotta crostini — raw honey, Aleppo pepper' },
  { src: '/images/strip1-d.jpg', caption: 'Chicken and dumplings — from scratch, Dutch oven' },
]

const strip2 = [
  { src: '/images/strip2-a.jpg', caption: 'Chocolate cake — powdered sugar' },
  { src: '/images/strip2-b.jpg', caption: 'Buttercream cupcakes — fresh piped frosting' },
  { src: '/images/strip2-c.jpg', caption: 'Layered buttermilk biscuits — golden, pull-apart' },
  { src: '/images/strip2-d.jpg', caption: 'Skillet cornbread — heart-shaped Le Creuset' },
]

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <PhotoStrip photos={strip1} />
      <Services />
      <HowItWorks />
      <QuoteBand />
      <ChefCarousel />
      <PhotoStrip photos={strip2} />
      <MenuSection />
      <BookingSection />
      <Footer />
    </main>
  )
}
