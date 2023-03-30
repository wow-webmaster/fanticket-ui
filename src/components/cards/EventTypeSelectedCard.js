import { Icon } from "@iconify/react";
import { fNumber } from "../../utils/formatNumber";
import { displayEventTime, fShortDate } from "../../utils/formatTime";

export default function EventTypeSelectedCard({
  eventType,
  handleSelectedType,
  defaultChecked = false,
}) {
  return (
    <div className="flex px-2  md:px-6 p-4  justify-between bg-base-200 rounded-xl">
      <div className="flex gap-2 h-full items-center">
        <input
          type="radio"
          name="event-type-radio"
          className="radio radio-primary radio-sm"
          onChange={handleSelectedType}
          defaultChecked={defaultChecked}
        />
        <div className="flex items-stretch justify-between flex-col ">
          <label className="text-xl">{eventType.name}</label>
          <div>
            <span className="text-stone-400">
              {displayEventTime({ ...eventType, containsTime: true })}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="rounded-full items-center flex gap-1 px-3 py-1 bg-[#5A5A5A] text-yellow-400">
          <span>{fNumber(eventType?.price)}</span>
        </div>
      </div>
    </div>
  );
}
