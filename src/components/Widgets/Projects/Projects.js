import "./projects.css";
import NABaward from "../../../assests/Images/NABaward.PNG";
import Header from '../Header';

const Projects = () => {
    return (
      <>
      <Header bgColor={'#d5f4f5'}/>
      <div className="p">
        <div className="p-left">
          <div className="p-card">
            <img
              src={NABaward}
              alt=""
              className="p-img"
            />
          </div>
          <div className="p-award">
            <h4 className="p-award-title">NAB Appreciate Award</h4>
          </div> 
        </div>
        <div className="p-right">
          <h1 className="p-title">Projects Worked On</h1>
          <p className="p-sub">
            "LifeRay Replacement (NAB Trade)"
          </p>
          <p className="p-desc">
            As React Developer, I have 
            created an interactive Web page as per the client requirement
          </p>
          <div>
            <p style={{color:"lightseagreen",marginBottom:'-15px'}}>Strive to build things that make a difference!</p>
            <p style={{paddingLeft:'263px',color:"#0492ac"}}>- GayathriReddyK</p>
          </div>
        </div>
      </div>
      </>
  )
}
export default Projects;