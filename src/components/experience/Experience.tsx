import ExperienceHeading from "./ExperienceHeading";
import ExperienceImage from "./ExperienceImage";
import ExperienceSteps from "./ExperienceSteps";


export default function Experience() {
    return(
        <article className="bg-clay-light px-10 py-20 md:px-15 lg:px-25">
            <ExperienceHeading />
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
                <ExperienceImage />         
                <ExperienceSteps />
            </div>
        </article>
    )
}