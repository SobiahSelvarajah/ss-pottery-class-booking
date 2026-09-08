import { featuredClasses } from "@/data/featuredClasses";
import FeaturedClassCard from "./FeaturedClassCard";


export default function FeaturedClasses() {
    return(
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featuredClasses.map((featuredClass) => (
                <FeaturedClassCard
                    key={featuredClass.id}
                    title={featuredClass.title}
                    description={featuredClass.description}
                    level={featuredClass.level}
                    duration={featuredClass.duration}
                    image={featuredClass.image}
                    alt={featuredClass.alt}
                />
            ))}
        </div>
    );
}