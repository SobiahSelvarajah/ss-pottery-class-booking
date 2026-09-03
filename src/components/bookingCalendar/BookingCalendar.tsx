"use client";

import type { Session } from "@prisma/client";
import { useState } from "react";

type BookingCalendarProps = {
    sessions: Session[];
    selectedDate: Date | null;
    onSelectDate: (date: Date) => void;
};


export default function BookingCalendar({
    sessions,
    selectedDate,
    onSelectDate,
}: BookingCalendarProps) {

    // work out first available session date
    const firstSessionDate = sessions[0]
        ? new Date(sessions[0].date)
        : new Date();

    // set calendar month state
    const [ currentMonth, setCurrentMonth ] = 
        useState(
            new Date(
                firstSessionDate.getFullYear(),
                firstSessionDate.getMonth(),
                1
            )
        );

    // information about the current calendar month
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    // number of days in month
    const daysInMonth = new Date(
        year,
        month + 1,
        0
    ).getDate();

    // which weekday the month starts on
    const firstDayOfMonth = new Date(
        year,
        month,
        1
    ).getDay();

    // convert to Monday-first positioning
    const mondayBasedStart = 
        (firstDayOfMonth + 6) % 7;

    // create consistent key for each date
    const getDateKey = (date: Date) => {
        return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    };

    // create a set of dates that have available sessions
    const availableDates = new Set(
        sessions.map((session) =>
            getDateKey(new Date(session.date))
        )
    );


    return (
        <section className="mt-6">
            <header className="mb-5 text-center">
                <h3 className="font-medium text-stone-900">
                    {currentMonth.toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                    })}
                </h3>
            </header>
            <ol className="grid grid-cols-7 gap-2">
                {[
                    "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
                ].map((day) => (
                    <li
                        key={day}
                        className="pb-2 text-center text-xs font-medium text-stone-500"
                    >
                        {day}
                    </li>
                ))}
                {Array.from({length: mondayBasedStart}).map((_, index) => (
                    <li
                        key={`empty-${index}`}
                        aria-hidden="true" 
                    />
                ))}
                {Array.from({length: daysInMonth}).map((_, index) => {
                    const day = index + 1;

                    const date = new Date(
                        year,
                        month,
                        day
                    );

                    const available = 
                        availableDates.has(getDateKey(date));

                    const selected = 
                        selectedDate && 
                        getDateKey(selectedDate) === getDateKey(date);
                    
                    return (
                        <li
                            key={day}
                            className="flex items-center justify-center"
                        >
                            <button
                                type="button"
                                disabled={!available}
                                onClick={() => onSelectDate(date)}
                                className={`
                                    aspect-square w-full rounded-full text-sm transition
                                    ${
                                        selected
                                            ? "bg-stone-900 text-white"
                                            : available
                                            ? "text-stone-900 hover:bg-stone-100"
                                            : "cursor-default text-stone-300"
                                    }
                                `}
                            >
                                {day}
                            </button>
                        </li>
                    );
                })}
            </ol>
        </section>
    )
}