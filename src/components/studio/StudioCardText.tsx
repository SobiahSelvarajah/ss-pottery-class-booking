
type StudioCardTextProps = {
    name: string;
    area: string;
    city: string;
    description: string;
};


export default function StudioCardText({
    name, area, city, description
}: StudioCardTextProps) {
    return(
        <div>
            <header className="px-5 pt-5">
                <h2 className="text-lg font-medium text-clay-dark">
                    {name}
                </h2>
                <p className="mt-1 text-sm text-neutral-mid">
                    {area}, {city}
                </p>
            </header>
            <p className="px-5 pb-6 mt-3 text-sm text-neutral-dark">
                {description}
            </p>
        </div>
    )
}