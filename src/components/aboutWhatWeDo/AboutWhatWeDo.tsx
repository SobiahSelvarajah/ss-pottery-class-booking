

export default function AboutWhatWeDo() {
    return(
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
    )
}