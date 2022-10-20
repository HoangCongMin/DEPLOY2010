import style from "./ProfessionalTeams.module.css";
import clsx from "clsx";
import Facebook from "../../aces/Img/Facebook.png";
import Twitter from "../../aces/Img/Twitter.png";
import Instagram from "../../aces/Img/Instagram.png";

import unsplash_pTrhfmj2jDA from "../../aces/Img/unsplash_pTrhfmj2jDA.png";
import unsplash_mEZ3PoFGs_k from "../../aces/Img/unsplash_mEZ3PoFGs_k.png";
import unsplash_FVh_yqLR9eA from "../../aces/Img/unsplash_FVh_yqLR9eA.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function ProfessionalTeams() {
  return (
    <Box className={clsx(style.ProfessionalTeams)}>
      {/* <div> <img className={clsx(style.backgroundimgposi)} src={backgroundimgposi} alt="" /> </div> */}
      <Typography className={clsx(style.Professional)}>
        Professional Teams
      </Typography>
      <Typography pt={1} pb={2} variant="h1" className={clsx(style.TheProfessionalexpert)}>
        The Professional expert
      </Typography>
      <Typography variant="h6" className={clsx(style.Loremipsumdolor)}>
        Loremipsumdolor sit amet, consectetur adipiscing elit ut aliquam.
      </Typography>
      <Grid className={clsx(style.Section)}>
        <Grid className={clsx(style.BoxSection)}>
          <img
            src={unsplash_pTrhfmj2jDA}
            className={clsx(style.unsplash)}
            alt=""
          />
          <Typography variant="h6">Surgeon</Typography>
          <Typography variant="h5">Lilly Adams</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut{" "}
            <br /> aliquam, purus sit
          </Typography>
          <Grid className={clsx(style.icon)}>
            <img src={Twitter} alt="" /> <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </Grid>
        </Grid>
        <Grid className={clsx(style.BoxSectionMid)}>
          <img
            src={unsplash_FVh_yqLR9eA}
            className={clsx(style.unsplash)}
            alt=""
          />
          <Typography variant="h6">Dermatologist</Typography>
          <Typography variant="h5">Bella sebastian</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut{" "}
            <br /> aliquam, purus sit
          </Typography>
          <Grid className={clsx(style.icon)}>
            <img src={Twitter} alt="" /> <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </Grid>
        </Grid>
        <Grid className={clsx(style.BoxSection)}>
          <img
            src={unsplash_mEZ3PoFGs_k}
            className={clsx(style.unsplash)}
            alt=""
          />
          <Typography variant="h6">Stylist expert</Typography>
          <Typography variant="h5">Lilly Adams</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut{" "}
            <br /> aliquam, purus sit
          </Typography>
          <Grid className={clsx(style.icon)}>
            <img src={Twitter} alt="" /> <img src={Facebook} alt="" />
            <img src={Instagram} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ProfessionalTeams;
