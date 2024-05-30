import { useState } from 'react';
import { Link } from "react-router-dom";

const boardMembers = [
  {
    id: 1,
    name: 'Mufti Zubair Ahmad (Hafi.)',
    title: 'Principal and Founder',
    img: 'https://iom.edu.bd/wp-content/uploads/2023/05/founder1.png',
    description: `মুফতি জুবায়ের আহমদ বাংলাদেশের একজন বিখ্যাত আলেম এবং দায়ী। একাধিক বিষয়ের উপর তার প্রায় ৪২ টির মত লিখিত বই বিভিন্ন অঙ্গনে সমাদৃত হয়েছে। তার লেখা বই মক্কা ও মদীনা লাইব্রেরীতে গৃহীত হয়েছে। তিনি একাধিক মাদ্রাসার সাথে জড়িত থেকে দ্বীনের কাজ করে যাচ্ছেন। তিনি ইসলামী দাওয়া ইনস্টিউট, মান্ডা, মুগদা এর প্রিন্সিপাল। তিনি শিক্ষাগত জীবনে মেশকাত(স্নাতোক) শেষ করেছেন জামিয়া রহমানিয়া , ঢাকা থেকে। এরপর দাওরা হাদীস (মাস্টার্স) শেষ করেছেন দারুল উলুম দেওবন্দ, ইন্ডিয়া থেকে । এছাড়াও উচ্চতর অরবী সাহিত্যের উপর তিনি উচ্চতর পড়াশোনা করেন দারুল উলুম নদওয়াতুল উলামা লখনৌ, ইউপি, ইন্ডিয়া থেকে।`,
  },
  {
    id: 2,
    name: 'Engineer Khandaker Marsus',
    title: 'Chairman and Founder',
    img: 'https://iom.edu.bd/wp-content/uploads/2023/05/Profile-Photo-1.jpg',
    description: `খন্দকার মারছুছ বিএসসি ইঞ্জিনিয়ারিং শেষ করেছেন রুয়েটের ইলেকট্রিক্যাল ও ইলেকট্রনিক্স ডিপার্টমেন্ট থেকে। এরপর আইটিতে এম.এস.সি করেছেন এমআইটি(JU), থেকে। এমবিএ করেছেন ন্যাশনাল ইনস্টিটিউট অব বিজনেস ম্যানেজমেন্ট, ইন্ডিয়া থেকে। তিনি বর্তমানে ব্যবস্থাপনা পরিচালক হিসেবে আছেন, রিলায়েন্স হাই টেক লিমিটেড। তিনি আইবির মেম্বার ২০১৩ সাল থেকে: মেম্বারশিপ নং: MIEB-M/37140 তিনি আইইই এর মেম্বার। মেম্বারশিপ নং: IEEE-90613053 এছাড়াও তিনি ইন্টারন্যাশনাল ইঞ্জিনিয়ারস এসোসিয়েশন এর মেম্বার। মেম্বারশিপ নং: IAENG-169937 এছাড়া তিনি নিম্নলিখিত ডিগ্রিগুলো বিভিন্ন প্রতিষ্ঠান থেকে অর্জন করেন: পিএলসি প্রশিক্ষণ,এইচএমআই অ্যাডভান্সড কোর্স, এনএফআই অটোমেশন থেকে , নতুন দিল্লি, ইন্ডিয়া। স্কাডা এবং ডিসিএস অ্যাডভান্সড কোর্স, আইটি ও অটোমেশন অ্যাকাডেমি, পাকিস্তান । সিএনসি প্রশিক্ষণ, ন্যাশনাল অটোমেশন, পটনা, ইন্ডিয়া। মাইক্রোকন্ট্রোলারে , ইনস্টিটিউশন অব ইঞ্জিনিয়ার্স, বাংলাদেশ । নিওমেটিক এবং হাইড্রোলিক সিস্টেম, Festo আরডুইনো, এনএফআই অটোমেশন, নয়া দিল্লি, ইন্ডিয়া। এবিবি ডিসিএস, ABB সিস্কো সার্টিফাইড নেটওয়ার্ক এসোসিয়েটস , CISCO মাইক্রোটিক সার্টিফাইড নেটওয়ার্ক সহযোগী (এমটিসিএনএ), বিজয় অনলাইন । ব্রডব্যান্ড কমিউনিকেশন ও নেটওয়ার্কিং প্রশিক্ষণ, Windmill অভিজ্ঞতা: সিনিয়র অটোমেশন ইঞ্জিনিয়ার, হাই টেক বাংলা (বাংলাদেশ) লিমিটেড, বাংলাদেশ (মার্কিন যুক্তরাষ্ট্র ভিত্তিক সংস্থা) অটোমেশন প্রশিক্ষক, আইইবি (ইনস্টিটিউট ইঞ্জিনিয়ার্স বাংলাদেশ), রাজশাহী চীফ টেকনিক্যাল অফিসার, ওয়েব ডেভেলপার ফেজর আইটি লিমিটেড, ঢাকা। এছাড়া তিনি ধর্মীয় লাইনে পড়াশোনা করেন নৈশ বিভাগ, দারুর রাশাদ মাদ্রাসা, মিরপুর-১২।`,
  },
];

const BoardMember = () => {
  const [expanded, setExpanded] = useState({});

  const toggleReadMore = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const truncateText = (text, limit) => {
    if (text.length <= limit) {
      return text;
    }
    return text.substring(0, limit) + '...';
  };

  return (
    <div className="bg-gray-200 p-12 mt-12">
      <p className="text-justify text-lg">
        মসজীদে নববীতে ১লা মহররম ১৪৪০(১১-সেপ্টেম্বর-২০১৮) উদ্বোধন হয়। যদিও এই
        ওয়েবসাইটটি তৈরী করা হয়: ১৭-অক্টোবর-২০১৭।
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
        {boardMembers.map((member) => (
          <div key={member.id} className="border border-gray-300 bg-white rounded-xl flex flex-col items-center p-2">
            <img src={member.img} alt={member.name} className="h-[200px] w-[200px] object-contain mt-4" />
            <h2 className="mt-4 text-black text-lg font-bold">{member.name}</h2>
            <span className="text-center text-black">{member.title}</span>
            <p className="text-center text-black">
              {expanded[member.id] ? member.description : truncateText(member.description, 250)}
            </p>
            <button
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-sm mt-4 text-white bg-slate-800"
              onClick={() => toggleReadMore(member.id)}
            >
              {expanded[member.id] ? 'Show Less' : 'Read More'}
            </button>
          </div>
        ))}
      </div>
      <div className="bg-gray-300 mt-4 text-2xl py-8 p-4 text-center">
        <p>
          If you have any comments or suggestions about IOM, please let us know.
          We will consider your suggestion seriously.{" "}
        </p>
        <Link>
          <button className="bg-cyan-950 text-white px-8 py-3 mt-4 rounded-xl">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BoardMember;
