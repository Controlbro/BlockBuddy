import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../sections/Hero';
import Servers from '../sections/Servers';
import Feature from '../sections/Feature';
import Reviews from '../sections/Reviews';
import Cta from '../sections/Cta';

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Servers />
      <Feature />
      <Reviews />
      <Cta />
      <Footer />
    </>
  );
}