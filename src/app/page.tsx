import Hero from "@/components/hero/Hero";
import Featured from "@/components/featured/Featured";
import Experience from "@/components/experience/Experience";
import OurStory from "@/components/ourStory/OurStory";


export default function HomePage() {
  return (

    <main>

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

    </main>
  );
}
