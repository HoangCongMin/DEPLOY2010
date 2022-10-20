import clsx from "clsx";
import style from "./OurVision.module.css";
import Illustration from "../../aces/Img/Illustration-1.png";
import Illustration2 from "../../aces/Img/Illustration-2.png";
import LOGO1 from "../../aces/Img/LOGO1.png";
import LOGO2 from "../../aces/Img/LOGO2.png";
import LOGO3 from "../../aces/Img/LOGO3.png";
import LOGO4 from "../../aces/Img/LOGO4.png";
import LOGO5 from "../../aces/Img/LOGO5.png";
import backgrondour from "../../aces/Img/Bubble BGFooter.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function OurVision() {
  return (
    <>
      <Box mt={20} className={clsx(style.Vision)}>
        <img src={backgrondour} className={clsx(style.backgrondour)} alt="" />

        <Grid
          alignItems={"center"}
          container
          justifyContent={"space-between"}
          className={clsx(style.OurVision)}
        >
          <Grid className={clsx(style.Visionimgone)}>
            <img src={Illustration} alt="" className={clsx(style.Visionimg)} />
          </Grid>
          <Grid xs={5} className={clsx(style.VisionimgoneOurVisionh5)}>
            <Typography
              m={0}
              pb={1}
              variant="h5"
              className={clsx(style.OurVisionh5)}
            >
              Our Vision
            </Typography>
            <Typography variant="h1" className={clsx(style.OurVisionh1)}>
              Be the best and go <br /> international
            </Typography>
            <Typography mt={3} className={clsx(style.OurVisionhp)}>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Elit, quam suscipit purus donec <br /> amet. Egestas volutpat
              facilisi eu libero. <br />
              <br /> Nunc, ipsum ornare mauris sit quam quis enim. <br /> Varius
              tellus in suspendisse placerat.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          pt={13}
          alignItems={"center"}
          justifyContent={"space-between"}
          container
          className={clsx(style.OurVision)}
        >
          <Grid className={clsx(style.OurVisionh11)} >
            <Typography
              m={0}
              pb={1}
              variant="h5"
              className={clsx(style.OurVisionh5)}
            >
              Our Mission
            </Typography>
            <Typography variant="h1" className={clsx(style.OurVisionh1)}>
              Special & premium service <br /> to any clients
            </Typography>
            <Typography mt={3} className={clsx(style.OurVisionhp)}>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Elit, quam suscipit purus donec <br /> amet. Egestas volutpat
              facilisi eu libero. <br />
              <br /> Nunc, ipsum ornare mauris sit quam quis enim. <br /> Varius
              tellus in suspendisse placerat.
            </Typography>
          </Grid>
          <Grid className={clsx(style.OurVisionh2)} xs={5}>
            <img src={Illustration2} alt="" className={clsx(style.Visionimg)} />
          </Grid>
        </Grid>

        <Grid mt={17} className={clsx(style.Clients)}>
          <Typography pb={1} variant="h5" className={clsx(style.OurVisionh5)}>
            Our Clients
          </Typography>
          <Typography pb={2} variant="h1">
            Well-known agencies
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </Typography>
        </Grid>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pt={15}
          pb={10}
          className={clsx(style.LOGO)}
        >
          <img src={LOGO1} alt="" />
          <img src={LOGO2} alt="" />
          <img src={LOGO3} alt="" />
          <img src={LOGO4} alt="" />
          <img src={LOGO5} alt="" />
        </Grid>
      </Box>{" "}
    </>
  );
}

export default OurVision;
