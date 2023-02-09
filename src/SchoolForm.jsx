import { Grid, TextField, Button ,Card, CardContent } from "@mui/material";
import React,{useState} from "react";


 export const SchoolForm=()=>{
    const[name, setname]=useState()
    const [mob,setmob]=useState()
    const [email,setemail]=useState()
    const [pass,setpass]=useState()
    const [data,setData]=useState([])
    const [field,setfield]=useState()
    
    // console.log(name)
    // console.log(mob)
    // console.log(email)
    // console.log(pass)
    
    const handleSubmit=()=>{
        const obj={Name:name,Mobile:mob,Email:email,Password:pass};
        setData([...data,obj])
        console.log(data)
    }
    const handleDelete=(index
        )=>{
         const handleDelete=data.filter((item,ind)=>ind !==index )
         setData(handleDelete)
        // alert("hi")
                }
        
    return(
        <div>
            <h1>School Regrisation</h1>
            <Grid container spacing={4} >
                <Grid item xs={12} md={3}>
                    <TextField label="Name" type={"text"} onChange={(e)=>setname(e.target.value)}/> </Grid>
                    <Grid item xs={12} md={3}>
                    <TextField label="Mobile" type={"number"} onChange={(e)=>setmob(e.target.value)}/> </Grid>
                    <Grid item xs={12} md={3}>
                    <TextField label="Email" type={"email"} onChange={(e)=>setemail(e.target.value)}/> </Grid>
                    <Grid item xs={12} md={3}>
                <TextField label="Password" type={"password"}onChange= {(e)=>setpass(e.target.value)}/> </Grid>

                    <Grid item xs={12}></Grid>
                    <Grid item xs={6}><Button variant="contained" color="error" onClick={handleSubmit}>Submit</Button></Grid>
            </Grid>
            <Grid container style={{backgroundColor:"wheat"}}>
            {data.map((item,index)=>{
                return(
                    
                        <Grid item xs={12} md={3} >
                        <Card>
                            <CardContent>
                            <h1>Name :{item.Name}</h1>
                            <h1>Mobile :{item.Mobile}</h1>
                            <h1>Email :{item.Email}</h1>
                            <h1>Password :{item.Password}</h1>
                            <Button variant="contained" color="error" onClick={()=>handleDelete(index)}>Delet</Button>
                            </CardContent>
                        </Card>
                        </Grid>
                )
            })}
            </Grid>

            {/* <h1>Name :{name}</h1>
                    <h1>Mobile :{mob}</h1>
                    <h1>Email :{email}</h1>
                    <h1>Password :{pass}</h1> */}

        </div>
    )
}