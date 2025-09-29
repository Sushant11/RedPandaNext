import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();

    const {
      firstName,
      lastName,
      mobileNumber,
      email,
      stateTerritory,
      residencyStatus,
      mainPurpose,
      firstHome,
      propertyState,
      applicants,
      applicant1Occupation,
      applicant1Employment,
      applicant1Length,
      applicant2Occupation,
      applicant2Employment,
      applicant2Length,
      combinedIncome,
      dependants,
      totalSavings,
      payPlan,
      guarantor,
      purchaseTime,
      badCredit,
      badCreditDetails,
      bankrupt,
      furtherInfo,
      hearAboutUs,
      referrerDetails,
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
        ${buildRow("First Name", firstName)}
        ${buildRow("Last Name", lastName)}
        ${buildRow("Mobile Number", mobileNumber)}
        ${buildRow("Email", email)}
        ${buildRow("State/Territory", stateTerritory)}
        ${buildRow("Residency Status", residencyStatus)}
        ${buildRow("Main Purpose", mainPurpose)}
        ${buildRow("First Home Buyer?", firstHome)}
        ${buildRow("Property State", propertyState)}
        ${buildRow("Number of Applicants", applicants)}
        ${buildRow("Applicant 1 Occupation", applicant1Occupation)}
        ${buildRow("Applicant 1 Employment", applicant1Employment)}
        ${buildRow("Applicant 1 Length of Employment", applicant1Length)}
        ${buildRow("Applicant 2 Occupation", applicant2Occupation)}
        ${buildRow("Applicant 2 Employment", applicant2Employment)}
        ${buildRow("Applicant 2 Length of Employment", applicant2Length)}
        ${buildRow("Combined Income", combinedIncome)}
        ${buildRow("Number of Dependants", dependants)}
        ${buildRow("Total Savings", totalSavings)}
        ${buildRow("Payment Plan", payPlan)}
        ${buildRow("Guarantor", guarantor)}
        ${buildRow("Purchase Time", purchaseTime)}
        ${buildRow("Bad Credit History", badCredit)}
        ${buildRow("Bad Credit Details", badCreditDetails)}
        ${buildRow("Bankrupt", bankrupt)}
        ${buildRow("Further Information", furtherInfo)}
        ${buildRow("Heard About Us", hearAboutUs)}
        ${buildRow("Referral Details", referrerDetails)}
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
