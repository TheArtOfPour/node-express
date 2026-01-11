const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Frankenstein Express Lab</title>
        <style>
          body { font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #111; color: #eee; display: flex; align-items: center; justify-content: center; height: 100vh; margin: 0; }
          .card { background: #1a1a1a; border-radius: 12px; padding: 24px 32px; box-shadow: 0 10px 40px rgba(0,0,0,0.6); max-width: 480px; text-align: center; border: 1px solid #2f2f2f; }
          h1 { margin: 0 0 12px; font-size: 2.4rem; color: #7CFC00; text-shadow: 0 0 10px #7CFC00; }
          p { margin: 6px 0; color: #ccc; }
          code { background: #222; padding: 2px 6px; border-radius: 4px; }
          .muted { font-size: 0.85rem; color: #888; margin-top: 16px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>It's alive! ⚡</h1>
          <p>Your Frankenstein Express server has risen from the lab table.</p>
          <p>Running on <code>http://localhost:${PORT}</code></p>
          <p class="muted">Try the <code>/status</code> route to check the creature's vital signs.</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/status', (req, res) => {
  res.json({
    message: "It's alive!",
    status: 'stable',
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || 'development',
  });
});

app.listen(PORT, () => {
  console.log(`⚡ Frankenstein Express server is alive at http://localhost:${PORT}`);
});
