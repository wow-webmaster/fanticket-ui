import styled from "styled-components";
import SearchComponent from "./SearchComponent";

const PageBannerBackground = styled.div`
  margin: -8px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;
  &:before {
    content: "";
    background-image: linear-gradient(
        0deg,
        #1c1c1c 24.45%,
        rgba(28, 28, 28, 0) 84.89%
      ),
      url("/images/background/main-banner-bg.jpg");
    z-index: -1;
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-filter: grayscale(100%) blur(17.5px);
    filter: grayscale(100%)  blur(17.5px);
    background-position: center;
    width: 100%;
    height: 100%;
  }
`;

export default function PageBanner(props) {
  return (
    <div className="w-full">
      <PageBannerBackground className="pt-44">{props.children}</PageBannerBackground>
    </div>
  );
}
