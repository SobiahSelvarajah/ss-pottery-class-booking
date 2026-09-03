"use client";

import type { Session } from "@prisma/client";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


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

    // select between previous and upcoming months
    const changeMonth = (direction: "previous" | "next") => {
        setCurrentMonth((current) => {
            const newMonth = new Date(current);

            newMonth.setMonth(
                current.getMonth() + (direction === "next" ? 1 : -1)
            );

            return newMonth;
        });
    };

    // only display months with available dates
    const lastSessionDate = sessions.length
        ? new Date(sessions[sessions.length - 1].date)
        : firstSessionDate
    
    const firstAvailableMonth = new Date(
        firstSessionDate.getFullYear(),
        firstSessionDate.getMonth(),
        1
    );

    const lastAvailableMonth = new Date(
        lastSessionDate.getFullYear(),
        lastSessionDate.getMonth(),
        1
    );

    const isFirstMonth = 
        currentMonth.getFullYear() === firstAvailableMonth.getFullYear() &&
        currentMonth.getMonth() === firstAvailableMonth.getMonth();

    const isLastMonth = 
        currentMonth.getFullYear() === lastAvailableMonth.getFullYear() &&
        currentMonth.getMonth() === lastAvailableMonth.getMonth();

    return (
        <section className="mt-6">

            {/* calendar arrows and month */}
            <header className="mb-5 flex items-center justify-between">
                <button
                    type="button"
                    onClick={() => changeMonth("previous")}
                    disabled={isFirstMonth}
                    aria-label="Previous month"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-200 hover:text-stone-900 disabled:cursor-default disabled:text-stone-300 disabled:hover:bg-transparent"
                >
                    <ChevronLeft className="h-4 w-4"/>
                </button>
                <h3 className="font-medium text-stone-900">
                    {currentMonth.toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                    })}
                </h3>
                <button
                    type="button"
                    onClick={() => changeMonth("next")}
                    disabled={isLastMonth}
                    aria-label="Next month"
                    className="flex h-9 w-9 items-center justify-center rounded-full text-stone-600 transition hover:bg-stone-200 hover:text-stone-900 disabled:cursor-default disabled:text-stone-300 disabled:hover:bg-transparent"
                >
                    <ChevronRight className="h-4 w-4"/>
                </button>
            </header>

            {/* date grid */}
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
                                            ? "text-stone-900 hover:bg-stone-200"
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