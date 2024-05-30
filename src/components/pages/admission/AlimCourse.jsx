import { useState } from "react";
import { Link } from "react-router-dom";

const AlimCourse = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleButtonClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div>
      <div className="bg-indigo-200 p-12 mt-4 py-8 text-center">
        <h1 className="text-6xl font-bold">Alim Course</h1>
        <p className="text-2xl">3 Years Duration Course</p>
      </div>
      <div className="grid grid-cols-7">
        <div className="col-span-4">
          <div className="container mx-12 p-6 max-w-4xl bg-gray-200 mt-8">
            <video
              src={"https://youtu.be/q9M7FKqCNVo"}
              controls
              className="w-full h-[300px] rounded mb-6"
            ></video>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div className="bg-gray-100 p-4 rounded shadow border border-gray-300">
                <h3 className="font-bold text-lg">Current Batch</h3>
                <p>১২ম (২৪১২)</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow border border-gray-300">
                <h3 className="font-bold text-lg">Ongoing Session</h3>
                <p>জুলাই-ডিসেম্বর</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow border border-gray-300">
                <h3 className="font-bold text-lg">Last Date of Admission</h3>
                <p>-</p>
              </div>
              <div className="bg-gray-100 p-4 rounded shadow border border-gray-300">
                <h3 className="font-bold text-lg">Class Starts</h3>
                <p>০১-০৬-২০২৪ইং</p>
              </div>
            </div>
            <div className="flex justify-between space-x-4 mt-4">
              <button
                className="bg-cyan-950 text-white px-4 py-4 rounded"
                onClick={() => handleButtonClick("image")}
              >
                Image Description
              </button>
              <button
                className="bg-cyan-950 text-white px-4 py-2 rounded"
                onClick={() => handleButtonClick("syllabus")}
              >
                Image Syllabus
              </button>
              <button
                className="bg-cyan-950 text-white px-4 py-2 rounded"
                onClick={() => handleButtonClick("booklist")}
              >
                Booklist
              </button>
              <button
                className="bg-cyan-950 text-white px-4 py-2 rounded"
                onClick={() => handleButtonClick("courseFees")}
              >
                Course Fees
              </button>
            </div>

            <div className="mt-4 p-4 bg-gray-200">
              {activeSection === "image" && (
                <div>
                  <h3 className="text-xl font-bold">Image Description</h3>
                  <p className="text-justify text-lg">
                    Alim course of 3 years duration has 14 subjects. Some of
                    these 14 subjects have two/three courses which are taught
                    over a period of one-and-a-half years. These 14 subjects are
                    arranged for 3 years with a total of 26 courses. All single
                    courses of IOM are included in Alim Course. That is,
                    admission to this course does not require admission to
                    single courses. We start class activities in January and
                    July 2nd session every year in Alim and Single courses of
                    IOM. For admission, the admission process must be completed
                    1 month before.{" "}
                  </p>
                  <div className="border-b-2 border-teal-900 mt-4"></div>
                  <div className="w-full border border-gray-500 mt-4">
                    <h3 className="text-xl font-bold mb-4 text-center mt-4">
                      Subjects of Alim Course
                    </h3>
                    <table className="w-full  border border-gray-500">
                      <thead className="">
                        <tr className=" ">
                          <th className="p-2 border border-gray-500">
                            Subject
                          </th>
                          <th className="p-2 border border-gray-500">
                            Timeline
                          </th>
                          <th className="p-2 border border-gray-500">
                            Full Syllabus
                          </th>
                        </tr>
                      </thead>
                      <tbody className="">
                        <tr className="">
                          <td className="p-2 border border-gray-500">
                            Tajweed
                          </td>
                          <td className="p-2 border border-gray-500">
                            6 months
                          </td>

                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-500">Aqidah</td>
                          <td className="p-2 border border-gray-500">
                            6 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-500">Dawah</td>
                          <td className="p-2 border border-gray-500">
                            6 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-500">
                            Quran Translation
                          </td>
                          <td className="p-2 border border-gray-500">
                            18 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-500">
                            Hadith and Sunnah
                          </td>
                          <td className="p-2 border border-gray-500">
                            18 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            Not Given
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-500">Seerah</td>
                          <td className="p-2 border border-gray-500">
                            12 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-500">
                            Research and Masael
                          </td>
                          <td className="p-2 border border-gray-500">
                            6 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            Not Given
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-500">Fiqh</td>
                          <td className="p-2 border border-gray-500">
                            18 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-500">
                            Arabic Language
                          </td>
                          <td className="p-2 border border-gray-500">
                            18 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-500">
                            Arabic Grammar
                          </td>
                          <td className="p-2 border border-gray-500">
                            12 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            Not Given
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-500">
                            Islamic History
                          </td>
                          <td className="p-2 border border-gray-500">
                            6 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                        <tr className="bg-white">
                          <td className="p-2 border border-gray-500">
                            Adabu Talibul Ilm
                          </td>
                          <td className="p-2 border border-gray-500">
                            6 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            Not Given
                          </td>
                        </tr>
                        <tr>
                          <td className="p-2 border border-gray-500">
                            Urdu Language
                          </td>
                          <td className="p-2 border border-gray-500">
                            6 months
                          </td>
                          <td className="p-2 border border-gray-500">
                            <a href="#">Click Here</a>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-justify text-xl mt-8">
                    After completing 3 years of Alim Preparatory Course, you can
                    take the Hadith exam in Dawrah if you attend Offline
                    Madrasah for 4 more years. And for this study, you can get
                    admission in some of our designated madrasas or if you want
                    to get admission in any other madrasah, you can get
                    admission with a letter from our madrasah, inshallah. For
                    this purpose also, IOM will help you in all ways inshallah.
                  </p>{" "}
                  <br />
                  <p className="text-xl font-semibold">
                    All single courses of IOM are included in Alim Course
                  </p>
                </div>
              )}
              {activeSection === "syllabus" && (
                <div>
                  <p className="text-xl font-bold mb-4 text-center mt-4">
                    Subjects of Alim Course
                  </p>
                  <table className="w-full  border border-gray-500">
                    <thead className="">
                      <tr className=" ">
                        <th className="p-2 border border-gray-500">Subject</th>
                        <th className="p-2 border border-gray-500">Topic</th>
                        <th className="p-2 border border-gray-500">
                          Reference Book{" "}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-white">
                        <td className="p-2 border border-gray-500">তাজবিদ-১</td>
                        <td className="p-2 border border-gray-500">
                          হরফ, মাখরাজ (উচ্চারণ), ৫ টি সূরা মুখস্ত (সূরা ফাতেহা,
                          সূরা লাহাব থেকে নাস), নিয়ম কানুনসহ কোরআনুল কারীম দেখে
                          পড়া, আত্তাহিয়াতু, দুরুদ শরীফ, দোয়া কুনুত, তাসবীহ,
                          নামাজের প্রাকটিক্যাল।{" "}
                        </td>
                        <td className="p-2 border border-gray-500">Sheet </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="p-2 border border-gray-500">ফিকহ-১</td>
                        <td className="p-2 border border-gray-500">
                          ইবাদত: তাহারাত (পবিত্রতা), সালাত-১{" "}
                        </td>
                        <td className="p-2 border border-gray-500">
                          ফিকহুল ইবাদাত (আইওএম কর্তৃক প্রকাশিত){" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-500">Aqidah</td>
                        <td className="p-2 border border-gray-500">
                          আল্লাহর সত্বা ও সিফত, নবী-রাসূল, ফিরিস্তা-জ্বীন,
                          কেয়ামত, জান্নাত, জাহান্নাম
                        </td>
                        <td className="p-2 border border-gray-500">
                          ইসলামী আক্বীদা (আইওএম কর্তৃক প্রকাশিত){" "}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-2 border border-gray-500">
                          Dua and Sunnah
                        </td>
                        <td className="p-2 border border-gray-500">
                          ২৮ টি দোয়া ও ১৩ টি সুন্নাহ{" "}
                        </td>
                        <td className="p-2 border border-gray-500">
                          দাওয়াহ সিরিজ, স্কুল মক্তব,ফ্যামিলি ম্যানেজমেন্ট ও
                          জন্মনিয়ন্ত্রণ
                        </td>
                      </tr>
                      <tr>
                        <td className="p-2 border border-gray-500">
                          Adabu Talibul Ilm
                        </td>
                        <td className="p-2 border border-gray-500">
                          ইলম অর্জনের আদব{" "}
                        </td>
                        <td className="p-2 border border-gray-500">
                          {" "}
                          তা’লীমুল মুতাআল্লিম{" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeSection === "booklist" && (
                <div>
                  <h3 className="text-xl font-bold text-center ">
                    First Year: First Semester
                  </h3>
                  <table className="w-full  border border-gray-500 mt-4">
                    <thead className="">
                      <tr className=" ">
                        <th className="p-2 border border-gray-500">Subject</th>
                        <th className="p-2 border border-gray-500">BoolList</th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-white">
                        <td className="p-2 border border-gray-500">Tajweed</td>
                        <td className="p-2 border border-gray-500">Sheet </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="p-2 border border-gray-500">Aqidah</td>
                        <td className="p-2 border border-gray-500">
                          1. ইসলামী আক্বীদা Book (published by IOM). Mainly
                          taught in combination with both sheet and ইসলামী
                          আক্বীদা book (published by IOM).{" "}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-2 border border-gray-500">Fiqh</td>
                        <td className="p-2 border border-gray-500">
                          2. ফিকহুল ইবাদাত ১ম ও ২য় খন্ড (published by IOM).
                          Mainly Sheets and ফিকহুল ইবাদাত ১ম ও ২য় খন্ড books
                          (published by IOM) are both taught in combination.{" "}
                        </td>
                      </tr>
                      <tr className="">
                        <td className="p-2 border border-gray-500">
                          Dua and Sunnah
                        </td>
                        <td className="p-2 border border-gray-500">
                          ৩. স্কুল মক্তব (আই ও এম কর্তৃক প্রকাশিত)
                          <br />
                          4. ফ্যামিলি ম্যানেজমেন্ট ও জন্মনিয়ন্ত্রণ, হিলফুল ফুযুল
                          Publications <br />
                          5. দাওয়াহ সিরিজ ১-২ (ইসলাম কাদের?, আল্লাহর শাস্তি) এবং
                          দা’য়ীর গুণাবলী) –হিলফুল ফুযুল Publications{" "}
                        </td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-2 border border-gray-500">
                          Adabu Talibul Ilm
                        </td>
                        <td className="p-2 border border-gray-500">
                          Mainly taught from sheet. But you can also collect the
                          following books. ৬. তালীমুল মুতাআল্লিম (বাংলা)।
                          (অপশনাল)
                          <br />
                          ৭. জীবন পথের পাথেয়। (অপশনাল)
                          <br />
                          ৮. দরদী মালীর কথা শোনো। (অপশনাল){" "}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
              {activeSection === "courseFees" && (
                <div>
                  <p className="text-xl  text-justify">
                    IOM is a completely non-profit organisation. But running an
                    organisation costs a lot. For example: Salary of our nearly
                    60 Teachers, Mukarrirah, Female Teachers and Staff Salary,
                    Server Rent, Virtual Campus Rent, Internet Bill, Streaming
                    Server Rent, Advertising etc. As such, it costs more than 5
                    lakhs bdt per month. And the amount of all these expenses is
                    spent from the fees paid by the students.{" "}
                  </p>
                  <table className="w-full  border mt-4 text-xl">
                    <thead className="">
                      <tr className=" ">
                        <th className="p-2 border border-gray-500">Type </th>
                        <th className="p-2 border border-gray-500"> Amount </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      <tr className="bg-white">
                        <td className="p-2 border border-gray-500">
                          Admission Fee{" "}
                        </td>
                        <td className="p-2 border border-gray-500">
                          {" "}
                          1530 BDT{" "}
                        </td>
                      </tr>
                      <tr className="bg-gray-200">
                        <td className="p-2 border border-gray-500">
                          Monthly Fee{" "}
                        </td>
                        <td className="p-2 border border-gray-500">500 BDT</td>
                      </tr>
                      <tr className="bg-white">
                        <td className="p-2 border border-gray-500">
                          Midterm Fee{" "}
                        </td>
                        <td className="p-2 border border-gray-500">300 BDT</td>
                      </tr>
                      <tr className="">
                        <td className="p-2 border border-gray-500">
                          Semester Fee
                        </td>
                        <td className="p-2 border border-gray-500">500 BDT</td>
                      </tr>
                    </tbody>
                  </table>
                  <p className="bg-white text-xl mt-4 p-4">
                    Monthly Fee for overseas students: ১০০০ টাকা{" "}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="col-span-3 bg-gray-200  mt-8 mx-12   p-4 ">
          <div className="max-w-2xl mx-auto bg-white shadow-md rounded-md p-6 text-xl">
            <h1 className="text-2xl font-semibold">
              Course related information{" "}
            </h1>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Course Name: Alim Course
            </p>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Bachelor in Dawah and Islamic Studies
            </p>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Course Duration: 3 Years Duration Course
            </p>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Class Time: Will notify through E-mail
            </p>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Ongoing Session জুলাই-ডিসেম্বর
            </p>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Last Date of Admission: -
            </p>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Class Starts: ০১-০৬-২০২৪ইং
            </p>
            <p className="border-b border-gray-300 pb-2 mb-4">
              Class Media: Zoom
            </p>
          </div>

          <div className="join join-vertical w-full mt-8">
            <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title text-xl font-medium"></div>
              <div className="collapse-content">
                <p>
                  না, এটা সম্পূর্ন অরাজনৈতিক একটি প্রতিষ্ঠান। যেটা কোন বিশেষ দল
                  বা গোষ্ঠীর না। কিন্তু সাবজেক্টের প্রয়োজনে যে শিক্ষকবৃন্দ ক্লাশ
                  নিবেন উনারা হয়ত কখনও কওমি আলেম কিংবা সালাফী আলেম কিংবা বিভিন্ন
                  বিশ্ববিদ্যালয়ের স্কলার হতে পারেন। ক্লাশের বিষয়গুলো কোরআন ও
                  হাদীস অনুসরন করেই পড়ানো হবে ইনশাআল্লাহ।{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium"></div>
              <div className="collapse-content">
                <p>
                  IOM এর আলিম প্রস্তুতিমূলক কোর্সে হুবহু কওমি মাদ্রাসার সিলেবাস
                  অনুসরণ করা হয়নি। বরং একজন জেনারেল ব্যাকগ্রাউন্ডের ভাই-বোনের
                  জন্য যা কিছু দরকার, ৩ বছরে তার সবটুকুই একসাথে করার চেষ্টা করার
                  হয়েছে। আইওএম এর সিলেবাস শেষ করার পর আপনি ইনশাআল্লাহ কওমি
                  মাদ্রাসার কুদুরী জামাতে ভর্তি হতে পারবেন। আর কওমি মাদ্রাসার
                  সিলেবাস অনুযায়ী পরবর্তী চার বছরে চারটি জামাত শেষ করতে হবে। ১।
                  কুদুরী ২। হেদায়া ৩। মেশকাত ৪। দাওরা
                  <br />
                  অর্থাৎ আপনি আলিম প্রস্তুতি মূলক কোর্স এর ৩ বছর শেষ করার পর আরও
                  ৪ বছর অফলাইন মাদ্রাসায় পড়লে দাওরায় হাদিস পরীক্ষা দিতে পারবেন।
                  আর এই পড়াশোনার জন্য আপনি আমাদের নির্ধারিত কিছু মাদ্রাসায়ও
                  ভর্তি হতে পারবেন অথবা অন্য যেকোন মাদ্রাসায় ভর্তি হতে চাইলে
                  আমাদের মাদ্রাসা থেকে চিঠি নিয়ে ভর্তি হতে পারবেন ইনশাআল্লাহ।
                  এজন্যও IOM ইনশাআল্লাহ আপনাকে সবধরনের সাহায্য করবে।{" "}
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium"></div>
              <div className="collapse-content">
                <p>
                  না, ক্লাশের জন্য নিকাব পড়া লাগবে না। কারন কোন স্টুডেন্টের
                  ভিডিও টিচার বা অন্য কোন স্টুডেন্ট দেখবে না। শুধুমাত্র টিচারের
                  ভিডিও এবং লেকচার কিংবা স্লাইড সবাই দেখবেন। আর তাজবীদ ক্লাশে
                  উচ্চারন শোনার জন্য বোনদের আলাদা বোন মুক্বররিরাহর মাধ্যমে
                  বিভিন্নগ্রুপ করে দেওয়া হবে যার ফলে মেয়েদের কন্ঠ শুধু মেয়েরাই
                  শুনবে । অন্যদিকে সব স্টুডেন্ট ক্লাশে প্রবেশের সময় তার রোল/
                  স্টুডেন্ট আইডি দিয়ে জয়েন করবে। কেউ নাম দিয়ে জয়েনন করবে না। ফলে
                  কে ছেলে কে মেয়ে এইটা কেউ স্পেসিফিক্যালি আইডিয়া করতে পারবে না।
                </p>
              </div>
            </div>
            <div className="collapse collapse-arrow join-item border border-base-300 bg-white">
              <input type="radio" name="my-accordion-4" />
              <div className="collapse-title text-xl font-medium"></div>
              <div className="collapse-content">
                <p>
                  দ্বীন শিক্ষার জন্য সর্বপ্রথম এবং প্রধান মাধ্যম অফলাইন কোর্স
                  করা বা মাদ্রাসায় গিয়ে পড়া। অর্থাৎ উস্তাদের কাছে সরাসরি গিয়ে
                  দ্বীন শিখা। এখন অনেক মাদ্রাসাতেই নৈশ কোর্স চালু আছে। সর্ব
                  প্রথম চেষ্টা করতে হবে এরকম কোথাও যুক্ত হওয়া।যাদের এই সুযোগ
                  একেবারেই নেই তাদের জন্য অনলাইন মাদ্রাসা। এখন পর্যন্ত অনলাইনে
                  সম্পূর্ন মাদ্রাসা হিসেবে জনপ্রিয় দুইটা মাদ্রাসা: IOU এবং IOM।
                  অন্যদিকে আরও কিছু অনলাইন প্লাটফর্ম রয়েছে যেখানে এখনও পুরোপুরি
                  অনলাইন মাদ্রাসা চালু করেন নাই। বরং উনারা কিছু সাবজেক্ট(আকিদা,
                  ফিকহ ইত্যাদি) পড়াচ্ছেন। IOU ড: বিলাল ফিলিপসের প্রতিষ্ঠান।
                  গাম্বিয়াতে এর শুরু। অন্যদিকে বাংলাদেশের প্রথম অনলাইন মাদ্রাসা
                  IOM । IOM এখন স্টুডেন্ট প্রায় ৫০০০ এর কাছাকাছি। এর মধ্যে প্রায়
                  ২০০ এর কাছাকাছি এমবিবিএস ডক্টর, ১৫০০ এর কাছাকাছি ইঞ্জিনিয়ার
                  এবং অন্যান্য পেশার জেনারেল লোকজন পড়ছেন। ১। মিডিয়াম: আপনি যদি
                  ইংরেজীতে দক্ষ হন সেক্ষত্রে IOU এ ভর্তি হতে পারেন। আর যদি
                  বাংলায় কোর্স করতে চান IOM। ২। খরচঃ IOU তে সেমিস্টার ৪ মাসের,
                  ফি ৯০ ডলার। প্রায় ৮০০০ টাকা। ৪ মাস পর পর ৮০০০ টাকা দেওয়া লাগে
                  সেই হিসেবে মাসে ২০০০ টাকা। অন্যদিকে IOM এর মাসিক খরচ ৫০০ টাকা।
                  যা অনেকেটাই সবার সাধ্যের মধ্যে। ৩। লাইভ ক্লাশ: IOU তে এখন লাইভ
                  ক্লাশ এখন বন্ধ হয়ে গেছে। অর্থাৎ পূর্বের রেকর্ড করা ভিডিও দেখে
                  ক্লাশ করতে হবে। অন্যদিকে IOM এ ১০০% ক্লাশ লাইভ। তাই লাইভ
                  ক্লাশে ক্লাশ করে যে রিয়েল ফিলিংস রেকর্ডেড ক্লাশ অনেকটা ইউটিউব
                  ভিডিও দেখার মতই। ৪। সময়: IOU তে কিছু লাইভ ক্লাশ হলেও সময়
                  বাংলাদেশের সাথে মিলে না। আর IOM এ সব ক্লাশ রাত ৯ টা থেকে ১১
                  টা। সপ্তাহে ৪ দিন। যেটা সবার জন্য জয়েন করা সহজ। ৫। IOU তে শুধু
                  এমসিকিউ পরীক্ষা হয়। যেটার মাধ্যমে একজন স্টুডেন্টকে পরিপূর্ন
                  যাচাই করা যায় না। বিশেষ করে কোরআনের ক্ষেত্রে তাজবীদ শুদ্ধ হয়
                  না। অন্যদিকে IOM এ ছেলেদের জন্য ছেলে উস্তাদ এবং মেয়েদের জন্য
                  মেয়ে উস্তাদ প্রত্যেককে ধরে ধরে কোরআন শুদ্ধ করেন। আর অন্যদিকে
                  পরীক্ষার ক্ষেত্রেও এমসিকিউ এবং ভাইবা দুইটা হয়। ৬। IOU যোগাযোগ:
                  www.iou.edu.gm IOM যোগাযোগ: www.iom.edu.bd
                  https://www.facebook.com/iom.edu.bd/ আল্লাহ আমাদের সবার
                  দ্বীনের পথের যাত্রাকে কবুল করুন।
                </p>
              </div>
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
      </div>
    </div>
  );
};

export default AlimCourse;
