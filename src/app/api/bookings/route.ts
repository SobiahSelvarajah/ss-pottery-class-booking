import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// created post api endpoint
// runs when frontend sends post request to this route
export async function POST(request: Request) {

    // read incoming request body
    const body = await request.json();

    // extract the necessary fields
    const { name, email, guests, message, sessionId } = body;

    // try to create the booking
    try {
        // create the booking in db
        const booking = await prisma.booking.create({

            // provide the data to insert
            data: {
                name,
                email,
                guests,
                message,
                sessionId,
            },
        });

        // returns success
        // sends the booking back
        return NextResponse.json(booking);

    } catch (error) {

        // sends an error response
        return NextResponse.json(
            { error: "Booking failed" },

            // http error status
            { status: 500 }
        );
    }
}