import clsx from "clsx";
import style from "./ServicesFAQ.module.css";
import Group4 from "../../aces/Img/Group4.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const data = [
  {
    name: "Is beauty consultation handled thoroughly?",
    conten:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ",
    conten2:
      "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
  {
    name: "Can I be beautiful in an instant time?",
    conten:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ",
    conten2:
      "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },

  {
    name: "Are there any side effects to the treatment methods or treatments at this clinic?",
    conten:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ",
    conten2:
      "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },

  {
    name: "Do professionals have accreditation in their respective fields?",
    conten:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus  venenatis, lectus magna fringilla urna ",
    conten2:
      "porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla",
  },
];

function ServicesFAQ() {
  const [selec, Setselec] = useState(null);

  const tonggle = (index) => {
    if (selec === index) {
      return Setselec(null);
    }
    Setselec(index);
  };
  return (
    <Box>
      <Grid className={clsx(style.ServicesFAQ)} mt={28}>
        <Grid
          pt={20}
          pb={20}
          display={"flex"}
          justifyContent={"space-between"}
          className={clsx(style.Serviceitem)}
        >
          <Grid className={clsx(style.Serviceitemoneone)}>
            <Typography variant="h1">
              Best responsibility and service <br />
              for our customers
            </Typography>
            <Typography pt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />{" "}
              aliquam, purus sit amet luctus venenatis
            </Typography>
          </Grid>
          <Grid
            display={"flex"}
            alignItems={"center"}
            className={clsx(style.Serviceitemone)}
          >
            <img src={Group4} alt="" />
            <Typography variant="h5">Treatments Videos</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid pt={20} pb={20} className={clsx(style.ServicesFAQone)}>
        <h1>Services FAQ’s</h1>
        <Grid className={clsx(style.ServicesFAQicon)}></Grid>
        <Grid className={clsx(style.Accordion)}>
          {data.map((item, index) => (
            <Grid key={index} className={clsx(style.faqitem)}>
              <Grid
                onClick={() => tonggle(index)}
                className={clsx(style.faqname)}
              >
                <h3>{item.name}</h3>
                {selec === index ? <FaAngleDown /> : <FaAngleUp />}
              </Grid>
              <Grid
                className={
                  selec === index
                    ? clsx(style.faqcontenshow)
                    : clsx(style.faqconten)
                }
              >
                <Typography>{item.conten}</Typography>
                <Typography>{item.conten2}</Typography>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}

export default ServicesFAQ;
