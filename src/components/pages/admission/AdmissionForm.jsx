import b3 from "../../../assets/b3.jpg";

const AdmissionForm = () => {
  return (
    <div
      style={{ backgroundImage: `url(${b3})` }}
      className="bg-cover bg-center h-[150vh] "
    >
      <div className="p-12">
        <h1 className="text-4xl font-semibold text-center text-blue-700">Admission Form</h1>
        <p className=" mt-8 text-justify text-xl text-black">
          এই ভর্তি ফর্মটি পূরণ করার পূর্বে দয়া করে আই ও এম এর বিকাশ নাম্বারে
          (01766305059) ভর্তি ফী পেমেন্ট করে ট্রানজেকশন আইডিটি সংরক্ষণ করুন অথবা
          আপনি যদি পেমেন্ট গেটওয়ে দিয়ে পেমেন্ট করতে চান সেক্ষেত্রে ভর্তির
          নির্দিষ্ট পরিমাণ ফি আপনার বিকাশ, রকেট, নগদ অথবা কার্ডে ব্যালেন্স
          হিসাবে রাখুন। এই ফর্মের শেষ ধাপে আপনাকে পেমেন্ট তথ্য অথবা গেটওয়ে
          দিয়ে পেমেন্ট করতে হবে। পেমেন্ট ইনফরমেশন ব্যতীত আপনার ফর্মটি বাতিল বলে
          গণ্য হবে। আপনি যদি পূর্বে পূরণ করা ফর্মের মাধ্যমে পেমেন্ট করতে চান তবে
          উপরের "Continue to Payment" বাটনে ক্লিক করে আপনার পূর্বে প্রদান করা
          মোবাইল নম্বর ও জন্ম তারিখ দিয়ে সার্চ করে পেমেন্ট করুন। জাঝাকুমুল্লাহু
          খইর।{" "}
        </p>
      </div>
      <div className="flex justify-center items-center mt-8">
        <div className="bg-white p-6 px-24 rounded max-w-2xl w-full">
          <div className="flex">
          <p className="text-2xl font-semibold text-center">Online Application Form</p>      
          </div>
         
        </div>
        
      </div>
      <div className="mt-4 flex justify-center items-center">
        <div className="bg-white bg-opacity-75 p-8 rounded shadow-lg max-w-2xl w-full text-xl ">
          <form className=" bg-white p-6 rounded">
            <div className="mb-6">
              <p className="font-medium mb-2 text-2xl">Step-1: Course Choice</p>
              <label htmlFor="program" className="block text-xl font-medium mb-2">Program/Course</label>
              <select id="program" className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Please Select Course</option>
                <option value="course1">Course 1</option>
                <option value="course2">Course 2</option>
                <option value="course3">Course 3</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="session" className="block text-xl font-medium mb-2">Admission Session</label>
              <select id="session" className="w-full p-2 border border-gray-300 rounded-lg">
                <option>Please Select Session</option>
                <option value="session1">Session 1</option>
                <option value="session2">Session 2</option>
                <option value="session3">Session 3</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button type="submit"  className="bg-teal-900 text-white p-2 rounded hover:bg-rose-900 py-2 px-28 ">Next</button>
            </div>
          </form>
        </div>
      </div>

      
  
    </div>
  );
};

export default AdmissionForm;

{
  /* <nav className="bg-cyan-800 p-4 mt-4 py-6">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-lg font-bold flex items-center">
            <img
              className="h-[100px] w-[100px]"
              src="https://admission.iom.edu.bd/assets/image/iom/InstituteLogoColorSolo.png"
              alt="company logo"
            />
            <div className="ml-4 text-xl"> {/* Add left margin here */
}
//       <p className='uppercase'>Online Islamic Madrasha</p>
//       <p>Through Knowledge, Towards Jannah</p>
//     </div>
//   </div>
//   <div className="space-x-4 text-xl">
//     <button className='rounded bg-black px-4 py-2'> <Link href="#" className="text-white hover:text-gray-400">Home</Link></button>
//     <button className='rounded bg-black px-4 py-2'>
//     <Link href="#" className="text-white hover:text-gray-400">Continue to Payment</Link></button>
//     <button className='rounded bg-black px-4 py-2'>
//     <Link href="#" className="text-white hover:text-gray-400">Website</Link></button>

//   </div>
// </div>
// </nav> */}
