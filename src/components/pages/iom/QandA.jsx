import { useState } from "react";
import { Link } from "react-router-dom";

const QandA = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="mt-12 p-8 bg-gray-200 max-w-4xl mx-auto">
      <div className="gap-4">
        <div className="border border-gray-300">
          <div
            className="text-xl font-medium py-4 px-6 cursor-pointer flex justify-between"
            onClick={() => handleAccordionClick(0)}
          >
            প্রশ্ন ১
            <span className="collapse-arrow">
              {activeIndex === 0 ? "▲" : "▼"}
            </span>
          </div>
          {activeIndex === 0 && (
            <div className="border-t border-gray-300 py-4 px-6">
              <p>
                না, এটা সম্পূর্ন অরাজনৈতিক একটি প্রতিষ্ঠান। যেটা কোন বিশেষ দল বা
                গোষ্ঠীর না। কিন্তু সাবজেক্টের প্রয়োজনে যে শিক্ষকবৃন্দ ক্লাশ
                নিবেন উনারা হয়ত কখনও কওমি আলেম কিংবা সালাফী আলেম কিংবা বিভিন্ন
                বিশ্ববিদ্যালয়ের স্কলার হতে পারেন। ক্লাশের বিষয়গুলো কোরআন ও
                হাদীস অনুসরন করেই পড়ানো হবে ইনশাআল্লাহ।
              </p>
            </div>
          )}
        </div>
        <div className="border border-gray-300">
          <div
            className="text-xl font-medium py-4 px-6 cursor-pointer flex justify-between"
            onClick={() => handleAccordionClick(1)}
          >
            প্রশ্ন ২
            <span className="collapse-arrow">
              {activeIndex === 1 ? "▲" : "▼"}
            </span>
          </div>
          {activeIndex === 1 && (
            <div className="border-t border-gray-300 py-4 px-6">
              <p>
                IOM এর আলিম প্রস্তুতিমূলক কোর্সে হুবহু কওমি মাদ্রাসার সিলেবাস
                অনুসরণ করা হয়নি। বরং একজন জেনারেল ব্যাকগ্রাউন্ডের ভাই-বোনের জন্য
                যা কিছু দরকার, ৩ বছরে তার সবটুকুই একসাথে করার চেষ্টা করার হয়েছে।
                আইওএম এর সিলেবাস শেষ করার পর আপনি ইনশাআল্লাহ কওমি মাদ্রাসার
                কুদুরী জামাতে ভর্তি হতে পারবেন। আর কওমি মাদ্রাসার সিলেবাস
                অনুযায়ী পরবর্তী চার বছরে চারটি জামাত শেষ করতে হবে। ১। কুদুরী ২।
                হেদায়া ৩। মেশকাত ৪। দাওরা <br /> <br />
                অর্থাৎ আপনি আলিম প্রস্তুতি মূলক কোর্স এর ৩ বছর শেষ করার পর আরও ৪
                বছর অফলাইন মাদ্রাসায় পড়লে দাওরায় হাদিস পরীক্ষা দিতে পারবেন। আর
                এই পড়াশোনার জন্য আপনি আমাদের নির্ধারিত কিছু মাদ্রাসায়ও ভর্তি হতে
                পারবেন অথবা অন্য যেকোন মাদ্রাসায় ভর্তি হতে চাইলে আমাদের মাদ্রাসা
                থেকে চিঠি নিয়ে ভর্তি হতে পারবেন ইনশাআল্লাহ। এজন্যও IOM
                ইনশাআল্লাহ আপনাকে সবধরনের সাহায্য করবে।
              </p>
            </div>
          )}
        </div>
        <div className="border border-gray-300">
          <div
            className="text-xl font-medium py-4 px-6 cursor-pointer flex justify-between"
            onClick={() => handleAccordionClick(2)}
          >
            প্রশ্ন ৩
            <span className="collapse-arrow">
              {activeIndex === 2 ? "▲" : "▼"}
            </span>
          </div>
          {activeIndex === 2 && (
            <div className="border-t border-gray-300 py-4 px-6">
              <p>
                না, ক্লাশের জন্য নিকাব পড়া লাগবে না। কারন কোন স্টুডেন্টের ভিডিও
                টিচার বা অন্য কোন স্টুডেন্ট দেখবে না। শুধুমাত্র টিচারের ভিডিও
                এবং লেকচার কিংবা স্লাইড সবাই দেখবেন। আর তাজবীদ ক্লাশে উচ্চারন
                শোনার জন্য বোনদের আলাদা বোন মুক্বররিরাহর মাধ্যমে বিভিন্নগ্রুপ
                করে দেওয়া হবে যার ফলে মেয়েদের কন্ঠ শুধু মেয়েরাই শুনবে । অন্যদিকে
                সব স্টুডেন্ট ক্লাশে প্রবেশের সময় তার রোল/ স্টুডেন্ট আইডি দিয়ে
                জয়েন করবে। কেউ নাম দিয়ে জয়েনন করবে না। ফলে কে ছেলে কে মেয়ে এইটা
                কেউ স্পেসিফিক্যালি আইডিয়া করতে পারবে না।
              </p>
            </div>
          )}
        </div>
        <div className="border border-gray-300">
          <div
            className="text-xl font-medium py-4 px-6 cursor-pointer flex justify-between"
            onClick={() => handleAccordionClick(3)}
          >
              প্রশ্ন ৪
            <span className="collapse-arrow">
              {activeIndex === 3 ? "▲" : "▼"}
            </span>
          </div>
          {activeIndex === 3 && (
            <div className="border-t border-gray-300 py-4 px-6">
              <p>
                দ্বীন শিক্ষার জন্য সর্বপ্রথম এবং প্রধান মাধ্যম অফলাইন কোর্স করা
                বা মাদ্রাসায় গিয়ে পড়া। অর্থাৎ উস্তাদের কাছে সরাসরি গিয়ে দ্বীন
                শিখা। এখন অনেক মাদ্রাসাতেই নৈশ কোর্স চালু আছে। সর্ব প্রথম চেষ্টা
                করতে হবে এরকম কোথাও যুক্ত হওয়া।যাদের এই সুযোগ একেবারেই নেই তাদের
                জন্য অনলাইন মাদ্রাসা। এখন পর্যন্ত অনলাইনে সম্পূর্ন মাদ্রাসা
                হিসেবে জনপ্রিয় দুইটা মাদ্রাসা: IOU এবং IOM। অন্যদিকে আরও কিছু
                অনলাইন প্লাটফর্ম রয়েছে যেখানে এখনও পুরোপুরি অনলাইন মাদ্রাসা চালু
                করেন নাই। বরং উনারা কিছু সাবজেক্ট(আকিদা, ফিকহ ইত্যাদি) পড়াচ্ছেন।
                IOU ড: বিলাল ফিলিপসের প্রতিষ্ঠান। গাম্বিয়াতে এর শুরু। অন্যদিকে
                বাংলাদেশের প্রথম অনলাইন মাদ্রাসা IOM । IOM এখন স্টুডেন্ট প্রায়
                ৫০০০ এর কাছাকাছি। এর মধ্যে প্রায় ২০০ এর কাছাকাছি এমবিবিএস ডক্টর,
                ১৫০০ এর কাছাকাছি ইঞ্জিনিয়ার এবং অন্যান্য পেশার জেনারেল লোকজন
                পড়ছেন। ১। মিডিয়াম: আপনি যদি ইংরেজীতে দক্ষ হন সেক্ষত্রে IOU এ
                ভর্তি হতে পারেন। আর যদি বাংলায় কোর্স করতে চান IOM। ২। খরচঃ IOU
                তে সেমিস্টার ৪ মাসের, ফি ৯০ ডলার। প্রায় ৮০০০ টাকা। ৪ মাস পর পর
                ৮০০০ টাকা দেওয়া লাগে সেই হিসেবে মাসে ২০০০ টাকা। অন্যদিকে IOM এর
                মাসিক খরচ ৫০০ টাকা। যা অনেকেটাই সবার সাধ্যের মধ্যে। ৩। লাইভ
                ক্লাশ: IOU তে এখন লাইভ ক্লাশ এখন বন্ধ হয়ে গেছে। অর্থাৎ পূর্বের
                রেকর্ড করা ভিডিও দেখে ক্লাশ করতে হবে। অন্যদিকে IOM এ ১০০% ক্লাশ
                লাইভ। তাই লাইভ ক্লাশে ক্লাশ করে যে রিয়েল ফিলিংস রেকর্ডেড ক্লাশ
                অনেকটা ইউটিউব ভিডিও দেখার মতই। ৪। সময়: IOU তে কিছু লাইভ ক্লাশ
                হলেও সময় বাংলাদেশের সাথে মিলে না। আর IOM এ সব ক্লাশ রাত ৯ টা
                থেকে ১১ টা। সপ্তাহে ৪ দিন। যেটা সবার জন্য জয়েন করা সহজ। ৫। IOU
                তে শুধু এমসিকিউ পরীক্ষা হয়। যেটার মাধ্যমে একজন স্টুডেন্টকে
                পরিপূর্ন যাচাই করা যায় না। বিশেষ করে কোরআনের ক্ষেত্রে তাজবীদ
                শুদ্ধ হয় না। অন্যদিকে IOM এ ছেলেদের জন্য ছেলে উস্তাদ এবং মেয়েদের
                জন্য মেয়ে উস্তাদ প্রত্যেককে ধরে ধরে কোরআন শুদ্ধ করেন। আর
                অন্যদিকে পরীক্ষার ক্ষেত্রেও এমসিকিউ এবং ভাইবা দুইটা হয়। ৬। IOU
                যোগাযোগ: www.iou.edu.gm IOM যোগাযোগ: www.iom.edu.bd
                https://www.facebook.com/iom.edu.bd/ আল্লাহ আমাদের সবার দ্বীনের
                পথের যাত্রাকে কবুল করুন।
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="bg-gray-300 mt-8 text-xl py-6 px-4 text-center">
        <p>
          If you have any comments or suggestions about IOM, please let us know.
          We will consider your suggestion seriously.
        </p>
        <Link to="/contact">
          <button className="bg-cyan-950 text-white px-6 py-2 mt-4 rounded-xl">
            Contact
          </button>
        </Link>
      </div>
    </div>
  );
};

export default QandA;
