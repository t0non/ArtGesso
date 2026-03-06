import Header from '@/components/layout/header';
import Hero from '@/components/sections/hero';
import Highlights from '@/components/sections/highlights';
import Services from '@/components/sections/services';
import WhyUs from '@/components/sections/why-us';
import Locations from '@/components/sections/locations';
import HowItWorks from '@/components/sections/how-it-works';
import FAQ from '@/components/sections/faq';
import Footer from '@/components/layout/footer';
import dynamicImport from 'next/dynamic';
import ScrollAnimationWrapper from '@/components/scroll-animation-wrapper';
import Gallery from '@/components/sections/gallery';

export const revalidate = 0;

const ChatWidget = dynamicImport(() => import('@/components/chat-widget'), { loading: () => null });

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ScrollAnimationWrapper>
          <Highlights />
        </ScrollAnimationWrapper>
        <Services />
        <WhyUs />
        <Gallery />
        <HowItWorks />
        <FAQ />
        <Locations />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
