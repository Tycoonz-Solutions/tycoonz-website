import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";
import nodemailer from "nodemailer";


const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Gmail App Password
    },
});

export async function POST(req: Request) {
    try {
        const { email } = await req.json();

        if (!email || !email.includes("@")) {
            return NextResponse.json({ message: "Invalid email address" }, { status: 400 });
        }

        // Check if email already exists
        const { data: existingSubscriber, error: fetchError } = await supabase
            .from("subscribers")
            .select("email")
            .eq("email", email)
            .single();

        if (existingSubscriber) {
            return NextResponse.json({ message: "Email already subscribed" }, { status: 400 });
        }


        // Insert into Supabase
        const { error } = await supabase.from("subscribers").insert([{ email }]);

        const mailOptions = {
            from: `"Tycoonz Solutions" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: "🎉 Welcome to Tycoonz Solutions – Subscription Confirmed!",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #000000;">
                <div style="text-align: center;">
                  <img src="https://www.tycoonzsolutions.com/_next/static/media/logo.23bf9d0d.png" alt="Tycoonz Solutions Logo" style="max-width: 150px; margin-bottom: 20px;">
                </div>
                <h2 style="color: #fff; text-align: center;">🎉 Thank You for Subscribing!</h2>
                <p style="color: #fff; font-size: 16px; text-align: center;">
                  Welcome to <strong style="color: #00E37C;">Tycoonz Solutions</strong>! You have successfully subscribed to our newsletter.  
                </p>
                <p style="color: #fff; font-size: 16px; text-align: center;">
                  Stay tuned for the latest updates, exclusive content, and exciting news straight to your inbox!
                </p>
                <div style="text-align: center; margin-top: 20px;">
                  <a href="https://www.tycoonzsolutions.com/" 
                     style="background-color: #00E37C; color: #000; padding: 12px 24px; border-radius: 5px; text-decoration: none; font-size: 16px;">
                    Visit Our Website
                  </a>
                </div>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
                <p style="color: #777; font-size: 14px; text-align: center;">
                  If you have any questions, feel free to <a href="mailto:info@tycoonzsolutions.com" style="color: #00E37C; text-decoration: none;">contact us</a>.
                </p>
                <p style="color: #777; font-size: 12px; text-align: center;">
                  &copy; ${new Date().getFullYear()} Tycoonz Solutions. All rights reserved.
                </p>
              </div>
            `,
          };
          
        await transporter.sendMail(mailOptions);


        if (error) throw error;

        return NextResponse.json({ message: "Subscription successful!" }, { status: 200 });
    } catch (error) {
        console.error("Supabase error:", error);
        return NextResponse.json({ message: "Internal server error" }, { status: 500 });
    }
}
