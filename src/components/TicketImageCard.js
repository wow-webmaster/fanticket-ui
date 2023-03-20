import styled from "styled-components";

const TicketImageCardWrapper = styled.div`
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
  height:100%;
  gap: 0.5rem;
  background: ${(props) => props.image || "transparent"};
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
  }
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
  }
`;

export default function TicketImageCard({ card }, props) {
  return (
    <div
      className="overflow-hidden w-full h-full"
      style={{ paddingBottom: "0.1px" }}
    >
      <TicketImageCardWrapper {...card}>
        {props.children}
      </TicketImageCardWrapper>
    </div>
  );
}
