import { Link } from "react-router-dom";
import { TbChecklist } from "react-icons/tb";

const PoorFund = () => {
  return (
    <div className=" ">
      <div className="bg-indigo-100 py-4 px-4 flex items-center justify-between">
        <div className="flex items-center space-x-4 ">
          <TbChecklist className="h-20 w-20 " />
          <p className="text-2xl font-semibold">Online Poor Fund Application</p>
        </div>
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-blue-600">
          <Link to="/">Go Home</Link>
        </button>
      </div>
      <div className="p-12">
        <div className="bg-gray-200 ">
          <p className="p-8 text-xl text-justify ">
            IOM একটি সম্পূর্ন অলাভজনক প্রতিষ্ঠান। কিন্তু একটা প্রতিষ্ঠান চালাতে
            অনেক খরচ হয়। যেমন: প্রায় ৯২ জন ওস্তাদের হাদিয়া, স্টাফদের বেতন, অফিস
            ভাড়া, সার্ভার ভাড়া, ভার্চুয়াল ক্যাম্পাস ভাড়া, ইন্টারনেট বিল,
            স্ট্রিমিং সার্ভার ভাড়া, লাইভ ক্লাশ ভাড়া, বিজ্ঞাপন ইত্যাদি।
            <br /> কিন্তু আপনি যদি আর্থিকভাবে অসচ্ছল হওয়াই উক্ত ফি প্রদাণে সক্ষম
            না হন সেক্ষেত্রে পুওরফান্ডের জন্য আবেদন করলে ইনশাআল্লাহ আপনার বিষয়টি
            বিবেচনা করা হবে। <br /> <br />
            উল্লেখ্য যে, কোনো শিক্ষার্থী যেই সেমিস্টার এ পুওরফান্ডের আবেদন করবে
            এবং সেই আবেদন গৃহীত হবার পর উক্ত সেমিস্টার এ তাকে অবশ্যই সেমিস্টার
            এর সকল ক্লাসের উপস্থিতিতে ৯০% এবং টোটাল সেমিস্টার এর মার্কের উপর ৫০%
            এর উপরে মার্ক থাকতে হবে। অন্যথায় পরের সেমিস্টার থেকে তার পুওরফান্ডের
            সুবিধা বাতিল বিবেচিত হবে। সেক্ষেত্রে সম্পূর্ণ ফি প্রদান করতে হবে।
          </p>
          <div className="mb-4 p-8">
            <p className="text-blue-400 text-xl  text-justify">
              Note: পুওর ফান্ড শুধুমাত্র আলিম কোর্স ও স্কুল মক্তব কোর্সের জন্য
              প্রযোজ্য। সিঙ্গেল কোর্সের জন্য পুওর ফান্ড প্রযোজ্য নয়।
            </p>
          </div>
        </div>
      </div>
      <div className="p-12">
        <div className="bg-gray-200  ">
          <h1 className="text-blue-500 p-4 text-4xl font-semibold text-center">
            Poor Fund Apply Form
          </h1>

          <p className="p-4 text-xl text-center">
            সবগুলো তথ্যই আল্লাহর সন্তুষ্টির জন্য পূরন করতে হবে। অসম্পূর্ন আবেদন
            গ্রহনযোগ্য নয়। আপনার পুওর ফান্ডে আবেদনের বিষয়টি ইনশাআল্লাহ গোপন রাখা
            হবে।
          </p>
          <form className="p-12 bg-white rounded-lg shadow-lg">
            <div className="grid grid-cols-2 gap-8">
              {/* Academic Info */}
              <div className=" col-span-1 bg-gray-200 p-8 ">
                <h2 className="text-2xl font-semibold mb-4">Academic Info</h2>
                <div className="mb-4 ">
                  <label
                    htmlFor="fullName"
                    className="block text-lg font-medium mb-2"
                  >
                    Full name (সম্পূর্ন নাম): *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-lg font-medium mb-2"
                  >
                    Email: *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="mobile"
                    className="block text-lg font-medium mb-2"
                  >
                    Mobile number (মোবাইল): *
                  </label>
                  <input
                    type="text"
                    id="mobile"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="dob"
                    className="block text-lg font-medium mb-2"
                  >
                    Date of Birth (জন্ম তারিখ): *{" "}
                    <span className="text-sm">(DD-MM-YYYY)</span>
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>

              {/* Father's Name */}
              <div className="col-span-1 bg-gray-200 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Father's Name</h2>
                <div className="mb-4">
                  <label
                    htmlFor="fathersName"
                    className="block text-lg font-medium mb-2"
                  >
                    Fathers name (পিতার নাম): *
                  </label>
                  <input
                    type="text"
                    id="fathersName"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="nid"
                    className="block text-lg font-medium mb-2"
                  >
                    National ID / Birth Certificate / Others No: *
                  </label>
                  <input
                    type="text"
                    id="nid"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="gender"
                    className="block text-lg font-medium mb-2"
                  >
                    Gender (লিঙ্গ):
                  </label>
                  <select
                    id="gender"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="division"
                    className="block text-lg font-medium mb-2"
                  >
                    Present Division (বর্তমান বিভাগ): *
                  </label>
                  <select
                    id="division"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="abroad">Abroad</option>
                    <option value="division1">Division 1</option>
                    <option value="division2">Division 2</option>
                    <option value="division3">Division 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <h2 className="text-2xl font-semibold mb-4">ঠিকানা</h2>
                <div className="border-2 border-gray-300 bg-gray-100 rounded-lg mb-6 p-4">
                  <h1 className="text-xl">বর্তমান ঠিকানা *</h1>
                  <h3 className="text-lg font-medium mb-2">
                    Present Address (বর্তমান ঠিকানা): *
                  </h3>
                  <textarea
                    id="presentAddress"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                    rows="4" // Define the number of rows you want for the textarea
                  ></textarea>
                </div>
              </div>
              {/* Permanent Address */}
              <div className="mt-12 col-span-1">
                <div className="border-2 border-gray-300 bg-gray-100 rounded-lg p-4">
                  <p className="text-sm text-gray-500">স্থায়ী ঠিকানা :</p>
                  <p className="mb-2">
                    <input type="checkbox" id="sameAddress" className="mr-2" />
                    <label
                      htmlFor="sameAddress"
                      className="text-sm text-gray-500"
                    >
                      Same as Present
                    </label>
                  </p>
                  <h3 className="text-lg font-medium mb-2">
                    Permanent Address (স্থায়ী ঠিকানা): *
                  </h3>

                  <textarea
                    id="additionalInfo"
                    className="w-full p-2 border border-gray-300 rounded-lg mb-2"
                    rows="4"
                    placeholder="."
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              {/* Academic Info */}
              <div className=" col-span-1 bg-gray-200 p-8 ">
                <h2 className="text-2xl font-semibold mb-4">
                  পেশা ও পড়াশোনা সংক্রান্ত
                </h2>
                <div className="mb-4">
                  <label
                    htmlFor="presentOccupation"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Present Occupation (বর্তমান পেশা):
                  </label>
                  <input
                    type="text"
                    id="presentOccupation"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="occupationOptions"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Occupation Options:
                  </label>
                  <select
                    id="occupationOptions"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">-- নির্বাচন করুন --</option>
                    <option value="student">Student</option>
                    <option value="teacher">Teacher</option>
                    <option value="engineer">Engineer</option>
                    <option value="doctor">Doctor</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="studyDetails"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    পড়াশোনার বিষয় ও প্রতিষ্ঠানের নাম: *
                  </label>
                  <input
                    id="studyDetails"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    rows="4"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2">
                    আপনি কি বর্তমানে IOM এর স্টুডেন্ট?
                  </label>
                  <div className="flex items-center">
                    <label className="mr-4 flex items-center">
                      <input
                        type="radio"
                        name="iomStudent"
                        value="no"
                        className="mr-2"
                      />
                      না
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="iomStudent"
                        value="yes"
                        className="mr-2"
                      />
                      হ্যা
                    </label>
                  </div>
                </div>
              </div>

              {/* Father's Name */}
              <div className="mt-6 col-span-1 bg-gray-200 p-4 rounded-lg shadow-md">
                <div className="mb-4">
                  <label
                    htmlFor="income"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    আপনার আয়ের উৎস: *
                  </label>
                  <select
                    id="income"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">-- নির্বাচন করুন --</option>
                    <option value="student">Self Income</option>
                    <option value="teacher">Parents Income</option>
                    <option value="engineer">Father's Income</option>
                    <option value="doctor">Mother's Income</option>
                    <option value="other">Husband's Income</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="guardianIncome"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    আপনার পিতার/স্বামীর/অভিভাবকের মাসিক আয় অথবা বেতন ? *
                  </label>
                  <input
                    type="text"
                    id="guardianIncome"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="guardianPhone"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    আপনার পিতার/স্বামীর/অভিভাবকের মোবাইল নম্বর: *
                  </label>
                  <input
                    type="tel"
                    id="guardianPhone"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="maritalStatus"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    আপনি কি বিবাহিত?
                  </label>
                  <div className="flex items-center">
                    <label className="mr-4 flex items-center">
                      <input
                        type="radio"
                        name="iomStudent"
                        value="no"
                        className="mr-2"
                      />
                      না
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="iomStudent"
                        value="yes"
                        className="mr-2"
                      />
                      হ্যা
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-8">
              <div className="col-span-1">
                <h2 className="text-2xl font-semibold mb-4">
                  Poor Fund Details
                </h2>
                <div className="border-2 border-gray-300 bg-gray-100 rounded-lg mb-6 p-4">
                  <h1 className="text-xl">
                    আপনি যে জন্য পুওর ফান্ডে আবেদন করতে চাচ্ছেন: *
                  </h1>

                  <select
                    id="fund"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                  >
                    <option value="">-- নির্বাচন করুন --</option>
                    <option value="admission">Admission Fees</option>
                    <option value="monthly">Monthly Fees</option>
                    <option value="both">Both Fees</option>
                  </select>
                  <div className="mb-4">
                    <label
                      htmlFor="guardianPhone"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      IOM এর ভর্তি ফি কত টাকা প্রদাণ করা আপনার জন্য সুবিধাজনক: *
                    </label>
                    <input
                      type="tel"
                      id="guardianPhone"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-12 col-span-1">
                <div className="border-2 border-gray-300 bg-gray-100 rounded-lg mb-6 p-4">
                  <p className="text-red-800">
                    পুওর ফান্ড শুধুমাত্র আলিম কোর্স ও স্কুল মক্তব কোর্সের জন্য
                    প্রযোজ্য। সিঙ্গেল কোর্সের জন্য পুওর ফান্ড প্রযোজ্য নয়
                  </p>
                  <div className="mb-4 mt-2">
                    <label
                      htmlFor="guardianPhone"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Admission for (যে কোর্সে ভর্তি হতে চান):
                    </label>
                    <select
                      id="fund"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                      <option value="">-- নির্বাচন করুন --</option>
                      <option value="admission">Alim preparatory Course</option>
                      <option value="monthly">Farz-E-Ain</option>
                      <option value="both">Hafz</option>
                      <option value="both">Nazera</option>
                      <option value="both">School Maqtab</option>
                    </select>
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="guardianPhone"
                      className="block text-gray-700 font-bold mb-2"
                    >
                      Reference: *
                    </label>
                    <input
                      type="tel"
                      id="guardianPhone"
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-xl text-red-800 font-semibold text-center">
              সাবমিট করার আগে সবগুলো তথ্য পূনরায় চেক করুন। একবার সাবমিট হয়ে গেলে
              আর পরিবর্তন করা যাবে না।
            </p>
            <div className="flex justify-center mt-4">
              <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg bg-teal-900 text-white">
                Submit Poor Fund Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PoorFund;
