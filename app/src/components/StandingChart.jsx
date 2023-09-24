import React from "react";
import "../styles/Chart.css";

const StandingChart = (props) => {
  const { userData,handleDelete } = props;
  
 return (
    <>
     { userData && <table className="dimensions">
        <thead>
          <tr>
            <th colSpan="2">Standing Dimensions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>{ Math.round(userData.topOfScreenStand) + " cm"}</td>
          </tr>
          <tr>
            <td>B</td>
            <td>{ Math.round(userData.deskHeightStand) + " cm"}</td>
          </tr>
          <tr>
            <td>C</td>
            <td>{ Math.round(userData.endOfKeyboards) + " cm"}</td>
          </tr>
        </tbody>
      </table>}
      <p onClick={handleDelete}>Make a New Scan? This will delete the current one.</p>
    </>
  )
}

export default StandingChart;