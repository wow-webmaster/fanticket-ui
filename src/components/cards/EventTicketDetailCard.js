import { LazyLoadImage } from "react-lazy-load-image-component";
import { fDescriptionTypeDate, fToNow } from "../../utils/formatTime";
import GradientBorderWrapper from "../wrappers/GradientBorderWrapper";

export default function EventTicketDetailCard({ ticket, onAction, eventType,  }) {
  const onTap = () => {
    if (onAction) {
      onAction();
    }
  };
  return (
    <div
      className={`w-full ${ticket.sold ? "opacity-60" : "cursor-pointer "} `}
      onClick={onTap}
    >
      <GradientBorderWrapper>
        <div className="flex gap-2 justify-between p-4 items-center ">
          <div className="flex  gap-2">
            <div className="avatar h-12 w-12 flex-1 aspect-square">
              <LazyLoadImage
                src={ticket.avatar}
                alt=""
                effect="blur"
                className="aspect-square  rounded-full "
              />
            </div>
            <div className="flex flex-col">
              <h6>{fDescriptionTypeDate(ticket.date)}</h6>
              <h5 className="text-stone-500">{ticket.position}</h5>
              <h6>{fToNow(ticket.date)}</h6>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex flex-col">
              <h5 className=" ">{ticket.price}</h5>
              <h6 className="text-stone-500 text-sm">/Ingresso</h6>
            </div>
          </div>
        </div>
      </GradientBorderWrapper>
    </div>
  );
}
