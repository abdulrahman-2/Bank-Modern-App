import { clients } from "../constants";
import styles from "../style";

const Clients = () => {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full gap-2 flex-wrap`}>
        {clients.map((client) => (
          <div
            key={client.id}
            className={`min-w-[120px] sm:min-w-[192px] flex-1 ${styles.flexCenter}`}
          >
            <img
              src={client.logo}
              alt="client"
              className="w-[100px] sm:w-[192px]"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
