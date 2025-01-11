import React from "react";
import Image from "next/image";
import X from "../../images/x.svg";
import "./_style.scss";

export const Question = () => {
  return (
    <section id="Question">
      <div className="container">
        <div className="up">
          <div className="line">
            <h1>Questions? We Have Answers.</h1>
            <p>FAQ</p>
          </div>
          <span>
            Ease into the world of Klothink with clarity. Our FAQs cover a
            spectrum of topics, ensuring you have the information you need for a
            seamless shopping <br /> experience.
          </span>
          <div>
          <button>Vill All FAQ’s</button>
          </div>
        </div>

        <div className="down">
          <div className="category">
            <h3>ALL</h3>
            <small>|</small>
            <h2>ORDERING</h2>
            <small>|</small>
            <h2>SHIPPING</h2>
            <small>|</small>
            <h2>RETURNS</h2>
            <small>|</small>
            <h2>CUSTOMER SUPPORT</h2>
          </div>

          <div className="cards">
            <div className="firstRow">
              <div className="card">
                <h2>Can I modify my order after placing it?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>How do I initiate a return?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>How can I unsubscribe from the newsletter?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>Do you offer exchanges for products?</h2>
                <span>+</span>
              </div>
            </div>

            <div className="secondRow">
              <div className="Card">
                <div>
                  <h2>How can I place an order on Klothink?</h2>
                  <Image src={X} alt="icon" />
                </div>
                <h4>
                  Ordering is easy! Simply browse our website, add items <br />{" "}
                  to your cart, and proceed to checkout. Follow the <br />{" "}
                  prompts to enter your details and complete your <br />{" "}
                  purchase.
                </h4>
              </div>

              <div className="card">
                <h2>What payment methods do you accept?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>How can I track my order?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>What is your shipping policy?</h2>
                <span>+</span>
              </div>
            </div>

            <div className="thirdRow">
              <div className="card">
                <h2>Are there any additional fees for returns?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>How do I create an account on Klothink?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>Can I change my account information?</h2>
                <span>+</span>
              </div>

              <div className="card">
                <h2>Are my personal details secure on Klothink?</h2>
                <span>+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
