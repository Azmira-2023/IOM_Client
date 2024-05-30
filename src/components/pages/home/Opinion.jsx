const opinions = [
  {
    name: "Allama Mamunul Haque (Hafi).",
    description:
      "আল্লামা মামুনুল হক (হাফি.) আইওএম (IOM) এর স্টুডিওতে এসে বক্তব্য রেখেছেন।",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/mamunulhaque.jpg",
    position: "সিনিয়র মুহাদ্দিস, মুহাম্মদপুরের জামিয়া রাহমানিয়া",
    speech: "Listen Speech",
  },
  {
    name: "শায়খ আহমাদুল্লাহ",
    description: "শায়খ আহমাদুল্লাহ আইওএম (IOM) এর স্টুডিওতে বক্তব্য রেখেছেন। ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/ahmadullah.jpeg",
    position: "চেয়ারম্যান, আসসুন্নাহ ফাউন্ডেশন",
    speech: "Listen Speech",
  },
  {
    name: "Mufti Dr. Arif Mahmud ",
    description: " -",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/teacherimg.png",
    position: "চেয়ারম্যান, আসসুন্নাহ ফাউন্ডেশন",
    speech: "Listen Speech",
  },
  {
    name: "Dr. Khalid Hossain",
    description: "-",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/teacherimg.png",
    position: "",
    speech: "Listen Speech",
  },
  {
    name: "মাওলানা আবরারুজ্জামান ",
    description:
      " মাওলানা আবরারুজ্জামান আইওএম (IOM) এর স্টুডিওতে এসে বক্তব্য রেখেছেন। ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/teacherimg.png",
    position: "হাফেজ্জী হুজুরের নাতী ",
    speech: "Listen Speech",
  },
  {
    name: "Mawlana Hasan Zamil (Hafi.) ",
    description: " -",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/hasanjamil.jpeg",
    position: "",
    speech: "Listen Speech",
  },
];

const Opinion = () => {
  return (
    <div className="bg-white mt-12 p-8 mx-auto max-w-6xl">
      <h1 className="text-center uppercase text-4xl font-bold">
        <span className="text-red-700 text-4xl font-bold">T</span>
        he opinion of the scholars
      </h1>
      <p className="text-4xl text-center">Opinions of Islamic Scholars</p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
        {opinions.map((opinion, index) => (
          <div
            key={index}
            className="border bg-white rounded-xl flex flex-col items-center p-2"
          >
            <img
              src={opinion.image}
              alt={opinion.name}
              className="h-[200px] w-[200px] object-contain"
            />
            <p className="text-center mt-4 text-black">{opinion.description}</p>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-sm mt-4 text-white bg-slate-800">
              {opinion.speech}
            </button>
            <h2 className="mt-4 text-black text-lg">{opinion.name}</h2>
            <span className="text-center text-black">{opinion.position}</span>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="px-16 btn glass bg-teal-900 text-xl font-bold text-white">
          See More
        </button>
      </div>
    </div>
  );
};

export default Opinion;
