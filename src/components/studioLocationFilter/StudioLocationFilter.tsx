"use client";

type StudioLocationFilterProps = {
    selectedLocation: string;
    onChange: (locaion: string) => void;
};

export default function StudioLocationFilter({
    selectedLocation,
    onChange,
}: StudioLocationFilterProps) {
    return(
        <section className="px-4 py-6">
            <div className="max-w-6xl mx-auto">
                <label 
                    htmlFor="location" 
                    className="block text-sm font-medium 
                               text-neutral-dark mb-2">
                    Filter by location:
                </label> 
                <select 
                    id="location" 
                    value={selectedLocation} 
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full md:w-64 border border-neutral-light 
                               rounded-md px-3 py-2 bg-neutral-white 
                               text-neutral-dark focus:outline-none 
                               focus:ring-2 focus:ring-clay-brown 
                               transition">
                    <option value="all">All locations</option>
                    <option value="hackney">Hackney</option>
                    <option value="greenwich">Greenwich</option>
                    <option value="islington">Islington</option>
                    <option value="peckham">Peckham</option>
                </select>
            </div>
        </section>
    )
}