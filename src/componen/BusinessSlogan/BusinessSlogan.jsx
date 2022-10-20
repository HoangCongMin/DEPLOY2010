import style from'./BusinessSlogan.module.css'
import clsx from'clsx'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function BusinessSlogan(){
    return(
        <Box mt={17} className={clsx(style.BusinessSlogan)}>
            <Grid className={clsx(style.BusinessSloganname)}>
            <Typography mt={20} mb={2} variant='h5'>Business Slogan</Typography>
            <Typography pb={3} variant='h1'>Best responsibility and service <br /> for our customers</Typography>
            <Typography pb={20}>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, <br /> purus sit amet luctus venenatis</Typography>
            </Grid>
        </Box>
    )
}

export default BusinessSlogan