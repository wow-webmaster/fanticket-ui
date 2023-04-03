import { LazyLoadImage } from "react-lazy-load-image-component";
import { HOST_API } from "../../config";
import { fDescriptionTypeDate } from "../../utils/formatTime";

export default function BuyTicketBanner({event}){
    return(
        <div className="w-full flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <div className="rounded-xl aspect-5/3 max-w-xs overflow-hidden">
                <LazyLoadImage src = {`${HOST_API}${event?.cover}`} alt = "event-image" effect="blur" />
            </div>
            <div className="p-2">
                <h4 className="text-3xl font-bold mb-4">{event?.name}</h4>
                <h6 className="text-stone-400 text-lg">{fDescriptionTypeDate(event?.dateTime || event?.start) }</h6>
                <h6 className="text-stone-400 text-lg">{event?.place} </h6>
            </div>

        </div>
        
    )
}