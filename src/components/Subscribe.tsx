import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import './subscribe.scss';
import { FaMicroscope } from 'react-icons/fa';
import { motion } from 'framer-motion';



export const Subscribe = () => {
  const form = useRef<HTMLFormElement>(null!);

  const sendEmail = (e: any) => {
    e.preventDefault()
  
    emailjs
      .sendForm('service_7tmwh4g', 'template_w7qbq2z', form.current, 'b6TJmQrjbqUmxIZnF')
      .then(
        () => {
          alert('Message successfully sent!')
          // window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }


  return (
  <motion.div id="subscribe" className="app__newsletter rounded m-auto flex flex-col md:flex-row justify-start items-center md:h-[12vh] mt-12 md:mt-24"
    initial={{ opacity: 0, scale: 0.1 }}
    whileInView={{ opacity: 1, scale: 1}}
    transition={{ ease: 'easeInOut', duration: 0.5}}>
    <FaMicroscope className=" md:px-2 basis-1/12" size={64} />
    <div className="app__newsletter-heading mt-4 basis-2/5">
      <h1 className="headtext__cormorant text-xl md:text-lg lg:text-xl xl:text-2xl font-bold pb-1">Subscribe To Our Newsletter</h1>
      <p className="p__opensans pb-4 text-md md:text-md lg:text-lg xl:text-xl">And never miss the latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex flex-row flex__center items-center grow md:pl-4">
      <form ref={form} onSubmit={sendEmail}>
        <input name="email" type="email" className="text-black z-50 bg-white h-fit p-2 self-center md:px-4 basis-2/3" placeholder="Email address" />
        <button type="button" className="ml-4 md:mr-2 border-[1px] custom__button text-white bg-black rounded h-fit p-2 self-center md:px-4 border-black">Subscribe</button>
        <input hidden value="send" type="submit"></input>
      </form>
    </div>
  </motion.div>
  )
}

export default Subscribe;