import icon1 from "../../assets/Icon.svg"
import icon4 from "../../assets/Icon (4).png"
import icon5 from "../../assets/Icon (5).png"
import icon6 from "../../assets/Icon (6).png"

const Achievment = () => {
  return (
    <div className="bg-[#F5F7FA] py-10 px-4 md:px-20 lg:px-40 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto gap-8">
        
        
        <div className="max-w-md text-center md:text-left">
          <h2 className="text-2xl md:text-[25px] font-bold text-[#4D4D4D] leading-snug">
            Helping a local
          </h2>
          <h2 className="text-2xl md:text-[25px] font-semibold text-[#4CAF4F] leading-snug">
            business reinvent itself
          </h2>
          <p className="text-sm md:text-[12px] text-[#18191F] mt-2">
            We reached here with our hard work and dedication
          </p>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
          <div className="flex items-center gap-3">
            <img src={icon1} alt="Members" className="w-8 h-8" />
            <div>
              <p className="text-lg md:text-[19px] font-bold text-[#4D4D4D]">2,245,341</p>
              <p className="text-xs md:text-[11px] text-[#717171]">Members</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={icon4} alt="Clubs" className="w-8 h-8" />
            <div>
              <p className="text-lg md:text-[19px] font-bold text-[#4D4D4D]">46,328</p>
              <p className="text-xs md:text-[11px] text-[#717171]">Clubs</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={icon5} alt="Event Bookings" className="w-8 h-8" />
            <div>
              <p className="text-lg md:text-[19px] font-bold text-[#4D4D4D]">828,867</p>
              <p className="text-xs md:text-[11px] text-[#717171]">Event Bookings</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <img src={icon6} alt="Payments" className="w-8 h-8" />
            <div>
              <p className="text-lg md:text-[19px] font-bold text-[#4D4D4D]">1,926,436</p>
              <p className="text-xs md:text-[11px] text-[#717171]">Payments</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Achievment
