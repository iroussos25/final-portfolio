import { NextResponse, type NextRequest } from "next/server";

// Host-based split from a single deployment:
//   giannisroussos.dev  -> engineering portfolio only (no business routes)
//   giannisroussos.com  -> web-development business (hosts /rescue, /rescue-gr)
// Any other host (localhost, *.vercel.app previews) stays unrestricted so both
// halves of the site remain viewable in development and preview.

const BUSINESS_PREFIXES = ["/rescue", "/rescue-gr"];

function isBusinessPath(pathname: string): boolean {
  return BUSINESS_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(`${prefix}/`),
  );
}

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const { pathname } = request.nextUrl;

  const isCom = host.includes("giannisroussos.com");
  const isDev = host.includes("giannisroussos.dev");

  // Portfolio domain: business routes do not exist here.
  if (isDev && isBusinessPath(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Business domain: root presents the practice via /rescue for now.
  if (isCom && pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/rescue";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  // Run on real page routes only; skip Next internals and static assets.
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf|txt|xml)$).*)",
  ],
};
