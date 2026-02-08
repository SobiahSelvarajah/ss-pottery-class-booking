import AboutPurposeImage from "../aboutPurposeImage/AboutPurposeImage";



export default function AboutPurpose() {
    return(
        <section className="max-w-6xl mx-auto px-10 py-20 grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 sm:text-left md:text-right">
                <h2 className="text-3xl font-medium mb-6">
                    Our Purpose
                </h2>
                <ul className="space-y-4 text-neutral-mid leading-relaxed">
                    <li>Curate high-quality pottery classes</li>
                    <li>Support independent studios and makers</li>
                    <li>Help people learn through hands-on experiences</li>
                </ul>
            </div>
            <AboutPurposeImage />
        </section>
    )
}