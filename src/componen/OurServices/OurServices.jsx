import style from "./OurServices.module.css";
import clsx from "clsx";
import Bubble from "../../aces/Img/Bubble BG-1.png";
import imgOurServices1 from "../../aces/Img/imgOurServices1.5b4ae070b9c83610f333.png";
import unsplash_ZOT2Mewzmh8 from "../../aces/Img/unsplash_ZOT2Mewzmh8.png";
import unsplash_gzfIO69Q6eM from "../../aces/Img/unsplash_gzfIO69Q6eM.png";
import unsplash_pTrhfmj2jDA from "../../aces/Img/unsplash_pTrhfmj2jDA-1.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function OurServices() {
  return (
    <Box>
      <img className={clsx(style.Bubble)} src={Bubble} alt="" />
      <Grid pt={31} className={clsx(style.OurServices)}>
        <Typography m={0} pb={1} variant="h5">
          Our Services
        </Typography>
        <Typography pb={2} variant="h1">
          We focus on your beauty
        </Typography>
        <Typography>Lorem ipsum dolor sit amet</Typography>
      </Grid>
      <Grid className={clsx(style.OurServicesconten)}>
        <Grid  display={"flex"} justifyContent={"space-between"} pt={10}>
          <img
            className={clsx(style.OurServicescontensmoll)}
            src={imgOurServices1}
            alt=""
          />

          <img
            className={clsx(style.OurServicescontenbig)}
            src={unsplash_ZOT2Mewzmh8}
            alt=""
          />
        </Grid>

        <Grid display={"flex"} justifyContent={"space-between"} pt={10}>
          <img
            className={clsx(style.OurServicescontenbig)}
            src={unsplash_gzfIO69Q6eM}
            alt=""
          />

          <img
            className={clsx(style.OurServicescontensmoll)}
            src={unsplash_pTrhfmj2jDA}
            alt=""
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default OurServices;
