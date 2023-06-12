import "./about.css";
import sealcsd from "../../../assests/Images/seal-csd.png";
import aboutImg from "../../../assests/Images/aboutImg.jpg";
import Header from '../Header';

const About = () => {
  return (
  <>
    <Header bgColor={'#d5f4f5'}/>
    <div className="a">
      
      <div className="a-left">
        <div className="a-card">
          <img
            src={aboutImg}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          "Code is read more than it is written"
        </p>
        <p className="a-desc">
          A Front-End Developer passionate about 
          creating interactive application and experiences on the web
        </p>
        <p className="a-desc">
              Knowledgeable Front End Developer adept at creating successful websites 
            that meet customer needs. Specializing in collaborating with Global 
            customers to gather requirements, produce plans and improve designs for 
            usability and functionality. Fully proficient in React JS. 
            Highly effective at developing and standardizing designs according to 
            company brand and objectives. Ready to bring two years of related experience 
            to a growth-oriented team. Experienced working with teams to produce 
            impactful, leading-edge websites that engage customers and deliver 
            business results. Well-versed in design standards and user preferences. 
            Bringing more than two years of experience leading website design projects, 
            including gathering user requirements, producing code and enhancing 
            designs. Focused on creating clean, robust code with exceptional security. 
            Achieves compatibility targets while meeting and exceeding customer 
            demands.
        </p>
         <div className="a-award">
          <img src={sealcsd} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Certified Scrum Developer</h4>
          </div>
        </div> 
        <div>
            <p style={{color:"lightseagreen",marginBottom:'-15px'}}>Strive to build things that make a difference!</p>
            <p style={{paddingLeft:'263px',color:"#0492ac"}}>- GayathriReddyK</p>
          </div>
      </div>
    </div>
    </>
  );
};

export default About;
