import logo from "../../assets/Logo (1).png"
import { ArrowRight } from "lucide-react"

const Header = () => {
  return (
    <header className="flex justify-between items-center py-6 max-w-7xl mx-auto">
      

      <div>
        <img src={logo} alt="Logo" className="h-4" />
      </div>

   
      <div className="flex items-center gap-6">
        <nav>
          <ul className="flex items-center gap-4">
            <li><a href="#Home" className="text-[#4D4D4D]">Home</a></li>
            <li><a href="#Features" className="text-[#4D4D4D]">Features</a></li>
            <li><a href="#Community" className="text-[#4D4D4D]">Community</a></li>
            <li><a href="#Blog" className="text-[#4D4D4D]">Blog</a></li>
            <li><a href="#Pricing" className="text-[#4D4D4D]">Pricing</a></li>
          </ul>
        </nav>

       
        <button className="bg-[#4CAF4F] text-[#FFFFFF] px-4 py-2 rounded flex items-center gap-2 transition">
          Register Now
          <ArrowRight size={16} />
        </button>
      </div>
    </header>
  )
}

export default Header
