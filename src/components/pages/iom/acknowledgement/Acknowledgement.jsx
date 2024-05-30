const Acknowledgement = () => {
  return (
    <div className="grid grid-cols-7 ">
      <div className="col-span-4">
        <div className=" gap-8 mt-12 p-8 mx-16 bg-gray-200 max-w-4xl">
          <h1 className="text-center text-2xl text-blue-500 font-bold">
            Acknowledgement
          </h1>
          <img
            src="https://iom.edu.bd/wp-content/uploads/2023/05/IOM-Board-Certificate.jpg"
            alt="IOM Board Certificate"
            className="items-center mt-4 h-[600px] w-full"
          />
          <p className="mt-2 text-center">
            Islamic Online Madrasah (IOM) is accredited by Hathajari Qaumi Board
          </p>
          <div className="flex gap-8">
            <div className="mt-8">
              <img
                src="https://iom.edu.bd/wp-content/uploads/2023/05/QMS.jpg"
                alt="IOM ISO Certificate"
                className="items-center mt-4 h-[600px] w-[600px]"
              />
              <p className="mt-4 text-center">
                IOM is an ISO certified educational institute of International
                standards.
              </p>
            </div>
            <div>
              <img
                src="https://iom.edu.bd/wp-content/uploads/2023/05/As-Sunnah-Foundation-Certificate.jpeg"
                alt="IOM ISO Certificate"
                className="items-center mt-10 h-[600px] w-[600px]"
              />
              <p className="mt-4 text-center">
                Top 10 out of 3000 organizations in As-Sunnah Foundation New
                Entrepreneur Award-2021
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

export default Acknowledgement;
