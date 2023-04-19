import Brown from '../assets/brown2.png';
import {FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa'
import {TypeAnimation} from 'react-type-animation'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'

const Banner = () => {
  return <section id='home' className='section'>
          <div className="container mx-auto">
              <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center '>
                {/* text*/}
                <div className='flex-1  text-center font-secondary lg:text-left'>
                  <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>GIDEON <span>ANOKYE</span></h1>
                  <div className='mb-3 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
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
                  </div>
                  <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Laboriosam optio impedit 
                    nostrum esse fugiat explicabo accusantium
                  </p>
                  <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                    <button className='btn btn-lg'>Contact Me</button>
                    <a href="#" className='text-gradient btn-link'>My Portfolio</a>
                  </div>
                  {/* socials*/}
                    <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
                      <a href="#">
                        <FaYoutube/>
                      </a>
                      <a href="#">
                        <FaGithub/>
                      </a>
                      <a href="#">
                        <FaDribbble/>
                      </a>
                    </div>
                </div>
                {/* image*/}
                <div>
                  <img src={Brown} alt="" />
                </div>
              </div>
          </div>
          </section>;
};

export default Banner;
