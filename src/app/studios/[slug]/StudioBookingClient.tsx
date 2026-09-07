"use client";

import { useState } from "react";
import type { Studio, Session } from "@prisma/client";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingForm from "@/components/booking/BookingForm";

type SessionWithBookings = Session & {
    bookings: {
        guests: number;
    }[];
};

type StudioWithSessions = Studio & {
    sessions: SessionWithBookings[];
};

type Props = {
    studio: StudioWithSessions;
};

const SESSION_CAPACITY = 10;

const getRemainingSpaces = (session: SessionWithBookings) => {
    const totalBookedGuests = session.bookings.reduce(
        (total, booking) => total + booking.guests,
        0
    );

    return Math.max(SESSION_CAPACITY - totalBookedGuests, 0);
};


export default function StudioBookingClient({ 
    studio 
}: Props) {

    const [ selectedSession, setSelectedSession ] = useState<string | null>(null);
    const [ selectedDate, setSelectedDate ] = useState<Date | null>(null);

    const selectedSessions = selectedDate
        ? studio.sessions.filter(
            (session) => 
                new Date(session.date).toDateString() ===
                selectedDate.toDateString()
        ) : [];

    const chosenSession = studio.sessions.find(
        (session) => session.id === selectedSession
    );    

    const handleSelectDate = (date: Date) => {
        setSelectedDate(date);
        setSelectedSession(null);
    };

    // calendar date is unavailable once all sessions are full
    const availableSessions = studio.sessions.filter(
        (session) => getRemainingSpaces(session) > 0
    );


    return (
        <div className="mx-auto w-full max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
            <header className="mb-10">
                <h1 className="text-3xl font-semibold text-stone-900">
                    {studio.name}
                </h1>
                <p className="mt-2 text-stone-600">
                    Reserve your place at an upcoming pottery session.
                </p>
            </header>
            <div className="grid gap-8 lg:grid-cols-2">

                {/* section 1 - session selection */}
                <section>
                    <h2 className="text-xl font-semibold text-stone-900">
                        Available sessions
                    </h2>
                    <p className="mt-2 text-sm text-stone-600">
                        Choose a date to view the available times.
                    </p>

                    {/* calendar */}
                    <BookingCalendar 
                        sessions={availableSessions}
                        selectedDate={selectedDate}
                        onSelectDate={handleSelectDate}
                    />

                    {/* available time slots */}
                    {selectedDate && (
                        <div className="mt-6">
                            <h3 className="mb-3 font-medium text-stone-900">
                                Available times
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {selectedSessions.map((session) => {
                                    const remainingSpaces = getRemainingSpaces(session);
                                    const isFull = remainingSpaces === 0;

                                    return (
                                        <button
                                            key={session.id}
                                            type="button"
                                            disabled={isFull}
                                            onClick={() => setSelectedSession(session.id)}
                                            className={`
                                                rounded-xl border px-4 py-3 text-sm transition
                                                ${
                                                    isFull
                                                        ? "cursor-not-allowed border-stone-200 text-stone-300"
                                                        : selectedSession === session.id
                                                        ? "border-stone-900 bg-stone-900 text-white"
                                                        : "border-stone-300 text-stone-900 hover:bg-stone-100"
                                                }
                                            `}
                                        >
                                            <span className="block font-medium">
                                                {session.timeSlot.charAt(0) +
                                                    session.timeSlot.slice(1).toLowerCase()}
                                            </span>
                                            <span className="mt-1 block text-xs">
                                                {isFull
                                                    ? "Fully booked"
                                                    : `${remainingSpaces} ${
                                                        remainingSpaces === 1 ? "space" : "spaces"
                                                    } remaining`
                                                }
                                            </span>
                                        </button>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </section>

                {/* section 2 - booking details */}
                <section>
                    {
                        selectedSession ? (
                            <div>
                                <div className="mb-6">
                                    <p className="text-sm text-stone-500">
                                        Selected session
                                    </p>
                                    <p className="mt-1 font-medium text-stone-900">
                                        {selectedDate?.toLocaleDateString("en-GB", {
                                            weekday: "long",
                                            day: "numeric",
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </p>

                                    {chosenSession && (
                                        <p>
                                            {chosenSession.timeSlot.charAt(0) +
                                                chosenSession.timeSlot.slice(1).toLowerCase()}
                                        </p>
                                    )}
                                </div>

                                <BookingForm sessionId={selectedSession} />
                            </div>
                        ) : (
                            <div className="flex min-h-80 items-center justify-center rounded-2xl bg-white p-8 text-center shadow-sm ring-1 ring-stone-200">
                                <div className="max-w-xs">
                                    <h2 className="text-xl font-semibold text-stone-900">
                                        Your booking
                                    </h2>
                                    <p>
                                        Your booking details will appear here 
                                        once you select a session.
                                    </p>
                                </div>
                            </div>
                        )
                    }
                </section>
            </div>
        </div>
    )
};