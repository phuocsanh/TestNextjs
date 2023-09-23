import React, { useEffect, useRef, useState } from "react";
import styles from "./SearchPopup.module.css";
const tagLits = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5", "Tag 6"];
const pricingTypeLits = ["Free", "Paid", "Freemium"];
import { useTheme } from "next-themes";
interface Props {
  togglePopup: (type: boolean) => void;
  isOpen: boolean;
}

const SearchPopup = (props: Props) => {
  const { togglePopup, isOpen } = props;
  const [tags, setTags] = useState<string[]>([]);
  const [pricingTypes, setPricingTypes] = useState<string[]>([]);
  const popupRef = useRef(null);
  const theme = useTheme();
  console.log("🚀 ~ file: index.tsx:17 ~ DetailPopup ~ theme:", theme);
  const handleDocumentClick = (e: MouseEvent) => {
    if (isOpen && popupRef.current && !popupRef.current.contains(e.target)) {
      togglePopup(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick);
    } else {
      document.removeEventListener("click", handleDocumentClick);
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [isOpen, togglePopup]);
  const chooseTag = (item: string) => {
    const findTags = tags.find((itemTags, idx) => item == itemTags);
    if (!findTags) {
      const updatedTagsNew = [...tags, item];
      setTags(updatedTagsNew);
    } else {
      const updatedTagsNew = tags.filter((tag) => tag !== item);
      setTags(updatedTagsNew);
    }
  };
  const choosePricing = (item: string) => {
    const findPricing = pricingTypes.find((itemTags, idx) => item == itemTags);
    if (!findPricing) {
      const updatedPricingsNew = [...pricingTypes, item];
      setPricingTypes(updatedPricingsNew);
    } else {
      const updatedPricingsNew = pricingTypes.filter((tag) => tag !== item);
      setPricingTypes(updatedPricingsNew);
    }
  };
  return (
    <div
      className={`${styles.popup} bg-white dark:bg-[#242B51]`}
      ref={popupRef}
    >
      <div className=" mt- flex flex-row items-center">
        <div />
        <p>Choose option to search</p>
        <span className={styles.close} onClick={() => togglePopup(false)}>
          &times;
        </span>
      </div>
      <div className="mt-3">
        <p>Tags</p>
        <div className="mt-2 flex flex-row flex-row flex-wrap">
          {tagLits.map((item, index) => (
            <div
              key={index}
              className={`${
                pricingTypes.includes(item) ? "bg-[#003cab]" : ""
              } mb-2 mr-2 cursor-default rounded-md  p-1 ${
                theme.theme == "light" && pricingTypes.includes(item)
                  ? "border-[#003CAB]"
                  : "border"
              }`}
              onClick={() => choosePricing(item)}
            >
              <p
                className={`${
                  theme.theme == "light" && pricingTypes.includes(item)
                    ? "text-white"
                    : ""
                } text-xs`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3">
        <p>Pricing type</p>
        <div className="mt-2 flex flex-row flex-row flex-wrap">
          {pricingTypeLits.map((item, index) => (
            <div
              key={index}
              className={`${
                pricingTypes.includes(item) ? "bg-[#003cab]" : ""
              } mb-2 mr-2 cursor-default rounded-md  p-1  ${
                theme.theme == "light" && pricingTypes.includes(item)
                  ? "border-[#003CAB]"
                  : "border"
              }`}
              onClick={() => choosePricing(item)}
            >
              <p
                className={`${
                  theme.theme == "light" && pricingTypes.includes(item)
                    ? "text-white"
                    : ""
                } text-xs`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-3 flex flex-row items-center justify-end">
        <button
          onClick={() => togglePopup(false)}
          className="mr-4 rounded bg-[#F6F8FF] px-2 py-1 dark:bg-[#242b52]"
        >
          <p className="text-xs">Close</p>
        </button>
        <button
          onClick={() => togglePopup(false)}
          className="rounded bg-[#4A6CF7] px-2 py-1"
        >
          <p className="text-xs text-white">Search</p>
        </button>
      </div>
    </div>
  );
};

export default SearchPopup;
