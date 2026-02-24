

export default function BookingsPage() {

    return (
        <main>

            {/* booking intro */}
            <header>
                <h1>
                    Book a Pottery Class
                </h1>
                <p>
                    Reserve your space for an upcoming session.
                </p>
            </header>

            {/* booking form */}
            <section>
                <form>
                    <div>
                        <label htmlFor="name">Full Name</label>
                        <input id="name" name="name" type="text" required/>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" required />
                    </div>
                    <div>
                        <label htmlFor="date">Preferred Date</label>
                        <input id="date" name="date" type="date" required />
                    </div>
                    <div>
                        <label htmlFor="guests">Number of guests</label>
                        <input id="guests" name="guests" type="number" min="1" required />
                    </div>
                    <div>
                        <label htmlFor="message">Additional Notes (optional)</label>
                        <textarea id="message" name="message" rows={4}/>
                    </div>

                    <button type="submit">Book now</button>
                </form>
            </section>
            
        </main>
    )
}