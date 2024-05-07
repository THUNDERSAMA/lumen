import { jwtVerify } from 'jose';
import Cookies from 'js-cookie';
import { NextRequest, NextResponse } from "next/server";
const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);
 export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  return payload;
}
// export async function checkAuth()
// {
//     const session = Cookies.get("session");
//   if (!session) 
//   {
//     return false;
//   }
//   else{
//     console.log(session);
//     //decrypt(ses)
//     return decrypt(session);
//   }
// }