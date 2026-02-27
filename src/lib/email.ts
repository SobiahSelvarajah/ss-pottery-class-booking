import { Resend } from "resend";
import { render } from "@react-email/render";
import ContactConfirmation from "@/emails/ContactConfirmation";

// creating an Email Client Instance
// creating authenticated email client
// using secret key
const resend = new Resend(process.env.RESEND_API_KEY);


// contact confirmation email
export async function sendContactConfirmation(name: string, email: string) {

    const html = await render(
        ContactConfirmation({ name })
    ); 


    await resend.emails.send({
        // development stage from email - change for prod
        from: "Pottery Studio <onboarding@resend.dev>",
        to: email,
        subject: "We have received your message",
        html,
    });
}
