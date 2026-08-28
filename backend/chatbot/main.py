import os
import logging
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from groq import Groq

load_dotenv()

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI(title="Vantly Chatbot API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://www.vantly.tech",
        "https://vantly.tech",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

SITE_CONTEXT = """
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

- Starter Audit: $199 one-time
  Includes: Full technical SEO audit, GEO/AI-citation readiness check, competitor gap analysis, 30-minute strategy call
  Best for: Testing us out, low commitment

- Growth Package: $799/month (Most Popular)
  Includes: Everything in Starter Audit + monthly content optimization, structured data/schema implementation, monthly performance reporting, direct Slack/email access
  Best for: Businesses ready to grow consistently

- Full Partnership: Custom pricing
  Includes: Everything in Growth Package + custom web development & maintenance, priority support & faster turnaround, quarterly strategy sessions
  Best for: Businesses wanting a full digital partner

GUARANTEE:
If our Starter Audit doesn't surface at least 5 actionable improvements for your business, we'll refund you in full.

CONTRACTS:
Month-to-month. Cancel anytime with 30 days notice. Annual plans available at 15% discount. No setup fees.

PAYMENT METHODS:
Credit card, ACH/bank transfer, wire for annual enterprise contracts.

BOOKING:
Book a call: https://calendly.com/vantlytech/30min

CONTACT:
Email: vantlytech@gmail.com

FAQ:
- How long until we see results? Technical fixes can shift AI citations within weeks. Organic rankings usually take 3-6 months.
- Do you work with existing sites? Usually yes. We only recommend a rebuild when the current platform is the bottleneck.
- Why trust a new agency? Direct hands-on attention from the core team on every project. Starter Audit is a low-risk way to see our work firsthand.
- What's included in the Starter Audit? Full technical SEO audit, GEO/AI-citation readiness check, competitor gap analysis, 30-minute call — all for $199 one-time.
"""

SYSTEM_PROMPT = f"""You are Vantly's website assistant. Answer questions about Vantly's services, pricing, and process using ONLY the information provided in the SITE_CONTEXT below.

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
Contact email: vantlytech@gmail.com

SITE_CONTEXT:
{SITE_CONTEXT}
"""


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str


def get_groq_client() -> Groq:
    api_key = os.environ.get("GROQ_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="GROQ_API_KEY environment variable not set")
    return Groq(api_key=api_key)


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/chat", response_model=ChatResponse)
async def chat(request: ChatRequest):
    if not request.message or not request.message.strip():
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    try:
        client = get_groq_client()
        completion = client.chat.completions.create(
            model="openai/gpt-oss-20b",
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": request.message.strip()},
            ],
            temperature=0.3,
            max_tokens=300,
        )
        reply = completion.choices[0].message.content.strip()
        return ChatResponse(reply=reply)
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Groq API error: {e}")
        raise HTTPException(status_code=502, detail="Failed to generate response. Please try again later.")


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8001)
