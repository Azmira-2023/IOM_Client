import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const OurAims = () => {
  return (
    <div className="bg-gray-100 mt-6 p-12">
      <p className="text-xl text-justify">
        আইওএম(IOM) বাংলা ভাষায় ইসলামী শিক্ষা ও জ্ঞান অর্জনের একটি উন্মুক্ত
        ই-লার্নিং প্লাটফর্ম। মসজীদে নববীতে ১লা মহররম ১৪৪০(১১-সেপ্টেম্বর-২০১৮)
        উদ্বোধন হয় । যদিও এই ওয়েবসাইটটি তৈরী করা হয়: ১৭-অক্টোবর-২০১৭। মসজীদে
        নববীতে ১লা মহররম ১৪৪০(১১-সেপ্টেম্বর-২০১৮) উদ্বোধন হয় । ইসলামিক অনলাইন
        মাদ্রাসার লক্ষ্য ও উদ্দেশ্যগুলোর মধ্য রয়েছে:-
      </p>
      <div className="mt-4 flex items-center">
        <FaArrowCircleRight className="text-4xl font-bold mr-4" />
        <p className="bg-lime-700 text-white gap-4 p-2 ">
          সকল বয়সী মুসলিমদের জন্য শিক্ষা হাতের নাগালে পৌঁছে দেওয়া।
        </p>
      </div>
      <div className="flex mt-2">
        <FaArrowCircleRight className="text-4xl font-bold mr-4" />
        <p className="bg-lime-700 text-white gap-4 p-2">
          প্রতিটি পরিবারের কুরআন ও সুন্নাহকে পুন:রজ্জিবীত করা।
        </p>
      </div>
      <div className="flex mt-2">
        <FaArrowCircleRight className="text-4xl font-bold mr-4" />
        <p className="bg-lime-700 text-white gap-4 p-2">
          দিকে দিকে ইসলামকে ছড়িয়ে দিতে দাঈ গড়ে তোলা
        </p>
      </div>
      <div className="bg-gray-200 mt-4 text-2xl py-12 p-4 text-center">
        <p>
          If you have any comments or suggestions about IOM, please let us know.
          We will consider your suggestion seriously.{" "}
        </p>
        <Link>
          <button className="bg-cyan-950 text-white px-8 py-4 mt-4 rounded-xl">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OurAims;
