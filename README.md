# GoogleWorkspaceAI — Unified AI Research & Productivity Hub (Scaffold)

This repository contains a scaffold for a unified workspace combining a Vite + React frontend and an Express backend. TailwindCSS provides responsive styling. The app is designed to integrate Google Workspace (Sheets, Docs, Drive, Gmail, Calendar, NotebookLM, etc.) via Google OAuth and to surface AI features (Gemini) either via API proxy or embedded iframes.

Structure

- `client/` — Vite + React (JavaScript) frontend with Tailwind
- `server/` — Express backend with API endpoints and placeholders for Gemini and Google OAuth

Quick start (development)

Open two terminals.

Frontend:

```powershell
cd client
npm install
npm run dev
```

Backend:

```powershell
cd server
npm install
npm run dev
```

Environment variables

- `server/.env.example` shows the variables used by the server. Set `GEMINI_API_KEY` if you want the proxy to forward requests (or set `GEMINI_PROXY_URL`).

Notes

- This scaffold provides UI components, an AI chat interface that calls the server, and embedded iframes for external research tools.
- Complete Google OAuth and Workspace API calls before using production integration. Follow Google Cloud docs to create OAuth credentials.
