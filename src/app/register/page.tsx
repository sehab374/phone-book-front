 import RegisterForm from "./RegisterForm"
 import Link from "next/link";


const RegisterPage=()=>{
    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="fix-height container m-auto px-7 flex items-center justify-center">
              <div className=" m-auto bg-white rounded-lg p-5 w-full md:w-2/3">
                <div className="flex justify-center">
                        <h1 className="text-3xl font-bold text-gray-800 mb-5">Create My Account</h1>
                  </div>
                  <RegisterForm/>
                  
                  <div className="flex justify-center items-center mb-5">
                        <h5 className="text-1xl text-gray-800 mr-2">Already have an account?</h5>
                        <Link href="/" className="text-black-800 font-bold">Sign in</Link>
                  </div>

                  {/* <h5 className="text-1xl  text-gray-800 mb-5">Already have an account? </h5>
                  <Link href="/">Sign in</Link> */}
              </div>
  
  
          </section>
  
      </main>
    )
}
export default RegisterPage