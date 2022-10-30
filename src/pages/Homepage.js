import React, { useState } from "react";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import PieChart from "../components/PieChart";
import { ExpenseData, IncomeData, LineData } from "../Data";
import axios from 'axios';




export default function Homepage(){

    // keep track of number
    const [number_to_send, setNumb] = useState(0);

    
    // using axios to make a call to node server running on port 3005 with query num_sent = 4
    function callService() {
        axios.get(`http://localhost:3005/example?num_sent=4`)
          .then(res => {
            const num_rec = res.data;
            // using useState to reset number from response recieved from node server
            setNumb(num_rec)
          })
      }

    const [expensePieData, setexPieData] = useState({
        labels: ExpenseData.map((data) => data.name),
        datasets: [{
            label: "Expense",
            data: ExpenseData.map((data) => data.amount),
            backgroundColor: ["red", "green", "blue", "yellow"]
        }]
    })
    const [incomePieData, setinPieData] = useState({
        labels: IncomeData.map((data) => data.name),
        datasets: [{
            label: "Income",
            data: IncomeData.map((data) => data.amount),
            backgroundColor: ["blue", "yellow"]
        }]
    })
    const [lineData, setLineData] = useState({
        labels: LineData.map((data) => data.month),
        datasets: [{
            label: "Month",
            data: LineData.map((data) => data.amount),
            backgroundColor: ["red", "green", "blue", "yellow"]
        }]
    })
    return(
        <div>
        <Navbar></Navbar>
        <h1>Your Monthly Overview</h1>
        <div className="widget" id="feed">Recent Activity
        <div className="activity_feed">10-08-22 You added a non-recurring monthly income "Uber"</div>
        <div className="activity_feed">09-27-22 You added a recurring monthly income "Coding"</div>
        <div className="activity_feed">08-11-22 You added a recurring monthly expense "Car Insurance"</div>
        <div className="activity_feed">07-15-22 You added a recurring monthly expense "Internet"</div>
        <div className="activity_feed">07-08-22 You added a recurring monthly expense "House Payment"</div>
        </div>
        <div className="widget" id="monthly_overview">
        <div style={{width: 330}}><PieChart chartData={expensePieData} title='Expenses' ></PieChart></div>
        <div style={{width: 320}}><PieChart chartData={incomePieData} title='Income' ></PieChart></div>
        </div>
        <div className="widget" id="upcoming">
            <h3>October 2022 Expenses</h3>
            <div>10-05-22 House Payment Due <input type="checkbox"></input></div> 
            <div>10-22-22 Car Payment Due <input type="checkbox"></input></div>
            <div>10-25-22 Internet Payment Due <input type="checkbox"></input></div>
            <div>10-28-22 Car Insurance Due <input type="checkbox"></input></div>
        </div>
        <div className="widget" id="bottom_line">
        <div style={{width: 900, height: 230}}><LineChart chartData={lineData} title='The Bottome Line*' ></LineChart>
        </div>
        <div className="widget">Micro-service example <br></br>
          {/* When this button is clicked a call is made to callService */}
          <button onClick={callService}>Call Service</button>
          {/* whenever number_to_send is updated by setNumb, the page will be re-rendered */}
          The service returned: {number_to_send}
        </div>
        </div>
        </div>
    )
}