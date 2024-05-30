import AdmissionProcess from "./AdmissionProcess"
import Banner from "./Banner"
import Courses from "./Courses"
import Departments from "./Departments"
import FatwaBoard from "./FatwaBoard"
import IomBlog from "./IomBlog"
import NoticeBoard from "./NoticeBoard"
import Opinion from "./Opinion"
import RamadanCourse from "./RamadanCourse"
import SchoolMaqtab from "./SchoolMaqtab"
import SingleCourse from "./SingleCourse"
import SpecialCourses from "./SpecialCourses"
import StudentCorner from "./StudentCorner"
import Timeline from "./Timeline"
import WhyIom from "./WhyIom"


const Home = () => {
  return (
    
    <div className="space-y-10">
       <Banner />
      <div className="md:grid grid-cols-10 gap-6">
        <div className="col-span-7">
          <div className=" space-y-8">
          <Courses />
          <SchoolMaqtab />
          <SingleCourse />
          <RamadanCourse />
          <SpecialCourses />
          </div>      
        </div>
        <div className="col-span-3">
          <AdmissionProcess />
          <NoticeBoard />
          <IomBlog />
          <FatwaBoard />
        </div>
      </div>
      <div className="">
        <WhyIom />
        <Departments />
        <Timeline />
        <Opinion />
        <StudentCorner />
  
      </div>
    </div>
  )
}

export default Home