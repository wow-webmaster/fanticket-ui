import { Icon } from "@iconify/react";
import { fDescriptionTypeDate } from "../../utils/formatTime";
import GradientBorderWrapper from "../wrappers/GradientBorderWrapper";

export default function EventTicketCard({ eventTypeId, type, date, count, onAction }) {
  const onTap = () => {
    if (onAction) {
      onAction(eventTypeId);
    }
  };
  return (
    <div className="w-full cursor-pointer" onClick={onTap}>
      <GradientBorderWrapper hoverEvent>
        <div className="flex gap-2 justify-between p-4 items-center hover:text-primary">
          <div className="flex flex-col gap-2">
            <h5 className="text-xl ">{type}</h5>
            <h6 className="text-stone-400 ">{fDescriptionTypeDate(date)}</h6>
          </div>
          <div>
            <div
              className={`bg-base-300 rounded-full px-3 py-1 flex justify-center items-center text-primary ${
                count === 0 ? "text-primary/60" : ""
              }`}
            >
              <Icon icon="system-uicons:ticket" className="" width={20} />
              <h6 className="text-sm">{count}</h6>
            </div>
          </div>
        </div>
      </GradientBorderWrapper>
    </div>
  );
}
