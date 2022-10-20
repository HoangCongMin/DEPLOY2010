import clsx from "clsx";
import style from "./MainSlider.module.css";
import Frame from "../../aces/Img/Frame 1.png";
import backfroundtop from "../../aces/Img/Slide Background.png";
import Box from "@mui/material/Box";
import Typography from'@mui/material/Typography'

function MainSlider() {
  return (
    <Box className={clsx(style.Clinic)}>
      <img className={clsx(style.backfroundtop)} src={backfroundtop} alt="" />
      <Box className={clsx(style.MainSlider)}>
        <Box className={clsx(style.MainSliderone)}>
          <Typography variant="H1" className={clsx(style.Mainh1)}>Clinic & beauty consultant</Typography>
          <Typography className={clsx(style.Mainp)}>
            It is a long established fact that a reader will be by the readable
            content of a page.
          </Typography>
          <Box>
          <button className={clsx(style.MoreDetails)}>More Details</button>
          </Box>
        </Box>
        <Box>
          <img className={clsx(style.Frame)} src={Frame} alt="" />
        </Box>
      </Box>
      <Box className={clsx(style.icon)}>
        <li className={clsx(style.iconone)}></li>
        <li className={clsx(style.icontow)}></li>
        <li className={clsx(style.iconone)}></li>
      </Box>
    </Box>
  );
}

export default MainSlider;
