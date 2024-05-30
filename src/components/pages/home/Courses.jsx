

const Courses = () => {
  return (
    <div className=" bg-white mt-12 p-6">
        <h1 className="text-center text-white text-2xl font-bold bg-teal-950">Courses</h1>
        <p className="text-lg text-white text-center bg-teal-950">See Our Courses</p>
        <div className="mt-4 flex col-span-4">
            <div className="border border-gray-700 py-12">
            <h2 className="text-center font-bold text-2xl">Alim Courses(Main Courses)</h2>
            <p className="text-center text-lg">Bachelor in Dawah and Islamic Studies </p>
            <div className="mt-2 overflow-x-auto p-12">
      <table className=" min-w-full w-full bg-white border border-blue-700">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-blue-700">Current Batch</th>
            <th className="py-2 px-4 border border-blue-700">Current Session</th>
            <th className="py-2 px-4 border border-blue-700">Last Date of Admission</th>
            <th className="py-2 px-4 border border-blue-700">Class Start</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="py-2 px-4 border border-blue-700">Batch 2024</td>
            <td className="py-2 px-4 border border-blue-700">Spring 2024</td>
            <td className="py-2 px-4 border border-blue-700">June 1, 2024</td>
            <td className="py-2 px-4 border border-blue-700">June 15, 2024</td>
          </tr>
        </tbody>
      </table>
    </div>     
            <p className="p-4 text-justify">
            Alim course of 3 years duration has 14 subjects. Some of these 14 subjects have two/three courses which are taught over a period of one-and-a-half years. These 14 subjects are arranged for 3 years with a total of 26 courses. All single courses of IOM are included in Alim Course. That is, admission to this course does not require admission to single courses. We start class activities in January and July 2nd session every year in Alim and Single courses of IOM. For admission, the admission process must be completed 1 month before. 
            </p>
            <div className="p-6 flex mt-4 gap-8">
            <button className="px-4 py-2 bg-sky-700 text-white rounded">Apply Now</button>
            <button className="px-4 py-2 bg-sky-700 text-white rounded">Read More</button>
            </div>
            </div>
        </div>
    
        </div>
  )
}

export default Courses