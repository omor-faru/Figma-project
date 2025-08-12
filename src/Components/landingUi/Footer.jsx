import logo from "../../assets/footer.png"
import instagram from "../../assets/instagram.png"
import dribbble from "../../assets/Drible.png"
import twitter from "../../assets/twitter.png"
import youtube from "../../assets/youtube.png"

const Footer = () => {
  return (
    <footer className="bg-[#0B0D17] text-gray-300 py-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between gap-12 mt-4 mb-8">
        
       
        <div className="flex flex-col gap-[28px] max-w-sm md:w-1/3">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-[133px] h-[21px]" />
          </div>
          <div>
            <p className="font-normal text-[14px] text-[#F5F7FA] leading-[20px]">
              <span>Copyright © 2025 Landify UI Kit.</span>
              <br />
              <span className="mt-2 inline-block">All Rights Reserved</span>
            </p>
          </div>
          <div className="flex items-center gap-[11px]">
            <a href="#" aria-label="Instagram" className="w-[36px] h-[36px]">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="#" aria-label="Dribbble" className="w-[36px] h-[36px]">
              <img src={dribbble} alt="Dribbble" />
            </a>
            <a href="#" aria-label="Twitter" className="w-[36px] h-[36px]">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#" aria-label="YouTube" className="w-[36px] h-[36px]">
              <img src={youtube} alt="YouTube" />
            </a>
          </div>
        </div>

       
        <div className="flex flex-col gap-3">
          <h3 className="text-[#FFFFFF] leading-[20px]font-semibold text-[15px]">Company</h3>
          <ul className="space-y-2 text-[14px]">
            <li><a href="#" className="hover:text-white text-[#F5F7FA] font-normal text-[10px] leading-[14px] ">About us</a></li>
            <li><a href="#" className="hover:text-white text-[#F5F7FA] font-normal text-[10px] leadig-[14px]
            ">Blog</a></li>
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Contact us</a></li>
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Pricing</a></li>
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Testimonials</a></li>
          </ul>
        </div>

     
        <div className="flex flex-col gap-3">
          <h3 className="text-[#FFFFFF] font-semibold text-[15px]">Support</h3>
          <ul className="space-y-2 text-[14px]">
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Help center</a></li>
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Terms of service</a></li>
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Legal</a></li>
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white  text-[#F5F7FA] font-normal text-[10px] leading-[14px]">Status</a></li>
          </ul>
        </div>

        
        <div className="flex flex-col gap-3">
          <h3 className="text-[#FFFFFF] font-semibold text-[15px] leading-[20px]">Stay up to date</h3>
          <div className="flex items-center w-[177px] h-[28px]">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 bg-[#515B60] rounded-l-lg text-[10px] font-normal leading-[14px] text-[#D9DBE1] placeholder-gray-400 focus:outline-none"
            />
            <button className="bg-gray-600 px-2 py-1 rounded-r-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 "
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
