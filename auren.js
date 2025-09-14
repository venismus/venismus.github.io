import OpenAI from "openai";

// Vercel Serverless Function (Node.js) – /api/auren
// POST { prompt: string, system?: string }
// Returns { reply: string }
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const { prompt, system } = req.body || {};
    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Missing 'prompt' (string)" });
    }

    // Read API key from env – set on Vercel as OPENAI_API_KEY
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "Server misconfigured: missing OPENAI_API_KEY" });
    }

    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model: "gpt-4o", // stable, fast multimodal model – can be switched later
      messages: [
        { role: "system", content: system || "You are Auren: dark, calm, honest. Be direct, helpful, and concise." },
        { role: "user", content: prompt }
      ],
      temperature: 0.7
    });

    const reply = completion.choices?.[0]?.message?.content || "";
    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    const msg = typeof err?.message === "string" ? err.message : "Unknown error";
    return res.status(500).json({ error: msg });
  }
}
