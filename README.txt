# Auren API na Vercelu (Node Serverless)

Tento projekt přidá endpoint **POST /api/auren** který volá OpenAI Chat Completions a vrátí text.
**Klíč zůstává na serveru** (Environment Variables) – nikdy ho nedávej do frontendu.

## Nasazení (Vercel)
1) Na Vercelu vytvoř projekt a nahraj tento folder (nebo repo).  
2) V **Project → Settings → Environment Variables** vlož:  
   - `OPENAI_API_KEY = sk-...` (tvůj klíč)  
3) Deploy. Po nasazení otevři `/` (index.html) a vyzkoušej odeslání na `/api/auren`.

## Lokální běh (volitelné)
- `npm install`
- `npx vercel dev` (potřebuješ Vercel CLI), a vytvoř si `.env.local` s `OPENAI_API_KEY=...`

## Změna modelu/temperatury
- V souboru `api/auren.js` uprav `model` nebo `temperature` podle potřeby.

## Bezpečnost
- Nikdy nenechávej API klíč ve frontendu ani v repu.
- Klíč ukládej jen do **Environment Variables** na Vercelu.
