import React from "react";
import { apple, bill, google } from "../assets/images";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="products" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing & invoicing
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Use modern & advance technology to easily view & control your billing and invoicing at one place. Our app store your transaction data securely
        and completely encrypted onto the cloud.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="">
          <img src={apple} alt="app store" className="w-[128px] h-[42px] mr-5" />
        </a>
        <a href="">
          <img src={google} alt="play store" className="w-[128px] h-[42px] mr-5" />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
