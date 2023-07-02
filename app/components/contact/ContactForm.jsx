"use client"

const ContactForm = () => {
    return (
        <>
            <form className="flex flex-col gap-4 w-96 text-xl max-w-full">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" className="rounded text-black p-1" disabled></input>
                <label for="email">Email</label>
                <input type="email" id="email" name="email" className="rounded text-black p-1" disabled ></input>
                <label for="message">Message</label>
                <textarea type="textarea" id="message" name="message" className="rounded text-black p-1" disabled />
                <button disabled>Send</button>
            </form>
        </>
    )
}

export default ContactForm