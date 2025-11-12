const express = require("express");
const axios = require("axios");
const router = express.Router();

// POST /api/gemini
// Body: { prompt: string }
// If GEMINI_PROXY_URL + GEMINI_API_KEY are set, this will forward the request.
// Otherwise the route returns a helpful message and an embed URL for the client to show Gemini via iframe/link.

router.post("/", async (req, res) => {
  const { prompt } = req.body || {};
  if (!prompt) return res.status(400).json({ error: "prompt is required" });

  const key = process.env.GEMINI_API_KEY;
  const proxyUrl = process.env.GEMINI_PROXY_URL;

  if (key && proxyUrl) {
    try {
      const response = await axios.post(
        proxyUrl,
        { prompt },
        {
          headers: { Authorization: `Bearer ${key}` },
        }
      );
      return res.json({ text: response.data });
    } catch (err) {
      console.error("Gemini proxy error", err?.response?.data || err.message);
      return res
        .status(502)
        .json({
          error: "Error from Gemini proxy",
          details: err?.response?.data || err.message,
        });
    }
  }

  // No API key/proxy configured — return fallback that the client can use to embed Gemini or use external link.
  return res.json({
    text: "No Gemini API key or proxy configured on the server. You can embed Gemini via iframe or open the external Gemini page.",
    embedUrl: "https://gemini.google.com/",
  });
});

module.exports = router;
