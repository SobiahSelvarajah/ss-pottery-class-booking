import { z } from "zod";
import { prisma } from "@/lib/prisma";
import { ContactSchema } from "@/lib/validators/contact";

export async function POST(request: Request) {

    try {

        // check content type
        // format of data
        if (!request.headers.get("content-type")?.includes("application/json")) {
            return new Response(
                JSON.stringify({ error: "Content type is invalid"}),
                { status: 415 }
            )
        };


        // Parse body
        // takes json form frontend
        // converts into js object
        const body = await request.json();


        // checks if incoming data matches schema
        const parsed = ContactSchema.safeParse(body);


        // if validation fails:
        //  -> return 400
        //  -> send error message
        //  -> do not hit db
        if (!parsed.success) {
            return new Response(
                JSON.stringify({ errors: z.treeifyError(parsed.error)}),
                { status: 400 }
            )
        };


        // if validation succeeds:
        //  -> create new row in contact table 
        const contact = await prisma.contact.create({
            data: parsed.data
        });


        // return success response
        // http 201 for successful creation
        // includes created db record
        return Response.json(
            { success: true, contact },
            { status: 201 }
        );


    // if something fails
    // log error in server console
    } catch(error) {
        console.error(error)
        return new Response(
            // return 500
            // server error catch
            JSON.stringify({ error: "Internal server error"}),
            { status: 500 }
        )
    };
};