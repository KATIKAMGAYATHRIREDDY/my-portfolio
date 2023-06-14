import Button from '@mui/material/Button';
import { IconContext } from "react-icons";
import { useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from "react-icons/bs";
import { SiReact} from "react-icons/si";
import { HiHome } from "react-icons/hi2";
import { Certificate } from 'grommet-icons';

const Header = ({bgColor}) => {
    let navigate = useNavigate ();
  
    return (
        <div style={{backgroundColor: bgColor, display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'}}>
            <Button onClick={()=>navigate("/")}>
                <IconContext.Provider value={{ color: "#0492ac", size:'2em'}}>
                <div>
                    <HiHome />
                </div>
                </IconContext.Provider>
            </Button>
            <div>
                <Button onClick={()=>navigate("/about")}>
                    <IconContext.Provider value={{ color: "#0492ac", size:'2em'}}>
                        <div>
                            <BsFillPersonFill />
                        </div>
                    </IconContext.Provider>
                </Button>
                <Button onClick={()=>navigate("/skills")}>
                    <Certificate size='28.5px' color="#0492ac" />
                </Button>
                <Button onClick={()=>navigate("/projects")}>
                    <IconContext.Provider value={{ color: "#0492ac", size:'2em'}}>
                        <div>
                            <SiReact />
                        </div>
                    </IconContext.Provider>
                </Button>
            </div>
        </div>
    )
}
export default Header;