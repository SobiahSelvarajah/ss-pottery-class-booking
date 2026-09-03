"use client";

import { useState } from "react";
import type { Studio, Session } from "@prisma/client";
import BookingCalendar from "@/components/booking/BookingCalendar";
import BookingForm from "@/components/booking/BookingForm";

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

    const selectedSessions = selectedDate
        ? studio.sessions.filter(
            (session) => 
                new Date(session.date).toDateString() ===
                selectedDate.toDateString()
        ) : [];

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
                    {selectedDate && (
                        <div className="mt-6">
                            <h3 className="mb-3 font-medium text-stone-900">
                                Available times
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {selectedSessions.map((session) => (
                                    <button
                                        key={session.id}
                                        type="button"
                                        onClick={() => setSelectedSession(session.id)}
                                        className="rounded-full border border-stone-300 px-4 py-2 text-sm text-stone-900 transiition hover:bg-stone-200"
                                    >
                                        {session.timeSlot.charAt(0) + session.timeSlot.slice(1).toLowerCase()}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
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
        </div>
    )
};