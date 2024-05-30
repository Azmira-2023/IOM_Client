

const FamilyCounselling = () => {
  return (
    <div className="p-12 mt-8 max-w-6xl mx-auto bg-gray-100">
      <div className="">
      <h1 className="text-4xl font-bold text-rose-950 text-center">
        Family Counselling
      </h1>
      <p className="mt-4 text-justify text-xl">
      The main objective of our marriage counselling program is to build a beautiful family and prevent its breakdown. This program is for: Those who are married or newly married and those who are emotionally broken due to various problems in their married life. This program mainly deals with pre-marriage counselling and family counselling. Both brothers and sisters can take these counselling. The program is completely free. If you are interested in taking part in the program then fill out the form below.

      </p>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-100 p-8 mt-8 rounded-lg shadow-md">
      <h2 className="text-2xl text-center text-blue-900 font-semibold mb-6">Marriage Counselling</h2>
      <p className="text-center mb-4">
        আপনার অভিমত এবং বার্তাগুলো আমাদেরকে জানাবেন
        এই ফর্মটির তথ্য সম্পূর্ন গোপন রাখা হবে ইনশাআল্লাহ।
      </p>
      <p className="text-center mb-6">
        আপনার উন্নতি সেভ করার জন্য Google-এ সাইন-ইন করুন। আরও জানুন
      </p>
      <form className="space-y-6 ">
        <div>
          <label className="block text-xl font-medium text-gray-700">Full name (সম্পূর্ন নাম): *</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Email address: *</label>
          <input type="email" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">আপনি কি আইওএম এর স্টুডেন্ট? যদি হয়ে থাকেন আপনার রোল:</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Mobile number (মোবাইল): *</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Emergency Contact No (জরুরী যোগাযোগ নম্বর): *</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Present address (বর্তমান ঠিকানা): *</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Permanent address (স্থায়ী ঠিকানা): *</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Present Division (বর্তমান বিভাগ): *</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Country Name: *</label>
          <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Gender (লিঙ্গ): *</label>
          <div className="mt-1 space-y-2">
            <div>
              <input type="radio" id="male" name="gender" value="Male" className="mr-2" required />
              <label htmlFor="male">Male</label>
            </div>
            <div>
              <input type="radio" id="female" name="gender" value="Female" className="mr-2" required />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">Date of Birth (জন্ম তারিখ): *</label>
          <input type="date" className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required />
        </div>
        <div>
          <label className="block text-xl font-medium text-gray-700">কি বিষয়ে কাউন্সিলিং করতে চাচ্ছেন? *</label>
          <select className="mt-1 p-2 block w-full border border-gray-300 rounded-md" required>
            <option value="দাম্পত্য জীবনের সমস্যা ও সেপারেশন নিয়ে">দাম্পত্য জীবনের সমস্যা ও সেপারেশন নিয়ে</option>
            <option value="বিবাহ ঠিক হয়েছে, এর প্রস্তুতির জন্য">বিবাহ ঠিক হয়েছে, এর প্রস্তুতির জন্য</option>
          </select>
        </div>
        <div className="text-center">
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Submit
          </button>
        </div>
      </form>
    </div>
      

    </div>
  )
}

export default FamilyCounselling