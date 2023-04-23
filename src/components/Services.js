import {BsArrowUpRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants';

const Services = () => {
const services =[
  {
    name:'UI/UX Design',
    description:'I can collabrate with UI/UX designers to raise user satisfaction and ensure user-based company goals are reached. Such goals might include increasing newsletter sign-ups and also improving sales conversions',
    link:'Learn More',
  },
  {
    name:'Development ',
    description:'I am eager to learn more skills and excited to continue growing as a web developer. I am a team player and I am always looking forward to working with a team to achieve a common goal.',
    link:'Learn More',
  },
  {
    name:'Digital Marketing ',
    description:'Digital Marketting requires an advance level of problem-solving and analytical thinking. I have the ability to analyze and market to the public and visualize several possible ways to advertise to the world with the help of marketting tools like PowerBi and Google trends to acertain the best solution.',
    link:'Learn More',
  },
  {
    name:'Producting Branding',
    description:'I rise to the challenge of updating and keeping in touch with the latest in technologies to brand my products. I have enormous interest in product branding and I beleive it plays the vital role marketing.',
    link:'Learn More',
  },
]

  return <section id='services' className='section'>
            <div className="container mx-auto ">
              <div className='flex flex-col lg:flex-row'>
                {/*texts & image*/}
                <motion.div 
                  variants={fadeIn('right', 0.4)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false,amount:0.3 }}

                className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12'>
                  <h2 className='h2 text-accent mb-6'>What I Do</h2>
                  <h3 className='h3 max-w-[455px] mb-16 '>I'm a Freelance Front-end Developer 
                   with over 2 years of experience</h3>
                   <button className='btn btn-sm'>See My Work</button>
                </motion.div>

                {/*services*/}
                <motion.div className='flex-1'
                  variants={fadeIn('left', 0.5)}
                  initial='hidden'
                  whileInView={'show'}
                  viewport={{once:false,amount:0.3 }}
                >
                  {/*service list*/}
                  <div>
                    {services.map((service)=>{
                      
                      return(
                        <div className='border-b border-white/20 h-[140px] mb-[38px] flex'>
                          <div className='max-w-[476px]'>
                            <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>{service.name}</h4>
                            <p className='font-secondary leading-tight'>{service.description}</p>
                          </div>
                          <div className='flex flex-col flex-1 items-end'>
                            <a href="#" className='btn w-9 h-9 mb-[42px] flex justify-center items-center'>
                              <BsArrowUpRight/>
                            </a>
                            <a href="#" className='text-gradient text-sm '>{service.link}</a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              </div>
            </div>
          </section>;
};

export default Services;
