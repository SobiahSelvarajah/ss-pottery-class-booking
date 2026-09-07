import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type BookingConfirmationEmailProps = {
    email: string;
    name: string;
    studioName: string;
    date: Date;
    timeSlot: string;
    guests: number;
};


export async function sendBookingConfirmationEmail({
    email,
    name,
    studioName,
    date,
    timeSlot,
    guests,
}: BookingConfirmationEmailProps) {

    const formattedDate = date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedTimeSlot =
        timeSlot.charAt(0) + timeSlot.slice(1).toLowerCase();

    await resend.emails.send({
        from: "Kiln & Clay <onboarding@resend.dev>",
        to: email,
        subject: `Booking received - ${studioName}`,
        html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6;">
                <h2>
                    Booking received
                </h2>
                <p>
                    Hi ${name},
                </p>
                <p>
                    We've received your booking request for
                    <strong>
                        ${studioName}
                    </strong>.
                </p>
                <p>
                    <strong>Date:</strong>
                    ${formattedDate}
                    <br />
                    <strong>Session:</strong>
                    ${formattedTimeSlot}
                    <br />
                    <strong>Guests:</strong>
                    ${guests}
                </p>
                <p>
                    Your booking is confirmed.
                    We look forward to welcoming you to the studio.
                </p>
                <p>
                    Kiln & Clay
            </div>
        `,
    });
}