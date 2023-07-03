"use client"

import ToastContactForm from "@/app/components/contact/ToastContactForm"
import { useState } from "react"

const ContactForm = () => {

    const [success, setSuccess] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {

        e.preventDefault();
        setIsLoading(true)
        success !== null && setSuccess(null)

        const form = e.target;
        const data = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: data
        })
            .then(() => {
                setSuccess(true)
                setIsLoading(false)
            })
            .catch((err) => {
                setSuccess(false)
                setIsLoading(false)
            })
    }

    return (
        <>
            <form
                className="flex flex-col gap-4 w-96 text-xl max-w-full"
                action={`${process.env.NEXT_PUBLIC_EMAIL_HANDLER_LINK}`}
                method="POST"
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className="rounded text-black p-1" disabled={isLoading} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" className="rounded text-black p-1" disabled={isLoading} />

                <label htmlFor="message">Message</label>
                <textarea type="textarea" id="message" name="message" className="rounded text-black p-1" disabled={isLoading} />

                <button type="submit" className="hover:text-[#FFC612]">{!isLoading ? "Send" : "Sending..."}</button>
                {success !== null
                    && <ToastContactForm
                        message={
                            success
                                ? "Message sent successfully!"
                                : "An unexpected error has occurred!"
                        }
                        bgColor={
                            success
                                ? "bg-green-300"
                                : "bg-red-300"
                        }
                        setSuccess={setSuccess}
                    />}
            </form>
        </>
    )
}

export default ContactForm