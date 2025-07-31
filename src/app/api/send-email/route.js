import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      message,
      loanType,
      loanAmount,
      state,
      firstHome,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // Helper function to generate table rows for non-null fields
    const buildRow = (label, value) =>
      value ? `<tr><td style="padding: 8px; font-weight: bold;">${label}</td><td style="padding: 8px;">${value}</td></tr>` : "";

    const htmlBody = `
      <div style="font-family: Arial, sans-serif;">
        <h4 style="color: #333;">New Contact Form Submission</h4>
        <table style="border-collapse: collapse; width: 100%;">
          ${buildRow("Name", name)}
          ${buildRow("Email", email)}
          ${buildRow("Phone", phone)}
          ${buildRow("Loan Type", loanType)}
          ${buildRow("Loan Amount", loanAmount)}
          ${buildRow("State", state)}
          ${buildRow("First Home Buyer?", firstHome)}
          ${buildRow("Message", message)}
        </table>
      </div>
    `;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "suchitrakar@mit.edu.au",
      subject: "New Message from Website.",
      html: htmlBody,
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
