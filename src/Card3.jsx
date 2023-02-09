import { Card, CardContent, Grid ,Button} from "@mui/material";
import React from "react";
import { Data } from "./Data";

export const Card3 = () => {
  console.log(Data);
  return (
    <Grid container spacing={2}>
      {Data.map((item) => {
        return (
          <Grid item xs={3}>
            <Card>
               <h4>{item.title}</h4>
              <CardContent>
                               <img src={item.image} alt="" width={300} height={300} />
              </CardContent>
                  <h1><Button variant="contained" color="error">{item.price}</Button></h1>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
};
