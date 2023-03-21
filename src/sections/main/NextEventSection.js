import styled from "styled-components";
import NextEventCard from "../../components/cards/NextEventCard";
import { NEXT_EVENTS } from "../../_mocks";

const NextEventBackground = styled.div`
  background-image: url(/images/background/next-event-bg.png);
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const NextEventRightBackground = styled.div`
  width: 100%;
  overflow:hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: linear-gradient(341.2deg, #393939 0.3%, #151515 32.12%);
`;
export default function NextEventSection() {
  return (
    <div className="grid-cols-12 grid h-full -m-2">
      <div className="h-full col-span-12 xl:col-span-4 relative overflow-hidden ">
        <NextEventBackground></NextEventBackground>
        <div
          className="h-full absolute w-full top-0 flex items-end"
          style={{
            backgroundImage:
              "url(/images/background/next-event-left-vector.png)",
          }}
        ></div>
      </div>

      <NextEventRightBackground className="h-full col-span-12 xl:col-span-8 py-10 md:py-20 pl-5 md:pl-10 gap-8">
        <div
          className="h-full absolute w-full top-0 flex items-end bg-no-repeat "
          style={{
            zIndex: 0,
            opacity: 0.5,
            backgroundPosition: "center",
            backgroundSize: "contain",
            backgroundImage:
              "url(/images/background/next-event-right-vector.png)",
          }}
        ></div>
        <div className="flex flex-col gap-2">
          <label className="text-5xl">
            Próximos <span className="text-yellow-400">Eventos</span>
          </label>
          <p className="text-zinc-400">
            Eventos relevantes cadastrados
            <br /> pela plataforma
          </p>
        </div>
        <div className="grid grid-cols-12 gap-2" style={{ zIndex: 1 }}>
          {NEXT_EVENTS.map((event, index) => (
            <div
              className="col-span-12 md:col-span-6 lg:col-span-5 p-2"
              key={index}
            >
              <NextEventCard event={event} />
            </div>
          ))}
        </div>
      </NextEventRightBackground>
    </div>
  );
}
