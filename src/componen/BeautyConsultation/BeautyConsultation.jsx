import Animation11 from "../../aces/Img/Animation11.png";
import Animation2 from "../../aces/Img/Animation2-1.png";
import Animation3 from "../../aces/Img/Animation3-1.png";
import style from "./BeautyConsultation.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import clsx from "clsx";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function BeautyConsultation() {
  return (
    <Box>
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        pt={21}
        className={clsx(style.BeautyConsultation)}
      >
        <img src={Animation11} alt="" />
        <Grid className={clsx(style.BeautyConsultationtwo)}>
          <Typography pb={1} variant="h5">Beauty Consultation</Typography>
          <Typography pb={2} variant="h1">We services beauty consultation</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Elit, quam suscipit purus donec <br /> amet. Egestas volutpat
            facilisi eu libero.
          </Typography>
          <Grid pt={3} display={'flex'} alignItems={'center'} className={clsx(style.BeautyConsultationthree)}>
            <Typography variant="h5">Make an Appointment </Typography>
            <span>
              <FaAngleDoubleRight />
            </span>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        pt={21}
        className={clsx(style.BeautyConsultationmid)}
      >
        <Grid className={clsx(style.BeautyConsultationtwo)}>
          <Typography pb={1} variant="h5">Skin Treatements</Typography>
          <Typography pb={2} variant="h1">Skin care and treatment by expert</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Elit, quam suscipit purus donec <br /> amet. Egestas volutpat
            facilisi eu libero.
          </Typography>
          <Grid pt={3} display={'flex'} alignItems={'center'} className={clsx(style.BeautyConsultationthree)}>
            <Typography variant="h5">Make an Appointment </Typography>
            <span>
              <FaAngleDoubleRight />
            </span>
          </Grid>
        </Grid>
        <img src={Animation2} alt="" />
      </Grid>
      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        pt={21}
        className={clsx(style.BeautyConsultation)}
      >
        <img src={Animation3} alt="" />
        <Grid className={clsx(style.BeautyConsultationtwo)}>
          <Typography pb={1} variant="h5">Beauty Product</Typography>
          <Typography pb={2} variant="h1">We present quality beauty products</Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
            Elit, quam suscipit purus donec <br /> amet. Egestas volutpat
            facilisi eu libero.
          </Typography>
          <Grid pt={3} display={'flex'} alignItems={'center'} className={clsx(style.BeautyConsultationthree)}>
            <Typography variant="h5">Make an Appointment </Typography>
            <span>
              <FaAngleDoubleRight />
            </span>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BeautyConsultation;
