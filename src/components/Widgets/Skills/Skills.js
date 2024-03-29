import "./skills.css";
import { certificates } from "./certificatesData";

const Skills = () => {
  return (
    <div style={{backgroundColor: '#d5f4f5'}}>
        {certificates.map((item, index) =>(
            <div className="s" key={index} >
                <div>
                    <h4 className="s-award-title"><center>{item.name}</center></h4>
                </div> 
                <div>
                    <center>
                        <img
                        src={item.img}
                        alt=""
                        className="s-img"
                        />
                    </center>
                </div>
            </div>
        ))}
    </div>
  )
}

export default Skills;