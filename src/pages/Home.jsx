import PageTransition from '../components/PageTransition';
import HeroSlider from '../components/home/HeroSlider';
import TrustStats from '../components/home/TrustStats';
import ServicesOverview from '../components/home/ServicesOverview';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ClientMarquee from '../components/home/ClientMarquee';
import Testimonials from '../components/home/Testimonials';
import CTABanner from '../components/home/CTABanner';

export default function Home() {
  return (
    <PageTransition>
      {/* 1. Full Screen Hero Swiper */}
      <HeroSlider />

      {/* 2. Stats Bar */}
      <TrustStats />

      {/* 3. Services Overview Grid */}
      <ServicesOverview />

      {/* 4. Why Choose Us (Split Layout) */}
      <WhyChooseUs />

      {/* 5. Infinite Marquee of Clients */}
      <ClientMarquee />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Bottom CTA */}
      <CTABanner />

    </PageTransition>
  );
}
