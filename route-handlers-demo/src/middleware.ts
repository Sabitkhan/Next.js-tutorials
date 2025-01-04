
import { NextResponse, type NextRequest } from "next/server";
export function middleware(request: NextRequest) {
    const response = NextResponse.next()
    const themePreferences = request.cookies.get("theme")
    if(!themePreferences){
        response.cookies.set("theme", "dark")
    }
    response.headers.set("custom-header", "custom-value")
    return response;
  // if(request.nextUrl.pathname === "/profile")
//   console.log("Middleware for", req.url);
   // return NextResponse.rewrite(new URL("/hello", request.url));
}

// export const config = {
//     matcher: "/profile",
// }