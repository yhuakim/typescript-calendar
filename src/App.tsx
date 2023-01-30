import React, { useState } from "react";
import dayjs from "dayjs";

import { DatePicker } from "./components/DatePicker";

export interface IAppProps {}

export const App: React.FC<IAppProps> = () => {
  const [date, setDate] = useState(dayjs());

  return (
    <div className="bg-[url('./bg.svg')] bg-cover h-[30rem]">
      <div className="max-w-[30rem] mx-auto pb-24">
        <h4 className="text-3xl relative top-20 font-bold text-white bg-[#c743ff] p-5">
          Calendar
          <p className="text-sm">
            Picked Date: {date.format("DD - MMMM - YYYY")}
          </p>
        </h4>
        <DatePicker selectedDate={date} onChange={setDate} />
      </div>
    </div>
  );
};
