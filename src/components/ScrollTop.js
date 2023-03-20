import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useOffSetTop from "../hooks/useOffSetTop";

const ScrollTopStyle = styled.div`
  background-image: url(/images/background/scroll-top-bg.png);
  height: 43.5px;
  width: 160.5px;
  cursor: pointer;
  display: flex;
  background-size: contain;
  justify-content: center;
  align-items: center;
    
`;
export default function ScrollTop() {
  const offsetTop = useOffSetTop(400);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div
        className={`${
          !offsetTop ? " -bottom-12" : "bottom-0 "
        } fixed transition-all duration-700 w-full justify-center z-50 overflow-hidden flex `}
      >
        <ScrollTopStyle onClick={goToTop}>
          <Icon icon="mdi:arrow-top" width={24}></Icon>
        </ScrollTopStyle>
      </div>
    </>
  );
}
