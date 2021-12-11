import React from "react";
import "./footer.css";
import PropTypes from "prop-types";

function Footer(props) {
  return (
    <footer className="footer container-fluid" id="contactus">
      <div className="row">
        {/* <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link"><i className="far fa-envelope l"></i></a></li>
                    <li className="footer__item"><a href="#" className="footer__link"><i className="fab fa-youtube l"></i></a></li>
                    <li className="footer__item"><a href="#" className="footer__link"><i className="fab fa-facebook l"></i></a></li>
                    <li className="footer__item"><a href="#" className="footer__link"><i className="fab fa-instagram l"></i></a></li>
                    <li className="footer__item"><a href="#" className="footer__link"><i className="fab fa-twitter-square l"></i></a></li>
                </ul>
            </div>
        </div> */}
        <div className="col-1-of2">
          <p className="footer__copyright">
            Copyright ©{" "}
            <p  className="footer__link">
             SWASTHYA
            </p>{" "}
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
    </footer>
  );
}

export default Footer;
