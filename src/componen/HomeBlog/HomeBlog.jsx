import clsx from "clsx";
import style from "./HomeBlog.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function HomeBlog() {
  return (
    <Box>
      <Grid className={clsx(style.HomeBlogall)} pt={18}>
        <Grid className={clsx(style.HomeBlogallone)}>
          <Grid
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            className={clsx(style.HomeBlogallonemsmall)}
            pt={16}
            pb={14}
          >
            <Grid>
              <Typography variant="h1">Blog</Typography>
            </Grid>
            <Grid>
              <Typography>Home • Blog</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default HomeBlog;
