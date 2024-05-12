import { NextRequest, NextResponse } from "next/server";
import { updateSession } from "./lib/auth";
import Cookies from "js-cookie";
export async function middleware(request: NextRequest) {
  // if (request.nextUrl.pathname.startsWith('/authredirectPatient')) {
  //   const ids = request.nextUrl.searchParams.get('m_id');
  //   console.log(ids);
  //   try {
  //       const response = await fetch(new URL(`/api/patient_signin?m_id=${ids}`, request.url));
  //       if (response.ok) {
  //         //console.log(response);
  //         let resp =NextResponse.next();
  //         const data = await response.json()
  //         const expires = new Date(Date.now() + 8000 * 60 * 1000);
  //         // resp.cookies.set('session', data.message, { expires: expires,httpOnly:false });
  //           return NextResponse.redirect(new URL('/patient/main', request.url));
  //       } else {
  //           return NextResponse.redirect(new URL('/patient/login', request.url));
  //       }
  //   } catch (error) {
        
  //       console.error('Error:', error);
  //       await updateSession(request);
  //       return NextResponse.redirect(new URL('/patient/login', request.url));
  //   }
  // }
  return await updateSession(request);
}
