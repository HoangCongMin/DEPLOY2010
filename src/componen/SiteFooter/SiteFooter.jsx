import clsx from "clsx";
import style from "./SiteFooter.module.css";
import Footer from "../../aces/Img/Footer Logo.png";
import linkedin from "../../aces/Img/linkedin-in.png";
import instagram from "../../aces/Img/instagram (1).png";
import twitter from "../../aces/Img/twitter (1).png";
import facebook from "../../aces/Img/facebook-f.png";
import youtube from "../../aces/Img/youtube.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function SiteFooter() {
  return (
    <Box className={clsx(style.SiteFooter)} mt={9}>
      <Grid  container className={clsx(style.SiteFootersetup)}>
        <Grid pt={25} container className={clsx(style.SiteFooterone)} >
          <Grid className={clsx(style.Sidebar1)}>
            <img src={Footer} alt="" />
            <Typography variant="h6">Beautice is a Beauty Clinic WordPress Theme.</Typography>
            <Typography variant="h6" className={clsx(style.Sidebarnew)}>
              Baker Steet 101, NY, United States.
            </Typography>
            <span>+521 569 8966.</span>{" "}
            <span className={clsx(style.Sidebarspan)}>
              <u>mail@company.com</u>
            </span>
          </Grid>
          <Grid className={clsx(style.Sidebar)}>
            <Typography pb={5} variant="h6">Pages</Typography>
            <Grid>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma"> home</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma"> About</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma"> Services</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma"> Gallery</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma"> Team</a>{" "}
              </li>
            </Grid>
          </Grid>

          <Grid className={clsx(style.Sidebaronenumber)}>
            <Typography pb={5} variant="h6">Informations</Typography>
            <Grid>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma">Terms & conditions</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma"> Privacy policy</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>{" "}
                <a href="ma"> Blog</a>
              </li>
              <li>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512">
                  <path d="M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z" />
                </svg>
                <a href="ma"> Contact</a>
              </li>
            </Grid>
          </Grid>
        </Grid>
        <Grid className={clsx(style.SiteFooterend)} mt={10} pb={7}>
          <Grid>
            <img src={linkedin} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </Grid>
          <Typography>© AltDesain Studio 2021 - All right reserved.</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default SiteFooter;
