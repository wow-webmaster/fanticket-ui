const { default: styled } = require("styled-components");

const MenuItem = styled.a`
  text-decoration: none;
  color: ${(props) => props.color ?? "white"};
`;

export default MenuItem;
