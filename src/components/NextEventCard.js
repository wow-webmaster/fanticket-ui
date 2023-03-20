import { Icon } from "@iconify/react";

export default function NextEventCard({ event }) {
  return (
    <div className="flex px-6 p-4  justify-between bg-base-200 rounded-xl">
      <div className="flex items-stretch justify-between flex-col ">
        <label className="text-xl">{event.name}</label>
        <div>
          <span>{event.date}</span>
          <span>•</span>
          <span>{event.city}</span>
          <span>•</span>
          <span>{event.place}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <div className="rounded-full items-center flex gap-1 px-3 py-1 bg-[#5A5A5A] text-yellow-400">
          <Icon icon="system-uicons:ticket" width={24}></Icon>
          <span>{event.ticketCount}</span>
        </div>
      </div>
    </div>
  );
}
