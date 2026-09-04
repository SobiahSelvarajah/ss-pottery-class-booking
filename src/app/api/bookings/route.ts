import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// created post api endpoint
// runs when frontend sends post request to this route
export async function POST(request: Request) {

    let body;

    try {
        body = await request.json();
    } catch {
        // malformed request body
        return NextResponse.json(
            { error: "Invalid request." },
            { status: 400 }
        );
    }

    // validate request body structure
    if (
        typeof body !== "object" ||
        body === null ||
        Array.isArray(body)
    ) {
        return NextResponse.json(
            { error: "Invalid request." },
            { status: 400 }
        );
    }

    // extract the necessary fields
    const { name, email, guests, message, sessionId } = body;

    // validate required booking fields
    if (
        typeof name !== "string" ||
        !name.trim() ||
        typeof email !== "string" ||
        !email.trim() ||
        typeof guests !== "number" ||
        !Number.isInteger(guests) ||
        guests < 1 ||
        guests > 8 ||
        typeof sessionId !== "string" ||
        !sessionId.trim()
    ) {
        // missing/invalid fields
        return NextResponse.json(
            { error: "Invalid booking details." },
            { status: 400 }
        );
    }

    // validate optional message
    if (
        message !== null &&
        message !== undefined &&
        typeof message !== "string"
    ) {
        // invalid optional message
        return NextResponse.json(
            { error: "Invalid booking details."},
            { status: 400 }
        );
    }    

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();
    const cleanMessage = message?.trim() || null;

    // validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
        // invalid email
        return NextResponse.json(
            { error: "Please enter a valid email address."},
            { status: 400 }
        );
    }

    try {
        // confirm the selected session exists
        const session = await prisma.session.findUnique({
            where: {
                id: sessionId,
            },
        });

        if (!session) {
            // session doesn't exist
            return NextResponse.json(
                { error: "Session not found."},
                { status: 404 }
            );
        }

        // prevent bookings for past sessions
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const sessionDate = new Date(session.date);
        sessionDate.setHours(0, 0, 0, 0);

        if (sessionDate < today) {
            // session is in the past
            return NextResponse.json(
                { error: "This session is no longer available." },
                { status: 409 }
            );
        }

        // create booking
        const booking = await prisma.booking.create({

            // provide the data to insert
            data: {
                name: cleanName,
                email: cleanEmail,
                guests,
                message: cleanMessage,
                sessionId,
            },
        });

        // booking successfully created
        return NextResponse.json(
            booking,
            { status: 201 }
        );

    } catch (error) {
        console.error("Booking creation failed:", error);

        // unexpected server/database problem
        return NextResponse.json(
            { error: "Booking failed. Please try again."},
            { status: 500 }
        ); 
    }
}