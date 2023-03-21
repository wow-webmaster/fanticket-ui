import { Icon } from "@iconify/react";
import styled from "styled-components";

const SearchWrapper = styled.div`
  border-radius: 1rem;
  width:100%;
  border:1px;
  border-style:solid;
  border-color:transparent;
  padding: 0.5rem 1rem;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  background: linear-gradient(#1c1c1c, #1c1c1c) padding-box,
    linear-gradient(to bottom, #828282, #323232) border-box;
`;

export default function EventSearchComponent({small = false}) {
  return (
    <SearchWrapper>
      <Icon icon="ri:search-line" width={24} />
      <input className={`input border-none flex-1 ${small?'input-sm':''} `}  aria-label="search-input"/>
      <button className="btn btn-circle btn-sm bg-transparent border-none" aria-label="search-products">
        <Icon icon="ic:outline-filter-list" width={24} />
      </button>
    </SearchWrapper>
  );
}
