import style from "./ContactUs.module.css";
import clsx from "clsx";
import Contact from "../../aces/Img/Contact Animations.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";

function ContactUs() {
  return (
    <Box className={clsx(style.ContactUs)}>
      <Grid container className={clsx(style.ContactUsitem)}>
        <Grid xs={6} className={clsx(style.ContactAnimations)}>
          <img src={Contact} alt="" />
        </Grid>
        <Grid className={clsx(style.ContactForm)}>
          <Typography pb={1} variant="h3">
            Contact Us
          </Typography>
          <Typography pb={1} variant="h4">
            Send your inquiry to <br /> our expert team
          </Typography>
          <Typography pb={3} variant="h6">
            Lorem ipsum dolor sit amet nulla turapis tellus.
          </Typography>
          <FormControl fullWidth>
            <div className={clsx(style.NameInput)}>
              <input
                type="text"
                className={clsx(style.Rectangle1)}
                placeholder="first name"
              />
              <input
                type="text"
                className={clsx(style.Rectangle1)}
                placeholder="last name"
              />
            </div>{" "}
            <input
              type="text"
              className={clsx(style.Rectangle2)}
              placeholder="email address"
            />{" "}
            <input
              type="text"
              className={clsx(style.Rectangle2)}
              placeholder="subject message"
            />{" "}
            <textarea
              className={clsx(style.Rectangle3)}
              placeholder="your in queri here"
            ></textarea>
          </FormControl>
          <button className={clsx(style.SendMessage)}>Send Message</button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactUs;
