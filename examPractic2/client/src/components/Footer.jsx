import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Grid } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-12">
            <h6>Top Products</h6>
            <ul className="footer-links">
              <li className="footer-link">
                <a style={{ color: "white" }} href="#">
                  Managed Website
                </a>
              </li>
              <li className="footer-link">
                <a style={{ color: "white" }} href="#">
                  Manage Reputation
                </a>
              </li>
              <li className="footer-link">
                <a style={{ color: "white" }} href="#">
                  Power Tools
                </a>
              </li>
              <li className="footer-link">
                <a style={{ color: "white" }} href="#">
                  Marketing Service
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12">
            <h6>Newsletter</h6>
            <p>
              You can trust us. we only send promo offers, not a single spam.
            </p>
            <form className="footer-form">
              <div className="row align-items-center justify-content-center">
                <div className="col-lg-8 col-md-12">
                  <input type="email" placeholder="Enter Email" required />
                </div>
                <div className="col-lg-4 col-md-12">
                  <button>
                    Subscribe <EastIcon className="icon" />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="col-lg-3 col-md-12">
            <h6>Instragram Feed</h6>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i1.jpg"
                  alt="1"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i2.jpg"
                  alt="2"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i3.jpg"
                  alt="3"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i4.jpg"
                  alt="4"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i5.jpg"
                  alt="5"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i6.jpg"
                  alt="6"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i7.jpg"
                  alt="7"
                />
              </Grid>
              <Grid item xs={3}>
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/i8.jpg"
                  alt="8"
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <div
          style={{
            paddingTop: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="copyright" style={{ fontSize: "15px" }}>
            Copyright ©2023 All rights reserved | This template is made with{" "}
            <FavoriteBorderIcon
              style={{ fontSize: "18px", color: "#8a90ff" }}
            />{" "}
            by{" "}
            <a
              style={{ color: "#8a90ff" }}
              href="https://colorlib.com"
              target="_blank"
            >
              Colorlib
            </a>
          </div>
          <div className="socials">
            <a className="social" href="#">
              <FacebookIcon style={{ fontSize: "18px" }} />
            </a>
            <a className="social" href="#">
              <TwitterIcon style={{ fontSize: "18px" }} />
            </a>
            <a className="social" href="#">
              <SportsBasketballIcon style={{ fontSize: "18px" }} />
            </a>
            <a className="social" href="#">
              <LanguageIcon style={{ fontSize: "18px" }} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
