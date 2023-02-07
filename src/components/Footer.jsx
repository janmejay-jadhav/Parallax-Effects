import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

let icon ={fontSize:'2em',marginLeft:'10px'}
function Footer() {
  return (
    <>
      <Box
        sx={{ backgroundColor: "#003329",position:'static'}}
        borderColor={"#2c452c"}
        borderTop={"1px solid"}
      >
        <Grid container padding={5} display={"flex"} alignItems={'center'} justifyContent={"center"}>
          <Grid item textAlign={"center"} md={6}>
            <AcUnitIcon sx={{ fontSize: 100 }} />
            <Typography variant="h5" color={"whitesmoke"}>
              Nature is Love
            </Typography>
          </Grid>
          <Grid item md={6}>
          <Typography variant="h6" ml={3} color={'white'}>Contact Us :</Typography>
          <div style={{display:'flex',padding:10,color:'whitesmoke'}}>
          <FacebookTwoToneIcon style={icon}/>
          <TwitterIcon style={icon}/>
          <InstagramIcon style={icon}/>
          </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Footer;
