import frame from "../../assets/Frame35.png"

const Interaction = () => {
  return (
    <div className="mt-3 gap-4 pr-[100px] ">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-6">
        <div>
       <img src={frame} alt="frame" className="w-[308px] h-[302px]" />
      </div>
      <div className="w-[460px] h-[187px] gap-[23px] ">
        <div className="w-[419px] h-[62px] font-semibold text-[25px] leading-[31px] text-[#4D4D4D] tracking-normal ">
          <div>
          <h1 className="flex items-center justify-between text-[25px] ">The unseen of spending three years at Pixelgrade</h1>
           <p className="font-normal text-[10px] leading-[14px] py-2 text-[#717171]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
           </p>
           <div className="w-[106px] h-[37px] opacity-100 pt-[10px] pr-[10px] gap-[7px] bg-[#4CAF4F]">
            <button className="font-medium text-[12px] text-[#FFFFFF] leading-[17px] items-center flex rounded ml-4  ">
              Learn More
            </button>

           </div>
           </div>
        </div>

      </div>
</div>
    </div>
  )
}

export default Interaction
