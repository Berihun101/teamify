
import Image from "next/image"
import Footer from "../../components/Footer"
import Link from "next/link"
export default function SummaryLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        
      <main className="relative min-h-screen">
      {/* Background Image */}
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
      
      {/* Content */}
      <div className="relative z-0">
      
        
        {children}
        
        <Footer />
      </div>
    </main>
   
    )
  }