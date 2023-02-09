import React from 'react'
import { Button,TextField } from '@mui/material'




function Form(){
    return(
        <div className='form'>
            <h1>Ragistration Form</h1>
            {/* <label htmlFor="">First Name:</label> */}
            <TextField id="outlined-basic" label="First Name" variant="outlined" />
            {/* <input type="text" /><br /><br /> */}
            <label htmlFor="">Last Name:</label>
            <input type="text" /><br /><br />
            {/* <label htmlFor="">Mobile:</label>
            <input type="number" /><br /><br /> */}
            <TextField  type='number'id="outlined-basic" label="Mobile No" variant="outlined" />
            <label htmlFor="">Date Of Brith:</label>
            <input type="date" /><br /><br />
            <label htmlFor="">Email:</label>
            <input type="email" /><br /><br />
            <label htmlFor="">Address:</label>
            <input type="text" /><br /><br />
            <label htmlFor="">City:</label>
            <input type="text" /><br /><br />
            <label htmlFor="">Pincode</label>
            <input type="number" /><br /><br />
            <label for="">Range</label>
            <input type="range" /><br /><br />
            <Button variant="outlined"color="success">Sumbit</Button>

            {/* //<button>Sumbit</button> */}
    

        </div>
    )
}
export default Form