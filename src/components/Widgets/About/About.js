import "./about.css";
import sealcsd from "../../../assests/Images/seal-csd.png";
import aboutImg from "../../../assests/Images/aboutImg.jpg";

const About = () => {
  return (
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
          "Code is read more thank it is written"
        </p>
        <p className="a-desc">
          A Front-End Developer passionate about 
          creating interactive application and experiences on the web
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
  );
};

export default About;
