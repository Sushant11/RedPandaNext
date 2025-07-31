const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  console.log("Received request:", req.method); // Log the method (GET, POST, etc.)
  if (req.method === "POST") {
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD, // Use the app password here
        },
      });

      const mailOptions = {
        from: process.env.GMAIL_USER, // sender address
        to: "sushantchitrakar@example.com", // recipient address (your specific recipient email)
        subject: "New Message from Contact Form",
        text: `Name: ${req.body.name}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nMessage: ${req.body.message}`,
      };

      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Email sent successfully", info });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
