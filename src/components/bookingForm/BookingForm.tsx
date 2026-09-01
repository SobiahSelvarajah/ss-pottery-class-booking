"use client";

type BookingFormProps = {
    sessionId: string;
};


export default function BookingForm({
    sessionId,
}: BookingFormProps) {
    return (
        <form className="space-y-6 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-stone-200">
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="name"
                    className="text-sm font-medium text-stone-700"
                >
                    Full Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="rounded-lg border border-stone-300 px-4 py-2 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200" 
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="email"
                    className="text-sm font-medium text-stone-700"
                >
                    Email
                </label>
                <input
                    id="email"
                    name="email"
                    type="email" 
                    required
                    className="rounded-lg border border-stone-300 px-4 py-2 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="guests"
                    className="text-sm font-medium text-stone-700"
                >
                    Number of Guests
                </label>
                <input
                    id="guests"
                    name="guests"
                    type="number" 
                    min={1}
                    required
                    className="rounded-lg border border-stone-300 px-4 py-2 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
            </div>
            <div className="flex flex-col gap-2">
                <label 
                    htmlFor="message"
                    className="text-sm font-medium text-stone-700"
                >
                    Additional notes
                    <span className="ml-1 font-normal text-stone-500">
                        (optional)
                    </span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="resize-none rounded-lg border border-stone-300 px-4 py-2 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-stone-200"
                />
            </div>
            <input 
                type="hidden"
                name="sessionId"
                value={sessionId}
            />
            <button
                type="submit"
                className="w-full rounded-xl bg-stone-900 px-6 py-3 font-medium text-white transition hover:bg-stone-800 active:scale-[0.99]"
            >
                Book Session
            </button>
        </form>
    )
}