import { prisma } from "@/lib/prisma";
import { ContactSchema } from "@/lib/validators/contact";
import { sendContactConfirmation } from "@/lib/email";


export async function POST(request: Request) {
    try {

        // ensure request body is JSON
        if (!request.headers.get("content-type")?.includes("application/json")) {
            return Response.json(
                { error: "Content type is invalid"},
                { status: 415 }
            );
        }

        // parse and validate request body
        const body = await request.json();
        const parsed = ContactSchema.safeParse(body);

        // if validation fails:
        //  -> return 400
        //  -> send error message
        //  -> do not hit db
        if (!parsed.success) {
            return Response.json(
                { error: "Please check the form fields and try again." },
                { status: 400 }
            );
        }

        // save contact message
        const contact = await prisma.contact.create({
            data: parsed.data,
        });

        // send confirmation email 
        // without failing the submission
        try {
            await sendContactConfirmation(contact.name, contact.email);
        } catch (emailError) {
            console.error("Email send failure", emailError);
        }

        // return success response
        // http 201 for successful creation
        // includes created db record
        return Response.json(
            { success: true, contact },
            { status: 201 }
        );
    // if something fails
    // log error in server console
    } catch (error) {
        console.error("Contact submission failure", error);
        return Response.json(
            // return 500
            // server error catch
            { error: "Internal server error"},
            { status: 500 }
        );
    }
}