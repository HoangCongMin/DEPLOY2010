import clsx from "clsx";
import style from "./Mainsvnew.module.css";
import icon2 from "../../aces/Img/icon-2.png";
import icon1 from "../../aces/Img/icon-1.png";
import icon3 from "../../aces/Img/icon-3.png";
import { FaAngleDoubleRight } from "react-icons/fa";
import Wave from "../../aces/Img/Wave Line.png";
import handshake from "../../aces/Img/handshake 1.png";
import brotherhood from "../../aces/Img/brotherhood 1.png";
import earth from "../../aces/Img/earth 1.png";
import doctor from "../../aces/Img/doctor 1.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Mainsvnew() {
  return (
    <Box>
      <Grid pt={20} className={clsx(style.Mainsvnew)}>
        <Typography pb={1} variant="h5">
          Main Services
        </Typography>
        <Typography variant="h1">Our focus services</Typography>
        <Typography pt={2}>Lorem ipsum dolor sit amet.</Typography>
      </Grid>

      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        pt={13}
        className={clsx(style.Mainsvnewone)}
      >
        <Grid pt={5} pb={6} className={clsx(style.Mainsvnewoneitem)}>
          <Grid className={clsx(style.maiall)}>
            <img src={icon1} alt="" />
            <Typography pt={1} variant="h5">
              Beauty consultation
            </Typography>
            <Typography pt={1.5}>
              Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.
            </Typography>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            pt={2}
            className={clsx(style.Mainsvtitle)}
          >
            <Typography pb={0.4} variant="h6">
              Learn more
            </Typography>{" "}
            <span>
              <FaAngleDoubleRight />
            </span>
          </Grid>
        </Grid>
        <Grid pt={5} pb={6} className={clsx(style.Mainsvnewoneitem)}>
          <Grid className={clsx(style.maiall)}>
            <img src={icon2} alt="" />
            <Typography pt={1} variant="h5">
              Skin treatments
            </Typography>
            <Typography pt={1.5}>
              Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.
            </Typography>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            pt={2}
            className={clsx(style.Mainsvtitle)}
          >
            <Typography variant="h6">Learn more</Typography>{" "}
            <span>
              <FaAngleDoubleRight />
            </span>
          </Grid>
        </Grid>
        <Grid pt={5} pb={6} className={clsx(style.Mainsvnewoneitem)}>
          <Grid className={clsx(style.maiall)}>
            <img src={icon3} alt="" />
            <Typography pt={1} variant="h5">
              Beauty product
            </Typography>
            <Typography pt={1.5}>
              Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing.
            </Typography>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            pt={2}
            className={clsx(style.Mainsvtitle)}
          >
            <Typography variant="h6">Learn more</Typography>{" "}
            <span>
              <FaAngleDoubleRight />
            </span>
          </Grid>
        </Grid>
        <img className={clsx(style.Wave)} src={Wave} alt="" />
      </Grid>

      <Grid mt={14.5} className={clsx(style.backgrondMainsvnew)}>
        <Grid
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          pt={20}
          pb={24}
          className={clsx(style.choosing)}
        >
          <Grid className={clsx(style.Whychoosing)}>
            <Typography pt={5} pb={2} variant="h1">
              Why choosing us?
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
              aliquam, purus sit amet luctus <br /> venenatis.
            </Typography>
          </Grid>
          <Grid className={clsx(style.trustedclinicone)}>
            <Grid
              display={"flex"}
              justifyContent={"space-between"}
              pb={7}
              className={clsx(style.trustedclinic)}
            >
              <Grid
                display={"flex"}
                alignItems={"center"}
                className={clsx(style.trust)}
              >
                <img src={handshake} alt="" />
                <Grid className={clsx(style.content)}>
                  <Typography variant="h1">100%</Typography>
                  <Typography variant="h5" className={clsx(style.contenth5)}>
                    trusted clinic
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display={"flex"}
                alignItems={"center"}
                className={clsx(style.trust)}
              >
                <img src={brotherhood} alt="" />
                <Grid className={clsx(style.content)}>
                  <Typography variant="h1">99%</Typography>
                  <Typography variant="h5" className={clsx(style.contentlove)}>
                    customer love
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              display={"flex"}
              justifyContent={"space-between"}
              className={clsx(style.trustedclinictow)}
            >
              <Grid
                display={"flex"}
                alignItems={"center"}
                className={clsx(style.trust)}
              >
                <img src={earth} alt="" />
                <Grid className={clsx(style.content)}>
                  <Typography variant="h1">75+</Typography>
                  <Typography variant="h5" className={clsx(style.contentlove)}>
                    asian branch
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display={"flex"}
                alignItems={"center"}
                className={clsx(style.trust)}
              >
                <img src={doctor} alt="" />
                <Grid className={clsx(style.content)}>
                  <Typography variant="h1">1.200+</Typography>
                  <Typography variant="h5" className={clsx(style.contentlove)}>
                    licensed worker
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Mainsvnew;
