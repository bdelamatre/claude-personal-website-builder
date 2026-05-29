export default function notFound() {
  return new Response(
    `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Page not found</title>
  <style>
    body {
      margin: 0;
      padding: 4rem 1.5rem;
      background: #fafaf9;
      color: #1a1a1a;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      font-size: 1rem;
      line-height: 1.65;
    }
    main { max-width: 580px; margin: 0 auto; }
    h1 {
      font-size: 1.75rem;
      font-weight: 700;
      letter-spacing: -0.03em;
      margin: 0 0 0.5rem;
    }
    p { margin: 0 0 1.5rem; color: #6e6e6e; }
    a { color: #2563eb; text-decoration: none; }
    a:hover { text-decoration: underline; }
    a:focus-visible {
      outline: 2px solid #2563eb;
      outline-offset: 2px;
      border-radius: 2px;
    }
  </style>
</head>
<body>
  <main>
    <h1>404</h1>
    <p>This page doesn't exist.</p>
    <a href="/">Go home</a>
  </main>
</body>
</html>`,
    { status: 404, headers: { 'Content-Type': 'text/html; charset=UTF-8' } }
  );
}
