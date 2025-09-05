const functions = require("firebase-functions");
const axios = require("axios");

exports.generateSiteCode = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Methods', 'POST');
    res.set('Access-Control-Allow-Headers', 'Content-Type');
    res.status(204).send('');
    return;
  }
  const prompt = req.body.prompt;
  if (!prompt) return res.status(400).json({ error: "Missing prompt" });

  try {
    // Example: OpenAI GPT-4 API call (replace with Gemini if needed)
    const openaiRes = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          { role: "system", content: "Generate a complete, functional HTML/CSS/JS website based on user description." },
          { role: "user", content: prompt }
        ],
        max_tokens: 1800,
      },
      { headers: { Authorization: `Bearer YOUR_OPENAI_API_KEY` } }
    );

    const code = openaiRes.data.choices[0].message.content;
    res.json({ code });
  } catch (err) {
    res.status(500).json({ error: "AI code generation failed", details: err.message });
  }
});
