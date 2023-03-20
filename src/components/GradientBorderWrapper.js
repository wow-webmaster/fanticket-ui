import styled from "styled-components";

const GradientBorderStyleWrapper = styled.div`
  border-radius: 0.75rem;
  width: 100%;
  border: 1px;
  border-style: solid;
  border-color: transparent;

  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  background: linear-gradient(#1c1c1c, #1c1c1c) padding-box,
    linear-gradient(to bottom, #828282, #323232) border-box;
`;

export default function GradientBorderWrapper(props) {
  return (
    <GradientBorderStyleWrapper>
      <div className="w-full rounded-xl " style={{background:'#1C1C1C'}}>{props.children}</div>
    </GradientBorderStyleWrapper>
  );
}
