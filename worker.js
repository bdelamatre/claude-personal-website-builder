const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com",
  "img-src 'self' data:",
  "connect-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

function withSecurityHeaders(response) {
  const headers = new Headers(response.headers);
  headers.set('Content-Security-Policy', CSP);
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return new Response(response.body, { status: response.status, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Redirect bare domain to www
    if (!url.hostname.startsWith('www.')) {
      return Response.redirect(
        `https://www.${url.hostname}${url.pathname}${url.search}`, 301
      );
    }

    // Redirect /security.txt to /.well-known/security.txt
    if (url.pathname === '/security.txt') {
      return Response.redirect(`${url.origin}/.well-known/security.txt`, 301);
    }

    // Serve static assets; fall through to custom 404
    const response = await env.ASSETS.fetch(request);
    if (response.status === 404) {
      const { default: notFound } = await import('./pages/not-found.js');
      return withSecurityHeaders(await notFound(request));
    }

    const contentType = response.headers.get('content-type') ?? '';
    if (contentType.includes('text/html')) {
      return withSecurityHeaders(response);
    }
    return response;
  },
};
