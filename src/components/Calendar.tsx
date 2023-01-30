import React, { useMemo } from "react";
import { Dayjs } from "dayjs";
import clsx from "clsx";

import { getCalendarRows } from "../utils/utils";

// import "./DatePickerCalendar.css";

export interface ICalendarProps {
  shownDate: Dayjs;
  selectedDate: Dayjs;

  onChange: (newDate: Dayjs) => void;
}

export const Calendar: React.FC<ICalendarProps> = ({
  shownDate,
  selectedDate,
  onChange,
}) => {
  const handleSelectDate = (value: Dayjs) => {
    return () => onChange(value);
  };

  const rows = useMemo(() => getCalendarRows(shownDate), [shownDate]);

  return (
    <>
      <div className={"flex mb-[.5rem]"}>
        {rows[0].map(({ value }, i) => (
          <div
            key={i}
            className={
              "flex p-[2rem] w-[2.38rem] h-[2.38rem] my-[.125rem] rounded-lg justify-center items-center text-xl"
            }
          >
            {value.format("dd")}
          </div>
        ))}
      </div>

      {rows.map((cells, rowIndex) => (
        <div key={rowIndex} className={"flex"}>
          {cells.map(({ text, value }, i) => (
            <div
              key={`${text} - ${i}`}
              className={` 
              cursor-pointer transition-colors active:bg-[#d1d1d1] flex p-[2rem] w-[2.38rem] h-[2.38rem] my-[.125rem] rounded-full justify-center items-center text-xl
              ${clsx({
                "hover:bg-[#fff78d]":
                  value.toString() !== selectedDate.toString(),
              })}
              
                ${clsx({
                  "bg-[#c743ff] text-[#fff]":
                    value.toString() === selectedDate.toString(),
                })}`}
              onClick={handleSelectDate(value)}
            >
              {text}
            </div>
          ))}
        </div>
      ))}
    </>
  );
};
