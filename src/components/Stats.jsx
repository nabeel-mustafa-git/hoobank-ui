import styles from "../style";
import { stats } from "../constants";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-center items-center flex-row m-3`}>
        <h4 className="poppins-sb sm:text-[40px] text-[30px] sm:leading-[53px] leading-[43px] text-white">{stat.value}</h4>
        <p className="poppins-l sm:text-[20px] text-[15px] sm:leading-[26px] leading-[20px] text-gradient uppercase ml-3 text-nowrap">{stat.title}</p>
      </div>
    ))}
  </section>
);

export default Stats;
