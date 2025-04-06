
import Link from "next/link";
export default function Home() {
  return (
    <main className="">
   
      
      <div className="mx-auto flex flex-col justify-between py-16 md:gap-132 gap-94 w-full items-center ">
        <h1 className="text-6xl text-center text-white font-bold">Welcome To Your <span className="text-yellow-400 font-bold">Virtual Office</span></h1>
        <div className="flex gap-12 justify-center items-center">
          <button className="bg-yellow-400 font-bold cursor-pointer font-bold text-white px-4 py-2 rounded hover:bg-yellow-600">
            Instant Demo
          </button>
          <button className="bg-transparent hover:bg-yellow-400 cursor-pointer border-2 border-yellow-400 font-bold text-white px-4 py-2 rounded hover:bg-gray-300">
            <Link href='/setupOffice' className="font-bold">Setup Your Company</Link>
          </button>

        </div>
      </div>
    
     
     
    </main>
  );
}
