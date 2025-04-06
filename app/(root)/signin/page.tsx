import Link from "next/link";
const SignIn = () => {
    return (
        <div className="mx-auto flex py-28 w-full items-center justify-center">
      <div className="bg-gray-200 bg-opacity-12 p-8 rounded shadow-xl">
        <h1 className="text-2xl font-bold text-center">Welcome Back</h1>
        <form className="mt-4 flex flex-col gap-4">
          <div>
            <label htmlFor="email">Enter Your Email<span className="text-red-800 ml-2">*</span></label>
            <input placeholder="Email here" className="w-full rounded-md px-2 bg-white py-2 mt-2" type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="password">Enter Your Password <span className="text-red-800 ml-2">*</span></label>
            <input placeholder="Type password" className="w-full  rounded-md px-2 border-md py-2 bg-white mt-2" type="password" id="password" name="password" required />
          </div>
          
            <Link href="#" className="text-blue-600 text-end hover:underline">Forgot password?</Link>
          <button className="w-full bg-blue-900 rounded-md text-white cursor-pointer p-2 text-center" type="submit">Continue</button>
          <Link href='/signup'>
            <p className="text-center text-gray-600 mt-4">Don't have an account? <span className="text-blue-600 hover:underline"><Link href="/signup">Sign up</Link></span></p>
          </Link>
        </form>
          <div className="flex justify-center w-[310px] mx-auto mt-8">
              <p className="text-gray-600">By proceeding, you are agreeing to the <span><Link href="#" className="text-blue-600 hover:underline">Terms and Conditions</Link></span> and <span><Link href="#" className="text-blue-600 ml-1 hover:underline">Privacy and policy</Link></span></p>
              
              </div>
      </div>
      </div>
    );
  }
  
  export default SignIn