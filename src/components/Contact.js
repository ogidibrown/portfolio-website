import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { useState } from "react";

const Contact = () => {
  const form = useRef();

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();
    var data = {name:name, email:email, message:message}
    emailjs.send('service_0rsjnb4', 'template_x75fnzg', data, 'wIBNU0IcGALQ84mo2')
      .then((result) => {
          alert('Successfully Sent');
      }, (error) => {
          alert('Failed to Send!!');
      });

      setName("");
      setEmail("");
      setMessage("");
  };


  return <section id='contact' className='py-16 lg:section'>
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row">
              {/*texts*/}
              <motion.div 
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.3 }}
              className="flex-1">
                <div>
                  <h4 className="text-xl uppercase text-accent font-medium mb-2 tracking-wide">Get In Touch</h4>
                  <h2 className="text-[45px] lg:text[90px] leading-none mb-2  ">
                    Let's work <br/>
                    together!
                  </h2>
                </div>
              </motion.div>
               {/*form*/}
               <motion.form ref={form} onSubmit='submit'
               variants={fadeIn('left', 0.5)}
               initial='hidden'
               whileInView={'show'}
               viewport={{once:false,amount:0.3 }}
               className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start" >
                <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder="Your Name" value={name} type="text" name="name"onChange={(e)=>{setName(e.target.value)}}/>
                <input className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all" placeholder="Your Email" value={email} type="email"name="email"onChange={(e)=>{setEmail(e.target.value)}} />
                <textarea className="bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12" placeholder="Your Message" value={message} type="text" name="message" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                <button className="btn btn-lg" type="submit" onClick={sendEmail}>Send message</button>
               </motion.form>
            </div>
          </div>
         </section>;
};

export default Contact;
