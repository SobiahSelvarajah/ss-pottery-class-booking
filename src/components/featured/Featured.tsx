import FeaturedIntro from "./FeaturedIntro";
import FeaturedClasses from "./FeaturedClasses";


export default function Featured() {
    return (
        <section className="bg-stone-200/70 px-10 py-20 md:px-15 lg:px-25">
            <FeaturedIntro />
            <FeaturedClasses />
        </section>
    );
}