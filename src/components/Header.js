import Logo from '../assets/logo.png';
import {Link} from 'react-scroll'

const Header = () => {
  return <header id='home' className='py-5  '>
    <div className="container mx-auto">
      <div className='flex justify-between items-center '>
        {/*logo */}
        <a href="#">
          <img src={Logo} alt="" style={{width:'150px',height:'150px'}}  />
        </a>
       <Link to='contact' activeClass='active' smooth={true} spy={true}  ><button className='btn btn-sm'>Work with Me</button></Link> 
      </div>
    </div>
    </header>;
};

export default Header;
