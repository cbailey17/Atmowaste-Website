import { motion } from 'framer-motion';
import './about.css';
import { useRef } from 'react';


export const About = () => {
  const aboutRef = useRef(null);

  return (
    <section id="aboutSectionLink" className="about text-white" ref={aboutRef}>
      <motion.div id="whatAtmo" className="h-auto w-[88%] rounded-xl m-auto"
        initial={{ opacity: 0, y: 0, scale: 0.6 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.7 }}>
        <div className="flex flex-col sm:flex-col md:flex md:h-[14vh] m-auto">
            <div className="mt-8 text-xl basis-2/6 px-[20px]">
                <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
                <motion.h1>Who is AtmoWaste</motion.h1>
            </div> 
            <motion.h4 className="h mx-auto px-[20px] pt-4 basis-4/6">
              We are experts from various fields working together to use innovative technologies to reduce air pollution and plastic waste. We aim to improve life for everyone by minimizing atmospheric waste, fighting climate change, and saving natural resources.
            </motion.h4>
        </div>
        <div className="flex flex-col md:flex-row p-4 justify-between mt-12 md:mt-[70px] md:px-[50px] min-h-[50px]">
          <motion.h1 className="gradient__text min-h-max md:text-3xl"
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: .7, duration: 0.7 }}>
              Restoring balance through Atmospheric Waste Management Services
          </motion.h1>

        <motion.button
            id="button"
            className="rounded-lg py-2 px-8 mt-2 min-w-fit overflow-hidden self-center"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Join Our Efforts
        </motion.button>
        </div>
        <div className="flex flex-col sm:flex-col lg:flex-row w-full mt-8 mb-2 justify-evenly p-4">
          <motion.div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Our Approach</h1>
            <p id="paragraph">Our comprehensive strategy for carbon capture, storage, and pollution-to-product conversion involves various innovative techniques. We are identifying the most effective and synergistic combinations of technologies for collecting and containing carbon dioxide and other air pollutants before recycling the waste into useful products. We will continue to refine our approach as new technologies emerge.</p>
          </motion.div>
          <motion.div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Accelerating the natural process</h1>
            <p id="paragraph">Our goal is to accelerate carbon capture using efficient, man-made technologies through carbon capture and storage (CCS) systems, which involve capturing carbon dioxide emissions directly from the air or industrial processes. From here we are able to either convert the carbon dioxide into practical goods or store it underground in geological formations.</p>
          </motion.div>
          <motion.div className="w-[100%] sm:w-[100%] md:w-[100%] lg:w-[30%]"
            initial={{ opacity: 0, y: -200 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}>
            <div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2"></div>
            <h1 className="text-xl pb-2">Employing AI Solutions</h1>
            <p id="paragraph">We are utilizing cutting-edge artificial intelligence (AI) and machine learning (ML) models to analyze complex data, predict pollution trends, and anticipate population shifts. By harnessing this technology we are able to forecast changes in climate patterns and identify optimal locations for Atmospheric Waste Management facilities, while also reducing the time and resources required for site selection.</p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

  export default About;
