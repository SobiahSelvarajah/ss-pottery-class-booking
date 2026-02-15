
export default function ContactPage() {
    return (
        <main>

            {/* intro */}
            <section>
                <header>
                    <h1>Contact Us</h1>
                    <p>If you have any questions about our studios, classes, or bookings, feel free to reach out.</p>
                </header>
            </section>

            <section>

                {/* info */}
                <div>
                    <h2>Contact Information</h2>
                    <p>Email: hello@claystudios.com</p>
                    <p>Phone: +44 20 1234 5678</p>
                    <p>Opening Hours: Monday - Saturday, 9am - 7pm</p>
                </div>

                <div>
                    <h2>Send Us a Message</h2>
                    <form>

                        {/* name */}
                        <div>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>

                        {/* email */}
                        <div>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" name="email" required />
                        </div>

                        {/* subject */}
                        <div>
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" />
                        </div>

                        {/* message */}
                        <div>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows={5} required></textarea>
                        </div>

                        {/* send button */}
                        <div>
                            <button type="submit">Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
};