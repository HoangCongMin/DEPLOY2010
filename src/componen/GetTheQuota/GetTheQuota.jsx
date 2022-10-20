import clsx from "clsx";
import style from "./GetTheQuota.module.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function GetTheQuota() {
  return (
    <Box pb={10} className={clsx(style.GetTheQuotaone)}>
      <Grid className={clsx(style.GetTheQuota)} pt={20}>
        <Grid>
          <Typography variant="h5">Get The Quota</Typography>
          <Typography mt={1}  variant="h1">
            Want to be handled by our <br /> professional team immediately?
          </Typography>
          <Typography pt={2} pb={4}>
            Id dui erat sed quam tellus in purus. Pellentesque congue <br />{" "}
            fringilla cras tellus enim.
          </Typography>
        </Grid>
        <button>Make an Appointment</button>
      </Grid>
    </Box>
  );
}

export default GetTheQuota;
