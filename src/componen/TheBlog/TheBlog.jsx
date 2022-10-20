import clsx from "clsx";
import style from "./TheBlog.module.css";
import { FaAngleDoubleRight } from "react-icons/fa";
import unsplash_3ewkNkfJj2k from "../../aces/Img/unsplash_3ewkNkfJj2k-1.png";
import unsplash_7tDGb3HrITg from "../../aces/Img/unsplash_7tDGb3HrITg.png";
import unsplash_0_McYfdyEDA from "../../aces/Img/unsplash_0_McYfdyEDA.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function TheBlog() {
  return (
    <Box>
      <Grid pt={19} className={clsx(style.Blog)}>
        <Typography pb={1.5} variant="h5">
          The Blog
        </Typography>
        <Typography pb={2} variant="h1">
          Our latest news
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Grid>

      <Grid
        display={"flex"}
        justifyContent={"space-between"}
        pt={15}
        className={clsx(style.Blogitemall)}
      >
        <Grid mt={5} className={clsx(style.Blogitem)}>
          <img src={unsplash_3ewkNkfJj2k} alt="" />
          <Grid pb={8} className={clsx(style.Blogitemconten)}>
            <Typography pb={2.5} variant="h1">How much does a consultation cost at our clinic?</Typography>
            <Typography pb={3.5}>
              A wonderful serenity has taken <br /> possession of my entire
              soul, <br /> like these sweet mornings ...
            </Typography>
            <Grid className={clsx(style.Learn)}>
              <Typography pb={0.5} variant="h6">Learn more</Typography>
              <span>
                <FaAngleDoubleRight />
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={5} className={clsx(style.Blogitem)}>
          <img src={unsplash_7tDGb3HrITg} alt="" />
          <Grid pb={8} className={clsx(style.Blogitemconten)}>
            <Typography pb={2.5} variant="h1">Watch out! don't choose the wrong beauty product</Typography>
            <Typography pb={3.5}>
              A wonderful serenity has taken <br /> possession of my entire
              soul, <br /> like these sweet mornings ...
            </Typography>
            <Grid className={clsx(style.Learn)}>
              <Typography pb={0.5} variant="h6">Learn more</Typography>
              <span>
                <FaAngleDoubleRight />
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid mt={5} className={clsx(style.Blogitem)}>
          <img src={unsplash_0_McYfdyEDA} alt="" />
          <Grid pb={8} className={clsx(style.Blogitemconten)}>
            <Typography pb={2.5} variant="h1">About skin care you need to know</Typography>
            <Typography pb={3.5}>
              A wonderful serenity has taken <br /> possession of my entire
              soul, <br /> like these sweet mornings ...
            </Typography>
            <Grid className={clsx(style.Learn)}>
              <Typography pb={0.5} variant="h6">Learn more</Typography>
              <span>
                <FaAngleDoubleRight />
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TheBlog;
