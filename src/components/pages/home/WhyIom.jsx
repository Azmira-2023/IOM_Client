

const WhyIom = () => {
  const cardData = [
    {
      imgSrc: "https://iom.edu.bd/wp-content/uploads/2023/06/guarantee.svg",
      imgAlt: "",
      title: "Recognized by the Board",
      description:
        "Hathajari Qoumi Board recognized and ISO certified international quality educational institution and the largest online Madrasah in the Asian continent.",
    },
    {
      imgSrc: "https://iom.edu.bd/wp-content/uploads/2023/05/salat.svg",
      imgAlt: "",
      title: "92+ Instructor",
      description:
        "Classes are conducted through 92+ Ustaz / Ustaz. Also, renowned Ulamae Keram from home and abroad take classes at IOM Studio.",
    },
    {
      imgSrc: "https://iom.edu.bd/wp-content/uploads/2023/06/instagram-live.svg",
      imgAlt: "",
      title: "Live Class",
      description:
        "Each class is taken live via Zoom app at a time convenient for students. Marks are given on attendance in live class participation.",
    },
    {
      imgSrc: "https://iom.edu.bd/wp-content/uploads/2023/06/video-marketing.svg",
      imgAlt: "",
      title: "The class are recorded",
      description:
        "A recording of each live session is also provided for later viewing in case the live class is missed. Students can view recorded classes at any time.",
    },
    {
      imgSrc: "https://iom.edu.bd/wp-content/uploads/2023/06/group-chat.svg",
      imgAlt: "",
      title: "Mosq Class",
      description:
        "Takres and recitations are done in small groups to correct tajveed or recitation of the Qur'an.",
    },
    {
      imgSrc: "https://iom.edu.bd/wp-content/uploads/2023/06/week.svg",
      imgAlt: "",
      title: "Weekly Talim",
      description:
        "For brothers and sisters separately every week there is provision of training through zoom app on latest subjects including religious knowledge.",
    },
    {
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMXVPz1J5WxOVoSK-4VMQ51zsiwxVfKY24ug&s",
      imgAlt: "",
      title: "IOM AICU",
      description:
        "The Academic Intensive Care Unit system is primarily designed to provide extra care to frail patients in Tajweed.",
    },
    {
      imgSrc: "https://iom.edu.bd/wp-content/uploads/2023/06/certificate.svg",
      imgAlt: "",
      title: "Certificate",
      description:
        "Free or paid, all our courses provide participants with a certificate at the end of the course.",
    },
  ];

  return (
    <div className="p-8 mt-4">
      <h1 className="text-center text-6xl font-bold uppercase ">
        <span className="text-red-700">W</span>
        HY IOM?
      </h1>
      <p className="font-bold text-6xl text-center">-</p>
      <div className="text-center">
        <p className="text-xl">
          Hathajari Qoumi Board recognized and ISO certified international
          quality educational institution and the largest online Madrasah in the
          Asian continent. As-Sunnah Foundation Nabin Entrepreneur Award-2021
          received the award after being among the top 10 out of 3000
          organizations
        </p>
      </div>

      <div className="grid grid-cols-4 gap-4 mt-6">
        {cardData.map((card, index) => (
          <div key={index} className="pb-8 border bg-white hover:shadow-2xl rounded-xl duration-500 hover:bg-teal-900 flex flex-col justify-between">
            <div>
              <div className="flex justify-center items-center">
                <img
                  src={card.imgSrc}
                  alt={card.imgAlt}
                  className="h-[200px] w-[200px] object-contain mt-4"
                />
              </div>
              <h2 className="font-bold text-2xl text-teal-900 text-center">
                {card.title}
              </h2>
              <div className="mt-2">
                <p className="text-center">{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyIom;
