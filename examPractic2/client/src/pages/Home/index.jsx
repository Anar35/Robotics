import React, { useEffect } from "react";
import style from "./index.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRobotsContext } from "../../contexts/RobotsContext";
import { getAllRobots } from "../../api/httpReuests";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DiamondIcon from "@mui/icons-material/Diamond";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Helmet from "react-helmet";

const Home = () => {
  const [robots, setRobots] = useRobotsContext();

  useEffect(() => {
    getAllRobots().then((data) => setRobots(data));
  }, [setRobots]);
  return (
    <>
      <Helmet>
        <title>Robotics</title>
      </Helmet>
      <section id={style.hero}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 d-flex align-items-start flex-column justify-content-center">
              <h1
                style={{ color: "#fff", fontSize: "60px", fontWeight: "400" }}
              >
                Improved <br /> Production level <br /> with Robotics
              </h1>
              <p
                style={{ margin: "5px 0 20px" }}
                className="text-light text-uppercase"
              >
                Everyone wants the innovation through robotics
              </p>
              <button className={style.heroBtn}>View Details</button>
            </div>
            <div className="col-lg-6 col-md-6">
              <img
                src="https://preview.colorlib.com/theme/robotics/img/banner-img.png.webp"
                alt="hero"
              />
            </div>
          </div>
        </div>
      </section>
      <section id={style.products}>
        <div className="container">
          <div
            className="productsTitle"
            style={{ padding: "0 15px 40px", textAlign: "center" }}
          >
            <h1 style={{ paddingBottom: "10px" }}>
              Featured Robotics Products to Show
            </h1>
            <p style={{ color: "#777777" }}>
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div className="sortbtn">
            <Button
              onClick={() => {
                setRobots([...robots.sort((x, y) => x.price - y.price)]);
              }}
              style={{ margin: "20px" }}
              variant="contained"
              color="info"
            >
              Sort by Price
            </Button>
          </div>
          <div className="row">
            {robots &&
              robots.map((robot) => {
                return (
                  <div
                    key={robot._id}
                    style={{ marginBottom: "20px" }}
                    className="col-lg-3 col-md-6"
                  >
                    <Card className={style.productsCard} sx={{ maxWidth: 345 }}>
                      <CardMedia
                        component="img"
                        alt={robot.name}
                        height="240"
                        style={{
                          objectFit: "contain",
                          verticalAlign: "middle",
                          padding: "40px",
                          borderBottom: "1px solid #eee",
                        }}
                        image={robot.imageURL}
                      />
                      <CardContent
                        style={{ padding: "20px", backgroundColor: "#F9F9FF" }}
                      >
                        <Typography gutterBottom variant="h6" component="div">
                          {robot.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {robot.desc}
                        </Typography>
                        <Typography variant="p">
                          Price: {robot.price} $
                        </Typography>
                        <button className={style.productBtn}>
                          View Details
                        </button>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section id={style.aboutFoto}>
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <img
                style={{ width: "100%", display: "block" }}
                src="https://preview.colorlib.com/theme/robotics/img/about-img.png"
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h1 style={{ padding: "20px 0" }}>
                Globally Connected <br />
                by Large Network
              </h1>
              <h5 style={{ marginBottom: "20px", fontWeight: "300" }}>
                We are here to listen from you deliver exellence
              </h5>
              <p style={{ color: "#777777" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut
                enim ad minim. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit, sed do eiusmod tempor.
              </p>
              <button className={`${style.aboutBtn} text-uppercase`}>
                Get Detalis
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id={style.aboutVideo}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h6 className={style.h6Title}>Brand new app to blow your mind</h6>
              <h1 style={{ padding: "20px 0" }}>
                We’ve made a life
                <br />
                that will change you
              </h1>
              <h5
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  marginBottom: "20px",
                }}
              >
                We are here to listen from you deliver exellence
              </h5>
              <p style={{ color: "#777777" }}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                doeiusmo d tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#" className={`${style.aboutBtn} text-uppercase`}>
                Get Started Now
              </a>
            </div>
            <div className={`col-lg-6 ${style.videoDiv}`}>
              <a
                target="_blank"
                className={style.playBtn}
                href="https://www.youtube.com/watch?v=ARA0AxrnHdM"
              >
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/play-btn.png.webp"
                  alt="play"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id={style.feature}>
        <div className="container">
          <div style={{ textAlign: "center", padding: "0 0 40px" }}>
            <h1 className="text-light" style={{ marginBottom: "10px" }}>
              Some Features that Made us Unique
            </h1>
            <p className="text-light">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={6}>
                <div className={style.featureCard}>
                  <Card
                    sx={{ minWidth: 275 }}
                    style={{
                      boxShadow: "none",
                      borderRadius: "0",
                      transition: ".4s",
                    }}
                  >
                    <CardContent style={{ padding: "0" }}>
                      <Typography
                        className={style.featureCardTitle}
                        variant="h6"
                        component="a"
                        href="#"
                      >
                        <PermIdentityIcon
                          style={{ marginRight: "8px", fontSize: "30px" }}
                        />
                        Expert Technicians
                      </Typography>
                      <Typography color="text.secondary">
                        Usage of the Internet is becoming more common due to
                        rapid advancement of technology and power.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                <div className={style.featureCard}>
                  <Card
                    sx={{ minWidth: 275 }}
                    style={{
                      boxShadow: "none",
                      borderRadius: "0",
                      transition: ".4s",
                    }}
                  >
                    <CardContent style={{ padding: "0" }}>
                      <Typography
                        className={style.featureCardTitle}
                        variant="h6"
                        component="a"
                        href="#"
                      >
                        <NewspaperIcon
                          style={{ marginRight: "8px", fontSize: "30px" }}
                        />
                        Professional Service
                      </Typography>
                      <Typography color="text.secondary">
                        Usage of the Internet is becoming more common due to
                        rapid advancement of technology and power.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                <div className={style.featureCard}>
                  <Card
                    sx={{ minWidth: 275 }}
                    style={{
                      boxShadow: "none",
                      borderRadius: "0",
                      transition: ".4s",
                    }}
                  >
                    <CardContent style={{ padding: "0" }}>
                      <Typography
                        className={style.featureCardTitle}
                        variant="h6"
                        component="a"
                        href="#"
                      >
                        <LocalPhoneIcon
                          style={{ marginRight: "8px", fontSize: "30px" }}
                        />
                        Great Support
                      </Typography>
                      <Typography color="text.secondary">
                        Usage of the Internet is becoming more common due to
                        rapid advancement of technology and power.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                <div className={style.featureCard}>
                  <Card
                    sx={{ minWidth: 275 }}
                    style={{
                      boxShadow: "none",
                      borderRadius: "0",
                      transition: ".4s",
                    }}
                  >
                    <CardContent style={{ padding: "0" }}>
                      <Typography
                        className={style.featureCardTitle}
                        variant="h6"
                        component="a"
                        href="#"
                      >
                        <RocketLaunchIcon
                          style={{ marginRight: "8px", fontSize: "30px" }}
                        />
                        Technical Skills
                      </Typography>
                      <Typography color="text.secondary">
                        Usage of the Internet is becoming more common due to
                        rapid advancement of technology and power.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                <div className={style.featureCard}>
                  <Card
                    sx={{ minWidth: 275 }}
                    style={{
                      boxShadow: "none",
                      borderRadius: "0",
                      transition: ".4s",
                    }}
                  >
                    <CardContent style={{ padding: "0" }}>
                      <Typography
                        className={style.featureCardTitle}
                        variant="h6"
                        component="a"
                        href="#"
                      >
                        <DiamondIcon
                          style={{ marginRight: "8px", fontSize: "30px" }}
                        />
                        Highly Recomended
                      </Typography>
                      <Typography color="text.secondary">
                        Usage of the Internet is becoming more common due to
                        rapid advancement of technology and power.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
              <Grid item lg={4} md={6}>
                <div className={style.featureCard}>
                  <Card
                    sx={{ minWidth: 275 }}
                    style={{
                      boxShadow: "none",
                      borderRadius: "0",
                      transition: ".4s",
                    }}
                  >
                    <CardContent style={{ padding: "0" }}>
                      <Typography
                        className={style.featureCardTitle}
                        variant="h6"
                        component="a"
                        href="#"
                      >
                        <ChatBubbleOutlineIcon
                          style={{ marginRight: "8px", fontSize: "30px" }}
                        />
                        Positive Reviews
                      </Typography>
                      <Typography color="text.secondary">
                        Usage of the Internet is becoming more common due to
                        rapid advancement of technology and power.
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
      <section id={style.brends}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col">
              <img
                className={style.brendImg}
                src="https://preview.colorlib.com/theme/robotics/img/l1.png"
                alt="1"
              />
            </div>
            <div className="col">
              <img
                className={style.brendImg}
                src="https://preview.colorlib.com/theme/robotics/img/l2.png"
                alt="2"
              />
            </div>
            <div className="col">
              <img
                className={style.brendImg}
                src="https://preview.colorlib.com/theme/robotics/img/l3.png"
                alt="3"
              />
            </div>
            <div className="col">
              <img
                className={style.brendImg}
                src="https://preview.colorlib.com/theme/robotics/img/l4.png"
                alt="4"
              />
            </div>
            <div className="col">
              <img
                className={style.brendImg}
                src="https://preview.colorlib.com/theme/robotics/img/l5.png"
                alt="5"
              />
            </div>
          </div>
        </div>
      </section>
      <section id={style.blogs}>
        <div className="container">
          <div style={{ textAlign: "center", padding: "0 0 40px" }}>
            <h1 style={{ marginBottom: "10px" }}>Latest News from our Blog</h1>
            <p className="text-secondary">
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="blogImg">
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/b1.jpg"
                  alt="..."
                />
              </div>
              <div className="blogContent">
                <div className="links" style={{ margin: "15px 0" }}>
                  <a className={style.blogBtn} href="#">
                    Travel
                  </a>
                  <a className={style.blogBtn} href="#">
                    Life Style
                  </a>
                </div>
                <a href="#">
                  <h4 style={{ marginBottom: "15px", fontSize: "20px" }}>
                    Portable latest Fashion for young women
                  </h4>
                </a>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <p style={{ fontSize: "15px" }}>31st January, 2018</p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="blogImg">
                <img
                  src="https://preview.colorlib.com/theme/robotics/img/b2.jpg"
                  alt="..."
                />
              </div>
              <div className="blogContent">
                <div className="links" style={{ margin: "15px 0" }}>
                  <a className={style.blogBtn} href="#">
                    Travel
                  </a>
                  <a className={style.blogBtn} href="#">
                    Life Style
                  </a>
                </div>
                <a href="#">
                  <h4 style={{ marginBottom: "15px", fontSize: "20px" }}>
                    Portable latest Fashion for young women
                  </h4>
                </a>
                <p className="text-secondary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore.
                </p>
                <p style={{ fontSize: "15px" }}>31st January, 2018</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
