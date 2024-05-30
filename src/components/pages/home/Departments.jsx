import { Link } from "react-router-dom";

const departments = [
  {
    name: "Tajweed",
    description: "Tajweed Course",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/tajweed",
    details: "কোর্সটিতে মাখরাজ অনুযায়ী আরবি হরফ উচ্চারণ থেকে শুরু করে তিলাওয়াতের জন্য প্রয়োজনীয় নিয়ম-কানুন মশকের মাধ্যমে শিখানো হয়। মাদ, গুন্নাহ, ওয়াক্বফ, সিফাত সহ যাবতীয় বিধিবিধান গুরুত্ব সহকারে পড়ানো হয়ে থাকে। সালাতে প্রয়োজনীয় দু'আ, সূরা ও কিছু আমলি সূরাও হিফয করানো হয়। তাই কোর্সটির মাধ্যমে কুরআনুল কারিম সম্পূর্ণ শুদ্ধভাবে তিলাওয়াত করতে পারবেন ইনশা-আল্লাহ।",
  },
  // Add more department objects here for a total of 14 objects (7 columns x 2 rows)
  {
    name: "Quran Translation ",
    description: "Quran Translation",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/quran translation",
    details: "এই কোর্সের মাধ্যমে কুরআনের যেকোনো আয়াতের অর্থ, তাৎপর্য বুঝার সক্ষমা অর্জন হয়। একই সাথে নবিদের উল্লেখ্যযোগ্য ঘটনাসমূহ এবং জীবন বিধান হিসেবে কুরআন মাজীদ থেকে শিক্ষণীয় বিষয়সমূহও জানা যাবে ইনশা-আল্লাহ। ",
  },
  {
    name: "হাদিস এবং সুন্নাহ ",
    description: "Hadeeth and Sunnah",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/হাদিস এবং সুন্নাহ",
    details: "কোর্সটিতে আছে উসুলে হাদিস অর্থাৎ হাদিসের মূলনীতি ও পরিভাষা। বিষয়ভিত্তিক সহিহ হাদিসের উপর আলোচনা করা হয় এবং বিভিন্ন হাদিসের অনুবাদ শিখানো হয়। এছাড়াও, আমাদের জীবনের সাথে ঘনিষ্ঠতর ইবাদাহ-আচার-আখলাক সংক্রান্ত সুন্নাহ নিয়ে বিস্তারিত আলোচনা আছে।",
  },
  {
    name: "Seerah",
    description: "Seerah",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/seerah",
    details: "কোর্সটিতে নবিজি সা. এর মাক্কী এবং মাদানী জীবন সম্পর্কে বিস্তারিত আলোচনা করা হয়। নবি জীবনের প্রতিটি ঘটনার সাথে বর্তমান সময়ের প্রাসঙ্গিকতা এবং একজন মুমিনের এ থেকে গ্রহণীয় দিক-নির্দেশনা সম্পর্কেও আলোচনা করা হয়। ",
  },
  {
    name: "রিসার্চ এবং মাসায়েল ",
    description: "Research and Masayel",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/hadith",
    details: "এই কোর্সটিতে শিক্ষার্থীগণ দৈনন্দিন প্রয়োজনীয় বিভিন্ন বিষয়ে ফতোয়া এবং মাসায়েল বিষয়ক গবেষণা কিভাবে করতে হয় তা জানতে পারেন। পাশাপাশি কেইস স্টাডির মত জীবনঘনিষ্ঠ প্রায়োগিক মাসায়েল সম্পর্কেও পড়ানো হয়। ",
  },
  {
    name: "Fiqh",
    description: "Fiqh ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/fiqh",
    details: "দৈনন্দিন জীবনের প্রয়োজনীয় মাস'আলা-মাসায়েল অর্থাৎ ফরজ ইবাদাতের আহকামসমূহ, মহিলাদের বিভিন্ন সময়ের মাসায়েল, ব্যবসা-বাণিজ্য এবং বিবাহ সংক্রান্ত মাসাইলসহ বিভিন্ন গুরুত্বপূর্ণ মাসায়েল সম্পর্কে আলোচনা করা হবে। পাশাপাশি থাকছে মডার্ন ফিক্বহ যেমন: শেয়ার ব্যবসা, টেস্টটিউব বেবি, জন্মনিয়ন্ত্রণ ইত্যাদি সংক্রান্ত আহকাম। ",
  },
  {
    name: "Dawah ",
    description: "Dawah ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/quran",
    details: "উম্মাতে মুহাম্মাদীর জিম্মাদারি পালন করতে ভিন্ন ধর্মাবলম্বীদেরকে ইসলামের দাওয়াহ দেওয়ার নিয়্যাতে তুলনামূলক ধর্মতত্ত্ব পড়ানো হয়। একই সাথে দাওয়াহ দেওয়ার গুরুত্ব, হুকুম, দাওয়াতের কর্মপদ্ধতি এবং দ্বা'ঈ-র গুণাবলী আলোচিত হয়। ",
  },
  {
    name: "Aqidah",
    description: "আক্বিদাহ ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/tafseer",
    details: "কোর্সটিতে ইসলামের মৌলিক সাতটি বিশ্বাস থেকে শুরু করে ইসলামী আক্বিদার বিষয়বস্তু ও গুরুত্ব শিখানো হয়। তাওহীদ-শিরক এবং ঈমান-কুফরের পার্থক্য সম্পর্কে আলোচনা করা হয়।",
  },
  {
    name: "Arabic Language ",
    description: "আরবি ভাষা কোর্স ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/arabic",
    details: "কোর্সটিতে আরবি শব্দার্থ থেকে শুরু করে প্রয়োজনীয় নিয়মকানুন তামরিনের মাধ্যমে শিখানো হয়। এছাড়া, বিভিন্ন বাবের বিভিন্ন মাছদার মুখস্থ করানো এবং বিভিন্ন ফেয়েলের ব্যবহার শিখানো হয়। তাই লিখিত পরীক্ষা শেষে একজন শিক্ষার্থী আরবি কিতাব পড়তে এবং আরবিতে কথা বলতে পারবেন ইনশা-আল্লাহ। ",
  },
  {
    name: "Islamic History ",
    description: "আরবী ব্যাকরণ শিক্ষা",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/islamic",
    details: "কোর্সটিতে সরফ, নাহুসহ আরবী ব্যাকরণ শিক্ষা দেওয়া হয়। ",
  },
  {
    name: "Adabu Talibul IIm",
    description: "Islamic History ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/usul-al-fiqh",
    details: "এই কোর্সটিতে খুলাফায়ে রাশিদীন থেকে শুরু করে উমাইয়্যা, উসমানীয় খিলাফাত ও সমসাময়িক আলোচনা করা হয় ইনশা-আল্লাহ। ",
  },
  {
   
    name: " দু'আ ও সুন্নাহ",
    description: " Dua & Sunnah",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/tazkiyah",
    details: "দ্বীনি ইলম অর্জনের পথে একজন শিক্ষার্থীর জীবন কেমন হবে, জীবনের প্রতিটি অঙ্গনে অন্যদের সাথে তার আচার-আচরণ-আখলাক কেমন হবে, এজাতীয় বিষয়াদি এই কোর্সে শিখানো হয়। একজন ত্বলিবুল ইলম তার আদবের মাধ্যমে জীবনের বিভিন্ন অধ্যায়ে কীভাবে আল্লাহ তা'য়ালার রহমত, মুহাব্বাত ও সন্তুষ্টি অর্জন করতে পারেন, সে বিষয়গুলো বিস্তারিত আলোচিত হয়। ",
  },
  {
    name: "Urdu Language ",
    description: "Urdu Language ",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/law",
    details: "ইসলামের উচ্চতর কিতাবসমূহ অধ্যয়ন করতে আরবি ভাষার পাশাপাশি উর্দু ভাষাও গুরুত্বপূর্ণ। তাই কোর্সটি এমনভাবে সাজানো হয়েছে যেন একজন শিক্ষার্থী কোর্স শেষে উর্দু ভাষা পড়তে এবং বুঝতে সক্ষম হোন। ",
  },
  {
    name: "হিফজুল কুরআন ",
    description: "Hifzul Quran",
    image: "https://iom.edu.bd/wp-content/uploads/2023/05/rub-el-hizb.svg",
    link: "/dawah",
    details: "এই কোর্সে আমপারার ৩৭ টি সূরা (সূরা নাবা থেকে সূরা নাস) হিফয করানো হবে। সেই সাথে ৩ টি আমলী সূরা- সূরা ইয়াসীন, সূরা ওয়াক্বিয়াহ এবং সূরা মূলক হিফয করানো হয়। ",
  },
];

const Departments = () => {
  return (
    <div className="p-6 mt-4">
      <h1 className="text-center uppercase text-4xl font-bold">
        <span className="text-red-700 text-4xl font-bold">D</span>
        partments
      </h1>
      <p className="text-2xl text-center">
        Click on Department Name to Know More
      </p>
      <div className="grid grid-cols-7 gap-4 mt-2 p-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 ">
        {departments.map((dept, index) => (
          <div key={index} className="bg-white flex flex-col justify-between pb-8 rounded-xl">
            <Link to={dept.link}>
              <img
                src={dept.image}
                alt={dept.name}
                className="flex justify-center items-center  object-cover"
              />
              <h2 className="font-bold text-lg text-center">{dept.name}</h2>
              <p className="text-sm text-center">{dept.description}</p>
            </Link>
            <button
              className="btn"
              onClick={() => document.getElementById(`modal_${index}`).showModal()}
            >
              See Details
            </button>
            <dialog id={`modal_${index}`} className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg">{dept.description}</h3>
                <p className="py-4">{dept.details}</p>
                <div className="modal-action">
                  <form method="dialog mt-2">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Departments;
