import style from "./Beauty.module.css";
import clsx from "clsx";
import unsplash_3ewkNkfJj2k from "../../aces/Img/unsplash_3ewkNkfJj2k-1.png";
import unsplash_0_McYfdyEDA from "../../aces/Img/unsplash_0_McYfdyEDA.png";
import unsplash_7tDGb3HrITg from "../../aces/Img/unsplash_7tDGb3HrITg.png";
import Vector from "../../aces/Img/Vector.png";
import { FaCaretRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";

import unsplash_xayCTz6N2nM from "../../aces/Img/unsplash_xayCTz6N2nM.png";
import unsplash_DiJKOYIiNmQ from "../../aces/Img/unsplash_DiJKOYIiNmQ.png";
import unsplash_yfmjALh1S6s from "../../aces/Img/unsplash_yfmjALh1S6s.png";
import Twitter from "../../aces/Img/Twitter.png";
import Facebook from "../../aces/Img/Facebook.png";
import Instagram from "../../aces/Img/Instagram.png";
import Linkedin from "../../aces/Img/Linkedin.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Beauty() {
  return (
    <Box>
      <Grid
        className={clsx(style.Beauty)}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Grid className={clsx(style.Beautyone)}>
          <Grid className={clsx(style.Beautyonenumberone)} mt={15.5} pb={14}>
            <img
              className={clsx(style.Beautyimg)}
              src={unsplash_3ewkNkfJj2k}
              alt=""
            />
            <Grid className={clsx(style.Beautyonenumber)}>
              <Grid
                className={clsx(style.BeautyConsultation)}
                pt={8}
                display={"flex"}
                alignItems={"center"}
              >
                <img src={Vector} alt="" />
                <Typography pt={0.5} pl={2.5} variant="h5">
                  Consultation
                </Typography>
              </Grid>
              <Typography pt={4} variant="h1">
                How much does a consultation cost at our clinic?
              </Typography>
              <Typography pt={4}>
                A wonderful serenity has taken possession of my entire soul,{" "}
                <br /> like these sweet mornings of spring which I enjoy with my{" "}
                <br /> whole heart. I am alone, and feel the charm of existence
                in <br /> this spot, which was created for the…
              </Typography>
              <button className={clsx(style.BeautyRead)}>
                Read More <FaCaretRight />
              </button>
            </Grid>
          </Grid>

          <Grid className={clsx(style.Beautyonenumberone)} mt={15.5} pb={14}>
            <img
              className={clsx(style.Beautyimg)}
              src={unsplash_7tDGb3HrITg}
              alt=""
            />
            <Grid className={clsx(style.Beautyonenumber)}>
              <Grid
                className={clsx(style.BeautyConsultation)}
                pt={8}
                display={"flex"}
                alignItems={"center"}
              >
                <img src={Vector} alt="" />
                <Typography pt={0.5} pl={2.5} variant="h5">
                  Beauty
                </Typography>
              </Grid>
              <Typography variant="h1" pt={4}>
                Watch out! don't choose the wrong beauty product
              </Typography>
              <Typography pt={4}>
                A wonderful serenity has taken possession of my entire soul,{" "}
                <br /> like these sweet mornings of spring which I enjoy with my{" "}
                <br /> whole heart. I am alone, and feel the charm of existence
                in <br /> this spot, which was created for the…
              </Typography>
              <button className={clsx(style.BeautyRead)}>
                Read More <FaCaretRight />
              </button>
            </Grid>
          </Grid>

          <Grid className={clsx(style.Beautyonenumberone)} mt={15.5} pb={14}>
            <img
              className={clsx(style.Beautyimg)}
              src={unsplash_0_McYfdyEDA}
              alt=""
            />
            <Grid className={clsx(style.Beautyonenumber)}>
              <Grid
                className={clsx(style.BeautyConsultation)}
                pt={8}
                display={"flex"}
                alignItems={"center"}
              >
                <img src={Vector} alt="" />
                <Typography variant="h5" pt={0.5} pl={2.5}>
                  Treatments
                </Typography>
              </Grid>
              <Typography variant="h1" pt={4}>
                About skin care you need to know
              </Typography>
              <Typography pt={4}>
                A wonderful serenity has taken possession of my entire soul,{" "}
                <br /> like these sweet mornings of spring which I enjoy with my{" "}
                <br /> whole heart. I am alone, and feel the charm of existence
                in <br /> this spot, which was created for the…
              </Typography>
              <button className={clsx(style.BeautyRead)}>
                Read More <FaCaretRight />
              </button>
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={15.5} className={clsx(style.Beautytow)}>
          <Grid className={clsx(style.Beautytowinput)}>
            <input
              placeholder="Search here ..."
              className={clsx(style.Beautyinput)}
              type="text"
            />
            <Grid pl={0.5} pb={1.3} pt={1.3} className={clsx(style.FaSearch)}>
              <FaSearch />
            </Grid>
          </Grid>

          <Grid mt={11} className={clsx(style.RecentPosts)}>
            <Grid pb={4} className={clsx(style.RecentPostsone)}>
              <Typography pt={6} pb={3.5} variant="h5">
                Recent Posts
              </Typography>

              <Grid
                display={"flex"}
                alignItems={"center"}
                pb={3.8}
                className={clsx(style.Recentstyle)}
              >
                <img
                  className={clsx(style.Recentstyleimg)}
                  src={unsplash_xayCTz6N2nM}
                  alt=""
                />
                <Grid pl={2.8} className={clsx(style.Recenttile)}>
                  <Typography variant="h6">01 jan 2021</Typography>
                  <Typography pt={1} m={0}>
                    Lorem ipsum dolor sit <br /> amet, consectetur <br />{" "}
                    adipiscing.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display={"flex"}
                alignItems={"center"}
                pb={3.8}
                className={clsx(style.Recentstyle)}
              >
                <img
                  className={clsx(style.Recentstyleimg)}
                  src={unsplash_DiJKOYIiNmQ}
                  alt=""
                />
                <Grid pl={2.8} className={clsx(style.Recenttile)}>
                  <Typography variant="h6">01 jan 2021</Typography>
                  <Typography pt={1} m={0}>
                    Lorem ipsum dolor sit <br /> amet, consectetur <br />{" "}
                    adipiscing.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                display={"flex"}
                alignItems={"center"}
                pb={3.8}
                className={clsx(style.Recentstyle)}
              >
                <img
                  className={clsx(style.Recentstyleimg)}
                  src={unsplash_yfmjALh1S6s}
                  alt=""
                />
                <Grid pl={2.8} className={clsx(style.Recenttile)}>
                  <Typography variant="h6">01 jan 2021</Typography>
                  <Typography pt={1} m={0}>
                    Lorem ipsum dolor sit <br /> amet, consectetur <br />{" "}
                    adipiscing.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid mt={9} className={clsx(style.Categoriesall)}>
            <Grid pb={4.8} className={clsx(style.Categories)}>
              <Typography pt={6.6} pb={1.7} variant="h5">
                Categories
              </Typography>
              <Typography pb={0.7}>Consultation</Typography>
              <Typography pb={0.7}>Beauty</Typography>
              <Typography pb={0.7}>Treatments</Typography>
              <Typography pb={0.7}>News</Typography>
            </Grid>
          </Grid>

          <Grid className={clsx(style.CloudTags)}>
            <Grid mt={9.5} pb={7} className={clsx(style.CloudTagsone)}>
              <Typography pt={6.8} pb={2.2} variant="h5">
                Cloud Tags
              </Typography>
              <Grid className={clsx(style.CloudTagsall)}>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  beauty
                </Typography>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  cute
                </Typography>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  skin
                </Typography>
              </Grid>
              <Grid className={clsx(style.CloudTagsall)}>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  glow
                </Typography>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  style
                </Typography>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  clinic
                </Typography>
              </Grid>
              <Grid className={clsx(style.CloudTagsall)}>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  clinic
                </Typography>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  clinic
                </Typography>
                <Typography mt={1} mb={0.8} ml={0.8}>
                  clinic
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid mt={10.8} pb={7} className={clsx(style.SocialConnect)}>
            <Grid className={clsx(style.Connect)}>
              <Typography pt={6.8} pb={3.5} variant="h5">
                Social Connect
              </Typography>
            </Grid>
            <Grid
              display={"flex"}
              justifyContent={"space-between"}
              className={clsx(style.Connectlogo)}
            >
              <img src={Facebook} alt="" />
              <img src={Twitter} alt="" />
              <img src={Instagram} alt="" />
              <img className={clsx(style.Linkedin)} src={Linkedin} alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        pt={16}
        
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
        className={clsx(style.slice)}
      >
        <Grid display={"flex"} className={clsx(style.sliceall)}>
          <Typography m={2} className={clsx(style.sliceone)}>
            1
          </Typography>
          <Typography m={2} className={clsx(style.slicetow)}>
            2
          </Typography>
          <Typography m={2} className={clsx(style.slicetow)}>
            3
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Beauty;
