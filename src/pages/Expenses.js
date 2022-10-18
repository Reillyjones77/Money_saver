import React,  {useState} from "react";
import Navbar from "../components/Navbar";
import {RiDeleteBin7Line} from 'react-icons/ri';
import BarChart from "../components/BarChart";
import { ExpenseData } from "../Data";

export default function Income(){
    const [expenseBarData, setExpenseData] = useState({
        labels: ExpenseData.map((data) => data.name),
        datasets: [{
            label: "Expense",
            data: ExpenseData.map((data) => data.amount),
            backgroundColor: ["red", "green", "blue", "yellow"]
        }]
    })

    return(
        <>
        <Navbar></Navbar>
        <h1>Your Expenses</h1>
        <div>
        <form>
          <label>Expense Name:
            <input type="text" />
          </label>
          <label>Expense Amount:
            <input type="text" />
          </label>
          <label>Recurring:
            <input type="checkbox" />
          </label>
          <label>Due Date:
            <input type="text" />
          </label>
        </form>
        </div>
        <button type="btn" className="add">Add Expense</button>
        <table>
            <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Date Entered</th>
                <th>Recurring</th>
                <th>Due Date</th>
                <th>Delete</th>
            </tr>
            <tr>
                <td>House Payment</td>
                <td>$1000</td>
                <td>7-1-21</td>
                <td><input type="checkbox"></input></td>
                <td>11-1-22</td>
                <td><RiDeleteBin7Line/></td>
            </tr>
            <tr>
                <td>Internet</td>
                <td>$80</td>
                <td>7-1-21</td>
                <td><input type="checkbox"></input></td>
                <td>11-15-22</td>
                <td><RiDeleteBin7Line/></td>
            </tr>
            <tr>
                <td>Car Insurance</td>
                <td>$120</td>
                <td>9-11-21</td>
                <td><input type="checkbox"></input></td>
                <td>11-18-22</td>
                <td><RiDeleteBin7Line/></td>
            </tr>
            <tr>
                <td>Car Payment</td>
                <td>$400</td>
                <td>10-12-21</td>
                <td><input type="checkbox"></input></td>
                <td>11-27-22</td>
                <td><RiDeleteBin7Line/></td>
            </tr>
        </table>
        <div className="bar_chart"><BarChart chartData={expenseBarData} title='Expenses'></BarChart></div>
        </>
    )
}