import { card } from "../assets/images";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        Find a better card deal
        <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Our credit cards comes with great modern features that you can get in a credit card. With fast and reliable transactions, you can do your
        business in ease.
      </p>

      <Button styles="mt-10" />
    </div>
    <div className={`${layout.sectionImg}`}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
