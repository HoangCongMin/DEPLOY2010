import clsx from "clsx";
import style from "./Homenew.module.css";
import Group4 from "../../aces/Img/Group4.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Homenew() {
  return (
    <Box className={clsx(style.homenewone)}>
      <Grid className={clsx(style.homenewonetitle)}>
        <Grid className={clsx(style.home)}>
          <Typography pb={4} variant="h1" m={0}>Your beauty center place</Typography>
          <Typography pb={4}>
            Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit.
            Commodo, massa pellentesque arcu fusce et <br /> magna consequat
            neque vitae lobortis.
          </Typography>
          <button className={clsx(style.Details)}>More Details</button>
        </Grid>
        <Grid className={clsx(style.Video)}>
          <img src={Group4} alt="" />
          <Typography>Tour Video</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Homenew;
