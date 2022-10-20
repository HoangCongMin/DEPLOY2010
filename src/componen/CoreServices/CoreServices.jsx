import style from "./CoreServices.module.css";
import clsx from "clsx";
import Animation1 from "../../aces/Img/Animation1.png";
import Animation2 from "../../aces/Img/Animation2.png";
import Animation3 from "../../aces/Img/Animation3.png";
import Play_button from "../../aces/Img/Play_button.png";
import Animation4 from "../../aces/Img/about.c151a2e1c3887bdedb13.png";
import background from "../../aces/Img/Bubble2.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function CoreServices() {
  return (
    <Box>
      <Grid pt={19} className={clsx(style.CoreServices)}>
        <Typography variant="h5" className={clsx(style.MainServices)}>
          Main Services
        </Typography>
        <Typography
          mt={1}
          mb={1}
          variant="h1"
          className={clsx(style.Learnservices)}
        >
          Learn services to focus <br /> on your beauty
        </Typography>
        <Typography pt={2} className={clsx(style.Porta)}>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient <br /> amet, feugiat tellus sagittis, scelerisque eget
          nulla turpis.
        </Typography>
      </Grid>
      <Grid
        mt={11}
        mb={15}
        display={"flex"}
        justifyContent={"space-between"}
        className={clsx(style.BoxSection)}
        
      >
        <Grid
          
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
          className={clsx(style.BoxBacground)}
        >
          <img src={Animation1} alt="" className={clsx(style.Ellipse)} />
          <Typography className={clsx(style.Beauty)}>
            Beauty consultation
          </Typography>
          <Typography pt={1} pb={5} className={clsx(style.Nonparturient)}>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </Typography>
        </Grid>
        <Grid
          
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
          className={clsx(style.BoxBacground)}
        >
          <img src={Animation2} alt="" className={clsx(style.Ellipse)} />
          <Typography className={clsx(style.Beauty)}>
            Beauty consultation
          </Typography>
          <Typography pt={1} pb={5} className={clsx(style.Nonparturient)}>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </Typography>
        </Grid>
        <Grid
         
          display={"flex"}
          direction={"column"}
          alignItems={"center"}
          className={clsx(style.BoxBacground)}
        >
          <img src={Animation3} alt="" className={clsx(style.Ellipse)} />
          <Typography className={clsx(style.Beauty)}>
            Beauty consultation
          </Typography>
          <Typography pt={1} pb={5} className={clsx(style.Nonparturient)}>
            Non parturient amet, feugiat tellus sagittis, scelerisque eget nulla
            turpis.
          </Typography>
        </Grid>
      </Grid>
      <Grid className={clsx(style.CoreServicesall)}>
        <img className={clsx(style.backgroundimg)} src={background} alt="" />
        <Grid className={clsx(style.AboutUs)}>
          <Grid className={clsx(style.AboutUsone)}>
            <Typography pb={1} variant="h5" className={clsx(style.About)}>
              About Us
            </Typography>
            <Typography
              pb={1.5}
              variant="h1"
              className={clsx(style.bestbeautyclinic)}
            >
              We are the best beauty clinic
            </Typography>
            <Typography pb={4} className={clsx(style.Loremipsum)}>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
              Elit, quam suscipit purus donec <br /> amet. Egestas volutpat
              facilisi eu libero. Nunc, <br /> ipsum ornare mauris sit quam quis
              enim. Varius <br /> tellus in suspendisse placerat. <br /> <br />{" "}
              Id dui erat sed quam tellus in purus. Pellentesque <br /> congue
              fringilla cras tellus enim.{" "}
            </Typography>
            <Grid className={clsx(style.MoreDetailsButton)}>
              <button className={clsx(style.ButtonBG)}>Learn More</button>
              <img src={Play_button} alt="" className={clsx(style.Play)} />
              <span className={clsx(style.WatchVideo)}>Watch Video</span>
            </Grid>
          </Grid>
          <Grid className={clsx(style.AboutUstow)}>
            <img className={clsx(style.Animation4)} src={Animation4} alt="" />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CoreServices;
