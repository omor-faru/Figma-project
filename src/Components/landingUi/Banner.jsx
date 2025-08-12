import banner from "../../assets/Banner.png"

const Banner = () => {
  return (
    <div className="bg-[#F5F7FA] py-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center px-4 md:px-0 gap-6">

        <div className="text-center md:text-left max-w-lg">
          <h1 className="font-semibold text-3xl md:text-[45px] leading-snug md:leading-[52px]">
            <span className="text-[#4D4D4D]">Lessons and insights</span> 
            <br />
            <span className="text-[#4CAF4F]">from 8 years</span>
          </h1>
          
          <p className="text-[#171771] font-normal text-base md:text-lg leading-relaxed mt-4">
            Where to grow your business as a photographer: site or social media?
          </p>
          
          <button className="mt-6 bg-[#4CAF4F] text-white px-5 py-2 rounded transition">
            Register
          </button>
        </div>

        
        <div className="flex justify-center">
          <img 
            className="w-60 h-auto md:w-[273px] md:h-[284px]" 
            src={banner} 
            alt="banner" 
          />
        </div>

      </div>
    </div>
  )
}

export default Banner

