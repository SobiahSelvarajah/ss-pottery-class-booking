import BookingsIntro from "@/components/bookingsIntro/BookingsIntro";
import BookingsImg from "@/components/bookingsImg/BookingsImg";


export default function BookingsPage() {
    return (
        <main className="min-h-screen bg-stone-50 
                         px-10 py-20">
            <div className="mx-auto grid max-w-6xl 
                            items-center gap-12 
                            lg:grid-cols-2">
                {/* bookings text container */}
                <div>
                    <BookingsIntro />
                    {/* booking form */}
                    <form className="space-y-6 rounded-2xl bg-white 
                                     p-8 shadow-sm ring-1 ring-stone-200">
                        <div className="flex flex-col gap-2">
                            <label
                                className="text-sm font-medium 
                                           text-stone-700"
                                htmlFor="name">
                                Full Name
                            </label>
                            <input 
                                className="rounded-lg border border-stone-300 
                                           px-4 py-2 focus:border-stone-500 
                                           focus:outline-none focus:ring-2 
                                           focus:ring-stone-200" 
                                id="name" 
                                name="name" 
                                type="text" 
                                required 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label 
                                htmlFor="email" 
                                className="text-sm font-medium 
                                           text-stone-700">
                                Email
                            </label>
                            <input 
                                className="rounded-lg border border-stone-300 
                                           px-4 py-2 focus:border-stone-500 
                                           focus:outline-none focus:ring-2 
                                           focus:ring-stone-200" 
                                id="email" 
                                name="email" 
                                type="email" 
                                required 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label 
                                htmlFor="date" 
                                className="text-sm font-medium 
                                           text-stone-700">
                                Preferred Date
                            </label>
                            <input 
                                className="rounded-lg border border-stone-300 
                                           px-4 py-2 focus:border-stone-500 
                                           focus:outline-none focus:ring-2 
                                           focus:ring-stone-200" 
                                id="date" 
                                name="date" 
                                type="date" 
                                required 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label 
                                htmlFor="guests" 
                                className="text-sm font-medium 
                                           text-stone-700">
                                Number of guests
                            </label>
                            <input 
                                className="rounded-lg border border-stone-300 
                                           px-4 py-2 focus:border-stone-500 
                                           focus:outline-none focus:ring-2 
                                           focus:ring-stone-200" 
                                id="guests" 
                                name="guests" 
                                type="number" 
                                min="1" 
                                required 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label 
                                htmlFor="message" 
                                className="text-sm font-medium 
                                           text-stone-700">
                                Additional Notes (optional)
                            </label>
                            <textarea 
                                className="resize-none rounded-lg border 
                                           border-stone-300 px-4 py-2 
                                           focus:border-stone-500 
                                           focus:outline-none focus:ring-2 
                                           focus:ring-stone-200" 
                                id="message" 
                                name="message" 
                                rows={4}
                            />
                        </div>
                        <button 
                            className="mt-4 w-full rounded-xl bg-stone-900 
                                       px-6 py-3 text-white transition 
                                       hover:bg-stone-800 active:scale-[0.99]" 
                            type="submit">
                            Book now
                        </button>
                    </form>                    
                </div>
                <BookingsImg />
            </div>
        </main>
    )
};