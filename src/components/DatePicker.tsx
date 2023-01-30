import React, { useState } from "react";

import type { Dayjs } from "dayjs";

// import { defaultDatePickerFormat } from "./utils";

import { Calendar } from "../components/Calendar";
import { Selector } from "../components/Selector";

// import "./DatePicker.css";

export interface IDatePickerProps {
  selectedDate: Dayjs;
  selectorDateFormat?: string;

  onChange: (newDate: Dayjs) => void;
}

export const DatePicker: React.FC<IDatePickerProps> = ({
  selectedDate,
  onChange,
}) => {
  const [shownDate, setShownDate] = useState(selectedDate.clone());

  return (
    <div
      className={
        "shadow-xl bg-white rounded-lg p-2 w-[30rem] relative top-[5rem] mt-5"
      }
    >
      <Selector shownDate={shownDate} setShownDate={setShownDate} />

      <Calendar
        selectedDate={selectedDate}
        shownDate={shownDate}
        onChange={onChange}
      />
    </div>
  );
};
