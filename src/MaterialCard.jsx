import { Card, CardContent, Grid } from "@mui/material";
import React from "react";
import { Data } from "./Data.js"

export const MaterialCard = () => {
  //     const Data=[
  //         {zahura:"./sh1.webp"},
  //         {zahura:"./sh2.webp"},
  //         {zahura:"./sh3.webp"},
  //         {zahura:"./w1.webp"},
  //         {zahura:"./w2.webp"},
  //         {zahura:"./w3.webp"},
  //         {zahura:"./sh1.webp"},
  //         {zahura:"./sh2.webp"},
  //         {zahura:"./sh3.webp"},
  //         {zahura:"./l1.webp"},
  //         {zahura:"./l2.webp"},
  //         {zahura:"./l3.webp"},
  //         {zahura:"./j1.webp"},
  //         {zahura:"./j2.webp"},
  //         {zahura:"./j3.webp"},
  //         {zahura:"./d1.webp"},
  //         {zahura:"./w1.webp"}

  // ]
  // const arr1 =new Array(10)
  console.log("-=-=-=-=->",Data);
  return (
    <div>
      <Grid container spacing={3}>
        {Data.map((item) => {
          return (
            <Grid item xs={4}>
              <Card>
                <CardContent style={{ backgroundColor: "brown" }}>
                  {/* <img src={ item.zahura}alt=""  height={300}width={300}/> */}
                  <img src={item.image} alt="" height={300} width={300} />
                  {/* <img src={`./d${index}.webp`} alt="" height={300}width={300}/> */}
                </CardContent>
              </Card>
            </Grid>
          );
        })}

        {/* <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"GrayText"}}>
                        
                        <img src="./shirt 1.webp" alt="" width={300}height={300}/>
                    </CardContent>
                </Card>

                </Grid>
                <Grid item xs={4}>
                <Card>
                    <CardContent style={{backgroundColor:"blue"}}>
                       
                        <img src="./mobile 1.webp" alt="" width={300}height={300}/>
                    </CardContent>
                </Card>
                </Grid> */}
        {/* <Grid item xs={4}>
                    <Card>
                        <CardContent>
                            <img src="./w1.webp" alt="" width={300}height={300} />
                        </CardContent>
                    </Card>
                </Grid>
<Grid>
    <Card>
        <CardContent>
            <img src="./w2.webp" alt="" width={300}height={300} />
        </CardContent>
    </Card>
</Grid>
<Grid>
    <Card>
        <CardContent>
            <img src="./w3.webp" alt=""width={300}height={300} />
        </CardContent>
    </Card>
</Grid>
<Grid item xs={4}>
    <Card>
       <CardContent>
        <img src="./sh1.webp" alt=""width={300}height={300} />
    
       </CardContent>
    </Card>
</Grid>
<Grid item xs={4}>
    <Card>
        <CardContent>
            <img src="./ sh2.webp" alt=""width={300} height={300} />
        </CardContent>
    </Card>
</Grid> */}
      </Grid>
    </div>
  );
};
