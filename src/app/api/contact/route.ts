import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";


export async function POST(request: Request) {
    try {

        // Check content type
        if (!request.headers.get("content-type")?.includes("application/json")) {
            return NextResponse.json(
                { error: "Content type is invalid"},
                { status: 415 }
            );
        }

        // Parse body
        const body = await request.json();
        const { name, email, subject, message } = body;

        // Required fields validation
        if ( !name || !email || !message ) {
            return NextResponse.json(
                { error: "Please fill out the required fields"},
                { status: 400 } 
            );
        }

        // sending and saving data into db
        const newContactData = await prisma.contact.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        // success response
        return NextResponse.json(
            { message: "Message created successfully", contact: newContactData },
            { status: 201 }
        );

    // Server error catch
    } catch(error) {
        console.error("POST /api/contact error:", error);
        return NextResponse.json(
            { error: "Sorry, an internal server error has occurred" },
            { status: 500 }
        );
    }
}