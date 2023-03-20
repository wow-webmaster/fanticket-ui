import MainBanner from "../../components/MainBanner";
import SearchComponent from "../../components/SearchComponent";

export default function BannerSection() {
  return (
    <MainBanner>
      <div className="flex flex-col gap-8 justify-center items-center">
        <div className="prose lg:prose-lg max-w-full text-center">
          <h1 style={{ lineHeight: "4rem" }}>
            Seu lugar para <span className="text-yellow-400 ">comprar</span> e
            &nbsp;<span className="text-yellow-400">vender</span>
            <br />
            ingressos de fã para fã
          </h1>
        </div>
        <div className="mb-10 -mt-4">
          Pagamento seguro com ingresso garantido
        </div>
        <div className="max-w-lg w-full">
          <SearchComponent />
        </div>
      </div>
    </MainBanner>
  );
}
