import StudiosIntroHeading from "../studiosIntroHeading/StudiosIntroHeading";
import StudiosIntroDesc from "../studiosIntroDesc/StudiosIntroDesc";


export default function StudiosIntro() {
    return(
        <section className="mb-15">
            <header className="max-w-2xl">
                <StudiosIntroHeading />
                <StudiosIntroDesc />
            </header>
        </section>
    )
}