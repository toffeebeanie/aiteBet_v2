import React, { useState, useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./styles/landing.css";

import { extractUrlPath } from "./utils/navigation";

import scoreService from "./services/scoreService";
import tabContext from "./context/tabContext";

import Leaderboard from "./components/leaderboard";
import Tabs from "./components/tabwrapper";
import Modal from "./components/addscoremodal";
import logo from "../src/assets/main-logo.svg"
import icon from "../src/assets/main-icon.svg"

const LandingPage = ({ location, history }) => {
  const [showModal, toggleModal] = useState(false);
  const tabData = useContext(tabContext);
  useEffect(() => {
    if (
      extractUrlPath(location.pathname) &&
      extractUrlPath(location.pathname) !== tabData.active_tab_id
    ) {
      tabData.setActiveTab(extractUrlPath(location.pathname));
    }
  }, [tabData, location]);

  const handleTabSwitch = (key) => {
    tabData.setActiveTab(key);
    history.push(`/${key}`);
  };

  const handleAddScore = async (data) => {
    // TODO REFACTOR THIS OUT TO A MODAL HOC
    // TODO: figure out optimistic loading here - using context?
    let newScore = await scoreService.createNewScore(data);
    toggleModal(false);
  };
  return (
    <div className="landing">
      
     

      {/* <Tabs handleTabSwitch={(key) => handleTabSwitch(key)} tabData={tabData} /> */}
      <Leaderboard toggleModal={(val) => toggleModal(val)} tabData={tabData} />
      <Modal
        show={showModal}
        handleClose={() => toggleModal(false)}
        handleSubmit={(data) => handleAddScore(data)}
      />
      {/* <span style={{marginBottom:'20px'}}></span> */}
      <div className="footer"><img src={logo} style={{marginRight:'50px',width:'400px' ,height:'200px'}}></img> 
      
      {/* <h1>Bonsai Ad</h1> */}
      <h3 style={{paddingLeft:'100px',paddingRight:'100px', textAlign:'left'} }>Use BonsaiStrike to earn yield from writing options... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</h3>
      
      
      
      <a href='https://bonsai.money' className="icon_" >

<img

src={icon} style={{margin:'10px',padding:'5px',width:'40px', borderRadius:'50px', boxShadow: "10px 20px 30px black"}}></img>
</a>  <a href='https://mobile.twitter.com/bonsai_strike' className="icon_" >

<svg style={{backgroundColor:'#08A0E9',margin:'10px',padding:'5px',width:'40px', borderRadius:'50px', boxShadow: "10px 20px 30px black"}} className="icon" fill="white" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 -2 20 29"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
</a>
      
      </div>
    
</div>
    
  );
};

export default withRouter(LandingPage);
