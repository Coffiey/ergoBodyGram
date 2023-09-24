import React from "react";
import "../styles/Chart.css";

const Chart = (props) => {
  const {userData} = props
  
  return (
    <>
      <table className="dimensions">
        <tr>
          <th colSpan="2">Dimensions</th>
        </tr>
        <tr>
          <td>A</td>
          <td>{ userData.deskHeight + " cm"}</td>
        </tr>
        <tr>
          <td>B</td>
          <td>{ userData.chairHeight + " cm"}</td>
        </tr>
        <tr>
          <td>C</td>
          <td>{ userData.topOfScreen + " cm"}</td>
        </tr>
      </table>
    </>
  )
}

export default Chart;