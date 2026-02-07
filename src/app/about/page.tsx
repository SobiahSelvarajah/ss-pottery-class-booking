import AboutIntro from "@/components/aboutIntro/AboutIntro";
import AboutStoryImage from "@/components/aboutStoryImage/AboutStoryImage";
import AboutStoryText from "@/components/aboutStoryText/AboutStoryText";




export default function AboutPage() {
    return(
        <main className="bg-clay-light text-neutral-dark">
            <AboutIntro />

            <section className="max-w-6xl mx-auto px-10 py-10 grid md:grid-cols-2 gap-15 items-center">
                <AboutStoryImage />
                <AboutStoryText />
            </section>

            <section className="max-w-6xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 sm:text-left md:text-right">
                    <h2 className="text-3xl font-medium mb-6">
                        What we do
                    </h2>
                    <ul className="space-y-4 text-neutral-mid leading-relaxed">
                        <li>Curate high-quality pottery classes</li>
                        <li>Support independent studios and makers</li>
                        <li>Help people learn through hands-on experiences</li>
                    </ul>
                </div>
                <div className="order-1 md:order-2">
                    <img src="/images/hands-and-clay.jpg" alt="people's hands molding clay" className="w-full h-96 object-cover rounded-lg"/>
                </div>
            </section>

            <section className="bg-clay-sand/30">
                <div className="max-w-6xl mx-auto px-10 py-20">
                    <header className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-center max-w-3xl mx-auto mb-16">
                            Meet the Studios
                        </h2>
                        <p className="text-neutral-mid leading-relaxed">
                            We partner with independent pottery studios that value craftsmanship, creativity, and community.
                        </p>
                    </header>

                    <div className="grid md:grid-cols-3 gap-8">
                        <article className="bg-clay-light p-8 rounded-lg">
                            <h3 className="text-xl font-medium mb-3">
                                Local & Independent
                            </h3>
                            <p className="text-neutral-mid leading-relaxed">
                                Each studio on Kiln & Clay is independently run and deeply rooted in its local creative community.
                            </p>
                        </article>

                        <article className="bg-clay-light p-8 rounded-lg">
                            <h3 className="text-xl font-medium mb-3">
                                Skilled Makers
                            </h3>
                            <p className="text-neutral-mid leading-relaxed">
                                Classes are led by experienced ceramicists who love sharing their knowledge and process.
                            </p>
                        </article>

                        <article className="bg-clay-light p-8 rounded-lg">
                            <h3 className="text-xl font-medium mb-3">
                                Welcoming Spaces
                            </h3>
                            <p className="text-neutral-mid leading-relaxed">
                                From beginners to experienced makers, our studios provide inclusive, supportive environments.
                            </p>
                        </article>
                    </div>                    
                </div>
            </section>
        </main>
    )
}