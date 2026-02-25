
import { Resend } from "resend";


// creating an Email Client Instance
// creating authenticated email client
// using secret key
const resend = new Resend(process.env.RESEND_API_KEY);


// contact confirmation email
export async function sendContactConfirmation(name: string, email: string) {
    await resend.emails.send({
        // development stage from email - change for prod
        from: "Pottery Studio <onboarding@resend.dev>",
        to: email,
        subject: "We have received your message",
        html: `<h1>Hi ${name},</h1>
               <p>Thank you for reaching out to us! 
                  We will review your message and 
                  get back to you as soon as we can.
               </p>`,
    });
    
}

