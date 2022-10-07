// "use strict";
import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import "./Login.css";

import { useNavigate } from "react-router-dom";

import { motion, useScroll } from "framer-motion";
import img1 from "../Images/landingpageimaage.jpg";
import img3 from "../Images/4400847.jpg";

import img2 from "../Images/polygon.png";

import box1image from "../Images/networking.jpg";
import box2image from "../Images/knowledge.jpg";
import box3image from "../Images/explore.jpg";

import inst1image from "../Images/creatingAccount.jpg";
import inst2image from "../Images/joinClub.jpg";
import inst3image from "../Images/startPosting.jpg";

import arrow1 from "../Images/Arrow 1.png"
import arrow2 from "../Images/Arrow 3.png"



import { AnimatePresence } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";
import Footer from "./Footer";
import Navbar from "./Navbar/Navbar";


const Login = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll();
  //   const arrow = "\\0279E";
  const [clicked, setClicked] = useState(false);
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const text = "Connect Wallet";
  return (
    <>
      <div className="outerbody">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        {/* <div className="gradient"></div> */}

        <div className="main_login_page">
          <div className="login_box">
            <motion.div
              className="mainheading"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h4>
                Collaborate with a group of like-minded people to create your
                own web3 club and start sharing the contents related to web3
                space and learn the latest happenings
              </h4>
            </motion.div>
          </div>
          <hr width="1000vh" />
          <div className="built_on">
            <h3>Built On - Polygon Network</h3>
            <img src={img2} alt="" />
          </div>
        </div>

        <motion.div
          className="image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="img">
            <img src={img1} alt="" />
          </div>
        </motion.div>

        <div className="exploreButton">
          <button 
          onClick={() => {
            navigate("/explore")
          }}
          > Explore More</button>
        </div>

        <div className="aboutWeb3Club">
          <div className="heading">
            <h3>About Web3 Club</h3>
          </div>
          <div className="text">
            <p>
              Collaborate With A Group Of Like-Minded People To Create Your Own
              Web3 Club And Start Sharing The Contents Related To Web3 Space And
              Learn The Latest Happenings
            </p>
          </div>
        </div>

        <div className="whyUseWeb3">
          <div className="heading">
            <h4>Why Use Web3 Club?</h4>
          </div>
          <div className="contents">
            <div className="box1">
              <div className="image">
                <img src={box1image} alt="" />
              </div>
              <div className="text">
                <p> Increase Your Netwoking </p>
              </div>
            </div>
            {/* </div> */}

            <div className="box2">
              <div className="image">
                <img src={box2image} alt="" />
              </div>
              <div className="text">
                <p> Gain More Knowledge About Web3 World </p>
              </div>
            </div>

            <div className="box3">
              <div className="image">
                <img src={box3image} alt="" />
              </div>
              <div className="text">
                <p> Explore New Things in Web3 </p>
              </div>
            </div>
          </div>
          {/* </div> */}

          {/* </div> */}
        </div>


        <div className="howToGetStarted">
          <div className="heading">
            <h4>How To Get Started ? </h4>
          </div>
          <div className="instructions">
            <div className="inst1">
              <div className="image">
                <img height="250px" width="300px"  style={{
                  borderRadius:"50%"
                }} src={inst1image} alt="" />
                <img style={{
                  marginRight:"300px",
                  marginTop:"50px"
                }} height="150px" width="300px"  src={arrow1} alt="" />
              </div>
              <div className="text">
                <p>Create And Connect Metamask Account</p>
              </div>
            </div>


            <div className="inst2">
              <div className="image">
                <img height="250px" width="300px" style={{
                  borderRadius:"50%"
                }} src={inst2image} alt="" />
              </div>
              <div className="text">
              <p>Join Or Create A Club</p>
              </div>
            </div>


            <div className="inst3">
              <div className="image">
                <img height="250px" width="300px" style={{
                  borderRadius:"50%"
                }} src={inst3image} alt="" />
                <img style={{
                  marginRight:"300px",
                  marginTop:"50px"

                }} height="150px" width="300px" src={arrow2} alt="" />
              </div>
              <div className="text">
                <p>Start Posting</p>
              </div>
            </div>
          </div>
        </div>

        <div className="extra">
          <div className="background"></div>
          <div className="heading"><h2>Enter The Future Of Web3 World</h2></div>
          <div className="subheading"><p>Leading the Web3 World Join The Revolution</p></div>
          <div className="buttons">
            <button 
               onClick={() => {
              if (user.isConnected) {
                navigate("/profile");
              } else {
                user.login();
              }
            }}
            >Connect Wallet</button>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
