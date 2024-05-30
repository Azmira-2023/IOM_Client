

const SchoolMaqtab = () => {
  return (
    <div className="p-6">
    <h2 className="text-center uppercase text-lg bg-cyan-900 text-white font-semibold py-3 rounded-t-lg">
    School Maktab & Farj e Ain 
    </h2>
    <div className="flex flex-col lg:flex-row gap-6 bg-gray-100 rounded-b-lg p-6">
      <div className="flex-1 border rounded-lg p-6 bg-white shadow-md">
        <h3 className="text-center text-xl font-semibold"> School Maktab</h3>
        <p className='text-center text-lg'>12 Months Course Regular Course</p>
        <p className="mt-4">
        স্কুল মক্তব কোর্সটিতে আছে ১২টি সাবজেক্ট এর সম্মিলিত সিলেবাস। এগুলো হল তাজবীদ, হিফজুল কুরআন, দোয়া ও সুন্নাহ, আক্বিদা, ফিকহ, দাওয়াহ, আরবি ভাষা, আসমা উল হুসনা, সিরাহ, ইসলামি ইতিহাস, ইসলামী জ্ঞান, এবং ইলমের আদব। 
        </p>
        <button className="mt-4 px-4 py-2 bg-cyan-900 text-white rounded">Apply now</button>
      </div>

      <div className="flex-1 border rounded-lg p-6 bg-white shadow-md">
        <h3 className="text-center text-xl font-semibold">Farz-E-Ain </h3>
        <p className='text-center text-lg'>6 Months Course Single Course</p>
        <p className="mt-4">
        The entire course will provide an understanding of the essentials of Islam. This course will teach Tajweed, Aqeedah, Fiqh, Dawah and the manners of acquiring knowledge. It is basically the first semester of Alim course. That is, those who enroll in the Alim course are taught these subjects in their first semester. 
        </p>
        <button className="mt-4 px-4 py-2 bg-cyan-900 text-white rounded">Apply now</button>
      </div>
    </div>
  
  </div>
  )
}

export default SchoolMaqtab