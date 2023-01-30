import React from "react";
import { Dayjs } from "dayjs";

import { ChevronRightIcon, ChevronLeftIcon } from "../icons/ChevronIcon";
import { changeDateMonth } from "../utils/utils";

// import "./DatePickerSelector.css";
// import clsx from "clsx";

export interface ISelectorProps {
  shownDate: Dayjs;

  setShownDate: React.Dispatch<React.SetStateAction<Dayjs>>;
}

export const Selector: React.FC<ISelectorProps> = ({
  shownDate,
  setShownDate,
}) => {
  const handleIconClick = (isNextMonth: boolean) => {
    return () => {
      setShownDate(changeDateMonth(shownDate, isNextMonth));
    };
  };

  return (
    <div
      className={
        "flex justify-between item-center h-[2.625rem] border-b border-[#d0d0d0] mb-2"
      }
    >
      <div
        className={
          "w-[1.625rem] h-[1.625rem] flex item-center justify-center transition-colors cursor-pointer hover:bg-[#fff9a1] rounded-lg pt-1"
        }
        onClick={handleIconClick(false)}
      >
        <ChevronLeftIcon />
      </div>

      <div className={"text-xl"}>{shownDate.format("MMMM YYYY")}</div>

      <div
        className={
          "w-[1.625rem] h-[1.625rem] flex item-center justify-center transition-colors cursor-pointer hover:bg-[#fff9a1] rounded-lg pt-1"
        }
        onClick={handleIconClick(true)}
      >
        <ChevronRightIcon />
      </div>
    </div>
  );
};
