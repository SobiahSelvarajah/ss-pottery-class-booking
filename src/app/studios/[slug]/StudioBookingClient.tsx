"use client";

import { useState } from "react";
import type { Studio, Session } from "@prisma/client";
import BookingCalendar from "@/components/bookingCalendar/BookingCalendar";
import BookingForm from "@/components/bookingForm/BookingForm";

type StudioWithSessions = Studio & {
    sessions: Session[];
};

type Props = {
    studio: StudioWithSessions;
};

export default function StudioBookingClient({ 
    studio 
}: Props) {

    const [ selectedSession, setSelectedSession ] = useState<string | null>(null);
    const [ selectedDate, setSelectedDate ] = useState<Date | null>(null);

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

                    {/* Calendar + session options will go here */}
                    <BookingCalendar 
                        sessions={studio.sessions}
                        selectedDate={selectedDate}
                        onSelectDate={setSelectedDate}
                    />
                </section>

                {/* section 2 - booking details */}
                <section>
                    {
                        selectedSession ? (
                            <BookingForm sessionId={selectedSession} />
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



            {/* <div className="space-y-3 mb-8">
                {studio.sessions.map((session) => (
                    <button
                        key={session.id}
                        onClick={() => setSelectedSession(session.id)}
                        className={`block w-full border rounded-lg p-3 text-left ${
                            selectedSession === session.id
                                ? "border-clay-dark bg-clay-light"
                                : "border-neutral-light"
                        }`}
                    >
                        {new Date(session.date).toDateString()} - {session.timeSlot}
                    </button>
                ))}
            </div>

            {selectedSession && (
                <BookingForm sessionId={selectedSession} />
            )} */}
        </div>
    )
};
