import { useState } from "react";

const TeachersPanel = () => {
  // Array of teacher objects
  const [teachers, setTeachers] = useState([
    {
      name: "Mufti Zubair Ahmad (Hafi.)",
      position: "Principal and Founder",
      description: `মুফতি জুবায়ের আহমদ বাংলাদেশের একজন বিখ্যাত আলেম এবং দায়ী। একাধিক বিষয়ের উপর তার প্রায় ৪২ টির মত লিখিত বই বিভিন্ন অঙ্গনে সমাদৃত হয়েছে। তার লেখা বই মক্কা ও মদীনা লাইব্রেরীতে গৃহীত হয়েছে। তিনি একাধিক মাদ্রাসার সাথে জড়িত থেকে দ্বীনের কাজ করে যাচ্ছেন। তিনি ইসলামী দাওয়া ইনস্টিউট, মান্ডা, মুগদা এর প্রিন্সিপাল। তিনি শিক্ষাগত জীবনে মেশকাত(স্নাতোক) শেষ করেছেন জামিয়া রহমানিয়া , ঢাকা থেকে। এরপর দাওরা হাদীস (মাস্টার্স) শেষ করেছেন দারুল উলুম দেওবন্দ, ইন্ডিয়া থেকে । এছাড়াও উচ্চতর অরবী সাহিত্যের উপর তিনি উচ্চতর পড়াশোনা করেন দারুল উলুম নদওয়াতুল উলামা লখনৌ, ইউপি, ইন্ডিয়া থেকে।`,
      showFullDescription: false,
      imageUrl: "https://iom.edu.bd/wp-content/uploads/2023/05/founder1.png",
    },

    {
      name: "Engineer Khandaker Marsus ",
      position: "Chairman and Founder ",
      description: `খন্দকার মারছুছ বিএসসি ইঞ্জিনিয়ারিং শেষ করেছেন রুয়েটের ইলেকট্রিক্যাল ও ইলেকট্রনিক্স ডিপার্টমেন্ট থেকে। এরপর আইটিতে এম.এস.সি করেছেন এমআইটি(JU), থেকে। এমবিএ করেছেন ন্যাশনাল ইনস্টিটিউট অব বিজনেস ম্যানেজমেন্ট, ইন্ডিয়া থেকে। তিনি বর্তমানে ব্যবস্থাপনা পরিচালক হিসেবে আছেন, রিলায়েন্স হাই টেক লিমিটেড। তিনি আইবির মেম্বার ২০১৩ সাল থেকে: মেম্বারশিপ নং: MIEB-M/37140 তিনি আইইই এর মেম্বার। মেম্বারশিপ নং: IEEE-90613053 এছাড়াও তিনি ইন্টারন্যাশনাল ইঞ্জিনিয়ারস এসোসিয়েশন এর মেম্বার। মেম্বারশিপ নং: IAENG-169937 এছাড়া তিনি নিম্নলিখিত ডিগ্রিগুলো বিভিন্ন প্রতিষ্ঠান থেকে অর্জন করেন: পিএলসি প্রশিক্ষণ,এইচএমআই অ্যাডভান্সড কোর্স, এনএফআই অটোমেশন থেকে , নতুন দিল্লি, ইন্ডিয়া। স্কাডা এবং ডিসিএস অ্যাডভান্সড কোর্স, আইটি ও অটোমেশন অ্যাকাডেমি, পাকিস্তান । সিএনসি প্রশিক্ষণ, ন্যাশনাল অটোমেশন, পটনা, ইন্ডিয়া। মাইক্রোকন্ট্রোলারে , ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ । নিওমেটিক এবং হাইড্রোলিক সিস্টেম, Festo আরডুইনো, এনএফআই অটোমেশন, নয়া দিল্লি, ইন্ডিয়া। এবিবি ডিসিএস, ABB সিস্কো সার্টিফাইড নেটওয়ার্ক এসোসিয়েটস , CISCO মাইক্রোটিক সার্টিফাইড নেটওয়ার্ক সহযোগী (এমটিসিএনএ), বিজয় অনলাইন । ব্রডব্যান্ড কমিউনিকেশন ও নেটওয়ার্কিং প্রশিক্ষণ, Windmill অভিজ্ঞতা: সিনিয়র অটোমেশন ইঞ্জিনিয়ার, হাই টেক বাংলা (বাংলাদেশ) লিমিটেড, বাংলাদেশ (মার্কিন যুক্তরাষ্ট্র ভিত্তিক সংস্থা) অটোমেশন প্রশিক্ষক, আইইবি (ইনস্টিটিউট ইঞ্জিনিয়ার্স বাংলাদেশ), রাজশাহী চীফ টেকনিক্যাল অফিসার, ওয়েব ডেভেলপার ফেজর আইটি লিমিটেড, ঢাকা। এছাড়া তিনি ধর্মীয় লাইনে পড়াশোনা করেন নৈশ বিভাগ, দারুর রাশাদ মাদ্রাসা, মিরপুর-১২।`,
      showFullDescription: false,
      imageUrl:
        "https://iom.edu.bd/wp-content/uploads/2023/05/Profile-Photo-1.jpg",
    },
    {
      name: "Mufti Mujibul Islam Mujib ",
      position: "Teacher, Aqidah and Fiqh Department ",
      description: `
  
          দাওরায়ে হাদিস সম্পন্ন করেন জামিয়া আরাবিয়া নিউটাউন মাদরাসা, দিনাজপুর থেকে।
          
          ইফতা সম্পন্ন করেন জামিয়া মাদানিয়া বরিধারা, গুলশান, ঢাকা থেকে।
          
          তাখাস্সুস ফিদ্দাওয়াহ সম্পন্ন করেন ইসলামী দাওয়াহ ইন্সটিউট, মান্ডা,  ‍মুগদা, ঢাকা থেকে।
          
          যোগাযোগের জন্য আমাদের হটলাইন 09638113322 নাম্বারে কল দিয়ে এক্সটেনশন টাইপ করুন 1014
          `,
      showFullDescription: false,
      imageUrl: "https://iom.edu.bd/wp-content/uploads/2023/05/Mujib-min.jpg",
    },
    {
      name: "Maulana Mizanur Rahman ",
      position: "Lecturer, Department of Fiqh ",
      description: `মুহা. মিজানুর রহমান একজন প্রসিদ্ধ আলেম। বর্তমানে তিনি হাদিস বিষয়ক শিক্ষক হিসেবে কর্মরত আছেন মারকাজুল উলূিম আল-ইসলামিয়া, মান্ডা, মুগদাতে। দাওরা  হাদীস এর উপর তিনি মাস্টার্স  সম্পন্ন করেছেন ভৈরব  কমলপুর  মাদরাসা, কিশোরগঞ্জ থেকে।যোগাযোগের জন্য আমাদের হটলাইন 09638113322 নাম্বারে কল দিয়ে এক্সটেনশন টাইপ করুন 1025 `,
      showFullDescription: false,
      imageUrl: "https://iom.edu.bd/wp-content/uploads/2023/05/mijanur-min.jpg",
    },
  ]);

  // Function to toggle show full description
  const toggleDescription = (index) => {
    const updatedTeachers = [...teachers];
    updatedTeachers[index].showFullDescription =
      !updatedTeachers[index].showFullDescription;
    setTeachers(updatedTeachers);
  };

  return (
    <div className="mt-4">
      <div className="bg-indigo-200 p-4 ">
        <h1 className="text-6xl text-center font-bold">Teachers Panel</h1>
        <p className="text-4xl text-center">Founder, Staff and Faculty</p>
      </div>

      <div className="grid grid-cols-3 p-8 gap-6">
        {teachers.map((teacher, index) => (
          <div
            key={index}
            className="border border-gray-300 bg-white rounded-xl flex flex-col items-center p-4"
          >
            <img src={teacher.imageUrl} alt="" className="h-[200px]" />
            <p className="text-xl font-bold ">{teacher.name}</p>
            <span className="text-blue-700 text-lg">{teacher.position}</span>
            {/* Displaying description based on showFullDescription */}
            <p>
              {teacher.showFullDescription
                ? teacher.description
                : teacher.description.slice(0, 160)}
            </p>
            {/* Toggle button */}
            <button
              className="py-2 px-4 rounded-xl bg-cyan-900 text-white"
              onClick={() => toggleDescription(index)}
            >
              {teacher.showFullDescription ? "Read Less" : "Read More"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeachersPanel;
