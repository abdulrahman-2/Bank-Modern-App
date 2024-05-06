import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <div
      className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient cursor-pointer p-[2px]`}
    >
      <div
        className={`${styles.flexCenter} flex-col w-full h-full bg-primary rounded-full`}
      >
        <div className={`${styles.flexStart}`}>
          <p className="font-poppins text-gradient font-medium text-[18px] leading-[23.4px] mr-2">
            <span>Get</span>
          </p>
          <img
            src={arrowUp}
            alt="arrowUp"
            className="w-[23px] h-[23px] object-contain"
          />
        </div>
        <p className="font-poppins text-gradient font-medium text-[18px] leading-[23.4px]">
          <span>Started</span>
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
