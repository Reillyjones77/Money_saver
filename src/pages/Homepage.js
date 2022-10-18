import React, { useState } from "react";
import LineChart from "../components/LineChart";
import Navbar from "../components/Navbar";
import PieChart from "../components/PieChart";
import { ExpenseData, IncomeData, LineData } from "../Data";


export default function Homepage(){
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
        <div>*Net Savings for month after expenses.</div>
        </div>
        </div>
        
        </div>
    )
}