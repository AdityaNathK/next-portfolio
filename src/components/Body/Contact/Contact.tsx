import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import styles from "./Contact.module.css";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const serverID: string = process.env.EMAILJS_SERVER_ID ?? "";
    const templateID: string = process.env.EMAILJS_TEMPLATE_ID ?? "";
    const publicKey: string = process.env.EMAILJS_PUBLIC_KEY ?? "";

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current !== null) {
            emailjs
                .sendForm(serverID, templateID, form.current, publicKey)
                .then(
                    (result) => {
                        console.log(result.text);
                        console.log("Message Sent");
                        setIsFormSubmitted(true); // Set the form submitted state to true
                        form.current?.reset(); // Reset the form fields
                    },
                    (error) => {
                        console.log(error.text);
                    }
                );
        }
    };

    const container = "flex flex-col max-w-[600px] mx-auto my-0";
    const labelStyles = "mb-2";
    const inputStyles = "mb-8 px-2 py-2 border border-solid border-black";

    const textAreaStyles = "mb-8 px-2 py-2 border border-solid border-black";

    const submitBtnStyles =
        "px-20 py-2 bg-orange-600 text-white border-none cursor-pointer mx-auto rounded";

    return (
        <section
            id="contact"
            className={`h-full z-10 relative w-full px-50 py-50 backdrop-opacity-10 bg-black/30  shadow-[0_25px_45px_0_rgba(0,0,0,0.1s)]`}
        >
            <h1 className="text-center text-4xl mb-10 font-semibold">
                Contact Me
            </h1>

            <form ref={form} onSubmit={sendEmail} className={`${container} `}>
                <label className={labelStyles}>Name</label>
                <input className={inputStyles} type="text" name="user_name" />
                <label className={labelStyles}>Email</label>
                <input className={inputStyles} type="email" name="user_email" />
                <label className={labelStyles}>Message</label>
                <textarea className={textAreaStyles} name="message" />
                <input type="submit" value="Send" className={submitBtnStyles} />
            </form>
        </section>
    );
};

export default Contact;
