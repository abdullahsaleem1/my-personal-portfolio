# Portfolio Website

Simple, single-page portfolio built with Next.js, Tailwind CSS, and Framer Motion.

## Quick Start

1. Install dependencies:

```bash
npm install
```

2. Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_key
RESEND_FROM_EMAIL=iamabdullahsaleem1@gmail.com
GROQ_API_KEY=your_groq_key
```

3. Run the dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Main Commands

```bash
npm run dev        # start dev server
npm run build      # production build
npm run start      # start production server
npm run lint       # lint
npm run typecheck  # type check
```

## Project Structure

- app/ - routes, layout, API endpoints
- components/ - UI sections and effects
- lib/portfolio-data.ts - all content in one file
- public/ - images and resume file

## Edit Content

Update everything in:

- lib/portfolio-data.ts

Replace assets in:

- public/profile-placeholder.svg
- public/projects/*.svg
- public/resume/Abdullah_Saleem_CV.pdf

## API Docs

### POST /api/contact

Sends a contact email using Resend.

Request body:

```json
{
	"name": "Jane Smith",
	"email": "jane@company.com",
	"subject": "Job Opportunity",
	"message": "Hi Abdullah, I'd love to connect."
}
```

Response:

```json
{ "success": true, "id": "..." }
```

### POST /api/monitor

Receives client error logs and basic performance metrics. The server prints them in the console.

Request body:

```json
{
	"type": "client_error",
	"message": "Something went wrong",
	"url": "https://example.com",
	"userAgent": "..."
}
```

Response:

```json
{ "ok": true }
```

## Monitoring (Simple Setup)

This project logs:

- Client errors
- Unhandled promise rejections
- Basic page load timing

Logs show in the server console when requests hit `/api/monitor`.

If you want a real dashboard later, you can connect Sentry, LogRocket, or another service.

## Maintain and Update

Simple maintenance plan:

1. Update content in `lib/portfolio-data.ts`.
2. Replace images in `public/`.
3. Run `npm run lint` and `npm run build` before deployment.
4. Check `/api/monitor` logs after changes.

## Future Updates (Ideas)

- Add blog posts (MDX)
- Add a project filter or tags
- Add analytics (Plausible, PostHog, or GA4)
- Add an admin panel later if needed

## AI Chatbot

A floating chat widget (bottom-right bubble) answers visitor questions about Abdullah's background, skills, experience, and projects. It is powered by the Groq API (free tier) and grounded strictly in `lib/portfolio-data.ts` + `content/projects/*.mdx` — it will not answer anything outside that scope.

### Setup

1. Get a free API key at https://console.groq.com/keys
2. Locally: add `GROQ_API_KEY=your_groq_key` to `.env.local` and restart the dev server.
3. On Vercel: Project Settings → Environment Variables → add `GROQ_API_KEY` (Production, Preview, and Development), then redeploy.

The endpoint is rate-limited (8 messages/IP/minute) and caps output tokens per request to protect the free-tier quota. The in-memory limiter resets on redeploy; swap in Upstash Redis if you need persistence.

### POST /api/chat

Request body:

```json
{
	"messages": [
		{ "role": "user", "content": "What stack does Abdullah use?" }
	]
}
```

Success response: streamed plain text (`text/plain`). Error responses are JSON:

```json
{ "error": "Too many messages. Please wait a moment and try again." }
```

## Deploy

Recommended: Vercel.

Steps:

1. Push the repo to GitHub.
2. Import in Vercel.
3. Add env vars: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`.
4. Deploy.
