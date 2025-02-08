import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const body = await request.json();

  console.log("body==", body);
  console.log("process.env.EMAIL_PASS==", process.env.EMAIL_PASS);
  

  const { firstName, lastName, email, subject, message } = body;

  // Ensure all fields are provided
  if (!firstName || !lastName || !email || !subject || !message) {
    return NextResponse.json(
      { success: false, message: "All fields are required." },
      { status: 400 }
    );
  }

  // Create the transporter with environment variables
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail address
      pass: process.env.EMAIL_PASS, // Your Gmail App Password
    },
  });
  

  // Mail options
  const mailOptions = {
    from: `"${firstName} ${lastName}" <${email}>`,
    to: "info@tycoonzsolutions.com, fahadaliqureshi786@gmail.com",
    subject: subject,
    text: `
      You have received a new message:
  
      From: ${firstName} ${lastName}
      Email: ${email}
  
      Message: 
      ${message}
    `,
  };
  

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("Error sending email:", error.message);
    return NextResponse.json(
      { success: false, message: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
