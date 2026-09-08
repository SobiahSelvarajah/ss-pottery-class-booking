
type FeaturedClassCardProps = {
    title: string;
    description: string;
    level: string;
    duration: string;
    image: string;
    alt: string;
};

export default function FeaturedClassCard({
    title,
    description,
    level,
    duration,
    image,
    alt,
}: FeaturedClassCardProps) {
    return (
        <article className="group overflow-hidden rounded-3xl bg-stone-50 shadow-md transition hover:-translate-y-3 hover:shadow-lg">
            <img 
                src={image} 
                alt={alt}
                className="h-56 w-full object-cover" 
            />
            <section className="p-7">
                <h3 className="mb-2 font-heading text-xl text-stone-900">
                    {title}
                </h3>
                <p className="mb-4 font-body text-stone-600">
                    {description}
                </p>
                <p className="mb-6 text-sm text-stone-500">
                    {level} · {duration}
                </p>
                <button
                    type="button"
                    className="inline-block rounded-full border border-stone-400 px-6 py-2 text-sm font-medium text-stone-800 transition hover:bg-stone-800 hover:text-stone-50"
                >
                    View class
                </button>
            </section>
        </article>
    );
}