import React from "react";
import styles from "./detailPopup.module.css";
interface Props {
  title?: string;
  description?: string;
  imageUrl?: string;
  tags?: string[];
  pricing_type?: string[];
  website_url?: string;
  price_from?: string;
  closePopup?: (type: boolean) => void;
}

const DetailPopup = (props: Props) => {
  const {
    title,
    description,
    imageUrl,
    closePopup,
    tags,
    website_url,
    price_from,
    pricing_type,
  } = props;
  return (
    <div className={`${styles.popup}  bg-[#F6F8FF]  dark:bg-black`}>
      <button onClick={() => closePopup(false)} className={styles.button}>
        Close
      </button>

      <div className={`${styles["popup-content"]} bg-white`}>
        <img src={imageUrl} alt={title} className={styles["popup-image"]} />
        <div className="mt-3 flex  flex-col items-center  justify-between md:flex-row">
          <h1
            className={`${styles.text} flex-grow-8 w-full whitespace-normal text-2xl uppercase md:truncate`}
          >
            {title}
          </h1>

          <div className="flex-grow-2  cursor-pointer  rounded-[25px]  bg-[#F6F8FF] px-2 py-0.5 dark:bg-[#242b52] md:ml-3 md:mt-0 ">
            <p>{pricing_type}</p>
          </div>
        </div>
        <div className="flex-warp mt-3 flex flex-row">
          {tags?.map((item, index) => (
            <div
              key={index}
              className="mr-3 cursor-default rounded border border-[#243c5a] px-2 py-0.5"
            >
              <p className={`${styles.text} text-xs`}>{item}</p>
            </div>
          ))}
        </div>
        <p className={`${styles.text} mt-1 md:mt-3`}>{description}</p>
        <p
          className={`${styles.text} mt-1 italic md:mt-3`}
        >{`Starting from ${price_from}`}</p>
      </div>
    </div>
  );
};

export default DetailPopup;
