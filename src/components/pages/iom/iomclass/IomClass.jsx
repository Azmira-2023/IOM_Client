const IomClass = () => {
  const videoData = [
    {
      videos: [
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Dawah – 1st Semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Aqidah – 1st Semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Fiqh – 1st Semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Tajweed – 1st Semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Dawah – 2nd Semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Fiqh – 2nd semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Seerah – 3rd Semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Hadith – 4th Semester"
        },
        {
          url: "https://www.w3schools.com/html/mov_bbb.mp4",
          title: "Quran Translation Class – 4th Semester"
        },
      ]
    }
  ];

  return (
    <div className="grid grid-cols-7">
      <div className="col-span-4">
        <div className="mt-8 mx-16 max-w-4xl bg-gray-200 p-8">
          <h1 className="text-4xl text-indigo-400 uppercase text-center font-bold">
            IOM Sample Classes
          </h1>
          <p className="text-black text-xl border-b-2 border-blue-500 text-center">
            Lectures on some topics of IOM
          </p>
          <p className="text-xl text-black mt-2">
            Here are videos of some IOM classes:
          </p>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {videoData[0].videos.map((video, index) => (
              <div key={index} className="text-center">
                <video
                  src={video.url}
                  controls
                  className="w-full h-[300px] rounded"
                ></video>
                <p className="text-xl text-red-950 mt-2">{video.title}</p>
              </div>
            ))}
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

export default IomClass;
