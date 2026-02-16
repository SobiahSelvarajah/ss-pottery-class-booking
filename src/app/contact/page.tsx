

export default function ContactPage() {
    
    return (
        <main className="min-h-screen bg-clay-light text-neutral-dark px-6 py-16">
            <div className="max-w-6xl mx-auto">

                {/* contact intro */}
                <section className="text-center mb-16">
                    <h1 className="text-3xl sm:text-4xl font-medium text-clay-dark">
                        Get in Touch
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-neutral-mid">
                        Have a question about our studios, classes or bookings?
                        We'd love to hear from you!
                    </p>
                </section>

                {/* contact content */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-14">

                    {/* contact info */}
                    <div className="space-y-8">

                        <div>
                            <h2 className="text-xl font-medium text-clay-dark">
                                Contact Information
                            </h2>
                            <p className="mt-2 text-neutral-mid">
                                Reach out directly or visit one of our studio locations.
                            </p>
                        </div>

                        <div className="space-y-4 text-sm">
                            <p>Email: hello@claystudios.com</p>
                            <p>Phone: +44 20 1234 5678</p>
                            <p>Opening Hours: Monday - Saturday, 9am - 7pm</p>
                        </div>
                    </div>

                    {/* contact form */}
                    <div className="bg-neutral-white border border-neutral-light rounded-2xl shadow-sm p-8">
                        <h2 className="text-xl font-medium text-clay-dark mb-6">
                            Send Us a Message
                        </h2>
                        <form className="space-y-6">

                            {/* user name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input type="text" id="name" name="name" required className="w-full rounded-md border border-neutral-light px-4 py-2 focus:outline-none focus:ring-2 focus:ring-clay-brown transition" />
                            </div>

                            {/* user email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input type="email" id="email" name="email" required  className="w-full rounded-md border border-neutral-light px-4 py-2 focus:outline-none focus:ring-2 focus:ring-clay-brown transition" />
                            </div>

                            {/* user subject */}
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input type="text" id="subject" name="subject" className="w-full rounded-md border border-neutral-light px-4 py-2 focus:outline-none focus:ring-2 focus:ring-clay-brown transition" />
                            </div>

                            {/* user message */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea id="message" name="message" rows={5} required className="w-full rounded-md border border-neutral-light px-4 py-2 focus:outline-none focus:ring-2 focus:ring-clay-brown resize-none transition"></textarea>
                            </div>

                            {/* submit button */}
                            <button type="submit" className="w-full bg-clay-brown text-neutral-white py-3 rounded-md hover:bg-clay-dark transition-colors duration-300">
                                Send message
                            </button>
                        </form>
                    </div>
                </section>
            </div>
        </main>
    )
}

