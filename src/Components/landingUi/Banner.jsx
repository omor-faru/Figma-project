import banner from "../../assets/Banner.png"
const Banner = () => {
  return (
    <div className="bg-[#F5F7FA] py-[32px]">
        <div className=" max-w-7xl mx-auto flex justify-between items-center">
            <div>
            <h1 className="font-semibold text-[45px] leading-[52px]">
                <span className="text-[#4D4D4D]">Lessons and insights</span> 
                   <br /><span className="text-[#4CAF4F]">from 8 years</span></h1>
                     <p className="text-[#171771] font-normal leading-[52px]">Where to grow your business as a photographer: site or social media?</p>
                     <button className="bg-[#4CAF4F] text-[#FFFFFF] px-4 py-2 rounded flex items-center ">
                        Register
                     </button>
                  </div>
              <div> <img className="w-[273px] h-[284px]" src={banner} alt="banner" /></div>
        </div>
        </div>
       
  )
}

export default Banner
