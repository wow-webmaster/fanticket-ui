import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Accordion(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="flex flex-col w-full">
      <div
        className="flex justify-between gap-1 p-2 cursor-pointer"
        onClick={handleOpen}
      >
        <div className="text-lg">{props.title}</div>
        <button className="text-primary btn btn-primary bg-primary/30 border-primary/30 hover:bg-primary/50 btn-circle btn-sm">
          {(!open && (
            <Icon icon="ic:baseline-keyboard-arrow-down" width={24} />
          )) || <Icon icon="ic:baseline-keyboard-arrow-up" width={24} />}
        </button>
      </div>
      <div
        className={`flex flex-col overflow-hidden ${
          open ? "h-full" : "hidden"
        }`}
      >
        {props.children}
      </div>
      <div className="divider max-h-[1px] "></div>
    </div>
  );
}
