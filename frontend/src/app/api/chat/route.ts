import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

export const runtime = 'nodejs';

const SITE_CONTEXT = `
Vantly — Agency Information

COMPANY:
Tagline: "A small studio building growth engines for ambitious brands — across AI answer engines, organic search, and the web itself."

SERVICES:

1. GEO (Generative Engine Optimization)
   - AI citation optimization for ChatGPT, Perplexity, Claude, Google AI Overviews
   - Structured data & schema markup for LLMs
   - Content authority & E-E-A-T signals for AI
   - Conversational query research & targeting
   - Entity optimization & knowledge graph presence

2. SEO (Search Engine Optimization)
   - Technical SEO audits & fixes
   - Keyword research & topical mapping
   - Content strategy & optimization
   - Authority link building (white-hat)
   - Core Web Vitals optimization
   - Monthly reporting & analytics

3. Web Development
   - Next.js / React / TypeScript
   - Performance optimization (90+ PageSpeed)
   - WCAG accessibility compliance
   - Headless CMS integration (Contentful, Sanity, Strapi)
   - E-commerce with Shopify or custom solutions

PRICING:

- Free SEO & GEO Snapshot: Free
  Includes: Technical SEO check, AI/GEO readiness overview, delivered within 24-48 hours
  Request it via the "Get Free Report" form on the site. No obligation.

- Starter Audit: $199 one-time
  Includes: Full technical SEO audit, GEO/AI-citation readiness check, competitor gap analysis, 30-minute strategy call
  Best for: Testing us out, low commitment

- Growth & Partnership: Starting at $799/month
  Includes: Monthly content optimization, structured data/schema implementation, monthly performance reporting, direct Slack/email access, custom web development & maintenance, priority support & faster turnaround, quarterly strategy sessions
  Best for: Businesses wanting a full digital growth partner

GUARANTEE:
If our Starter Audit doesn't surface at least 5 actionable improvements for your business, we'll refund you in full.

CONTRACTS:
Month-to-month. Cancel anytime with 30 days notice. Annual plans available at 15% discount. No setup fees.

PAYMENT METHODS:
Credit card, ACH/bank transfer, wire for annual enterprise contracts.

BOOKING:
Book a call: https://calendly.com/vantlytech/30min

CONTACT:
Email: info@vantly.tech

FAQ:
- How long until we see results? Technical fixes can shift AI citations within weeks. Organic rankings usually take 3-6 months.
- Do you work with existing sites? Usually yes. We only recommend a rebuild when the current platform is the bottleneck.
- Why trust a new agency? Direct hands-on attention from the core team on every project. Starter Audit is a low-risk way to see our work firsthand.
- What's included in the Starter Audit? Full technical SEO audit, GEO/AI-citation readiness check, competitor gap analysis, 30-minute call — all for $199 one-time.
`;

const SYSTEM_PROMPT = `You are Vantly's website assistant. Answer questions about Vantly's services, pricing, and process using ONLY the information provided in the SITE_CONTEXT below.

Rules:
- Keep responses short: 2-4 sentences max.
- Only use facts from SITE_CONTEXT. Never invent pricing, features, or details not listed.
- If asked about something outside Vantly's scope (unrelated to GEO, SEO, web development, pricing, or the company), politely redirect to booking a call.
- If you don't have enough information to answer confidently, say so honestly and suggest booking a call rather than guessing.
- Be conversational but professional. No jargon overload.
- When mentioning pricing, always include what's included at that tier.
- Always be honest about being a new agency — it's a strength (direct senior attention), not a weakness.
- Do NOT use markdown formatting (no asterisks, no **bold**, no bullet points). Use plain text only.

Booking link: https://calendly.com/vantlytech/30min
Contact email: info@vantly.tech

SITE_CONTEXT:
${SITE_CONTEXT}
`;

export async function POST(request: NextRequest) {
  let body: { message?: string };

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ detail: 'Invalid JSON body' }, { status: 400 });
  }

  const message = body?.message?.trim();
  if (!message) {
    return NextResponse.json({ detail: 'Message cannot be empty' }, { status: 400 });
  }

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { detail: 'GROQ_API_KEY environment variable not set' },
      { status: 500 }
    );
  }

  try {
    const client = new Groq({ apiKey });
    const completion = await client.chat.completions.create({
      model: 'openai/gpt-oss-20b',
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: message },
      ],
      temperature: 0.3,
      max_tokens: 300,
    });

    const reply = completion.choices[0]?.message?.content?.trim() || '';
    if (!reply) {
      return NextResponse.json(
        { detail: 'Failed to generate response. Please try again later.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error('Groq API error:', error);
    return NextResponse.json(
      { detail: 'Failed to generate response. Please try again later.' },
      { status: 502 }
    );
  }
}