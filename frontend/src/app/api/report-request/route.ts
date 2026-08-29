import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const EMAIL_TO = process.env.REPORT_EMAIL_TO || 'vantlytech@gmail.com';
const EMAIL_FROM =
  process.env.EMAIL_FROM || 'Vantly <onboarding@resend.dev>';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isValidUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
}

interface ReportRequestBody {
  website_url?: string;
  email?: string;
}

export async function POST(request: NextRequest) {
  let body: ReportRequestBody;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: 'Invalid request body.' }, { status: 400 });
  }

  const websiteUrl = body.website_url?.trim() ?? '';
  const email = body.email?.trim() ?? '';

  if (!isValidUrl(websiteUrl)) {
    return NextResponse.json({ detail: 'Please enter a valid website URL.' }, { status: 400 });
  }
  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ detail: 'Please enter a valid email address.' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable not set');
    return NextResponse.json(
      { detail: 'Something went wrong, please try again.' },
      { status: 500 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: [EMAIL_TO],
      subject: 'New Free SEO & GEO Report Request',
      html: `
        <h2>New free SEO &amp; GEO report request</h2>
        <p>A new report request was submitted on the Vantly website.</p>
        <table cellpadding="6" style="border-collapse:collapse">
          <tr style="background:#f3f6fb"><td><strong>Website URL</strong></td><td>${websiteUrl}</td></tr>
          <tr><td><strong>Email</strong></td><td>${email}</td></tr>
        </table>
        <p style="color:#7a8399;font-size:13px">Action manually — create and email the free SEO &amp; GEO report.</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { detail: 'Something went wrong, please try again.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to send report request email:', error);
    return NextResponse.json(
      { detail: 'Something went wrong, please try again.' },
      { status: 500 }
    );
  }
}