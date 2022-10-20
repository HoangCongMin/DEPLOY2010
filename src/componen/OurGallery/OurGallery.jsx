import style from "./OurGallery.module.css";
import clsx from "clsx";
import unsplash_3ewkNkfJj2k from "../../aces/Img/unsplash_3ewkNkfJj2k.png";
import unsplash_FVh_yqLR9eA from "../../aces/Img/unsplash_FVh_yqLR9eA-1.png";
import unsplash_xayCTz6N2nM from "../../aces/Img/unsplash_xayCTz6N2nM.png";
import unsplash_Pe9IXUuC6QU from "../../aces/Img/unsplash_Pe9IXUuC6QU-1.png";
import unsplash_fvInY from "../../aces/Img/unsplash_fvInY-Gh7sc.png";
import unsplash_HEde from "../../aces/Img/unsplash_HEde-a_T4E8.png";
import unsplash_9Wa1HgE1XlA from "../../aces/Img/unsplash_9Wa1HgE1XlA.png";
import unsplash_PqyzuzFiQfY from "../../aces/Img/unsplash_PqyzuzFiQfY.png";
import unsplash_4SUyx4KQ5Ik from "../../aces/Img/unsplash_4SUyx4KQ5Ik.png";
import Group4 from "../../aces/Img/Group4.png";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function OurGallery() {
  return (
    <>
      <Grid
        pt={38}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className={clsx(style.OurGallery)}
      >
        <Grid>
          <Typography m={0} pb={1} variant="h5">
            Our Gallery
          </Typography>
          <Typography variant="h1">
            Check out the collection pictures <br /> from our clinic
          </Typography>
        </Grid>
        <Typography pt={2}>
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
          aliquam, purus sit amet <br /> luctus venenatis
        </Typography>
      </Grid>
      <Grid
        pt={10}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        className={clsx(style.OurGalleryimg)}
      >
        <img src={unsplash_3ewkNkfJj2k} alt="" />
        <img src={unsplash_FVh_yqLR9eA} alt="" />
        <img src={unsplash_xayCTz6N2nM} alt="" />
        <img src={unsplash_Pe9IXUuC6QU} alt="" />
        <img src={unsplash_fvInY} alt="" />
        <img src={unsplash_HEde} alt="" />
        <img src={unsplash_9Wa1HgE1XlA} alt="" />
        <img src={unsplash_PqyzuzFiQfY} alt="" />
        <img src={unsplash_4SUyx4KQ5Ik} alt="" />
        {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor <br /> rhoncus dolor purus non enim, <span> our teams</span>.</p> */}
      </Grid>
      <Typography pt={8} pb={10} className={clsx(style.OurGalleryimgp)}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,{" "}
        <br /> purus sit amet luctus venenatis, lectus magna fringilla urna,
        porttitor <br /> rhoncus dolor purus non enim, <span> our teams</span>.
      </Typography>

      <Grid className={clsx(style.BackgroundMask)}>
        <Grid className={clsx(style.BackgroundMaskone)}>
          <Typography  variant="h1">Watch the video tour</Typography>
          <Typography pt={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />{" "}
            aliquam, purus sit amet luctus venenatis
          </Typography>
          <img src={Group4} alt="" />
        </Grid>
      </Grid>
    </>
  );
}

export default OurGallery;
