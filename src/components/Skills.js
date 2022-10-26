import React, { Component } from 'react'
import "./skills.css";
import CollaborateAward from "../assests/Images/CollaborateAward.PNG";
import ChampsAward from "../assests/Images/ChampsAward.PNG";
import DeliverAward from "../assests/Images/DeliverAward.PNG";
import JavaFullStackCertificate from "../assests/Images/JavaFullStackCertificate.PNG";
import CourseraPython from "../assests/Images/CourseraPython.PNG";
import CourseraPythonDS from "../assests/Images/CourseraPythonDS.PNG";
import IBMChatBot from "../assests/Images/IBMChatBot.png";
import IBMPythonDS from "../assests/Images/IBMPythonDS.png";
import SoloLearnCSS from "../assests/Images/SoloLearnCSS.PNG";
import SoloLearnHTML from "../assests/Images/SoloLearnHTML.PNG";
import SoloLearnJS from "../assests/Images/SoloLearnJS.PNG";
import SoloLearnRWD from "../assests/Images/SoloLearnRWD.PNG";
import SoloLearnJQuery from "../assests/Images/SoloLearnJQuery.PNG";
import SoloLearnReact from "../assests/Images/SoloLearnReact.jpg";
import { Table, TableBody, TableRow } from '@material-ui/core';

export default class Skills extends Component {
  render() {
    return (
      <div className="s">
       <div className="s-left">
          <div className="s-card">
            <img
              src={JavaFullStackCertificate}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">Java FullStack and Mobile Android Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={CourseraPython}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">Coursera Python Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={CourseraPythonDS}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">Coursera Python Data Structures Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={IBMChatBot}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">IBM ChatBot Badge</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={IBMPythonDS}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">IBM PythonDS Badge</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={SoloLearnCSS}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">SoloLearn CSS Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={SoloLearnHTML}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">SoloLearn HTML Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={SoloLearnJS}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">SoloLearn JS Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={SoloLearnRWD}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">SoloLearn RWD Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={SoloLearnJQuery}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">SoloLearn JQuery Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={SoloLearnReact}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">SoloLearn React Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={JavaFullStackCertificate}
              alt=""
              className="s-img" style={{marginTop:'30px'}}
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">Java FullStack and Mobile Android Certificate</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={CollaborateAward}
              alt=""
              className="s-img"
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">DXC Collaborate Award</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={DeliverAward}
              alt=""
              className="s-img"
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">DXC Deliver Award</h4>
          </div> 
        </div>
        <div className="s-left">
          <div className="s-card">
            <img
              src={ChampsAward}
              alt=""
              className="s-img"
            />
          </div>
          <div className="s-award">
            <h4 className="s-award-title">DXC Champs Award</h4>
          </div> 
        </div>
      </div>
    )
  }
}

