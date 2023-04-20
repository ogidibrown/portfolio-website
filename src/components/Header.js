import Logo from '../assets/logo.png';

const Header = () => {
  return <header id='home' className='py-5  '>
    <div className="container mx-auto">
      <div className='flex justify-between items-center '>
        {/*logo */}
        <a href="#">
          <img src={Logo} alt="" style={{width:'150px',height:'150px'}}  />
        </a>
        <button className='btn btn-sm'>Work with Me</button>
      </div>
    </div>
    </header>;
};

export default Header;
