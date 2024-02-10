import React from 'react';
import { motion } from 'framer-motion';
import './philosophy.scss';
import co2Reduce from '../../assets/img/co2Reduce.avif';
import whiteboard from '../../assets/img/whiteboard.jpg';
import ai from '../../assets/img/ai.png';

interface SectionProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  gradient?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, children, gradient=true}) => (
  <section className={`my-4 flex flex-col rounded-lg border-1 w-[90%] mx-auto`}>
    <h1 className="text-center text-3xl pt-4 gradient__text">{title}</h1>
    {gradient && <motion.div className={`rounded-xl w-[45px] h-[4px] ${gradient ? 'gradient__bar' : ''} mb-2 self-center mt-4`} />}
    <h3 className="text-white text-center p-3 md:pb-12 sm:pb-12 pb-8">{subtitle}</h3>
    {children}
  </section>
);

interface ValueProps {
  title: string;
  description: string;
}

const Value: React.FC<ValueProps> = ({ title, description }) => (
  <div className="pb-6 flex md:gap-2 sm:gap-0 gap-0 lg:gap-24 xl:gap-24">
    <div>
      <motion.div className="rounded-xl w-[45px] h-[4px] gradient__bar mb-2" />
      <motion.h1 className="text-white text-md lg:text-xl min-w-[120px]">{title}</motion.h1>
    </div>
    <motion.p className="subtext text-sm lg:text-lg mb-2">{description}</motion.p>
  </div>
);

const Philosophy: React.FC = () => (
  <div id="philosophy" className="mb-12 mt-12 relative">
    <motion.h1
      className="gradient__text text-4xl md:text-5xl text-center"
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
      Our Philosophy
    </motion.h1>
    <motion.h2
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
      className="text-white text-center p-4 text-md md:text-xl lg:text-2xl xl:text-2xl mb-8"
    >
      Atmospheric Waste Management: Because we all deserve a second chance
    </motion.h2>
    <div className="vision w-[88%] mx-auto rounded-xl py-2">
      <Section title="Our Vision" subtitle="At the heart of our mission lies a bold vision" gradient={true}>
        <motion.h3
          className="text text-center p-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{}}
        >
          At the heart of our mission lies a bold vision: "Forming a worldwide network of carbon sequestration facilities,
          armed with the best adaptive solutions for any climate condition." This isn't a one-size-fits-all approach; rather,
          we leverage top-tier, climate-adaptive solutions to ensure optimal efficiency regardless of the geographical location
          or local climate of our facilities. Essentially, we are building a global mesh network of Carbon Capture facilities,
          and utilizing the most effective and efficient solutions engineered for any climate, anywhere.
        </motion.h3>
      </Section>
    </div>
    <div className='flex flex-col md:flex-col lg:flex-row px-2'>
      <Section title="" subtitle="" gradient={false}>
        <motion.div
          className="basis-5/12 m-auto my-auto"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img className="basis-0 rounded-xl" src={co2Reduce} alt="CO2 Reduction" />
          <motion.p className="sub__text text-center pt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          </motion.p>
        </motion.div>
      </Section>

      <Section title="Our Values" gradient={false} subtitle="Embodying Our Principles: Discover Our Core Values">
        <Value
          title="Innovation"
          description="We embrace emerging technologies and are committed to exploring new and innovative solutions to global atmospheric waste management challenges."
        />
        <Value
          title="Collaboration"
          description="We value the power of partnership and collaboration, both within our team and with local communities, governments, and other stakeholders around the world."
        />
        <Value
          title="Sustainability"
          description="We prioritize sustainability and strive to minimize our environmental impact in all aspects of our business."
        />
        <Value
          title="Social Responsibility"
          description="We are committed to making a positive impact in the communities we serve and aim to promote social responsibility through our work."
        />
      </Section>
    </div>

    <motion.div
        className="w-[92%] m-auto rounded-lg lg:hidden pt-4"
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2 }}
    >
      <img className="basis-0 rounded-xl" src={whiteboard} alt="whiteboard" />
    </motion.div>

    <div className='flex flex-col md:flex-col lg:flex-row px-2'>
      <Section title="Proven Technologies" gradient={false} subtitle="Innovative Solutions: Unleashing the Power of Proven Technologies for a Sustainable Future">
        <Value
          title="Direct Air Capture"
          description="Direct air capture technologies have emerged as a groundbreaking solution, harnessing the potential to actively remove carbon dioxide from the atmosphere, offering a tangible pathway towards combating climate change and creating a more sustainable future."
        />
        <Value
          title="Pyrolysis"
          description="Plastics and organic matter are converted into a liquid or gas fuel, which has the potential to improve Atmospheric Waste Management services."
        />
        <Value
          title="Biochar"
          description="A solid carbon-rich substance which has great potential for carbon sequestration and can help reduce greenhouse gas emissions from agriculture."
        />
        <Value
          title="Sea Kelp Farming"
          description="Utilizing the natural photosynthetic properties of cultivated seaweed in order to absorb carbon dioxide and pollutants from water, and producing kelp to be used as a sustainable source of food, fuel, and other products."
        />
      </Section>

        <motion.div
          className="basis-5/12 m-auto my-auto"
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <img className="basis-0 rounded-xl" src={ai} alt="AI Integration" />
          <motion.p className="sub__text text-center pt-8" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          </motion.p>
        </motion.div>
    </div>
  </div>
);

export default Philosophy;
