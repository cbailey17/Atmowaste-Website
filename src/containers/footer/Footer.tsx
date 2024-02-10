import './footer.scss';
import { motion } from 'framer-motion';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { BsHandIndex } from 'react-icons/bs';

const Footer = () => {
  return (
    <section className="footer__bg max-w-full text-center mt-12 md:mt-24 pt-24 relative overflow-hidden">
      <div>
        <motion.h1
          initial={{ }}
          animate={{}}
          whileInView={{}}
          className="gradient__text  text-2xl md:text-4xl px-4">The time to invest in the future of our planet is now</motion.h1>
      </div>
      <a href="#contact">
        <button className="remove rounded px-4 mt-12 h-[35px]">Remove CO2</button>
      </a>
      <motion.div
        initial={{ x: 100, y: 100 }}
        whileInView={{ x: 0, y: -20, scale: 0.4 }}
        transition={{ delay: 0.3, duration: 1.5, ease: "easeOut" }}
        className="flex justify-center ml-20">
        <BsHandIndex size={45} color='white'/>
      </motion.div>
      <div className="app__footer section__padding" id="login">
        <div className="app__footer-links md:my-2">
          <div className="app__footer-links_contact">
            <h1 className="app__footer-headtext">Contact Us</h1>
            <a className="p__opensans">HereToHelp@AtmoWaste.com</a>
          </div>

          <div className="app__footer-links_logo flex flex-col items-center">
            <p className="p__opensans z-50">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
            <div className="app__footer-links_icons flex">
              <FiFacebook />
              <FiTwitter />
              <FiInstagram />
            </div>
          </div>

          <div className="app__footer-links_work flex flex-col">
            <h1 className="app__footer-headtext">AtmoWaste</h1>
            <a href="#aboutSectionLink"className="p__opensans">About</a>
            <a href="#philosophy"className="p__opensans">Philosophy</a>
            <a href="#contact" className="p__opensans">Contact Us</a>
          </div>
        </div>

        <div className="footer__copyright">
          <p className="p__opensans">2023 Copyright &copy; AtmoWaste. All Rights Reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
