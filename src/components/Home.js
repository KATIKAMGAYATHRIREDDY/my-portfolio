import './home.css';
import { Link } from "react-router-dom";
import pbg1 from "../assests/Images/pbg1.png";
import IconSocial from './IconSocial';

const Home = () => {
  return (
    <div style={{ 
      width: "100%",
      height: "100%",
      backgroundColor: '#b8f0f2',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'}}>
      <div className="i">
        <div className="i-left" >
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, Welcome to my world</h2>
            <h1 className="i-name">I am K.Gayathri Reddy</h1>
            <div className="i-title">
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
              <Link to="about" style={{color:'#0492ac'}}>About</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="skills" style={{color:'#0492ac'}}>Skills</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Link to="projects" style={{color:'#0492ac'}}>Projects</Link>
            </div>
          <div style={{marginTop:'15px'}}>
            <IconSocial />
          </div>
          </div>
        </div>
        <div className="i-right">
          <div ></div>
          <img src={pbg1} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Home;

