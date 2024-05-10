"use server";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
 import Cookies from "js-cookie";
import { redirect, useRouter } from "next/navigation";
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const router=useRouter
  try {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
catch(error)
{
  console.log(error);
  // router.push('/home');
}
}


export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
 const cv=await decrypt(session);
  //Cookies.set('sessval', cv, { expires: 7 });
  return await decrypt(session);
}

export async function updateSession(request: NextRequest) {
  const session = request.cookies.get("session")?.value;
  
  if (!session) return;
//console.log(session);
  // Refresh the session so it doesn't expire
  const parsed = await decrypt(session);
  if (parsed) {
  parsed.expires = new Date(Date.now() + 10 * 60 * 60 * 1000);
  const res = NextResponse.next();
  res.cookies.set({
    name: "session",
    value: await encrypt(parsed),
    httpOnly:false,
    expires: parsed.expires,
  });
  return res;
}
 //await getSession();
  
}