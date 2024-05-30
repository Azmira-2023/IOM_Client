const AnySuggestions = () => {
  return (
    <div className="grid grid-cols-7 ">
      <div className="col-span-4">
        <div className="bg-gray-500 mt-12 max-w-4xl p-12 text-white text-center mx-16">
          <h1 className="text-lime-400 text-4xl font-bold">Any Suggestions</h1>
          <p className="text-lg">
            Use this form for suggestions only. For personal issues (eg: campus,
            results).
          </p>
        </div>
        <div className="max-w-4xl mx-16 mt-8 p-8 bg-gray-200">
          <h1 className="text-3xl font-bold text-center mb-4">সাজেশন ফর্ম</h1>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold">
                আপনার নাম:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="আপনার নাম লিখুন"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-lg font-semibold">
                মেইল এড্রেস:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="আপনার মেইল এড্রেস লিখুন"
                required
              />
            </div>
            <div>
              <label htmlFor="mobile" className="block text-lg font-semibold">
                মোবাইল নম্বর:
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="আপনার মোবাইল নম্বর লিখুন"
                required
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-lg font-semibold">
                IOM এর রোল নম্বর:
              </label>
              <input
                type="text"
                id="role"
                name="role"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="আপনার IOM এর রোল নম্বর লিখুন (যদি থাকে)"
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-lg font-semibold">
                যে বিষয়ক সাজেশন:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="সাজেশনের বিষয় লিখুন"
                required
              />
            </div>
            <div>
              <label htmlFor="details" className="block text-lg font-semibold">
                আপনার সাজেশনটি বিস্তারিত লিখুন:
              </label>
              <select
                id="details"
                name="details"
                className="mt-1 p-2 w-full border border-gray-400 rounded-md focus:outline-none focus:border-blue-500"
                required
              >
                <option value="" disabled selected>
                  আপনার সাজেশন বিস্তারিত লিখুন
                </option>
                <option value="Improvement in Courses">
                  কোর্সে উন্নতি প্রয়োজন
                </option>
                <option value="Enhancement in Support Services">
                  সাপোর্ট সেবাতে উন্নতি প্রয়োজন
                </option>
                <option value="Feature Request">ফিচার অনুরোধ</option>
                <option value="Other">অন্যান্য</option>
              </select>
            </div>

            <p className="text-sm">
              কখনই Google ফর্মগুলির মাধ্যমে পাসওয়ার্ডগুলি জমা দেবেন না।
            </p>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              সাবমিট
            </button>
          </form>
          <p className="text-sm mt-4">
            এই ফর্মটি Islamic Online Madrasah এর ভিতরে তৈরি হয়েছে।
          </p>
        </div>
      </div>
      <div className="col-span-3 bg-gray-200  mt-12 mx-12  max-h-screen p-4 sticky top-0">
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

export default AnySuggestions;
