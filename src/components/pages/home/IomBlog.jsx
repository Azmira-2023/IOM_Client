const IomBlog = () => {
  return (
    <div className="mt-4 p-6">
      <div className="border rounded-lg bg-gray-100 shadow-md">
        <h2 className="text-center uppercase text-lg bg-lime-900 text-white font-semibold py-2 rounded-t-lg">
          IOM Blog
        </h2>
        <p className="text-lg ">From IOM Blog </p>
        <div className="p-2 space-y-6">
          <p className="bg-white">
            Freelancing and Outsourcing related some QA June 26, 2023, 12:44 pm
            - Others
          </p>
        </div>
        <div className="p-2 space-y-6">
          <p className="bg-gray-300">
            Dos and don'ts on the holy day of Jumu'a and some QA June 26, 2023,
            12:40 pm - Ibadaat{" "}
          </p>
        </div>
        <div className="p-2 space-y-6">
          <p className="bg-white">
            Arafah Fasting and some QA regarding Arafah Fasting June 26, 2023,
            11:50 am - Ibadaat{" "}
          </p>
        </div>
        <div className="p-2 space-y-6">
          <p className="bg-gray-300">
            Concept of Qurbani and some QAs related to Qurbani June 25, 2023,
            3:03 pm - Featured, - selected , Masayala-Masael
          </p>
        </div>

        <div className="flex justify-center">
          <button className="rounded bg-lime-900 text-white py-2 px-4">
            All Notice
          </button>
        </div>
      </div>
    </div>
  );
};

export default IomBlog;
