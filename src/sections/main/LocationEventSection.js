import { Icon } from "@iconify/react";
import TicketImageCard from "../../components/cards/TicketImageCard";
import { CATEGORY_LIST, NEXT_EVENTS } from "../../_mocks";

export default function LocationEventSection() {
  return (
    <div className="w-full">
      <div className="container">
        <div className="text-center flex flex-col gap-4 py-4 md:py-8">
          <label className="text-4xl">
            Categorias de <span className="text-yellow-400">Eventos</span> por
            Localização
          </label>

          <span>
            Busque eventos pelos lugares
            <br /> mais populares
          </span>
        </div>
        <div className="flex flex-row gap-2 items-center mb-4">
          <Icon
            icon="ic:baseline-arrow-back-ios-new"
            width={48}
            className="cursor-pointer"
          />

          <div className="carousel flex-1">
            {CATEGORY_LIST.map((event, index) => (
              <div
                key={index}
                id={`item-${index}`}
                className="carousel-item w-80 p-4 aspect-3/4"
              >
                <TicketImageCard
                  card={{ ...event, image: `url(${event.image})` }}
                />
              </div>
            ))}
          </div>

          <Icon
            icon="ic:baseline-arrow-forward-ios"
            width={48}
            className="cursor-pointer"
          />
        </div>
        <div className="flex justify-center mb-16">
          <button className="btn btn-outline btn-primary text-lg rounded-xl capitalize">
            Ver todas as cidades
          </button>
        </div>
      </div>
    </div>
  );
}
