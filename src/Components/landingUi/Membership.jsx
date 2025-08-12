import icon1 from "../../assets/Icon (1).png"
import icon2 from "../../assets/Icon (2).png"
import icon3 from "../../assets/Icon (3).png"
const Membership = () => {
    
  return (
    <div className="flex justify-between max-w-6xl mx-auto mt-3 items-center ">
  <div className="w-[209px] h-[183px] gap-6 rotate-0 opacity-100 p-[17px] pr-[23px] rounded-[6px] bg-[#FFF] ">
  <div className="flex items-center justify-center">
    <img src={icon1} alt="Icon" className="w-[45px] h-[38px]" />

  </div>
  <h3 className=" font-bold text-[20px] leading-[25px] tracking-normal text-center text-[#4D4D4D] "
  >Membership Organisations</h3>
  <p className="font-normal text-[10px] leading-[14px] tracking-normal text-center text-[#717171] mt-2">
    Our membership management software provides full automation of membership renewals and payments
  </p>
  </div>



  <div className="w-[209px] h-[182px] gap-[6px] rotate-0 opacity-100 p-[17px] pr-[23px] p1-[22px] rounded-[6px] bg-[#FFF] ">
    <div className="flex items-center justify-center">
      <img src={icon2} alt="icon2" className="w-[45px] h-[38px]" />
    </div>
    <h3 className="font-bold text-[20px] leading-[25px] tracking-normal text-center text-[#4D4D4D]">National Associations</h3>
    <p className="font-normal text-[10px] leading-[14px] tracking-normal text-center text-[#717171] ">Our membership management software provides full automation of membership renewals and payments</p>

  </div>



  <div className="w-[209px] h-[183px] gap-6 rotate-0 opacity-100 p-[17px] pr-[23px] rounded-[6px] bg-[#FFF]">
    <div className="flex items-center justify-center">
      <img src={icon3} alt="icon3" className="w-[45px] h-[38px]" />
    </div>
    <h3 className="font-bold text-[20px] leading-[25px] tracking-normal text-center text-[#4D4D4D]">Clubs And Groups</h3>
    <p className="font-normal text-[10px] leading-[14px] tracking-normal text-center text-[#717171]">Our membership management software provides full automation of membership renewals and payments</p>
  </div>
    </div>
  )
}

export default Membership
