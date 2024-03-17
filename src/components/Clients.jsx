import styles from "../style";
import { clients } from "../constants";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full gap-5`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex flex-1 ${styles.flexCenter} sm:w-[220px] w-[130px] min-w-[130px]`}>
          <img src={client.logo} alt="client" className="sm:w-[220px] w-[130px] min-w-[130px] object-contain px-2 hover:opacity-70" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
