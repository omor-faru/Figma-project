import logo1 from "../../assets/Logo.png"
import logo2 from "../../assets/Logo (2).png"
import logo3 from "../../assets/Logo (3).png"
import logo4 from "../../assets/Logo (4).png"
import logo5 from "../../assets/Logo (5).png"
import logo6 from "../../assets/Logo (6).png"
import logo7 from "../../assets/Logo (7).png"
const Clients = () => {
  const clientsLogo = [
    {
      id: 1,
      img: logo1
    },
    {
      id: 2,
      img: logo2
    },
    {
      id: 3,
      img: logo3
    },
    {
      id: 4,
      img: logo4
    },
    {
      id: 5,
      img: logo5
    },
    {
      id: 6,
      img: logo6
    },
    {
      id: 7,
      img: logo7
    },
  ]
  return (
    <div className="max-w-7xl mx-auto py-[32px]">
      <h1 className="text-center text-[#4D4D4D] font-semibold text-[25px]">Our Clients</h1>
      <p className="text-center text-[#717171] font-normal text-[16px]">We have een working with some Fortune 500+ Clients</p>
        <div className="flex justify-between items-center py-10 ">
          {
            clientsLogo.map(item=><img key={item.id} src={item.img} className="w-[34px] h-[34px]"  alt="Client logo"/>)
          }
        </div>
    </div>
  )
}

export default Clients
