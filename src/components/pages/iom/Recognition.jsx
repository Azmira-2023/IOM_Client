import { Link } from "react-router-dom";

const Recognition = () => {
  return (
    <div className="mt-12 p-8 bg-gray-200 max-w-4xl mx-auto">
      <h1 className="text-xl mb-4">আইওএম বোর্ড সার্টিফিকেট</h1>
      <img
        src="https://iom.edu.bd/wp-content/uploads/2023/05/IOM-Board-Certificate.jpg"
        alt="IOM Board Certificate"
        className="items-center mt-4 h-[600px] w-full"
      />
      <div className="mt-8">
        <h1 className="text-xl mb-4">আইওএম ISO সার্টিফিকেট</h1>
        <img
          src="https://iom.edu.bd/wp-content/uploads/2023/05/QMS.jpg"
          alt="IOM ISO Certificate"
          className="items-center mt-4 h-[600px] w-full"
        />
      </div>
      <div className="mt-8">
        <h1 className="text-xl mb-4">আস-সুন্নাহ ফাউন্ডেশন সার্টিফিকেট</h1>
        <img
          src="https://iom.edu.bd/wp-content/uploads/2023/05/As-Sunnah-Foundation-Certificate.jpeg"
          alt="As-Sunnah Foundation Certificate"
          className="items-center mt-4 h-[600px] w-full "
        />
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
  );
};

export default Recognition;
