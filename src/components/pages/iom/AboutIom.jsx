import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import About from './About';
import OurAims from './OurAims';
import BoardMember from './BoardMember';
import Recognition from './Recognition';
import QandA from './QandA';

const AboutIom = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const handleMenuClick = (menuItem) => {
    setSelectedMenuItem(menuItem);
  };

  return (
    <div >
      <div className="bg-gray-300 py-8 mt-8">
        <h1 className="text-center text-7xl font-bold">About IOM</h1>
        <p className="text-center text-5xl">Introduction, Objectives and Governing Council</p>
      </div>
      
      <div className="flex text-xl text-black">
        <div className="w-1/4 p-20">
          <ul className="space-y-2 ">
            <li
              onClick={() => handleMenuClick('aboutIOM')}
              className={`cursor-pointer border  p-2 ${selectedMenuItem === 'aboutIOM' ? 'font-bold' : ''}`}
            >
              About IOM
            </li>
            <li
              onClick={() => handleMenuClick('ourAimsAndObjectives')}
              className={`cursor-pointer border p-2 ${selectedMenuItem === 'ourAimsAndObjectives' ? 'font-bold' : ''}`}
            >
              Our Aims and Objectives
            </li>
            <li
              onClick={() => handleMenuClick('boardOfDirectors')}
              className={`cursor-pointer border p-2 ${selectedMenuItem === 'boardOfDirectors' ? 'font-bold' : ''}`}
            >
              Board of Directors
            </li>
            <li
              onClick={() => handleMenuClick('recognitionAndAchievement')}
              className={`cursor-pointer border p-2 ${selectedMenuItem === 'recognitionAndAchievement' ? 'font-bold' : ''}`}
            >
              Recognition and Achievement
            </li>
            <li
              onClick={() => handleMenuClick('faq')}
              className={`cursor-pointer border p-2 ${selectedMenuItem === 'faq' ? 'font-bold' : ''}`}
            >
              Frequently Asked Q/A
            </li>
          </ul>
        </div>
        <div className="w-3/4 p-4 sticky top-0">
          {selectedMenuItem === 'aboutIOM' && <div> <About /> </div>}
          {selectedMenuItem === 'ourAimsAndObjectives' && <div> <OurAims /> </div>}
          {selectedMenuItem === 'boardOfDirectors' && <div> <BoardMember /> </div>}
          {selectedMenuItem === 'recognitionAndAchievement' && <div> <Recognition /> </div>}
          {selectedMenuItem === 'faq' && <div><QandA/></div>}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default AboutIom;
