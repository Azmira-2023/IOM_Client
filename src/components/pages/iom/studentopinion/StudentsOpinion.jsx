import { Link } from "react-router-dom";

const StudentsOpinion = () => {
  return (
    <div className="grid grid-cols-7 ">
      <div className="col-span-4">
        <div className="mt-8 p-8 mx-16 bg-gray-200 max-w-4xl">
          <h1 className="text-center text-4xl text-blue-500 font-bold">
            Student's Opinion
          </h1>
          <p className="text-center text-2xl font-medium">
            Facebook Review of IOM Students
          </p>
          <div className="mt-12 flex gap-4 items-start">
            <img
              src="https://graph.facebook.com/1817853405008008/picture"
              alt="Facebook Profile"
              className="w-24 h-24 rounded-xl"
            />
            <div>
              <p className="text-xl text-black">
                Islamic Online Madrasah - IOM
              </p>
              <div className="rating rating-lg">
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
              </div>
              <p className="text-xl">
                powered by <span className="text-cyan-600">Facebook</span>
              </p>
              <Link to="https://www.facebook.com">
                <button className="mt-2 rounded-xl bg-teal-900 px-3 py-2 text-white">
                  review us on facebook
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-12 flex gap-4 items-start">
            <img
              src="https://graph.facebook.com/1817853405008008/picture"
              alt="Facebook Profile"
              className="w-24 h-24 rounded-xl"
            />

            <div>
              <p className="text-black text-xl">Afroja Farin</p>
              <p className="text-black text-xl">12 days ago</p>

              <div className="rating rating-lg">
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
                <input
                  type="radio"
                  name="rating-9"
                  className="mask mask-star-2"
                />
              </div>
              <p className="text-lg text-black">
                বাংলাদেশের সর্বোচ্চ স্তর এ থাকা একটা মাদ্রাসা আমার অন্তর থেকে
                অনূভব হয়,, এতো সুন্দর সাজানো গোছানো পড়াশোনা কম জায়গায় দেখা
                যায়। এখানে বর্ননা লিখলেও কম হবে মাদ্রাসা নিয়ে,, শব্দ ও জানা
                নাই,,, আল্লাহ তায়ালা যেনো আরো ও বেশি কবুল করে এ প্লাটফর্ম কে ,,
                সকলকে নেক হায়াত ও আমলের তৌফিক দান করুক। আমিন ইয়া রব্বুল আলামিন
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-3 bg-gray-200  mt-8 mx-12  max-h-screen p-4">
        <h2 className="mt-4 text-2xl text-blue-500 font-bold border-b-2 border-blue-500 pb-1">
          Q&A
        </h2>
        <p className="mt-2 text-xl">Regarding Admission</p>
        <ul className=" text-xl mt-2 list-disc pl-4">
          <li>How to enroll?</li>
          <li>How to get ID card?</li>
        </ul>
        <div className="mt-2 pb-1">
          <p className="text-xl border-b border-orange-950">Class Related</p>
          <ul className="list-disc pl-4 text-xl mt-2">
            <li>What to do if you have problems using Zoom?</li>
            <li>How long will the class attendance count?</li>
            <li>What to do if the attendance is not counted?</li>
            <li>How to check attendance?</li>
            <li>What to do if you forget the campus password?</li>
          </ul>
        </div>
        <div className="pb-1">
          <p className="text-xl mt-2 border-b border-orange-950">
            Regarding Payment
          </p>
          <ul className="list-disc text-xl pl-4 mt-2">
            <li>How to pay admission fee and monthly pay?</li>
          </ul>
        </div>
        <div className="pb-1">
          <p className="text-xl mt-2 border-b border-orange-950">
            Other Inquiries
          </p>
          <ul className="text-xl list-disc pl-4 mt-2">
            <li>How to get the certificate?</li>
            <li>How to ask fatwa?</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentsOpinion;
