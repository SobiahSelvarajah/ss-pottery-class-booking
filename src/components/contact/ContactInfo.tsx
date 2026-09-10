
export default function ContactInfo() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-xl font-medium text-clay-dark">
                    Contact Information
                </h2>
                <p className="mt-2 max-w-md text-neutral-mid">
                    Reach out directly or visit one 
                    of our studio locations.
                </p>
            </div>
            <div className="space-y-5 text-sm">
                <p>
                    <span className="font-medium">Email:</span>{" "}
                    hello@kilnandclay.com
                </p>
                <p>
                    <span className="font-medium">Phone:</span>{" "}
                    +44 20 1234 5678
                </p>
                <p>
                    <span className="font-medium">Opening Hours:</span>{" "}
                    Monday - Saturday, 
                    9am - 7pm
                </p>
            </div>
        </div>
    );
}