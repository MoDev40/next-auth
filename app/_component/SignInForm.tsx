'use client'
import {FaGithub,FaGoogle} from "react-icons/fa"
import { signIn } from "next-auth/react"
import {useRouter} from "next/navigation"

function SignInForm(){
    const router = useRouter()

    const handleSignGithub = async()=>{
        await signIn('github')
        router.push("/profile")
    }
    return(
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sign In</h2>
          <div className="mb-4">
            <button onClick={handleSignGithub} className="flex flex-row items-center w-full p-3 bg-gray-200 rounded-md">
              <FaGithub size={30} className="mr-2" />
                <h3>
                    Sign in with GitHub
                </h3>
            </button>
          </div>
          <div>
            <button className="flex flex-row items-center w-full p-3 bg-gray-200 rounded-md">
              <FaGoogle size={30} className="mr-2" />
              <h3>
                 Sign in with Google
              </h3>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInForm