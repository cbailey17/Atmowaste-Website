import { useEffect, useState, useRef } from "react";
import "./hero.scss";
import { BsArrowDownCircle } from "react-icons/bs";
import { AnimatedLetters, Email, GlobeComponent } from "../../components";
import { motion } from "framer-motion";
import * as satellite from 'satellite.js';
import { WorldPoint, satConstants } from "../../assets/data/globe-data";


// Satellite data type
interface SatData {
  satrec: satellite.SatRec;
  name: string;
}

const Hero = () => {
  const [tooltip, setTooltip] = useState<WorldPoint & { x: number; y: number } | null>(null);
  const tooltipRef = useRef<HTMLDivElement | null>(null);
  const [time, setTime] = useState<Date>(new Date(Date.now() + 9 * 60 * 60 * 1000));

  const globeSize = window.innerWidth < 599 ? 390 : window.innerWidth < 1024 && window.innerWidth > 600 ? 700 : 800;

    //  Tooltip outside click useEffect
    useEffect(() => {
      const handleClickOutside = (event: any) => {
        if (tooltipRef.current && !tooltipRef.current.contains(event.target as Node)) {
          setTooltip(null);
        }
      };
  
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    // time ticker
  useEffect(() => {
    (function frameTicker() {
      requestAnimationFrame(frameTicker);
      setTime(time => new Date(+time + satConstants.TIME_STEP));
    })();
  }, []);

  const nameArray = ['A', 't', 'm', 'o', 's', 'p', 'h', 'e', 'r', 'i', 'c', ' ', 'W', 'a', 's', 't', 'e'];

  return (
    <>
      <div className="gpt3__header section__padding items-center lg:mt-auto xl:mt-auto 2xl:mt-auto" id="home">
        <div className="gpt3__header-content">
          <div className="whitespace-nowrap">
            <AnimatedLetters id="title" letterClass={'text-animate'} strArray={nameArray} idx={1} />
            <h1 id="two">Management</h1>
          </div>
          <p>Removing pollution from our air by leveraging some of the world's most efficient Carbon Capture technologies, and bringing Atmospheric Waste Management Services where they need to be.</p>
          <Email />
          <div className="gpt3__header-content__people">
            <p>Follow Our Journey</p>
            <a href="#aboutSectionLink">
              <BsArrowDownCircle className="down-arrow" color="#fff" size={44} id="arrow" />
            </a>
          </div>
        </div> 
          <GlobeComponent
            tooltipRef={tooltipRef}
            tooltip={tooltip}
            setTooltip={setTooltip}
            time={time}
            globeSize={globeSize} />

        </div>
      <div className="my-12 md:mt-80 md:mb-20 lg:my-0 justify-center sm:justify-center md:justify-center text-xs sm:text-xs md:text-lg lg:text-lg gap-2 sm:gap-4 md:gap-4 lg:gap-8 flex text-gray-500 lg:justify-start sm:mb-2 lg:ml-[100px] xl:ml-[100px] 2xl:ml-[100px] relative lg:-top-[200px] xl:-top-[200px] 2xl:-top-[200px]">
        <motion.p>Sustainability</motion.p>
        <motion.p>X-Prize</motion.p>
        <motion.p>AI Solutions</motion.p>
        <motion.p>Strategic Partnerships</motion.p>
      </div>
    </>
  );
}

export default Hero;
