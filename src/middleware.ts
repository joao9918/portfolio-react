import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ignora rotas internas
  if (pathname.startsWith("/_next") || pathname.includes(".")) {
    return NextResponse.next();
  }

  // Se já tiver locale, deixa passar
  if (pathname.startsWith("/pt") || pathname.startsWith("/en")) {
    return NextResponse.next();
  }

  const locale = request.headers.get("accept-language");

  if (locale?.startsWith("pt")) {
    return NextResponse.redirect(new URL("/pt", request.url));
  }

  return NextResponse.redirect(new URL("/en", request.url));
}

export const config = {
  matcher: ["/"],
};
