import { Link } from "react-router-dom";

const StudentCorner = () => {
  const navItemsRow1 = [
    "Class Routine",
    "Deposit Slip",
    "Book List",
    "ID Card",
    "Support",
    "Live Class Approval",
    "Attendance Correction",
  ];

  const navItemsRow2 = [

    "Certificate",
    "Terms & Conditions",
    "Refund Policy",
    "Courier Problem",
    "Manual Payment",
    "Any Suggestion",
  ];

  return (
    <div className="p-4 mt-6">
      <h1 className="text-center text-4xl font-bold">Student Corner</h1>
      <div className="navbar bg-gray-200 py-12 mt-4">
        <div className="navbar-center hidden lg:flex flex-col">
          <ul className="menu menu-horizontal px-2 text-xl font-bold text-black gap-4 mb-4">
            {navItemsRow1.map((item, index) => (
              <li key={index}>
                <Link to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <ul className="menu menu-horizontal px-2 text-xl font-bold text-black gap-4">
            {navItemsRow2.map((item, index) => (
              <li key={index}>
                <Link to={`/${item.replace(/\s+/g, '-').toLowerCase()}`}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudentCorner;
