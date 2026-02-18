"use client";

import React, { useState } from "react";
import type { SyntheticEvent } from "react";
import ContactIntro from "@/components/contactIntro/ContactIntro";
import ContactInfo from "@/components/contactInfo/ContactInfo";


export default function ContactPage() {

    const [ contactFormData, setContactFormData ] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState<string | null>(null);
    
    const handleDataChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setContactFormData({
            ...contactFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        setStatus("Sending information...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(contactFormData),
            })

            const data = await response.json();

            if (!response.ok) {
                setStatus(data.error || "Something went wrong");
                return;
            }

            setStatus("Message sent successfully!");

            setContactFormData({
                name: "",
                email: "",
                subject:"",
                message:"",
            });
        } catch(error) {
            setStatus("Network error. Please try again later.")
        }
    };

    return (
        <main className="min-h-screen bg-clay-light 
                         text-neutral-dark 
                         px-6 py-16">
            <div className="max-w-6xl mx-auto">
                <ContactIntro />

                {/* contact content */}
                <section className="grid grid-cols-1 lg:grid-cols-2 gap-14">
                    <ContactInfo />

                    {/* contact form */}
                    <div className="bg-neutral-white border border-neutral-light rounded-2xl shadow-sm p-8">
                        <h2 className="text-xl font-medium text-clay-dark mb-6">
                            Send Us a Message
                        </h2>
                        <form className="space-y-6" onSubmit={handleSubmit}>

                            {/* user name */}
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium mb-2">
                                    Full Name
                                </label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    required 
                                    value={contactFormData.name} 
                                    onChange={handleDataChange} 
                                    placeholder="Enter your name" 
                                    className="w-full rounded-md border 
                                               border-neutral-light px-4 
                                               py-2 focus:outline-none focus:ring-2 
                                               focus:ring-clay-brown transition" />
                            </div>

                            {/* user email */}
                            <div>
                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium mb-2">
                                    Email Address
                                </label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    required 
                                    value={contactFormData.email}
                                    onChange={handleDataChange}
                                    placeholder="Enter your email"
                                    className="w-full rounded-md border 
                                               border-neutral-light px-4 
                                               py-2 focus:outline-none focus:ring-2 
                                               focus:ring-clay-brown transition" />
                            </div>

                            {/* user subject */}
                            <div>
                                <label 
                                    htmlFor="subject" 
                                    className="block text-sm font-medium mb-2">
                                    Subject
                                </label>
                                <input 
                                    type="text" 
                                    id="subject" 
                                    name="subject" 
                                    value={contactFormData.subject}
                                    onChange={handleDataChange}
                                    placeholder="Enter the subject"
                                    className="w-full rounded-md border 
                                               border-neutral-light px-4 
                                               py-2 focus:outline-none focus:ring-2 
                                               focus:ring-clay-brown transition" />
                            </div>

                            {/* user message */}
                            <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium mb-2">
                                    Message
                                </label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    rows={5} 
                                    required 
                                    value={contactFormData.message}
                                    onChange={handleDataChange}
                                    placeholder="Enter your message"
                                    className="w-full rounded-md border 
                                               border-neutral-light px-4 
                                               py-2 focus:outline-none focus:ring-2 
                                               focus:ring-clay-brown resize-none transition" />
                            </div>

                            {/* submit button */}
                            <button 
                                type="submit" 
                                className="w-full bg-clay-brown text-neutral-white 
                                           py-3 rounded-md hover:bg-clay-dark 
                                           transition-colors duration-300">
                                Send message
                            </button>
                            {status && <p className="text-center">{status}</p>}
                        </form>
                    </div>
                </section>
            </div>
        </main>
    )
}
