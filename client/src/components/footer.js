import React from "react";
// import "./App.css";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import "./footer.css";

// import BackgroundHeader from "./public/Bg1.png";

const useStyles = makeStyles((theme) => ({
  BackgroundHead: {
    // backgroundImage: 'url('+ BackgroundHeader+')',
    height: 200,

    // position: 'absolute',
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    [theme.breakpoints.up('md')]: {
      height: "auto",
    },

    //  margin: 24,
    //  padding: 24,
  },
 footer: {
   backgroundColor: "#52d1d1",
   color: "white",
   textAlign: "center",
   height: "50px",
 }


}));

const Footer = () => {
  const classes = useStyles();

  return (
    <>
    <div style={{marginTop: "30px"}}>
    <img src="./footer.jpg" alt="lady" style={{marginTop: "10px"}} className={classes.BackgroundHead} />
     <div className={classes.footer}>
     <div className={classes.BackgroundHead}>
          <p className="footer__copyright">
            Copyright ©{" "}
            <a href="#" className="footer__link">
              SWASTHYA
            </a>{" "}
            .You are 100% allowed to use this webpage for both personal and
            commercial use, but NOT to claim it as your own design. A credit to
            the original authors,
            <a href="#" className="footer__link">
              (Tanya Bhandari
            </a>
            ,
            <a href="#" className="footer__link">
              Ananya Sharma
            </a>
            ,
            <a href="#" className="footer__link">
              Yash Gagneja
            </a>
            ,
            <a href="#" className="footer__link">
              Abhishek Kumar
            </a>
            ,
            <a href="#" className="footer__link">
             Pawan Kumar
            </a>
            ) is of course highly appreciated!
          </p>
        </div>
     </div>
    </div>
   
    </>
   
  );
};

export default Footer;
