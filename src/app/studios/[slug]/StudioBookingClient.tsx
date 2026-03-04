"use client";

import { useState } from "react";
import type { Studio, Session } from "@prisma/client";

type StudioWithSessions = Studio & {
    sessions: Session[];
};

type Props = {
    studio: StudioWithSessions;
};

export default function StudioBookingClient({ studio }: Props) {
    const [selectedSession, setSelectedSession] = useState < string | null > (null);

    return (
        <div className="max-w-3xl mx-auto py-12">
            <h1 className="text-3xl font-bold mb-6">
                {studio.name}
            </h1>
            <h2 className="text-xl mb-4">
                Available Sessions
            </h2>
            <div className="space-y-3 mb-8">
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
                <div className="p-4 border rounded-lg">
                    <p className="mb-4 font-medium">
                        Booking form
                    </p>
                </div>
            )}
        </div>
    )
};
