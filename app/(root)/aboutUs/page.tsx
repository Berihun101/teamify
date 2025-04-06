import Image from "next/image";
const AboutUs = () => {
  return (
    <div className="mx-auto flex flex-col justify-between py-16 md:gap-32 gap-24 w-full items-center px-4">
     
        <div className="text-center max-w-4xl">
          <h1 className="text-6xl text-center text-white font-bold mb-8">
            About <span className="text-yellow-400">Teamify</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12">
            Revolutionizing the way teams collaborate in virtual workspaces
          </p>
        </div>

        <div className="relative isolate text-white px-6 py-8 md:w-[700px] rounded-xl shadow-lg overflow-hidden h-full">
        <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
    <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
    <div className="relative z-10 h-full flex flex-col">
          <h2 className="text-4xl text-yellow-400 font-bold mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg mb-6">
            At Teamify, we're dedicated to creating seamless virtual office experiences that bridge the gap between remote teams, fostering collaboration and productivity no matter where your team members are located.
          </p>
          <p className="text-gray-300 text-lg">
            Our platform combines cutting-edge technology with intuitive design to deliver a virtual workspace that feels as natural as being in the same physical office.
          </p>
          </div>
        </div>

       
        <div className="max-w-4xl mt-16">
          <h2 className="text-4xl text-white font-bold mb-12 text-center">Meet The Team</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
           
            <div className="relative isolate backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
            <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-600 overflow-hidden">
                <Image 
                  src="/images/team-member1.jpg" 
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl text-white font-bold">John Doe</h3>
              <p className="text-yellow-400 mb-4">CEO & Founder</p>
              <p className="text-gray-300">Visionary leader with 10+ years in virtual collaboration tech</p>
            </div>

            
            <div className="relative isolate backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
            <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-600 overflow-hidden">
                <Image 
                  src="/images/team-member2.jpg" 
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl text-white font-bold">Jane Smith</h3>
              <p className="text-yellow-400 mb-4">CTO</p>
              <p className="text-gray-300">Tech innovator specializing in real-time collaboration systems</p>
            </div>

           
            <div className="relative isolate backdrop-blur-lg rounded-xl p-6 border border-white border-opacity-20 text-center">
            <div className="absolute inset-0 bg-gray-500/30 backdrop-blur-lg -z-10" />
            <div className="absolute inset-0 border border-white/10 rounded-xl -z-10" />
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-600 overflow-hidden">
                <Image 
                  src="/images/team-member3.jpg" 
                  alt="Team Member"
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl text-white font-bold">Alex Johnson</h3>
              <p className="text-yellow-400 mb-4">Head of Product</p>
              <p className="text-gray-300">User experience expert focused on intuitive design</p>
            </div>
          </div>
        </div>

      
        <div className="max-w-4xl mt-24 text-center">
          <h2 className="text-4xl text-white font-bold mb-8">Ready to Transform Your Team's Collaboration?</h2>
          <div className="flex gap-8 justify-center">
            <button className="bg-yellow-400 font-bold cursor-pointer text-white px-6 py-3 rounded hover:bg-yellow-600">
              Get Started
            </button>
            <button className="bg-transparent hover:bg-yellow-400 cursor-pointer border-2 border-yellow-400 font-bold text-white px-6 py-3 rounded hover:bg-opacity-20">
              Contact us
            </button>
          </div>
        </div>
      </div>

  );
}
export default AboutUs;