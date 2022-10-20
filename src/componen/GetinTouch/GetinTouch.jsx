import clsx from "clsx";
import style from "./GetinTouch.module.css";
import marker from "../../aces/Img/map-marker-alt.png";
import phone from "../../aces/Img/phone-alt.png";
import mail from "../../aces/Img/mail-bulk.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function GetinTouch() {
  return (
    <Box pb={10}>
      <Grid className={clsx(style.GetinTouch)}>
        <Typography
          variant="h5"
          pt={13}
          m={0}
          pb={2.8}
          className={clsx(style.GetinTouchtitle)}
        >
          Get in Touch
        </Typography>
        <Typography
          variant="h1"
          m={0}
          pb={2.5}
          className={clsx(style.Getintitle)}
        >
          Get direct handling by us
        </Typography>
        <Typography pt={1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
        </Typography>
      </Grid>
      <Grid className={clsx(style.Getin)}>
        <Grid className={clsx(style.GetinAddress)}>
          <img src={marker} alt="" />
          <Typography pb={3} variant="h5">
            Address
          </Typography>
          <Typography variant="h3">101 Baker Street, NY</Typography>
          <Typography pb={7} mt={2.5}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut{" "}
            <br /> aliquam, purus sit
          </Typography>
        </Grid>
        <Grid className={clsx(style.GetinPhone)}>
          <img src={phone} alt="" />
          <Typography pb={3} variant="h5">
            Phone
          </Typography>
          <Typography variant="h3">+896 120 5889</Typography>
          <Typography pb={7} mt={2.5}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut{" "}
            <br /> aliquam, purus sit
          </Typography>
        </Grid>
        <Grid className={clsx(style.GetinAddress)}>
          <img src={mail} alt="" />
          <Typography pb={3} variant="h5">
            Mail
          </Typography>
          <Typography variant="h3">mail@company.com</Typography>
          <Typography pb={7} mt={2.5}>
            Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit ut{" "}
            <br /> aliquam, purus sit
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GetinTouch;
