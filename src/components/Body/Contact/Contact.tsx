"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
// import styles from "./Contact.module.css";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const serverID: string = process.env.NEXT_PUBLIC_EMAILJS_SERVER_ID ?? "";
    const templateID: string =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
    const publicKey: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";

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

    const container = "flex flex-col max-w-[600px] my-0";
    const labelStyles = "mb-2 text-md font-medium";
    const inputStyles =
        "mb-8 px-2 py-2 bg-white border dark:border-none rounded dark:bg-slate-600 caret-sky-400 ";

    const textAreaStyles =
        " caret-sky-400 mb-8 px-2 py-2 bg-white border dark:border-none rounded dark:bg-slate-600";

    const submitBtnStyles =
        "px-20 py-1 bg-red-400 text-2xl  hover:bg-sky-600 dark:hover:bg-sky-400 text-slate-200 dark:hover:text-slate-800 border-none cursor-pointer mx-auto rounded mb-10";

    return (
        <div className="grid grid-cols-[2fr,1fr]  max-w-[1440px] mainBody mx-auto dark:bg-transparent bg-pink-100/10 shadow-[0_25px_45px_0_rgba(0,0,0,0.1s)]">
            <section
                id="contact"
                className={`h-full w-full sz-10 relative  py-5 backdrop-blur  contentWidth`}
            >
                <h1 className="text-left text-4xl mb-5 font-semibold headingClass dark:text-sky-400">
                    Contact Me
                </h1>
                <p className="text-left text-xl mb-5 font-medium dark:text-slate-200">
                    Don&apos;t be shy! Hit me up! 👇
                </p>

                <form
                    ref={form}
                    onSubmit={sendEmail}
                    className={`${container} dark:text-slate-200`}
                >
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
                    <input
                        type="submit"
                        value="Send"
                        className={submitBtnStyles}
                    />
                </form>
            </section>
            <section className="w-full h-[200px]"></section>
        </div>
    );
};

export default Contact;
