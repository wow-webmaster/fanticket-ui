import { Icon } from "@iconify/react";
import styled from "styled-components";
import NextEventCard from "../../components/NextEventCard";
import { CATEGORY_LIST, NEXT_EVENTS } from "../../_mocks";

const CategoryCard = ({ category, index, isAddition = false }) => {
  return (
    <div
      className="col-span-12 sm:col-span-6 md:col-span-4  flex items-center rounded-xl bg-no-repeat h-28 md:h-32 lg:h-40 gap-2 px-2 sm:px-4 md:p-6 backdrop-grayscale overflow-hidden hover:scale-105 transition-all cursor-pointer "
      style={{
        backgroundImage: `url(${category.image})`,
        backgroundSize: "cover",
        backgroundColor: "#0c0c0c",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-black h-full w-full absolute -z-10  -ml-2 sm:-ml-4 md:-ml-6 opacity-30"></div>
      <div className={`p-2 rounded-lg ${!isAddition ? "border" : ""}`}>
        <Icon icon={category.icon} width={36} />
      </div>
      <label className="text-2xl cursor-pointer">{category.name}</label>
    </div>
  );
};
export default function CategoryListSection() {
  return (
    <div className="w-full bg-base-200 py-4 sm:py-6 md:py-8">
      <div className="container">
        <div className="text-center flex flex-col gap-4 pt-4 md:pt-8">
          <label className="text-4xl">
            Categorias de <span className="text-yellow-400">Eventos</span>
          </label>
          <span>
          Busque eventos por categoria
       
          </span>
        </div>
        <div className="h-8"></div>
        <div className="grid grid-cols-12 w-full gap-2 sm:gap-4 md:gap-8">
          {CATEGORY_LIST.map((category, index) => (
            <CategoryCard category={category} key={index} />
          ))}
          <CategoryCard
            category={{
              icon: "material-symbols:add-circle-outline",
              name: "Outras categorias",
            }}
            isAddition
            index={"addon"}
          />
        </div>
      </div>
    </div>
  );
}
