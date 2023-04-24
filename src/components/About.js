import Countup from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'
import {Link }from 'react-scroll'

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
})


  return <section id='about' className='section' ref={ref}>
           <div className="container mx-auto">
            <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
            {/*img */}
            <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false,amount:0.3 }}

            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            </motion.div>
            {/*text */}
            <motion.div 
              variants={fadeIn('left', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once:false,amount:0.3 }}
              className='flex-1 '>
             <h2 className='h2 text-accent'>About Me</h2>
             <h3 className='h3 mb-4'>  I'm a Freelance Front-end Developer 
                   with over 2 years of experience
            </h3>
             <p className='mb-6'>
             I am an experienced and dedicated web developer, I bring a strong set of 
             skills and a passion for solving problems to every project. With a major
            focus on JavaScript React, I am proficient in technologies
            such as HTML5, CSS3, Nodejs, JavaScript, React JS, MongoDb, ExpressJs, Git, Github and Tailwind CSS. I am committed to staying current
            with the latest trends and techniques to ensure that my code is not only innovative 
            and testable, but also dynamic.
             </p>
             {/*stats*/}
             <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 { inView? <Countup start={0} end={2} duration={4} /> : 2 }
                   </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br/>
                    Experience
                  </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 { inView? <Countup start={0} end={20} duration={8} /> : 20 }+
                   </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Projects <br/>
                    Completed
                  </div>
              </div>

              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 { inView? <Countup start={0} end={10} duration={8} /> : 10 }+
                   </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Satisfied <br/>
                    Clients
                  </div>
              </div>
             </div>
             <div className='flex gap-x-8 items-center'>
                <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='btn btn-lg'>Contact Me</button></Link>  
                  <a className='text-gradient btn-link' href="#">My Portfolio</a>
                </div>
            </motion.div>
            </div>
           </div>
        </section>;
};

export default About;
