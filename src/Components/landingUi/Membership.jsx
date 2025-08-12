import icon1 from "../../assets/Icon (1).png"
import icon2 from "../../assets/Icon (2).png"
import icon3 from "../../assets/Icon (3).png"

const Membership = () => {
  const items = [
    {
      id: 1,
      img: icon1,
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 2,
      img: icon2,
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
    {
      id: 3,
      img: icon3,
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto mt-6 px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-md p-5 flex flex-col items-center text-center shadow-sm"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-[45px] h-[38px] mb-3"
          />
          <h3 className="font-bold text-lg md:text-[20px] text-[#4D4D4D] leading-snug">
            {item.title}
          </h3>
          <p className="font-normal text-sm text-[#717171] mt-2 leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Membership
