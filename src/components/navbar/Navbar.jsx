// import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar p-6 bg-black text-white">
      <div className="navbar-start flex items-center">
       
        <img
          className="h-[100px] w-[150px]"
          src="https://admission.iom.edu.bd/assets/image/iom/InstituteLogoColorSolo.png"
          alt="company logo"
        />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white text-xl">
          <li>
            <Link to={"/"} className="px-5" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <details>
              <summary>IOM</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link to="/about-iom">About IOM</Link>
                </li>
                <li>
                  <Link to="/about-iom/acknowledgement">Acknowledgment</Link>
                </li>
                <li>
                  <Link to="/teachers-panel">Teacher's Panel</Link>
                </li>
                <li>
                  <Link to="/opinion-of-scholars">
                    The opinion of the scholars
                  </Link>
                </li>
                <li>
                  <Link to="/students-opinion">Student's Opinion</Link>
                </li>
                <li>
                  <Link to="/sample-class">IOM Sample Class</Link>
                </li>
                <li>
                  <Link to="/terms-conditions">Terms & Conditions</Link>
                </li>
                <li>
                  <Link to="/suggestions">Any Suggestion</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Admission Procedure</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link to="/alim-course">Alim Course</Link>
                </li>
                <li>
                  <Link to="/all-courses">All Courses</Link>
                </li>
                <li>
                  <Link to="/admission-form">Admission Form</Link>
                </li>
                <li>
                  <Link to="/poor-fund">Poor Fund</Link>
                </li>
                <li>
                  <Link to="/suggestions">Any Suggestion?</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Student Corner</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link to="/campus">Campus</Link>
                </li>
                <li>
                  <Link to="/portal">Portal</Link>
                </li>
                <li>
                  <Link to="/class-routine">Class Routine</Link>
                </li>
                <li>
                  <Link to="/course-fees">Alim/Single Course Fee Details</Link>
                </li>
                <li>
                  <Link to="/notice-board">Notice Board</Link>
                </li>
                <li>
                  <Link to="/support">Support</Link>
                </li>
                <li>
                  <Link to="/suggestions">Any Suggestion?</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>Other Activities</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link to="/e-library">E-library</Link>
                </li>
                <li>
                  <Link to="/fatwa-department">Fatwa Department</Link>
                </li>
                <li>
                  <Link to="/ahlia">Ahlia</Link>
                </li>
                <li>
                  <Link to="/iclinic">iClinic</Link>
                </li>
                <li>
                  <Link to="/family-counselling">Family Counselling</Link>
                </li>
                <li>
                  <Link to="/blood-directory">IOM Blood Directory</Link>
                </li>
                <li>
                  <Link to="/entrepreneurship-club">Enterpreneurship Club</Link>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>অফলাইন কার্যক্রম</summary>
              <ul className="p-2 text-black">
                <li>
                  <Link to="/offline-school">
                    IOM এর তত্ত্বাবধানে অফলাইন স্কুল
                  </Link>
                </li>
                <li>
                  <Link to="/offline-maktab">Offline Maktab</Link>
                </li>
                <li>
                  <Link to="/maktab-training">Maktab Training</Link>
                </li>
                <li>
                  <Link to="/offline-maktab-supervision">
                    IOM এর তত্ত্বাবধানে অফলাইন মক্তব
                  </Link>
                </li>
                <li>
                  <Link to="/offline-maktab-donation">
                    Offline Maktab Donation
                  </Link>
                </li>
                <li>
                  <Link to="/offline-madrasha">
                    Offline Madrasha under the supervision of IOM
                  </Link>
                </li>
                <li>
                  <Link to="/offline-evening-madrasha">
                    Offline Evening Madrasha under the supervision of IOM
                  </Link>
                </li>
                <li>
                  <Link to="/suggestions">Any Suggestions?</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/login"} className="hidden lg:flex">
          <button className="px-6 py-2.5 border-2 border-white font-medium rounded-xl flex items-center justify-between gap-3 text-white">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
