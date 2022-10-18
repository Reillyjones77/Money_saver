import React,  {useState} from "react";
import Navbar from "../components/Navbar";
import {RiDeleteBin7Line} from 'react-icons/ri';
import BarChart from "../components/BarChart";
import { IncomeData } from "../Data";

export default function Income(){
    const [incomeBarData, setIncomeData] = useState({
        labels: IncomeData.map((data) => data.name),
        datasets: [{
            label: "Income",
            data: IncomeData.map((data) => data.amount),
            backgroundColor: ["red", "green", "blue", "yellow"]
        }]
    })

    return(
        <>
        <Navbar></Navbar>
        <h1>Your Income</h1>
        <div>
        <form>
          <label>Income Name:
            <input type="text" />
          </label>
          <label>Income Amount:
            <input type="text" />
          </label>
          <label>Recurring:
            <input type="checkbox" />
          </label>
          <label>Date Paid:
            <input type="text" />
          </label>
        </form>
        </div>
        <button type="btn" className="add">Add Income</button>
        <table>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Recurring</th>
                <th>Date Paid</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>Coding</td>
                <td>$4000</td>
                <td><input type="checkbox"></input></td>
                <td>11-1-22</td>
                <td><RiDeleteBin7Line/></td>
            </tr>
            <tr>
                <td>Uber</td>
                <td>$500</td>
                <td><input type="checkbox"></input></td>
                <td>11-15-22</td>
                <td><RiDeleteBin7Line/></td>
            </tr>
        </table>
        <div className="bar_chart"><BarChart chartData={incomeBarData} title='Income'></BarChart></div>
        </>
    )
}