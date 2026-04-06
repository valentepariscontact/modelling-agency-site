import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      First_Name, Last_Name, email, instagram, Age, Country,
      Height_CM, Gender, Bust_CM, Waist_CM, Hips_CM,
      Shoes, Eyes, Hair, Interest, photoUrls
    } = body;

    const photoLinksHtml = Object.entries(photoUrls as Record<string, string>)
      .map(([label, url]) => `
        <tr>
          <td style="padding: 8px 0;">
            <a href="${url}" target="_blank" style="color:#001F3F; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; text-decoration:underline;">
              ${label.replace("_", " ")} — View HD
            </a>
          </td>
        </tr>`)
      .join("");

    const agencyHtml = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: sans-serif; color: #001F3F; max-width: 600px; margin: 0 auto; padding: 40px 24px;">
          <h1 style="font-size: 28px; font-weight: 300; border-bottom: 1px solid #001F3F; padding-bottom: 16px; margin-bottom: 24px; letter-spacing: 0.2em; text-transform: uppercase;">
            New Scout Application
          </h1>
          <table style="width:100%; border-collapse:collapse; font-size:12px; letter-spacing:0.12em; text-transform:uppercase;">
            <tr><td style="padding:8px 0; color:#001F3F99; width:160px;">Name</td><td>${First_Name} ${Last_Name}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Email</td><td><a href="mailto:${email}" style="color:#001F3F;">${email}</a></td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Instagram</td><td>${instagram || "—"}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Age</td><td>${Age}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Gender</td><td>${Gender}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Country</td><td>${Country}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Height</td><td>${Height_CM} cm</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Bust</td><td>${Bust_CM} cm</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Waist</td><td>${Waist_CM} cm</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Hips</td><td>${Hips_CM} cm</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Shoes</td><td>${Shoes}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Eyes</td><td>${Eyes}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Hair</td><td>${Hair}</td></tr>
            <tr><td style="padding:8px 0; color:#001F3F99;">Interest</td><td>${Interest}</td></tr>
          </table>
          <h2 style="font-size:12px; font-weight:400; letter-spacing:0.2em; text-transform:uppercase; margin-top:32px; margin-bottom:8px;">
            Polaroids (${Object.keys(photoUrls).length})
          </h2>
          <table style="width:100%; border-collapse:collapse;">${photoLinksHtml}</table>
        </body>
      </html>`;

    const confirmationHtml = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: sans-serif; color: #001F3F; max-width: 560px; margin: 0 auto; padding: 48px 24px;">
          <p style="font-size:11px; letter-spacing:0.3em; text-transform:uppercase; color:#001F3F99; margin-bottom:32px;">Valenté — Paris</p>
          <h1 style="font-size:26px; font-weight:300; letter-spacing:0.1em; margin-bottom:24px;">Thank you, ${First_Name}.</h1>
          <p style="font-size:14px; line-height:1.9; color:#001F3F99; margin-bottom:16px;">
            We have received your application and wanted to take a moment to personally acknowledge it.
          </p>
          <p style="font-size:14px; line-height:1.9; color:#001F3F99; margin-bottom:16px;">
            Our team reviews each submission with care. If your profile is a match for what we are currently looking for, we will be in touch with you directly.
          </p>
          <p style="font-size:14px; line-height:1.9; color:#001F3F99; margin-bottom:40px;">
            We appreciate your interest in Valenté and wish you the very best.
          </p>
          <p style="font-size:13px; color:#001F3F; margin-bottom:4px;">The Valenté Team</p>
          <p style="font-size:11px; letter-spacing:0.2em; text-transform:uppercase; color:#001F3F60;">Paris, France</p>
        </body>
      </html>`;

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      replyTo: email,
      subject: `New Scout Application — ${First_Name} ${Last_Name}`,
      html: agencyHtml,
    });

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: email,
      subject: "Your application to Valenté",
      html: confirmationHtml,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[scout] error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
