import React from "react";
import "../styles/Chart.css";

const Chart = (props) => {
  const {userData} = props
  
  return (
    <>
     { userData && <table className="dimensions">
        <tr>
          <th colSpan="2">Dimensions</th>
        </tr>
        <tr>
          <td>A</td>
          <td>{ userData.deskHeightSit + " cm"}</td>
        </tr>
        <tr>
          <td>B</td>
          <td>{ userData.chairHeightSit + " cm"}</td>
        </tr>
        <tr>
          <td>C</td>
          <td>{ userData.topOfScreenSit + " cm"}</td>
        </tr>
      </table>}
    </>
  )
}

export default Chart;