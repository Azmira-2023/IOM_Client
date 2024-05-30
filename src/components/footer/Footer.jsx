/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { IoLogoGoogleplus, IoLogoYoutube } from "react-icons/io";
// import { HiOutlineMailOpen } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="mt-12 bg-black ">
      <div className="flex  lg:flex-row px-5 lg:px-0 gap-12 max-w-screen-xl mx-auto py-10 ">
        {/* social media link */}
        <div>
        <div className="text-white mr-16">
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p className="mt-4">IOM Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div>

          <div className="mr-12 mt-8 gap-4 flex flex-row">
            <Link
              target="_blank"
              to="/https://www.facebook.com/dicmadrasha"
              className=" rounded-full bg-black p-2  hover:bg-yellow-700"
            >
              <FaFacebookF className="h-8 w-8 text-white " />
            </Link>
            <Link
              target="_blank"
              to=""
              className="rounded-full bg-black p-2 hover:bg-yellow-700"
            >
              <FaTwitter className="h-8 w-8 text-white " />
            </Link>
            <Link
              target="_blank"
              to=""
              className="rounded-full bg-black p-2 hover:bg-yellow-700"
            >
              <IoLogoGoogleplus className="h-8 w-8 text-white" />
            </Link>
            <Link
              target="_blank"
              to="https://ff.com/"
              className="rounded-full bg-black p-2 hover:bg-yellow-700"
            >
              <IoLogoYoutube className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
        {/* support */}
        <div className="footer p-8 bg-black text-white">
  <nav className="mb-6">
    <h6 className="footer-title">IOM Panel</h6>
    <Link className="link link-hover">About IOM </Link>
    <Link className="link link-hover">IOM Accreditation </Link>
    <Link className="link link-hover">Teachers Panel </Link>
    <Link className="link link-hover">Views Of Scholars </Link>
    <Link className="link link-hover">Student's Opinion </Link>
  </nav>
  <nav className="mb-6">
    <h6 className="footer-title">Courses</h6>
    <Link className="link link-hover">Alim Course</Link>
    <Link className="link link-hover">School Maqtab</Link>
    <Link className="link link-hover">Single Courses</Link>
    <Link className="link link-hover">Special Courses</Link>
    <Link className="link link-hover">Ramadan Courses</Link>
  </nav>
  <nav className="mb-6">
    <h6 className="footer-title">Admission Procedure</h6>
    <Link className="link link-hover">Admission Process</Link>
    <Link className="link link-hover">Fee Details</Link>
    <Link className="link link-hover">Poor Fund</Link>
    <Link className="link link-hover">Apply Now</Link>
    <Link className="link link-hover">Poor Fund</Link>
    <Link className="link link-hover">After Admission</Link>
  </nav>
  <nav className="mb-6">
    <h6 className="footer-title">Other Activities</h6>
    <Link className="link link-hover">E-Library</Link>
    <Link className="link link-hover">Ifatwa</Link>
    <Link className="link link-hover">Ahkia</Link>
    <Link className="link link-hover">Enterpreneurship Club</Link>
    <Link className="link link-hover">Blood Directory</Link>
  </nav>
  <form>
    <h6 className="footer-title text-white">Newsletter</h6>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text text-white">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="input input-bordered join-item"
        />
        <button className="btn btn-primary join-item">Submit</button>
      </div>
    </fieldset>
  </form>
</div>
      </div>
      {/* copyright */}

      <div className="block text-2xl font-semibold py-4 bg-white text-black sm:text-center ">
        Copyright © 2024 -{" "}
        <a href="https://flowbite.com/" className="hover:underline font-bold">
          IOMbd.com
        </a>
        . All Rights Reserved.
        <a href="#" className="text-2xl text-black">
          Design & Developed by IOMbd.com{" "}
        </a>
      </div>
    </footer>
  );
};

export default Footer;
