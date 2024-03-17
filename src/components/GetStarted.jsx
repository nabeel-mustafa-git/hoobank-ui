import styles from "../style";
import { arrowUp } from "../assets/images";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[110px] h-[110px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="poppins text-[18px] leading-[23px] text-gradient mr-2">Get</p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
      </div>
      <p className="poppins text-[18px] leading-[23px] text-gradient">Started</p>
    </div>
  </div>
);

export default GetStarted;
