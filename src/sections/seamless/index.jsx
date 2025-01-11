import React from "react";
import "./_style.scss";

export const Seamless = () => {
  return (
    <section id="Seamless">
      <div className="container">
        <div className="up">
          <div className="line">
            <h1>Seamless Experience.</h1>
            <p>How it Works ?</p>
          </div>
          <span>
            At Klothink, we've designed a straightforward shopping experience to
            make fashion accessible. Explore the journey from discovering the
            latest trends <br/> to receiving your handpicked styles with ease.
          </span>
        </div>

        <div className="cards">
          <div className="card">
            <strong>01</strong>
            <h3>Discover Trends</h3>
            <p>Explore our curated collection of over 1000 styles</p>
          </div>

          <div className="card">
            <strong>02</strong>
            <h3>Secure Checkout</h3>
            <p>
              Add your items to the cart and proceed to our secure checkout.
            </p>
          </div>

          <div className="card">
            <strong>03</strong>
            <h3>Swift Dispatch</h3>
            <p>Experience 95% same-day dispatch on orders.</p>
          </div>

          <div className="card">
            <strong>04</strong>
            <h3>Unbox Happiness</h3>
            <p>Receive your carefully packaged Klothink order.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
