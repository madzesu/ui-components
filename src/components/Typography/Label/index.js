import styled from "styled-components";

const Label = (variant) => styled.label`
  ${(props) => variant === 'button' && `
    font-size: 1em;
    font-weight: bold;
  `}
`;

export default Label;
