import image1 from "../assets/pana.svg"

const UnlockUi = () => {
  return (
      
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-10 lg:px-[100px] my-10 opacity-100 ]">
      <div className="pr-1">
        <img src={image1} alt="image" className="w-[307px] sm:w-[300px] md:w-[307px] h-auto opacity-100" />

      </div>
      <div className="max-w-lg text-center md:text-left ">
        <h3 className="w-[419px] h-[62px] opacity-100 rotate-0">
          <span className="font-semibold text-[25px] leading-[30px] tracking-normal text-[#4D4D4D] mt-3">
            How to design your site footer like we did
          </span>
        </h3>

        <p className="font-normal text-[10px] leading-[14px] tracking-normal text-[#717171] mt-3">
          Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
        </p>

        <button className="mt-5 w-[106px] h-[37px] bg-[#4CAF4F] font-medium text-[11px] leading-[17px] text-white">Learn More</button>

      </div>

    </div>
    )
  }
  

export default UnlockUi

