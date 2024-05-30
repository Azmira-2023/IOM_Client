import Login from "../components/pages/login/Login";
import Home from "../components/pages/home/Home";
import Root from "../root/Root";
import { createBrowserRouter } from "react-router-dom";
import AboutIom from "../components/pages/iom/AboutIom";
import Acknowledgement from "../components/pages/iom/acknowledgement/Acknowledgement";
import TeachersPanel from "../components/pages/iom/teacherpanel/TeachersPanel";
import ScholarsOpinion from "../components/pages/iom/scholars/ScholarsOpinion";
import StudentsOpinion from "../components/pages/iom/studentopinion/StudentsOpinion";
import IomClass from "../components/pages/iom/iomclass/IomClass";
import TermsAndCon from "../components/pages/iom/termsandcon/TermsAndCon";
import AnySuggestions from "../components/pages/iom/suggestions/AnySuggestions";
import AlimCourse from "../components/pages/admission/AlimCourse";
import AdmissionForm from "../components/pages/admission/AdmissionForm";
import PoorFund from "../components/pages/admission/PoorFund";
import AnySuggestion from "../components/pages/admission/AnySuggestion";
import Campus from "../components/pages/studentcorner/Campus";
import Portal from "../components/pages/studentcorner/Portal";
import ClassRoutine from "../components/pages/studentcorner/ClassRoutine";
import AlimFess from "../components/pages/studentcorner/AlimFess";
import NoticeBoard from "../components/pages/home/NoticeBoard";
import Support from "../components/pages/studentcorner/Support";
import Elibrary from "../components/pages/otheractivities/Elibrary";
import FatwaBoard from "../components/pages/home/FatwaBoard";
import Ahlia from "../components/pages/otheractivities/Ahlia";
import Iclinic from "../components/pages/otheractivities/Iclinic";
import FamilyCounselling from "../components/pages/otheractivities/FamilyCounselling";
import BloodDirectory from "../components/pages/otheractivities/BloodDirectory";
import Enterpreneur from "../components/pages/otheractivities/Enterpreneur";




const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/about-iom",
        element: <AboutIom/>,
      },
      {
        path: "/about-iom/acknowledgement",
        element: <Acknowledgement />,
      },
      {
        path: "/teachers-panel",
        element: <TeachersPanel />,
      },
      {
        path: "/opinion-of-scholars",
        element: <ScholarsOpinion/>
      },
      {
        path:"/students-opinion",
        element: <StudentsOpinion />
      },
      {
        path:"/sample-class",
        element:< IomClass/>
      },
      {
        path:"/terms-conditions",
        element:<TermsAndCon/>
      },
      {
        path:"/suggestions",
        element:<AnySuggestions/>
      }, 
      {
        path:"/alim-course",
        element:<AlimCourse/>
      },
     
  
      {
        path:"/admission-form",
        element:<AdmissionForm/>
      },
      {
        path:"/poor-fund",
        element:<PoorFund/>
      },
      {
        path:"/class-routine",
        element:<ClassRoutine/>
      },
      {
        path:"/campus",
        element:<Campus/>
      },
      {
        path:"/portal",
        element:<Portal/>
      },
      {
        path:"/course-fees",
        element:<AlimFess />
      },
      {
        path:"/notice-board",
        element:<NoticeBoard/>
      },
      {
        path:"/support",
        element:<Support/>
      },
      {
        path:"/e-library",
        element:<Elibrary/>
      },
      {
        path:"/fatwa-department",
        element:<FatwaBoard/>
      },
      {
        path:"/ahlia",
        element:<Ahlia/>
      },
      {
        path:"/iclinic",
        element:<Iclinic/>
      },
      {
        path:"/family-counselling",
        element:<FamilyCounselling/>
      },
      {
        path:"/blood-directory",
        element:<BloodDirectory/>
      },
      {
        path:"/entrepreneurship-club",
        element:<Enterpreneur/>
      },
      


    ],
  },
]);

export default Router;
