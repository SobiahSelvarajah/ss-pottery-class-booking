import { NextResponse } from "next/server";

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

        // temporary logging data to terminal
        console.log("New contact details:", body);

        // success response
        return NextResponse.json(
            { message: "Message created successfully"},
            { status: 201 }
        );

    // Server error catch
    } catch(error) {
        return NextResponse.json(
            { error: "Sorry, an internal server error has occurred" },
            { status: 500 }
        );
    }
}