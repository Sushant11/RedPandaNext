import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "sushantchitrakar@gmail.com",
      subject: "New Message from Contact Form",
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
    };

    const info = await transporter.sendMail(mailOptions);

    return Response.json({ message: "Email sent successfully", info });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}
