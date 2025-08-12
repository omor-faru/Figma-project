import { useState } from "react"
import logo from "../../assets/Logo (1).png"
import { ArrowRight, Menu, X } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="py-6 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center">
        
        
        <div>
          <img src={logo} alt="Logo" className="h-6 md:h-8" />
        </div>

        
        <nav className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-4">
            <li><a href="#Home" className="text-[#4D4D4D]">Home</a></li>
            <li><a href="#Features" className="text-[#4D4D4D]">Features</a></li>
            <li><a href="#Community" className="text-[#4D4D4D]">Community</a></li>
            <li><a href="#Blog" className="text-[#4D4D4D]">Blog</a></li>
            <li><a href="#Pricing" className="text-[#4D4D4D]">Pricing</a></li>
          </ul>

          <button className="bg-[#4CAF4F] text-white px-4 py-2 rounded flex items-center gap-2 transition">
            Register Now
            <ArrowRight size={16} />
          </button>
        </nav>

     
        <button 
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <a href="#Home" className="text-[#4D4D4D]">Home</a>
          <a href="#Features" className="text-[#4D4D4D]">Features</a>
          <a href="#Community" className="text-[#4D4D4D]">Community</a>
          <a href="#Blog" className="text-[#4D4D4D]">Blog</a>
          <a href="#Pricing" className="text-[#4D4D4D]">Pricing</a>

          <button className="bg-[#4CAF4F] text-white px-4 py-2 rounded flex items-center gap-2 transition w-fit">
            Register Now
            <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  )
}

export default Header
