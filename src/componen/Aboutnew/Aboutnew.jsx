import style from "./Aboutnew.module.css";
import clsx from "clsx";
import Illustration from "../../aces/Img/Illustration-1.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Aboutnew() {
  return (
    <Box>
      <Grid display={'flex'} justifyContent={'space-between'} alignItems={'center'} pt={15} className={clsx(style.Aboutnew)}>
        <Grid className={clsx(style.iAboutmg)}>
          <img src={Illustration} alt="" />
        </Grid>
        <Grid className={clsx(style.AboutUs)}>
          <Typography pb={1.5}  variant="h5">About Us</Typography>
          <Typography pb={1.7} variant="h1">We are the best beauty clinic</Typography>
          <Typography pb={3}>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Elit, quam suscipit purus donec <br /> amet. Egestas volutpat
            facilisi eu libero. Nunc, <br /> ipsum ornare mauris sit quam quis
            enim. Varius <br /> tellus in suspendisse placerat.
          </Typography>
          <button>Learn More</button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Aboutnew;
