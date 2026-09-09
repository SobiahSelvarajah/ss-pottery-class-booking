import FeaturedClassDialog from "./FeaturedClassDialog";


type FeaturedClassCardProps = {
    title: string;
    description: string;
    level: string;
    duration: string;
    image: string;
    alt: string;
    details: string;
    includes: string[];
};

export default function FeaturedClassCard({
    title,
    description,
    level,
    duration,
    image,
    alt,
    details,
    includes,
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
                <FeaturedClassDialog 
                    title={title}
                    description={description}
                    details={details}
                    level={level}
                    duration={duration}
                    includes={includes}
                />
            </section>
        </article>
    );
}