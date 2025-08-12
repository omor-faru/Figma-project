import frame from "../../assets/Frame35.png"

const Interaction = () => {
  return (
    <div className="mt-6 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        
      
        <div className="flex justify-center">
          <img 
            src={frame} 
            alt="frame" 
            className="w-64 h-auto md:w-[308px] md:h-[302px]" 
          />
        </div>

       
        <div className="max-w-lg text-center md:text-left">
          <h1 className="font-semibold text-2xl md:text-[25px] leading-snug text-[#4D4D4D]">
            The unseen of spending three years at Pixelgrade
          </h1>

          <p className="font-normal text-sm md:text-[10px] leading-relaxed text-[#717171] mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. 
            Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum 
            lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium 
            auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum 
            pulvinar odio.
          </p>

          <button className="mt-4 bg-[#4CAF4F] text-white px-4 py-2 rounded text-sm font-medium">
            Learn More
          </button>
        </div>

      </div>
    </div>
  )
}

export default Interaction
