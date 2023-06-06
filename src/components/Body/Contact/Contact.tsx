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
    const labelStyles = "mb-2 text-md font-medium";
    const inputStyles = "mb-8 px-2 py-2 bg-white border rounded";

    const textAreaStyles = "mb-8 px-2 py-2 bg-white border rounded";

    const submitBtnStyles =
        "px-20 py-2 bg-orange-600 text-white border-none cursor-pointer mx-auto rounded mb-10";

    return (
        <section
            id="contact"
            className={`h-full z-10 relative w-full px-5 py-5 backdrop-blur bg-pink-100/10 shadow-[0_25px_45px_0_rgba(0,0,0,0.1s)] `}
        >
            <h1 className="text-center text-4xl mb-5 font-semibold headingClass">
                Contact Me
            </h1>
            <p className="text-center text-xl mb-5 font-medium">
                Don&apos;t be shy! Hit me up! 👇
            </p>

            <form ref={form} onSubmit={sendEmail} className={`${container} `}>
                <label className={labelStyles}>Full Name</label>
                <input
                    className={inputStyles}
                    type="text"
                    name="user_name"
                    placeholder="Enter Full Name | eg : Jon Smit "
                />
                <label className={labelStyles}>Email</label>
                <input
                    className={inputStyles}
                    type="email"
                    name="user_email"
                    placeholder="Enter Email | eg : jon.smit@email.com"
                />
                <label className={labelStyles}>Message</label>
                <textarea
                    className={textAreaStyles}
                    name="message"
                    placeholder="Start typing your message ...."
                />
                <input type="submit" value="Send" className={submitBtnStyles} />
            </form>
        </section>
    );
};

export default Contact;
