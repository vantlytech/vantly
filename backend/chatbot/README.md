# Vantly FAQ Chatbot

A stateless FAQ chatbot for vantly.tech built with FastAPI and Groq SDK.

## Setup

### 1. Get a Groq API Key

Sign up at [console.groq.com](https://console.groq.com) (free, no credit card required) and create an API key.

### 2. Install Dependencies

```bash
cd backend/chatbot
pip install -r requirements.txt
```

### 3. Set Environment Variable

Create a `.env` file in this directory:

```
GROQ_API_KEY=your_groq_api_key_here
```

Or export it directly:

```bash
# Windows PowerShell
$env:GROQ_API_KEY="your_groq_api_key_here"

# macOS/Linux
export GROQ_API_KEY="your_groq_api_key_here"
```

### 4. Run Locally

```bash
uvicorn main:app --host 0.0.0.0 --port 8001 --reload
```

The API will be available at `http://localhost:8001`.

## API Endpoints

### POST /chat

Send a message and get a reply.

```bash
curl -X POST http://localhost:8001/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "What services does Vantly offer?"}'
```

Response:

```json
{
  "reply": "Vantly offers three core services: GEO (Generative Engine Optimization)..."
}
```

### GET /health

Health check endpoint.

```bash
curl http://localhost:8001/health
```

## How It Works

- The chatbot uses Groq's `openai/gpt-oss-20b` model for fast, factual responses.
- All Vantly information (services, pricing, FAQ) is embedded in the system prompt.
- The chatbot only answers using the provided context — it won't invent information.
- If asked something outside Vantly's scope, it redirects to booking a call.
- **Stateless**: Each request is independent. No conversation memory across messages unless the frontend sends message history.

## CORS

Allows requests from:
- `https://www.vantly.tech`
- `https://vantly.tech`
- `http://localhost:3000`
