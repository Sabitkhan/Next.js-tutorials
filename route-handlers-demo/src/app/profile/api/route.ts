import { NextRequest } from "next/server";
import { headers, cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);
  const headerList = headers();
  (await cookies()).set("resultPerPage", "20");
  const theme = request.cookies.get("theme");

  console.log(requestHeader.get("Authorization"));
  console.log(headerList.get("Authorization"));
  console.log(theme)

    return new Response("<h1>Profile API Page</>", {  headers: { "Content-Type": "text/html", "Set-Cookie": "theme=dark" } });
  }