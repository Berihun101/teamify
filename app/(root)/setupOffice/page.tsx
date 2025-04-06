const SetupOffice = () => {
  return (
    <div className="mx-auto flex py-2 w-full items-center justify-center">
    <div className="bg-gray-200 bg-opacity-12 p-8 rounded shadow-xl">
    <h1 className="text-2xl font-bold text-center">Set Up Your Office</h1>
    
    <div className="flex  justify-center items-center mt-2">
      <div className="w-24 relative h-24 rounded-full bg-blue-900 flex items-center justify-center">
        <p className=" font-bold text-white">Logo here</p>
        <input
            type="file"
            accept="image/*"
            className="hidden"
          />
          
          {/* Camera Icon */}
          <div 
           
            className="absolute -bottom-2 left-9 cursor-pointer  z-10 rounded-full  bg-yellow-400"
          >
            <svg 
              className="w-6 h-6 text-white" 
              xmlns="http://www.w3.org/2000/svg"  
              viewBox="0 0 512 512"
            >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m350.54 148.68l-26.62-42.06C318.31 100.08 310.62 96 302 96h-92c-8.62 0-16.31 4.08-21.92 10.62l-26.62 42.06C155.85 155.23 148.62 160 140 160H80a32 32 0 0 0-32 32v192a32 32 0 0 0 32 32h352a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32h-59c-8.65 0-16.85-4.77-22.46-11.32"/>
              <circle cx="256" cy="272" r="80" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="32"/>
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M124 158v-22h-24v22"/>
            </svg>
          </div>
      </div>
  
    </div>
    <form className="mt-4 flex flex-col gap-4">
      <div>
        <label htmlFor="email">Enter Your Name<span className="text-red-800 ml-2">*</span></label>
        <input placeholder="First & lastname"  className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" id="name" name="name" required />
      </div>
      <div>
        <label htmlFor="email">Enter Your Email<span className="text-red-800 ml-2">*</span></label>
        <input placeholder="Email here" className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="email" id="email" name="email" required />
      </div>
      <div>
        <label htmlFor="password">Your Company Name <span className="text-red-800 ml-2">*</span></label>
        <input placeholder="Name Here" className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" id="password" name="password" required />
      </div>
      <div>
        <label htmlFor="password">Your Company Website <span className="text-red-800 ml-2">*</span></label>
        <input placeholder="Website Here" className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" id="password" name="password" required />
      </div>
      <div>
        <label htmlFor="password">Company Size <span className="text-red-800 ml-2">*</span></label>
      
        <select className="w-full   rounded-md px-4 border-md py-[5px] bg-white mt-2" id="companySize" name="companySize" required>
  
          <option value="1-10">0-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200"> than 50 employees</option>
          </select>
   
      </div>
      <div>
        <label htmlFor="password">Confirm Password <span className="text-red-800 ml-2">*</span></label>
        <input placeholder="Confirm Password" className="w-full bg-white bg-opacity-10 border border-white border-opacity-20 rounded-lg px-4 py-2 text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="password" id="password" name="password" required />
      </div>
      
        
      <button className="w-full bg-blue-900 rounded-md text-white cursor-pointer p-2 text-center" type="submit">Continue</button>
    </form>
     
  </div>
</div>
  );
}
export default SetupOffice;