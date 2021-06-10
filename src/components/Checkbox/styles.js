import { palette, transition } from "../../utils/theme";

export const base = (props) => `
  box-sizing: border-box;
  display: inline-flex;
  cursor: pointer;
  transition: all ${transition.duration.default}ms ease;
  padding: 0.5em 1em;
  border-radius: 2px;
`;

// background: ${props.checked ? palette.primary.checked : palette.primary.main};

export const primary = (props) => `
  ${base(props)}
  background: ${props.checked ? "lightgrey" : ""};
  box-shadow: ${
    props.checked
      ? "rgb(50 50 93 / 18%) 0px 3px 10px -2px inset, rgb(0 0 0 / 30%) 0px 6px 12px -6px inset"
      : "rgb(0 0 0 / 18%) 0px 2px 4px"
  };
`;

export const secondary = (props) => `
  ${base(props)}
  background: ${palette.secondary.main};
`;

const styles = {
  primary,
  secondary,
};

export default styles;
