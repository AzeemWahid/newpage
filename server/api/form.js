import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {

    const req = await readBody(event)
    const formData = req.formSubmission

    const mailResponse = await sendEmail(formData)
    console.log('formData', formData)
    console.log('mail response', mailResponse)

    return { mailResponse }
})


async function sendEmail(formData) {
    const transporter = nodemailer.createTransport({
        host: "smtp.sendgrid.net",
        port: 465,
        secure: true,
        auth: {
            user: process.env.SENDGRID_USER,
            pass: process.env.SENDGRID_PASS,
        },
    });

    let emailSent = false

    try {
        const info = await transporter.sendMail({
            from: 'newpagewebservices@gmail.com',
            to: "azeem.wahid.1993@gmail.com",
            subject: "NewPage New Form Inquiry",
            text: 'A potential customer has reached out',
            html: `<div> <h3> Name: ${formData.name} </h3> </div>, <div> <h3> Email: ${formData.email} </h3> </div>, <div> <h3> Phone: ${formData.phone} </h3> </div>, <div> <h3> Message: ${formData.message} </h3> </div>`,
        })

        if (info.messageId)
            emailSent = true
    }
    catch (error) {
        console.log('failed to send email', error)
        emailSent = false
    }

    return emailSent
}