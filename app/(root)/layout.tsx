
import "../globals.css";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DefaultLayout({
    children,
}: {
  children: React.ReactNode
}){
  return (
 
       
          <main className="relative min-h-screen">
          <div className="fixed inset-0 -z-10">
            <Image
              src="/images/image 1.png"
              alt="Background"
              fill
              className="object-cover"
              quality={100}
              priority
            />
          </div>
          <Navbar />

        
        {children}
        <Footer />
      </main>
   
  );
}
