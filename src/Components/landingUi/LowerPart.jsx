const LowerPart = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10 px-4 bg-[#F5F7FA]">
      <div className="text-center max-w-2xl">
        <h1 className="font-semibold text-3xl sm:text-4xl md:text-[45px] leading-snug md:leading-[53px] text-[#263238]">
          Pellentesque suscipit
        </h1>
        <span className="font-semibold text-3xl sm:text-4xl md:text-[45px] leading-snug md:leading-[53px] text-[#263238] block">
          fringilla libero eu.
        </span>
      </div>

    
      <button className="bg-[#4CAF4F] text-white font-medium text-sm sm:text-[14px] px-5 sm:px-6 py-2.5 sm:py-3 rounded-[5px] hover:bg-[#43a047] transition-colors flex items-center gap-2">
        Get a Demo
        <span className="text-lg">→</span>
      </button>
    </div>
  )
}

export default LowerPart
