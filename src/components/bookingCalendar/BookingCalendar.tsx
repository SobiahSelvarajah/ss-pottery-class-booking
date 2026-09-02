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
        <div className="mt-6">
            {/* calendar goes here */}
        </div>
    )
}