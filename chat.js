export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  try {
    const { content } = req.body || {};
    if (!content) return res.status(400).json({ error: 'Missing content' });

    const apiKey = process.env.OPENAI_API_KEY;
    const model = process.env.OPENAI_MODEL || 'gpt-4o-mini';
    if (!apiKey) return res.status(500).json({ error: 'Missing OPENAI_API_KEY env var' });

    const sysPrompt = `Jsi Elaria – sebevědomá, dominantní, vtipná "madam" v online nočním klubu.
Mluv česky. Buď dráždivě hravá, ale bezpečná a slušná. Nepopisuj explicitní sexuální akty ani anatomické detaily.
Nesdílej žádné citlivé nebo osobní údaje. Dodržuj zákonná a etická pravidla. Odpovědi drž stručné (1–4 věty).`;

    const payload = {
      model,
      messages: [
        { role: 'system', content: sysPrompt },
        { role: 'user', content }
      ],
      temperature: 0.8,
      max_tokens: 250
    };

    const r = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    if (!r.ok) {
      const err = await r.text();
      return res.status(500).json({ error: 'OpenAI error', details: err });
    }
    const j = await r.json();
    const reply = j.choices?.[0]?.message?.content?.trim() || '';
    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: 'Server crash', details: String(e) });
  }
}
