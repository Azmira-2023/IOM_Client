

const NoticeBoard = () => {
  return (
    <div className="mt-4 p-6">
    <div className="border rounded-lg bg-gray-100 shadow-md">
      <h2 className="text-center uppercase text-lg bg-black text-white font-semibold py-2 rounded-t-lg">
       Notice Board 
      </h2>
      <p className="text-lg text-center">Admission, Exam & Other Notices</p>
      <div className="p-2 space-y-6">
        <p className="bg-white">
        Rukaiyah Course Admission deadline extended upto 10th May
        May 9, 2023, 2:47 pm - Admission Notice 
        </p>
        </div>
        <div className="p-2 space-y-6">
        <p className="bg-gray-300">
        Midterm exam of batch 2309 will start on 10th May, In Sha Allah
         May 9, 2023, 12:29 pm - Examination Notice, Batch 2309 </p>
         <div className="flex justify-center">
            <button className="rounded bg-black text-white py-2 px-4">All Notice</button>
          </div>

        </div>
        
        </div> 
        </div>
  )
}

export default NoticeBoard