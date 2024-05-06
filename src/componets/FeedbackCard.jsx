import { quotes } from "../assets";

const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-col justify-between font-poppins gap-8 py-12 text-white px-10 rounded-[20px] feedback-card max-w-[370px]">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="text-[18px] font-normal leading-[32px]">{content}</p>
      <div className="flex gap-4">
        <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
        <div>
          <h4 className="text-[20px] font-normal leading-[32px]">{name}</h4>
          <p className="text-dimWhite">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
