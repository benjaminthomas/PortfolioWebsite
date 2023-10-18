"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contactemail";

const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

console.log(apiKey)



export const sendEmail = async (fromData: FormData) => {
    console.log("running on server");

    const senderEmail = fromData.get("senderEmail")
    const message = fromData.get("message");

    if(!validateString(senderEmail, 500)){
        return {
            error: "The email is invalid"
        }
    }
    if(!validateString(message, 5000)){
        return {
            error: "The email is invalid"
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: 'Contact form <onboarding@resend.dev>',
            to: 'benji_thomas@live.com',
            subject: 'Message from contact form',
            reply_to: senderEmail as string,
            // text: message as string
            react: React.createElement(ContactFormEmail, {
                message: message as string,
                senderEmail: senderEmail as string
            })
        })
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error)
        }
    }

    return {
        data,
    }
}