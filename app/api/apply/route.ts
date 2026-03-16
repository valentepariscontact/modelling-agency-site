import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { Resend } from "resend";
 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});
 
const resend = new Resend(process.env.RESEND_API_KEY!);
 
async function uploadToCloudinary(file: File): Promise<string> {
  const arrayBuffer = await file.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  const base64 = buffer.toString("base64");
  const dataUri = `data:${file.type};base64,${base64}`;
 
  const result = await cloudinary.uploader.upload(dataUri, {
    folder: "model-applications",
    resource_type: "image",
  });
 
  return result.secure_url;
}
 
export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
 
    const fields = [
      "name", "email", "phone",
      "city", "country",
      "height", "bust", "waist", "hips", "shoes",
    ] as const;
 
    const data: Record<string, string> = {};
    for (const field of fields) {
      data[field] = (formData.get(field) as string | null) ?? "";
    }
 
    const photoFiles = formData.getAll("photos") as File[];
    if (photoFiles.length === 0) {
      return NextResponse.json({ error: "No photos received." }, { status: 400 });
    }
 
    const photoUrls = await Promise.all(photoFiles.map(uploadToCloudinary));
 
    const photoLinksHtml = photoUrls
      .map(
        (url, i) => `
          <tr>
            <td style="padding: 8px 0;">
              <a href="${url}" target="_blank" style="color:#000; font-size:12px; letter-spacing:0.1em; text-transform:uppercase; text-decoration:underline;">
                Photo ${i + 1} — View HD
              </a>
            </td>
          </tr>`
      )
      .join("");
 
    const html = `
      <!DOCTYPE html>
      <html>
        <body style="font-family: sans-serif; color: #000; max-width: 600px; margin: 0 auto; padding: 40px 24px;">
          <h1 style="font-size: 28px; font-weight: 400; border-bottom: 1px solid #000; padding-bottom: 16px; margin-bottom: 24px;">
            New Model Application
          </h1>
          <table style="width:100%; border-collapse:collapse; font-size:13px; letter-spacing:0.08em; text-transform:uppercase;">
            <tr><td style="padding:8px 0; color:#999; width:140px;">Name</td><td>${data.name}</td></tr>
            <tr><td style="padding:8px 0; color:#999;">Email</td><td><a href="mailto:${data.email}" style="color:#000;">${data.email}</a></td></tr>
            <tr><td style="padding:8px 0; color:#999;">Phone</td><td>${data.phone}</td></tr>
            <tr><td style="padding:8px 0; color:#999;">Location</td><td>${data.city}, ${data.country}</td></tr>
            <tr><td style="padding:8px 0; color:#999;">Height</td><td>${data.height}</td></tr>
            <tr><td style="padding:8px 0; color:#999;">Bust</td><td>${data.bust}</td></tr>
            <tr><td style="padding:8px 0; color:#999;">Waist</td><td>${data.waist}</td></tr>
            <tr><td style="padding:8px 0; color:#999;">Hips</td><td>${data.hips}</td></tr>
            <tr><td style="padding:8px 0; color:#999;">Shoes</td><td>${data.shoes}</td></tr>
          </table>
          <h2 style="font-size:14px; font-weight:400; letter-spacing:0.18em; text-transform:uppercase; margin-top:32px; margin-bottom:8px;">
            Photos (${photoUrls.length})
          </h2>
          <table style="width:100%; border-collapse:collapse;">
            ${photoLinksHtml}
          </table>
          <p style="font-size:11px; color:#999; margin-top:40px; text-transform:uppercase; letter-spacing:0.1em;">
            Submitted via the agency website application form.
          </p>
        </body>
      </html>
    `;
 
// Email to you
await resend.emails.send({
  from: process.env.RESEND_FROM!,
  to: process.env.RESEND_TO!,
  replyTo: data.email,
  subject: `New Application — ${data.name}`,
  html,
});

// Confirmation email to applicant
await resend.emails.send({
  from: process.env.RESEND_FROM!,
  to: data.email,
  subject: "Your application to Valenté",
  html: `
    <!DOCTYPE html>
    <html>
      <body style="font-family: sans-serif; color: #001F3F; max-width: 560px; margin: 0 auto; padding: 48px 24px;">
        <p style="font-size:11px; letter-spacing:0.3em; text-transform:uppercase; color:#001F3F99; margin-bottom:32px;">Valenté — Paris</p>
        <h1 style="font-size:26px; font-weight:300; letter-spacing:0.1em; margin-bottom:24px;">Thank you, ${data.name}.</h1>
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
    </html>
  `,
});
 
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[apply] error:", err);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}
 
