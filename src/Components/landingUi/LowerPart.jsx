const LowerPart = () => {
  return (
    <div className="flex flex-col items-center justify-center relative gap-[22px] py-10 bg-[#F5F7FA]">
      {/* Heading */}
      <div className="text-center">
        <h1 className="font-semibold w-[617px] text-[45px] leading-[53px] text-[#263238]">
          Pellentesque suscipit
        </h1>
        <span className="font-semibold w-[617px] text-[45px] leading-[53px] text-[#263238]">
          fringilla libero eu.
        </span>
      </div>

    
      <button className="bg-[#4CAF4F] gap-2 text-white font-medium text-[14px] px-6 py-3 rounded-[5px] hover:bg-[#43a047] transition-colors flex items-center">
        Get a Demo
        <span className="text-lg  ">→</span>
      </button>
    </div>
  );
};

export default LowerPart
