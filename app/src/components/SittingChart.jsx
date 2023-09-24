import React from "react";
import "../styles/Chart.css";

const SittingChart = (props) => {
  const { userData, className, handleDelete } = props
  
 return (
    <div className={className}>
     { userData && <table className="dimensions">
        <thead>
          <tr>
            <th colSpan="2">Sitting Dimensions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>A</td>
            <td>{ Math.round(userData.deskHeightSit) + " cm"}</td>
          </tr>
          <tr>
            <td>B</td>
            <td>{ Math.round(userData.chairHeightSit) + " cm"}</td>
          </tr>
          <tr>
            <td>C</td>
            <td>{ Math.round(userData.topOfScreenSit) + " cm"}</td>
          </tr>
          <tr>
            <td>D</td>
            <td>{ Math.round(userData.endOfKeyboards) + " cm"}</td>
          </tr>
        </tbody>
      </table>}
      <p onClick={handleDelete}>Make a New Scan? This will delete the current one.</p>
    </div>
  )
}

export default SittingChart;