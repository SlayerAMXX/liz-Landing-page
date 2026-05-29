import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const BLOCKED_PREFIXES = ["/config/"];

const BLOCKED_PATHS = new Set([
  "/config",
  "/site.json",
  "/config/site.json",
  "/config/site.schema.json",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    BLOCKED_PATHS.has(pathname) ||
    BLOCKED_PREFIXES.some((prefix) => pathname.startsWith(prefix))
  ) {
    return new NextResponse(null, { status: 404 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/config/:path*", "/config", "/site.json"],
};
