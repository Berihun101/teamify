
import Link from "next/link";
import SwitchToggle from "@/app/components/SwitchToggle";
const Features = () => {
   
    return (
        <div className="flex flex-wrap flex-col items-center justfy-center py-2 mx-auto w-full">
            <h1 className="text-6xl text-white font-bold mb-2">Flexible <span className="text-yellow-400">Plans</span></h1>
            <p className="text-lg text-white mb-2">Choose a plan that work best for you & your team</p>
          
          <SwitchToggle />


    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-8 justify-center items-end mx-auto px-2 py-2 rounded shadow-xl">
 
  <div className="relative isolate text-white px-6 py-8 w-[400px] rounded-xl shadow-lg overflow-hidden h-full">
    <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
    <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
    <div className="relative z-10 h-full flex flex-col">
      <h1 className="text-2xl font-bold text-center">Standard</h1>
      <p className="text-center flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam voluptas modi rem ad esse nobis repudiandae. Tempore modi, quibusdam earum aperiam culpa ullam libero vitae perferendis. Ducimus, ratione obcaecati?</p>
      <div className="flex items-center justify-center mt-4 gap-2">
        <h1 className="text-4xl font-bold">$99</h1>
        <p className="text-[15px]">/Per Month</p>
      </div>
      
      <hr className="mx-auto w-[70%] mt-4 mb-3" />
      <ul className="flex flex-col gap-2 items-center justify-center">
        <li className="text-lg font-bold">1GB Storage</li>
        <li className="text-lg font-bold">Unlimited Support</li>
        <li className="text-lg font-bold">Unlimited Projects</li>
        <li className="text-lg font-bold">Unlimited Projects</li>
        <li className="text-lg font-bold">Unlimited Projects</li>
      </ul>
      <Link href="/orderSummary">
      <button className="w-full rounded-4xl bg-blue-900 text-white cursor-pointer py-3 text-center mt-4">Choose Plan</button> 
      </Link>
    </div>
  </div>
  
 
  <div className="relative isolate text-white px-6 py-8 w-[400px] rounded-xl shadow-lg overflow-hidden h-full xl:transform xl:-translate-y-8">
    <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
    <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
    <div className="relative z-10 h-full flex flex-col">
      <h1 className="text-2xl font-bold text-center">Premium <span className="text-[10px]">(Recommended)</span></h1>
      <p className="text-center flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam voluptas modi rem ad esse nobis repudiandae. Tempore modi, quibusdam earum aperiam culpa ullam libero vitae perferendis. Ducimus, ratione obcaecati?</p>
      <div className="flex items-center justify-center mt-4 gap-2">
        <h1 className="text-4xl font-bold">$299</h1>
        <p className="text-[15px]">/Per Month</p>
      </div>
      
      <hr className="mx-auto w-[70%] mt-4 mb-3" />
      <ul className="flex flex-col gap-2 items-center justify-center">
        <li className="text-lg font-bold">1GB Storage</li>
        <li className="text-lg font-bold">Unlimited Support</li>
        <li className="text-lg font-bold">Unlimited Projects</li>
        <li className="text-lg font-bold">Unlimited Projects</li>
        <li className="text-lg font-bold">Unlimited Projects</li>
      </ul>
      <Link href="/orderSummary">
      <button className="w-full rounded-4xl bg-yellow-500 text-white cursor-pointer py-3 text-center mt-4">Choose Plan</button> 
      </Link>
    </div>
  </div>

 
  <div className="relative isolate px-6 py-8 w-[400px] rounded-xl shadow-lg overflow-hidden h-full">
    <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
    <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
    <div className="relative z-10 h-full flex flex-col">
      <h1 className="text-2xl font-bold text-center text-white drop-shadow-md">Enterprise</h1>
      <p className="text-center text-white flex-grow">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam voluptas modi rem ad esse nobis repudiandae. Tempore modi, quibusdam earum aperiam culpa ullam libero vitae perferendis. Ducimus, ratione obcaecati?</p>

      
      <div className="flex items-center justify-center mt-4 gap-2">
        <h2 className="text-2xl font-bold text-white">Custom Plan</h2>
      </div>
      
      <hr className="mx-auto w-[70%] mt-4 mb-3 border-white/20" />
      
      <ul className="flex flex-col gap-2 items-center justify-center">
        <li className="text-lg font-bold text-white">1GB Storage</li>
        <li className="text-lg font-bold text-white">Unlimited Support</li>
        <li className="text-lg font-bold text-white">Unlimited Projects</li>
        <li className="text-lg font-bold text-white">Unlimited Projects</li>
        <li className="text-lg font-bold text-white">Unlimited Projects</li>
      </ul>
      <Link href="/orderSummary">
      <button className="w-full cursor-pointer rounded-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-center mt-4 transition-colors">
        Choose Plan
      </button>
      </Link>
    </div>
  </div>
</div>
           
        </div>
    );
}
export default Features;