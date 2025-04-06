
import Image from "next/image"
import Footer from "../../components/Footer"
import Link from "next/link"
export default function FeaturesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
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
      
      {/* Content */}
      <div className="relative z-0">
        <nav className="bg-transparent px-4 py-2">
          <Link href='/' className="container mx-auto flex justify-between items-center">
            <Image
              src="/images/Teamify - 1 - Logo Name White Orange I 1.png"
              alt="Logo"
              width={100}
              height={50}
              className="h-10 w-auto"
            />
          </Link>
        </nav>
        
        {children}
        
        <Footer />
      </div>
    </main>
   
    )
  }