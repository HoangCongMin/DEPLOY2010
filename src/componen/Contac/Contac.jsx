import style from "./Contac.module.css";
import clsx from "clsx";
import Contact from "../../aces/Img/Contact Animations.png";
import Bubble2 from "../../aces/Img/Bubble2.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Contacnew() {
  return (
    <Box>
      <Grid className={clsx(style.Contactnew)}>
        <Typography
          pb={2.7}
          variant="h5"
          className={clsx(style.Contactnewtitle)}
        >
          Contact Us
        </Typography>
        <Grid
          display={"flex"}
          justifyContent={"space-between"}
          className={clsx(style.Contactnewconten)}
        >
          <Typography variant="h1">
            Contact service for our <br /> customers
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit ut
            aliquam, purus sit amet <br /> luctus venenatis
          </Typography>
        </Grid>
      </Grid>

      <Grid className={clsx(style.ContactUsitem)}>
        <img className={clsx(style.Bubble2)} src={Bubble2} alt="" />

        <Grid className={clsx(style.ContactAnimations)}>
          <img src={Contact} alt="" />
        </Grid>

        <Grid className={clsx(style.ContactForm)}>
          <form>
            <Grid className={clsx(style.NameInput)}>
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
            </Grid>
            <br></br>
            <input
              type="text"
              className={clsx(style.Rectangle2)}
              placeholder="email address"
            />{" "}
            <br></br>
            <input
              type="text"
              className={clsx(style.Rectangle2)}
              placeholder="subject message"
            />{" "}
            <br></br>
            <textarea
              className={clsx(style.Rectangle3)}
              placeholder="your in queri here"
            ></textarea>
          </form>
          <button className={clsx(style.SendMessage)}>Send Message</button>
        </Grid>
      </Grid>
      {/* <img className={clsx(style.map)} src={map} alt="" /> */}
      <Grid pt={20} className={clsx(style.mapouter)}>
        <Grid className={clsx(style.gmap_canvas)}>
          <iframe
            title="map"
            className={clsx(style.gmap_iframe)}
            frameborder="0"
            scrolling="no"
            marginheight="0"
            marginwidth="0"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=University of Oxford&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
          <a href="https://piratebay-proxys.com/">Pirate Proxy</a>
        </Grid>
        
      </Grid>
    </Box>
  );
}

export default Contacnew;
