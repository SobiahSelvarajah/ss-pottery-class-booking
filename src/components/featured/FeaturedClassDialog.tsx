import Link from "next/link";
import { Check } from "lucide-react";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

type FeaturedClassDialogProps = {
    title: string;
    description: string;
    details: string;
    level: string;
    duration: string;
    includes: string[];
};

export default function FeaturedClassDialog({
    title,
    description,
    details,
    level,
    duration,
    includes,
}: FeaturedClassDialogProps) {
    return (
        <Dialog>
            <DialogTrigger
                className="inline-block rounded-full border border-stone-400 px-6 py-2 text-sm font-medium text-stone-800 transition duration-300 hover:bg-stone-800 hover:text-stone-50"
            >
                View class
            </DialogTrigger>

            <DialogContent 
                className="w-[calc(100%-1.5rem)] max-h-[90vh] max-w-lg overflow-y-auto rounded-4xl border-0 bg-[#f7f1e8] p-6 text-stone-800 shadow-[0_24px_70px_rgba(87,69,55,0.18)] outline-none ring-0 focus:outline-none sm:w-[calc(100%-2rem)] sm:p-10 md:p-12"
            >
                <DialogHeader className="space-y-3 text-left">
                    <DialogTitle className="font-heading text-2xl font-medium tracking-tight text-stone-900 sm:text-3xl">
                        {title}
                    </DialogTitle>

                    <DialogDescription className="font-body text-base leading-relaxed text-stone-600">
                        {description}
                    </DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-4 sm:mt-7 sm:space-y-7">
                    <p className="text-sm font-medium text-stone-500">
                        {level} · {duration}
                    </p>
                    <p className="font-body leading-6 sm:leading-7 text-stone-700">
                        {details}
                    </p>
                    <div className="border-t border-stone-300/60 pt-6 sm:pt-7">
                        <h4 className="mb-4 font-heading text-xl text-stone-800">
                            What&apos;s included
                        </h4>
                        <ul className="space-y-3">
                            {includes.map((item) => (
                                <li 
                                    key={item}
                                    className="flex items-start gap-3 text-sm text-stone-600"
                                >
                                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-stone-400/70 text-stone-50">
                                        <Check className="h-3 w-3" />
                                    </span>
                                    <span className="leading-5">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <Link
                            href="/studios"
                            className="mt-7 inline-flex w-full justify-center rounded-full bg-stone-500 px-6 py-3 text-sm font-medium text-stone-50 transition duration-300 hover:bg-stone-700 sm:w-auto"
                        >
                            Find a studio
                        </Link>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}