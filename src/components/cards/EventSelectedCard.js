import { Icon } from "@iconify/react";
import { displayEventTime, fShortDate } from "../../utils/formatTime";

export default function EventSelectedCard({ event, handleDiscardEvent }) {
  return (
    <div className="flex px-2  md:px-6 p-4  justify-between bg-base-200 rounded-xl">
      <div className="flex gap-2 h-full items-center">
        <button
          className="btn  btn-circle btn-ghost btn-sm"
          onClick={handleDiscardEvent}
        >
          <Icon icon="tabler:trash" className="text-yellow-400" width={20} />
        </button>
        <div className="flex items-stretch justify-between flex-col ">
          <label className="text-xl">{event.name}</label>
          <div>
            <span>{displayEventTime(event)}</span>
            <span> • </span>
            <span> {event.place}</span>
          </div>

          <div >
            {event?.facebookUrl && (
              <a
                href={`${event?.facebookUrl}`}
                target="_blank"
                className="text-primary"
              >
                {event?.facebookUrl}
              </a>
            ) || <span className="text-error">No Linked URL</span>}
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="rounded-full items-center flex gap-1 px-3 py-1 bg-[#5A5A5A] text-yellow-400">
          <Icon icon="system-uicons:ticket" width={24}></Icon>
          <span>{event.tickets?.length}</span>
        </div>
      </div>
    </div>
  );
}
