import React from "react";


export const Table=()=>{
    return(
        <div className="Table" >
            <h1 >Table</h1>
            <br />

            <table border={2} >
                <tr>
                    <th>Employee Name</th>
                    <th>Employee Joining Date</th>
                    <th>Employee salary</th>
                    <th>Employee Experence</th>
                    <th>Employee Age</th>
                    
                </tr>
                <tr>
                    <td>muskan</td>
                    <td>2020</td>
                    <td>100000</td>
                    <td>2 year</td>
                    <td>21</td>
                </tr>
                <tr>
                    <td>saba</td>
                    <td>2019</td>
                    <td>120000</td>
                    <td>4years</td>
                    <td>23</td>
                </tr>

                <tr>
                    <td>sana</td>
                    <td>2018</td>
                    <td>140000</td>
                    <td>6years</td>
                    <td>26</td>
                </tr>
                <tr>
                    <td>saba</td>
                    <td>2019</td>
                    <td>120000</td>
                    <td>4years</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>sabiya</td>
                    <td>2017</td>
                    <td>160000</td>
                    <td>4 years</td>
                    <td>28</td>
                </tr>
                
            </table>
            <br /><br /><br />
        </div>
    )
}