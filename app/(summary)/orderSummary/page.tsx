import SwitchToggle from "@/app/components/SwitchToggle";
const OrderSummary = () => {
    return (
        <div className="xl:px-64 md:px-12 px-2 mt-12">
        <h1 className="text-4xl text-white font-bold">Your Order <span className="text-yellow-400">Summary</span></h1>
         <div className="mx-auto mb-94 relative isolate py-8 mt-8 md:px-8 px-2 items-center">
         <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
         <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
           <div className="flex justify-between items-center md:w-[60%] gap-4">
            <h2 className="text-3xl font-bold text-white">Select Plan</h2>

            <div className="hidden lg:block">
            <SwitchToggle  />
            </div>
            
           </div>
           <div className="flex justify-between bg-gray-300/30 p-2 rounded-lg xl:w-[60%] items-center mt-4 ">
            <div className="flex gap-4 items-center">
            <div className="rounded-full bg-white w-6 h-6">
                <input 
                    type="checkbox" 
                    id="standard"
                    className="
                    appearance-none
                    w-6 h-6
                    rounded-full
                    border-2 border-yellow-400
                    checked:bg-yellow-500
                    checked:border-yellow-500
                    focus:outline-none
                    focus:ring-2 focus:ring-yellow-200
                    cursor-pointer
                    transition-colors
                    "
                />
                </div>
              
                <div className="flex flex-col">
                    <h1 className="text-lg font-bold text-white">Standard</h1>
                    <p className="text-white text-[10px] w-[70%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aperiam voluptas modi rem ad esse nobis repudiandae.</p>

                </div>

            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl font-bold text-white">$299</h1>
                <p className="text-blue-800">/Per Month</p>
                </div>
           </div>

           <div className="flex justify-between gap-8 bg-gray-300/30 p-2 rounded-lg xl:w-[60%] items-center mt-4 ">
            <div className="flex gap-4 items-center">
            <div className="rounded-full bg-white w-6 h-6">
                <input 
                    type="checkbox" 
                    id="premium"
                    className="
                    appearance-none
                    w-6 h-6
                    rounded-full
                    border-2 border-yellow-400
                    checked:bg-yellow-500
                    checked:border-yellow-500
                    focus:outline-none
                    focus:ring-2 focus:ring-yellow-200
                    cursor-pointer
                    transition-colors
                    "
                />
                </div>
              
                <div className="flex md:w-[50%] flex-col">
                    <h1 className="text-lg font-bold text-white">Premium</h1>
                    <p className="text-white text-[10px] ">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                </div>

            </div>
            <div className="bg-white rounded-lg text-center md:p-[7px]">
                <h1 className="text-md font-bold text-black">Recommended</h1>

            </div>
            <div className="flex flex-col items-center gap-2">
                <h1 className="text-4xl font-bold text-white">$1800</h1>
                <p className="text-blue-800">/Per Month</p>
                </div>
            </div>
         </div>
        </div>
    );
    }
export default OrderSummary;