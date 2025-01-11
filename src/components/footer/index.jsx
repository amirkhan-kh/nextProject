import React from "react";
import Image from "next/image";
import headerIcon from "../../images/headerIconm.svg";
import facebook from "../../images/facebook.svg";
import twitter from "../../images/twitter.svg";
import LinkedIn from "../../images/LinkedIn.svg";
import "./_style.scss";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="up">
          <div className="left">
            <div className="card">
             <div className="logo">
             <Image src={headerIcon} alt="icon" />
              <div className="social">
                <Image src={facebook} alt="icon" />
                <Image src={twitter} alt="icon" />
                <Image src={LinkedIn} alt="icon" />
              </div>
             </div>
              <div className="buttons">
                <input type="text" placeholder="Enter Your Email" />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="row">
              <h2>Home</h2>
              <p>Features</p>
              <p>Popular Products</p>
              <p>Testimonials</p>
              <p>FAQ</p>
            </div>

            <div className="row">
              <h2>Menswear</h2>
              <p>Casual</p>
              <p>Formal</p>
              <p>Party</p>
              <p>Business</p>
            </div>

            <div className="row">
              <h2>Womenswear</h2>
              <p>Casual</p>
              <p>Formal</p>
              <p>Party</p>
              <p>Business</p>
            </div>

            <div className="respons">
              <h2>Home</h2>
              <h2>Product</h2>
              <h2>Contact</h2>
            </div>

            <div className="row">
              <h2>Kidswear</h2>
              <p>Casual</p>
              <p>Formal</p>
              <p>Party</p>
            </div>
          </div>
        </div>

        <div className="down">
          <div className="terms">
            <p>Terms & Conditions</p>
            <small>|</small>
            <p>Privacy Policy</p>
          </div>
          <div className="social">
            <Image src={facebook} alt="icon" />
            <Image src={twitter} alt="icon" />
            <Image src={LinkedIn} alt="icon" />
          </div>
          <p>© 2024 Klothink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
