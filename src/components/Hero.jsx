import React from "react";

import GetStarted from "./GetStarted";
import styles from "../style";
import { discount, robot } from "../assets/images";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 rounded-[10px] mb-2 bg-discount-gradient">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} text-slate-400`}>
          <span className="text-white">20%</span> Discount For <span className="text-white">1 Month </span>Account
        </p>
      </div>

      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 poppins-sb ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[70px]">
          The Next <br className="sm:block hidden" />
          <span className="text-gradient">Generation</span>
        </h1>
        <div className="sm:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>
      <h1 className="poppins-sb ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[70px]">Payment Method.</h1>

      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-slate-400`}>
        Our team experts uses a methodology to identify the credit cards most likely to fit your neeeds. We examine annual percentage rates, annual
        fees.
      </p>
    </div>

    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10 relative lg:max-w-[45%]`}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] object-contain relative z-[5]" />
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
      <div className="absolute z-[1] w-[80%] h-[80%] bottom-40 rounded-full white__gradient"></div>
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient"></div>
    </div>
    <div className={`sm:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
