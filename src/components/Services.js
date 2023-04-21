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
            <div className="container mx-auto">
              <div>
                {/*texts & image*/}
                <div className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12'>
                  <h2 className='h2 text-accent mb-6'>What I Do</h2>
                  <h3 className='h3 max-w-[455px] mb-16 '>I'm a Freelance Front-end Developer 
                   with over 2 years of experience</h3>
                   <button className='btn btn-sm'>See My Work</button>
                </div>
                {/*services*/}
                <div>Services</div>
              </div>
            </div>
          </section>;
};

export default Services;
