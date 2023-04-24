import Brown from '../assets/brown2.png';
import {FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { Link } from 'react-scroll';

const Banner = () => {
  return <section id='home' className='min-h-[75vh] lg:min-h-[78vh] flex items-center'>
          <div className="container mx-auto">
              <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
                {/* text*/}
                <div className='flex-1  text-center font-secondary lg:text-left'>
                  <motion.h1 
                  variants={fadeIn('up', 0.3)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  viewport={{once: false, amount:0.7}} 
                  className='text-[55px] font-bold leading-[0.8] lg:text-[80px]'>GIDEON <span>ANOKYE</span>
                  </motion.h1>
                  <motion.div className='mb-4 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'
                  variants={fadeIn('up', 0.4)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  viewport={{once: false, amount:0.7}} >
                    
                    <span className='mr-4 text-white'>I am a</span>
                    <TypeAnimation sequence={[
                      'Developer', 
                      2000,
                      'Data Analyst', 
                      2000,
                      'Designer', 
                      2000,
                    ]} 
                    speed={50}
                    className='text-accent'
                    wrapper='span'
                    repeat= {Infinity} />
                  </motion.div>
                  <motion.p 
                  variants={fadeIn('up', 0.5)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  viewport={{once: false, amount:0.7}} 
                  className='mb-5 max-w-lg mx-auto lg:mx-0'>Innovative Web Engineer and a Data Analyst who brings track record
                  of success in  delighting customers with top-notch applications for diverse needs. Analytical,
                  intellectually curious and always seeking out ways to improve code and designs. Expert in multiple programming languages,
                  applications and development frameworks.
                  </motion.p>
                  <motion.div 
                  variants={fadeIn('up', 0.6)} 
                  initial='hidden' 
                  whileInView={'show'} 
                  viewport={{once: false, amount:0.7}} 
                  className='flex max-w-max gap-x-6 items-center mb-8 mx-auto lg:mx-0'>
                   <Link to='contact' activeClass='active' smooth={true} spy={true} ><button className='btn btn-lg'>Contact Me</button></Link> 
                    <a href="#" className='text-gradient btn-link cursor-pointer'>My Portfolio</a>
                  </motion.div>
                  {/* socials*/}
                    <motion.div 
                    variants={fadeIn('up', 0.5)} 
                    initial='hidden' 
                    whileInView={'show'} 
                    viewport={{once: false, amount:0.7}} 
                    className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0 '>
                      <a href="#">
                        <FaYoutube/>
                      </a>
                      <a href="#">
                        <FaGithub/>
                      </a>
                      <a href="#">
                        <FaDribbble/>
                      </a>
                    </motion.div>
                </div>
                {/* image*/}
                <motion.div 
                variants={fadeIn('down', 0.8)} 
                initial='hidden' 
                whileInView={'show'} 
                className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[400px]'>
                  <img src={Brown} alt="" />
                </motion.div>
              </div>
          </div>
          </section>;
};

export default Banner;
