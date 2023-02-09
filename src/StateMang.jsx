import React,{useState} from "react"


export const StateMang=()=>{
const[data,setData]=useState("")
const[data1,setData1]=useState("")

const[data2,setData2]=useState("")

const[data3,setData3]=useState("")
const[data4,setData4]=useState("")
const[data5,setData5]=useState("")



    return(
        <div>
            <label htmlFor="">First Name:</label>

<input type="text"  onChange={(e)=>setData(e.target.value)}/>
{/* <h1>{data}</h1> */}
<label htmlFor="">Last Name:</label>

<input type="text"  onChange={(e)=>setData1(e.target.value)}/>
{/* <h1>{data1}</h1> */}


<label htmlFor="">Father Name:</label>
<input type="text" onChange={(e)=>setData2(e.target.value)}/>
{/* <h1>{data2}</h1> */}


<label htmlFor="">City</label>
<input type="text" onChange={(e)=>setData3(e.target.value)}/>
{/* <h1>{data3}</h1> */}


<label htmlFor="">Mobile Number</label>
<input type="mobile number"onChange={(e)=>setData4(e.target.value)} />
{/* <h1>{data4}</h1> */}


<label htmlFor="">Email</label>
<input type="text" onChange={(e)=>setData5(e.target.value)}/>
{/* <button onClick={()=>setData("click karna par ye text aata hai ")}>Click and see Magic</button> */}
<h1>First Name:{data}</h1>
<h1>Last Name:{data1}</h1>
<h1> Father Name {data2}</h1>
<h1>City :{data3}</h1>
<h1> Mobile No:{data4}</h1>
<h1>Email :{data5}</h1>
        </div>
    )
}


