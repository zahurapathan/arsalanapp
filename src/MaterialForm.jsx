import { TextField,Grid, Checkbox, Typography,Radio } from '@mui/material'
import React from 'react'

export const MaterialForm = () => {
  return (
    <div className='class1'>
        <Grid container>
            <Grid item xs={4}><TextField label="First Name"/></Grid>
             
            <Grid item xs={4}><TextField label="Last Name"/> </Grid>
            

            <Grid item xs={4}><TextField label="Email ID"/></Grid>
             
<Grid item xs={4}><TextField label="Mobile No" type="number"/></Grid>

<Grid item xs={4}><TextField label="Address"/> 
</Grid>

<Grid item xs={4}><TextField label="City"/> 
</Grid>
<Grid item xs={4}><TextField label="PinCode" type="number"/> 
</Grid>
<Grid item xs={4}><TextField label="State"/> 
</Grid>
<Grid item xs={4}><TextField label="Password" type="password"/> 
</Grid>

        {/* <Grid item xs={3}></Grid>
        <Grid item xs={3}><Button variant="contained" color="error">Reset</Button></Grid>
        
        <Grid item xs={3}>  <Button variant="contained" color="sucess">Submit</Button></Grid>
      
        <Grid item xs={3}></Grid>
        */}
{/* <Grid item xs={2}>
    <Typography>Gender</Typography>
    <Radio  /><Typography variant='span'>Male</Typography><br /><br />
    <Radio /><Typography variant='span'>Fmale</Typography><br /><br />

    <Radio /><Typography variant='span'>Other</Typography>
 */}
{/* </Grid>

<Grid item xs={1}>
    <Checkbox/>
</Grid>
<Grid>
    <Typography variant='span'>Please Accept Term And Condition</Typography>
</Grid> */}
        </Grid>
    </div>
  )
}
