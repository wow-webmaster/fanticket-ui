import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import EventTicketCard from "../../components/cards/EventTicketCard";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import GoogleMapReact from "google-map-react";
import { GOOGLE_MAP_KEY } from "../../config";

export default function EventInformationSection() {
  const defaultMapProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  return (
    <div className="w-full flex flex-col gap-4 mb-8">
      {/* location & info */}
      <div className="w-full gap-2 flex flex-col justify-between lg:flex-row mb-4">
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="flex flex-col gap-2">
            <h5 className="text-2xl">Local</h5>
            <div className="rounded-xl max-w-sm overflow-hidden px-16 p-6 flex-col gap-2 bg-white/40 flex justify-center items-center">
              <Icon icon="mdi:map-marker-radius-outline" width={48} />
              <h6>View On Map</h6>
            </div>
          </div>
          <div className="p-4 flex flex-col gap-2 flex-1 ">
            <h5 className="text-xl mt-4">São Paulo</h5>
            <div className="flex gap-1 items-center">
              <Icon
                className="text-primary"
                width={20}
                icon="bi:calendar2-date"
              />
              <h6 className="text-sm text-stone-400">26 eventos próximos</h6>
            </div>
          </div>
        </div>
        <div className="flex max-w-sm">
          <GradientBorderWrapper>
            <div className="p-4 flex flex-col gap-2">
              <h5 className="text-xl ">Você está organizando este evento?</h5>
              <h6 className="text-stone-400">
                Reivindique este evento para tornar a experiência dos fãs ainda
                melhor.
              </h6>
              <Link className="text-primary underline" to="/">
                Contate-nos
              </Link>
            </div>
          </GradientBorderWrapper>
        </div>
      </div>
      {/* tickets  */}
      <div className="flex flex-col gap-2">
        <div className="mb-4">
          <h5 className="text-2xl">Eventos em alta</h5>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <EventTicketCard
              count={6}
              date={new Date()}
              onAction={() => {}}
              type={"Gabe All Night Long"}
            />
          </div>
          <div>
            <EventTicketCard
              count={0}
              date={new Date()}
              onAction={() => {}}
              type={"Área VIP"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
