import Countup from 'react-countup';
import {useInView} from 'react-intersection-observer';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants'

const About = () => {
  const [ref, inView] = useInView ({
    threshold: 0.5,
})


  return <section id='about' className='section' ref={ref}>
           <div className="container mx-auto">
            {/*img */}
            <div className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'>
            </div>
            {/*text */}
            <div>
             <h2>About Me</h2>
             <h3>  I'm a Freelance Front-end Developer 
                   with over 2 years of experience
            </h3>
             <p>
             I am an experienced and dedicated web developer, I bring a strong set of 
             skills and a passion for solving problems to every project. With a major
            focus on JavaScript React, I am proficient in technologies
            such as HTML5, CSS3, Nodejs, JavaScript, React JS, MongoDb, ExpressJs, Git, Github and Tailwind CSS. I am committed to staying current
            with the latest trends and techniques to ensure that my code is not only innovative 
            and testable, but also dynamic.
             </p>
             {/*stats*/}
             <div>
              <div>
                <div className='text-[40px] font-tertiary text-gradient mb-2'>
                 { inView? <Countup start={0} end={2} duration={2} /> : 2 }
                </div>
                  <div className='font-primary text-sm tracking-[2px]'>
                    Years of <br/>
                    Experience
                  </div>
              </div>
             </div>
            </div>
           </div>
        </section>;
};

export default About;
