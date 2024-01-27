import { auth } from "@/app/auth"
import {NextRequest,NextResponse} from "next/server"

export default async function middleware(req:NextRequest){
  const session = await auth()
  if(session == null){

    return NextResponse.redirect('http://localhost:3000/login')
    
  }
  
}
    
export const config = {
  matcher:['/dashboard/:path*','/profile'],
}