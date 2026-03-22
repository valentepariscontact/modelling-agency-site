import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    await resend.emails.send({
      from: process.env.RESEND_FROM!,
      to: process.env.RESEND_TO!,
      replyTo: email,
      subject: `Contact — ${subject}`,
      html: `
        <body style="font-family:sans-serif;color:#001F3F;max-width:560px;margin:0 auto;padding:40px 24px;">
          <p style="font-size:11px;letter-spacing:0.3em;text-transform:uppercase;color:#001F3F99;margin-bottom:32px;">Valenté — Contact Form</p>
          <table style="width:100%;border-collapse:collapse;font-size:13px;letter-spacing:0.08em;">
            <tr><td style="padding:8px 0;color:#001F3F99;width:100px;">Name</td><td>${name}</td></tr>
            <tr><td style="padding:8px 0;color:#001F3F99;">Email</td><td><a href="mailto:${email}" style="color:#001F3F;">${email}</a></td></tr>
            <tr><td style="padding:8px 0;color:#001F3F99;">Subject</td><td>${subject}</td></tr>
          </table>
          <p style="font-size:13px;line-height:1.9;margin-top:24px;">${message.replace(/\n/g, "<br/>")}</p>
        </body>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
