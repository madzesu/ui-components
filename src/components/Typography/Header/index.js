import styled from "styled-components";

const Header = (variant) => styled[variant]`
  ${(props) => variant === 'h1' && `
    font-size: 3em;
  `}
  ${(props) => variant === 'h2' && `
    font-size: 2.5em;
  `}
  ${(props) => variant === 'h3' && `
    font-size: 2.25em;
  `}
  ${(props) => variant === 'h4' && `
    font-size: 2em;
  `}
  ${(props) => variant === 'h5' && `
    font-size: 1.75em;
  `}
  ${(props) => variant === 'h6' && `
    font-size: 1.5em;
  `}
`;

export default Header;
