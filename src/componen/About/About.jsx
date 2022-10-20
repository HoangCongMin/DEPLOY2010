import style from "./About.module.css";
import clsx from "clsx";
import Play from "../../aces/Img/Play_button.png";
import backgroundimgposi from "../../aces/Img/Bubble BG-2.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function About() {
  return (
    <Box  className={clsx(style.About)}>
      <Grid>
        {" "}
        <img
          className={clsx(style.backgroundimgposi)}
          src={backgroundimgposi}
          alt=""
        />{" "}
      </Grid>

      <Typography variant="h5" m={0}>About</Typography>
      <Typography variant="h1" pt={1}>
        We are a leading beauty clinic that has <br /> been around since 2002
      </Typography>
      <Typography pt={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{" "}
        <br /> purus sit amet luctus venenatis
      </Typography>
      {/* <img src={unsplash_DE6rYp1nAho} alt="" /> */}
      <Grid xs={12} mt={8} className={clsx(style.Aboutbackgrund)}>
        <Grid pb={25} className={clsx(style.Aboutimg)}>
            <img src={Play} alt="" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
