import './home.css';
import pbg1 from "../../../assests/Images/pbg1.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import Button from '@mui/material/Button';
import { IconContext } from "react-icons";
import Header from '../Header';
import { RiInstagramFill } from "react-icons/ri";


const Home = () => {
  return (
    <>
      <Header bgColor={'#b8f0f2'}/>
      <div className="i">
        <div className="i-left" >
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, Welcome to my world</h2>
            <h1 className="i-name">I am K.Gayathri Reddy</h1>
            <div>
              <div className="i-title-wrapper">
                <div className="i-title-item">FrontEnd Developer</div>
                <div className="i-title-item">Web Developer</div>
                <div className="i-title-item">UI/UX Designer</div>
              </div>
            </div>
            <p className="i-desc" style={{color:'#04d2f7'}}>
              I design and develop web pages for customers of all sizes,
              specializing in creating stylish, modern websites.
            </p>
            <div>
              <Button href="https://www.linkedin.com/in/katikam-gayathri-reddy-45668b176/" target="_blank" size="large">
                <IconContext.Provider value={{ color: "#0492ac", size:'2em'}}>
                  <div>
                    <FaLinkedin />
                  </div>
                </IconContext.Provider>
              </Button>
              <Button href="https://github.com/KATIKAMGAYATHRIREDDY" target="_blank" size="large">
                <IconContext.Provider value={{ color: "#0492ac", size:'2em'}}>
                  <div>
                    <FaGithub />
                  </div>
                </IconContext.Provider>
              </Button>
              <Button href="https://www.instagram.com/allornothing773/" target="_blank" size="large">
                <IconContext.Provider value={{ color: "#0492ac", size:'2em'}}>
                  <div>
                    <RiInstagramFill />
                  </div>
                </IconContext.Provider>
              </Button>
            </div>
          </div>
        </div>
        <div className="i-right">
          <img src={pbg1} alt="" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Home;

