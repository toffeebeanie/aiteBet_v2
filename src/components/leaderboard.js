import React, { useContext, Fragment } from "react";
import { map } from "lodash";

import ScoreContext from "../context/scoreContext";

import composedHOC from "./leaderboardhoc";
import UserRanking from "./userranking";
import bet from ".././assets/bet.jpeg"
import "../styles/leaderboard.css";

const LeaderboardComponent = (props) => {

  const scoreContext = useContext(ScoreContext);


  const { scoreData, tabData } = props;


  console.log(tabData)
 
  const data2 = scoreData
  console.log(data2)
  var data = [...data2].sort((a,b) => (a.rank < b.rank ? -1 : 1))
  console.log(data)

  
  


  return (
    <div className="leaderboard-wrapper">
      <div style={{ alignItems:'center',flexDirection:'row'}}>
      <h1 style={{ textAlign: "left" , color:'blue',alignItems:'center'}} className='flex-3'>    <iframe className='' style={{alignSelf:'left', width:'200px'}} frameBorder="0" src="https://embed.lottiefiles.com/animation/82915"></iframe> Leaderboard 
      
      
      <div style={{ marginLeft:'10px', marginBottom: 'px'}} class="tooltip"  > <svg fill='blue' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm.5 17h-1v-9h1v9zm-.5-12c.466 0 .845.378.845.845 0 .466-.379.844-.845.844-.466 0-.845-.378-.845-.844 0-.467.379-.845.845-.845z"/></svg>
      
      <span class="tooltiptext" >
        <h2>How to play?</h2>
    <h4>1. Log on to Twitter</h4>
    <h4>2. Post @mycryptoprice bnb call/put price</h4>
    <h4>3. tag as many friends to leverage up</h4>
    <h3>Sample Tweet</h3>
    <img src={bet}></img>
    </span>
    </div></h1> 
     

      </div>
     
      <table>
        <thead>
          <tr className="ranking-header">
            <th className="flex-1">Rank</th>
            <th className="flex-4">Username</th>
            <th className="flex-1">Top Score</th>
          </tr>
        </thead>
        <tbody>
          {map(data, (each, id) => (
// console.log(data)


      <Fragment key={each.rank}>

          <UserRanking {...{username:{...each}.id.twitterId,
        rank: each.rank,
      points:each.points }}/>
          </Fragment>

          ))}
        </tbody>
      </table>
      {/* <button className="add-button" onClick={() => props.toggleModal(true)}>
        Add a new score
      </button> */}
    </div>
  );
};

const Leaderboard = composedHOC(LeaderboardComponent);
export default Leaderboard;
