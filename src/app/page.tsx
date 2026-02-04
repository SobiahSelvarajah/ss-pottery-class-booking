import Hero from "@/components/hero/Hero";
import Featured from "@/components/featured/Featured";
import Experience from "@/components/experience/Experience";
import OurStory from "@/components/ourStory/OurStory";
import Footer from "@/components/footer/Footer";


export default function HomePage() {
  return (

    <main>

      {/* ==================== */}
      {/*        NAVBAR        */}
      {/* ==================== */}
      <section></section>


      {/* ==================== */}
      {/*         HERO         */}
      {/* ==================== */}
      <Hero />


      {/* ==================== */}
      {/*   FEATURED CLASSES   */}
      {/* ==================== */}
      <Featured />


      {/* ==================== */}
      {/*    YOUR EXPERIENCE   */}
      {/* ==================== */}
      <Experience />


      {/* ==================== */}
      {/*       OUR STORY      */}
      {/* ==================== */}
      <OurStory />


      {/* ==================== */}
      {/*        GALLERY       */}
      {/* ==================== */}
      <section></section>


      {/* ==================== */}
      {/*        FOOTER        */}
      {/* ==================== */}
      <Footer />


    </main>
  );
}
