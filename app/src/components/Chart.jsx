import React from "react";
import "../styles/Chart.css";

const Chart = (props) => {
  const {userData} = props
  
  return (
    <>
     { userData && <table className="dimensions">
        <thead>
          <tr>
            <th colSpan="2">Dimensions</th>
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
        </tbody>
      </table>}
    </>
  )
}

export default Chart;