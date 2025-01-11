import React from "react";
import Image from "next/image";
import headerIcon from "../../images/headerIconm.svg";
import basket from "../../images/basketIcon.svg"
import toggle from "../../images/headerToggle.svg"
import "./_style.scss";


export const Header = () => {
  return (
    <header>
      <div className="buttons">
        <button className="home">Home</button>
        <button className="product">Product</button>
        {/* <button>gio</button> */}
      </div>
      <div className="icon">
       <Image src={headerIcon} alt="icon" width={48} height={48}/>
      </div>
      <div className="contacts">
        <button className="basket"><Image src={basket} alt="icon" /></button>
        <button className="contact">Contact Support</button>
        <Image className="toggle" src={toggle} alt="icon"/>
      </div>
    </header>
  );
};
