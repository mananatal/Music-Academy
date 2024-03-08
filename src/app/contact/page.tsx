"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
 
function ContactUs() {
  return (
    <div className="h-[50rem] w-full rounded-md bg-gray-900 pt-40 relative flex flex-col items-center justify-center antialiased pb-20">

        <div className="max-w-2xl mx-auto p-4">
            <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Contact Us
            </h1>
            <p></p>
            <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
                We're here to help with any questions about our courses, programs, or events. Reach out and let us know how we can assist you in your musical journey.
            </p>

            <form className="space-y-4">
                <input
                    type="text"
                    placeholder="Enter your email address"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-black placeholder:text-neutral-700 py-4 px-3"
                    required={true}
                />

                <textarea
                    placeholder="Your message"
                    className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-black placeholder:text-neutral-700 py-4 px-3"
                    rows={6}
                    required={true}
                />

                <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2       focus:ring-teal-500 focus:ring-offset-2"
                >
                    Send Message
                </button>
            </form>


        </div>
        <BackgroundBeams />
    </div>
  )
}

export default ContactUs