import { useState } from 'react';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import LeftArrowIcon from '../../../components/core/icons/LeftArrowIcon';
import RightArrowIcon from '../../../components/core/icons/RightArrowIcon';
import CircleIcon from '../../../components/core/icons/CircleIcon';
import bannar1 from '../../../assets/bannar1.jpg';
import bannar2 from '../../../assets/bannar2.jpeg';
import bannar3 from '../../../assets/bannar3.jpeg';

const Banner = () => {

  


  const [currentBanner, setCurrentBanner] = useState(0);
  const bannars = [bannar1, bannar2, bannar3];

  const nextBanner = () => {
    setCurrentBanner((prevIndex) => (prevIndex === bannars.length - 1 ? 0 : prevIndex + 1));
  };

  const prevBanner = () => {
    setCurrentBanner((prevIndex) => (prevIndex === 0 ? bannars.length - 1 : prevIndex - 1));
  };

  return (
    <div className="relative -z-10">
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <div className="hidden md:block">
          <div className="swiper-button-prev transition-all group bg-white/40 absolute translate-y-1/2" onClick={prevBanner}>
            <span>
              <LeftArrowIcon className="text-secondary" />
            </span>
          </div>
          <div className="swiper-button-next group transition-all bg-white/40 absolute translate-y-1/2" onClick={nextBanner}>
            <span>
              <RightArrowIcon className="text-secondary text-2xl" />
            </span>
          </div>
        </div>
      </div>
      <div className="border border-lime-700 shadow-gray-700 shadow-2xl mx-auto flex items-center overflow-hidden mt-5 bg-white text-bengali relative">
        <img
          src={bannars[currentBanner]}
          alt="Banner"
          className="bg-gray-950 py-4 px-6 text-white w-full"
          style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}        
        />
        <div className="absolute bottom-0 w-full bg-gray-950 py-4 px-6 text-white">
        {/* <p className="font-bold uppercase text-xl">Notice</p> */}
          <Marquee pauseOnHover style={{}}>
            {[...new Array(5)].map((_, index) => (
              <div key={index} className="mr-5">
                <Link className="flex items-center gap-2 text-xl" to="/">
                  <CircleIcon /> বিসমিল্লাহির রহমানির রহীম “পড় তোমার প্রভুর নামে যিনি তোমাকে সৃষ্টি করেছেন।” মানবজাতির ইহ ও পরলৌকিক সফলতার মূল মন্ত্রটিই প্রতিধ্বনিত হয়েছে ওহীর এ বাণীতে।
                </Link>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      </div>

   
  );
};

export default Banner;
