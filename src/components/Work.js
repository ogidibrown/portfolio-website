import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Img1 from '../assets/img1.png'
import Img2 from '../assets/img2.png'
import Img3 from '../assets/img3.png'

const Work = () => {
  return <section id='work' className='section'>
            <div className="container mx-auto">
              <div className="flex flex-col lg:flex-row gap-x-10">
                <motion.div 
                variants={fadeIn('right', 0.3)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3 }}
                className="flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0">
                  {/*texts*/}
                  <div>
                    <h2 className="h2 leading-tight text-accent">
                        My Latest <br/>
                        Work.
                    </h2>
                    <p className="max-w-sm mb-16">
                      Kindly check out these awesome projects. 
                      They are intended to help the society and make living easier 
                      by enhance our technological way of living
                      
                    </p>
                    <button className="btn btn-sm"><a target='_blank' href="https://github.com/ogidibrown/">View all Projects</a></button>
                  </div>
                  {/*image*/}
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                    {/*overlay*/}
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  "></div>
                    {/*img*/}
                    <img className="group-hover:scale-125 transition-all duration-500" src={Img1} alt="" />
                     {/*pre-title*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                      <span className="text-gradient ">UI/UX Design</span>
                     </div>
                     {/*title*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                      <span className="text-3xl text-white">Gym Website</span>
                     </div>
                     {/*link*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-500 z-50">
                      <a target='_blank' href="https://gym-app-a03633.netlify.app/" className="text-gradient">View Site</a>
                     </div>
                  </div>
                </motion.div>
                <motion.div 
                variants={fadeIn('left', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false,amount:0.3 }}
                className="flex-1 flex flex-col gap-y-12">
                  {/*image */}
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                    {/*overlay*/}
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  "></div>
                    {/*img*/}
                    <img className="group-hover:scale-125 transition-all duration-500" src={Img2} alt="" />
                     {/*pre-title*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                      <span className="text-gradient ">UI/UX Design</span>
                     </div>
                     {/*title*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                      <span className="text-3xl text-white">E-commerce Web App</span>
                     </div>
                     {/*link*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-500 z-50">
                      <a target='_blank' href="https://brown-ecommerce.netlify.app/" className="text-gradient">View Site</a>
                     </div>
                  </div>
                  {/*image */}
                  <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl">
                    {/*overlay*/}
                    <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300  "></div>
                    {/*img*/}
                    <img className="group-hover:scale-125 transition-all duration-500" src={Img3} alt="" />
                     {/*pre-title*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                      <span className="text-gradient ">UI/UX Design</span>
                     </div>
                     {/*title*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                      <span className="text-3xl text-white">Community-Food Website</span>
                     </div>
                     {/*link*/}
                     <div className="absolute -bottom-full left-12 group-hover:bottom-4 transition-all duration-500 z-50">
                      <a target='_blank' href="https://communityfood.netlify.app/" className="text-gradient">View Site</a>
                     </div>
                  </div>
                </motion.div>

              </div>
            </div>
          </section>;
};

export default Work;
