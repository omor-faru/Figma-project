import img1 from "../../assets/image 18.svg"
import img2 from "../../assets/image 19.svg"
import img3 from "../../assets/image 20.svg"

const BlogSection = () => {
  return (
    <div className="bg-white py-12 px-6 max-w-6xl mx-auto text-center">
      
     
      <h2 className="text-[25px] font-semibold text-[#4D4D4D] mb-2">
        Caring is the new marketing
      </h2>
      <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-[11px] font-normal w-[437px] h-[51px] ">
        The Nextcent blog is the best place to read about the latest membership insights,
        trends and more. See who's joining the community, read about how our community
        are increasing their membership income and lot's more.
      </p>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
       
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={img1} alt="Blog 1" className="w-full h-64 object-cover" />
          <div className="bg-[#F5F7FA] p-5">
            <h3 className="text-[#4D4D4D] font-medium mb-3">
              Creating Streamlined Safeguarding Processes with OneRen
            </h3>
            <a
              href="#"
              className="text-[#4CAF4F] font-medium flex items-center gap-2"
            >
              Readmore →
            </a>
          </div>
        </div>

        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={img2} alt="Blog 2" className="w-full h-64 object-cover" />
          <div className="bg-[#F5F7FA] p-5">
            <h3 className="text-[#4D4D4D] font-medium mb-3">
              What are your safeguarding responsibilities and how can you manage them?
            </h3>
            <a
              href="#"
              className="text-[#4CAF4F] font-medium flex items-center gap-2"
            >
              Readmore →
            </a>
          </div>
        </div>

       
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src={img3} alt="Blog 3" className="w-full h-64 object-cover" />
          <div className="bg-[#F5F7FA] p-5">
            <h3 className="text-[#4D4D4D] font-medium mb-3">
              Revamping the Membership Model with Triathlon Australia
            </h3>
            <a
              href="#"
              className="text-[#4CAF4F] font-medium flex items-center gap-2"
            >
              Readmore →
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogSection

