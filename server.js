require('dotenv').config();
const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const Anthropic = require('@anthropic-ai/sdk');

const app = express();
const PORT = process.env.PORT || 3000;

const SYSTEM_PROMPT =
  'You are a Free Fire sensitivity coach. Free Fire sensitivity goes from 0 to 200. Reply ONLY with JSON: {"general":0-200,"redDot":0-200,"scope2x":0-200,"scope4x":0-200,"sniper":0-200,"freeLook":0-200,"tip":"one short sentence"}. Values are starting points.';

const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
});

app.use(express.json({ limit: '16kb' }));
app.use(express.static(path.join(__dirname, 'public')));

// Rate limit /api/calc to 10 requests per minute per IP
const calcLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please wait a minute and try again.' },
});

function clamp0to200(val) {
  const num = Number(val);
  if (!Number.isFinite(num)) return null;
  return Math.max(0, Math.min(200, Math.round(num)));
}

function validateAndSanitizeAiResponse(rawText) {
  if (typeof rawText !== 'string') return null;

  const cleaned = rawText
    .trim()
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/\s*```$/i, '')
    .trim();

  let parsed;
  try {
    parsed = JSON.parse(cleaned);
  } catch {
    return null;
  }

  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) {
    return null;
  }

  const keys = ['general', 'redDot', 'scope2x', 'scope4x', 'sniper', 'freeLook'];
  const result = {};

  for (const key of keys) {
    const clamped = clamp0to200(parsed[key]);
    if (clamped === null) return null;
    result[key] = clamped;
  }

  if (typeof parsed.tip !== 'string' || parsed.tip.trim().length === 0) {
    return null;
  }

  result.tip = parsed.tip.trim().slice(0, 240);
  return result;
}

app.post('/api/calc', calcLimiter, async (req, res) => {
  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({ error: 'Server missing ANTHROPIC_API_KEY.' });
  }

  const {
    playStyle = '',
    grip = '',
    shootButton = '',
    dpi = '',
    offset = 0,
    deviceModel = '',
    screenSize = '',
    ram = '',
    fps = '',
    problem = '',
  } = req.body || {};

  const userSummary = [
    `Play style: ${String(playStyle).slice(0, 40)}`,
    `Grip: ${String(grip).slice(0, 40)}`,
    `Shoot button size: ${String(shootButton).slice(0, 20)}%`,
    `DPI: ${String(dpi).slice(0, 20)}`,
    `Fine-tune offset: ${Number(offset) || 0}`,
    `Device model: ${String(deviceModel).slice(0, 80)}`,
    `Screen size: ${String(screenSize).slice(0, 40)}`,
    `RAM: ${String(ram).slice(0, 40)}`,
    `FPS target: ${String(fps).slice(0, 40)}`,
    `Main problem: ${String(problem).slice(0, 60)}`,
  ].join('\n');

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    const message = await anthropic.messages.create(
      {
        model: 'claude-sonnet-4-6',
        max_tokens: 256,
        temperature: 0.3,
        system: SYSTEM_PROMPT,
        messages: [{ role: 'user', content: userSummary }],
      },
      { signal: controller.signal }
    );

    const textBlock = Array.isArray(message.content)
      ? message.content.find((block) => block.type === 'text')
      : null;

    const validated = validateAndSanitizeAiResponse(textBlock ? textBlock.text : '');
    if (!validated) {
      return res.status(502).json({ error: 'AI returned a malformed sensitivity response.' });
    }

    return res.json(validated);
  } catch (err) {
    if (err && err.name === 'AbortError') {
      return res.status(504).json({ error: 'AI request timed out. Formula values remain active.' });
    }
    console.error('AI calculation error:', err.message || err);
    return res.status(502).json({ error: 'Unable to reach AI coach. Formula values remain active.' });
  } finally {
    clearTimeout(timeoutId);
  }
});

app.listen(PORT, () => {
  console.log(`Free Fire Sensitivity Coach running at http://localhost:${PORT}`);
});