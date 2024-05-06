import styles from "../style";
import { stats } from "../constants";

const Stats = () => {
  return (
    <section
      className={`text-white font-poppins ${styles.flexBetween} flex-wrap my-6 sm:my-20 gap-3`}
    >
      {stats.map((stat) => (
        <div key={stat.id} className="flex items-center gap-2">
          <h4 className="text-[30px] leading-[43px] xs:leading-[53px] xs:text-[40px] font-semibold">
            {stat.value}
          </h4>
          <p className="text-[15px] leading-[21px] xs:leading-[26px] xs:text-[20px] font-normal uppercase text-gradient">
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
