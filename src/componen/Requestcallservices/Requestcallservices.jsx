import style from "./Requestcallservices.module.css";
import clsx from "clsx";
import { FaPhoneVolume } from "react-icons/fa";
import Elements from "../../aces/Img/BG-Elements.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Requestcallservices() {
  return (
    <Box
      pt={20}
      alignItems={"center"}
      display={"flex"}
      justifyContent={"space-between"}
      className={clsx(style.Requestcallservices)}
      pb={10}
    >
      <img className={clsx(style.Elements)} src={Elements} alt="" />
      <Grid className={clsx(style.Requestcallservicesall)}>
        <Typography pb={3} variant="h1">Request call services</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consect <br /> adipiscing elit{" "}
          <span> Contact Us </span>.
        </Typography>
      </Grid>
      <Grid className={clsx(style.Requestcallservicesinput)}>
        <Grid display={'flex'} className={clsx(style.RequestInsert)}>
          <input type="text" placeholder="Insert your phone number here ..." />
          <button className={clsx(style.RequestInsertbutton)}>
            <FaPhoneVolume />
          </button>
        </Grid>
        <Typography pt={1}>Toll free for our coverage areas.</Typography>
      </Grid>
    </Box>
  );
}

export default Requestcallservices;
