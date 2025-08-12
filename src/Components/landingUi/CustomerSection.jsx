import logo1 from "../../assets/Logo.svg"
import logo2 from "../../assets/Logo (1).svg"
import logo3 from "../../assets/Logo (2).svg"
import logo4 from "../../assets/Logo (3).svg"
import logo5 from "../../assets/Logo (4).svg"
import logo6 from "../../assets/Logo (5).svg"
import tesla from "../../assets/image 9.svg"

const CustomerSection = () => {
  return (
    <div className="bg-[#F5F7FA] py-10 px-8 max-w-6xl mx-auto rounded-md">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        
      
        <img
          src={tesla}
          alt="Tesla Logo"
          className="w-[227px] h-[227px] object-contain rounded-[6px]"
        />

        <div className="flex-1">
          <p className="text-[#717171] font-normal text-[10px]  text-sm md:text-base leading-[17px] mb-4">
            Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
            lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
            enim metus. Vivamus sed libero ornare, tristique quam in, gravida
            enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit
            at ligula molestie, nec molestie mi blandit. Suspendisse cursus
            tellus sed augue ultrices, quis tristique nulla sodales.
            Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
            potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat
            eget. Quisque vulputate odio neque, eget efficitur libero condimentum
            id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>

          <h3 className="text-[#4CAF4F] font-semibold">Tim Smith</h3>
          <p className="text-[#89939E] font-normal leading-[17px] text-sm mb-6">
            British Dragon Boat Racing Association
          </p>

        
          <div className="flex flex-wrap items-center gap-6 mb-6">
            <img src={logo1} alt="Logo1" className="h-[34px] w-[34px] rounded-[5px]" />
            <img src={logo2} alt="Logo2" className="h-[34px] w-[34px] rounded-[5px]" />
            <img src={logo3} alt="Logo3" className="h-[34px] w-[34px] rounded-[5px]" />
            <img src={logo4} alt="Logo4" className="h-[34px] w-[34px] rounded-[5px]" />
            <img src={logo5} alt="Logo5" className="h-[34px] w-[34px] rounded-[5px]" />
            <img src={logo6} alt="Logo6" className="h-[34px] w-[34px] rounded-[5px]" />
            <a
            href="#"
            className="text-[#4CAF4F] font-medium hover:underline inline-flex items-center justify-center"
          >
            Meet all customers →
          </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerSection
