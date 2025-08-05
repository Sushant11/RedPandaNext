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
    // Helper function to generate table rows for non-null fields
    const buildRow = (label, value) =>
      value
        ? `<tr>
         <td style="padding: 10px 15px; font-weight: bold; color: #333;">${label}</td>
         <td width="70%" style="padding: 10px 15px; color: #555;">${value}</td>
       </tr>`
        : "";

    const htmlBody = `
  <div style="background-color: #f5f5f5; padding: 30px; font-family: Arial, sans-serif;">
    <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 20px;">
      <h3 style="background-color:#fafafa; text-align: center;border-radius: 8px; padding: 10px; margin-bottom: 20px;">New Contact Form Submission</h3>
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
  </div>
`;

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: "hello@redpandafinance.com.au",
      subject: "New Website Inquiry Received",
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
