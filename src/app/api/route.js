import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";

export async function POST(request) {
    const res = await request.json();

    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    let subject = `[furkanbaykal2014@hotmail.com] - Message via website contact form`;

    try {
        await sgMail.send({
            to: "furkanbaykal2014@hotmail.com",
            from: {
                email: 'no-reply@furkanbaykal2014@hotmail.com',
                name: 'furkanbaykal2014@hotmail.com'
            },
            replyTo: {
                email: res.email,
                name: res.firstname + res.lastname
            },
            subject: subject,
            text: `phone: ${res.phone}\n\n${res.message}`,
        });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
    return NextResponse.json({error: ''})
}