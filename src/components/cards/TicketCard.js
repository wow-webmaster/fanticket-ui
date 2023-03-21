import styled from "styled-components";

const TicketCardWrapper = styled.div`
  border-radius: 1rem;
  width: 100%;
  border: 1px;
  border-style: solid;
  border-color: transparent;
  padding: 4rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  
  gap: 0.5rem;
  background: linear-gradient(#1c1c1c, #1c1c1c) padding-box,
    linear-gradient(to bottom, #828282, #323232) border-box;
  &:after {
    content: "";
    position: absolute;
    bottom: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #1c1c1c;
    border-color: #323232;
    border-style: solid;
    border-width:1px;
  };
  &:before {
    content: "";
    position: absolute;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #1c1c1c;
    border-color: #828282;
    border-style: solid;
    border-width:1px;
  };
`;

export default function TicketCard(props) {
  return (
    <div className="overflow-hidden w-full h-full" style = {{paddingBottom:'0.1px'}}>
      <TicketCardWrapper>{props.children}</TicketCardWrapper>
    </div>
  );
}
