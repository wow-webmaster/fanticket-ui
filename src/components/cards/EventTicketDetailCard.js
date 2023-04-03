import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router-dom";
import { HOST_API } from "../../config";
import { fNumber } from "../../utils/formatNumber";
import { fDescriptionTypeDate, fToNow } from "../../utils/formatTime";
import GradientBorderWrapper from "../wrappers/GradientBorderWrapper";

export default function EventTicketDetailCard({ ticket, onAction, eventType }) {
  const navigate = useNavigate();
  const onTap = () => {
    
      if (ticket.status ==="inprogress") {
        navigate(`/ticket/buy/${ticket._id}`);
      }
      // onAction();
  };
  return (
    <div
      className={`w-full ${ticket.status !== "inprogress" ? "opacity-60" : "cursor-pointer opacity-80 hover:opacity-100"} `}
      onClick={onTap}
    >
      <GradientBorderWrapper>
        <div className="flex gap-2 justify-between p-4 items-center ">
          <div className="flex  gap-4 items-center">
            <div className="avatar h-12 w-12 flex-1 aspect-square">
              <LazyLoadImage
                src={`${HOST_API}${ticket.avatar}`}
                alt=""
                effect="blur"
                className="aspect-square  rounded-full "
              />
            </div>
            <div className="flex flex-col">

              <h6>{fDescriptionTypeDate(ticket.dateTime)}</h6>
              <h5 className="text-stone-400">{ticket.seat}</h5>
              <h6>{fToNow(ticket.dateTime)}</h6>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <div className="flex flex-col">
              <h5 className=" ">R${fNumber(ticket.sellPrice)}</h5>
              <h6 className="text-stone-400 text-sm">/Ingresso</h6>
            </div>
          </div>
        </div>
      </GradientBorderWrapper>
    </div>
  );
}
