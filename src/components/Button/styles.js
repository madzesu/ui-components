import { palette, transition } from "../../utils/theme";

const base = (props) => `
  min-height: 2em;
  min-width: 6em;
  padding: 0.5em;
  border-color: rgba(0, 0, 0, 0);
  border-radius: 0.75em;
  font-weight: bold;
  :focus {
    outline: 0;
  }
`;

export const primary = (props) => `
  ${base(props)}
  color: ${palette.typography.primary.main};
  background: ${palette.primary.main};
  border: 0.5em solid ${palette.primary.main};
  box-shadow:
    ${palette.boxShadow.light},
    ${palette.boxShadow.dark};
  transition: box-shadow ${transition.duration.action}ms ease-in-out;
  :active {
    box-shadow:
      ${palette.boxShadow.light},
      ${palette.boxShadow.dark},
      inset ${palette.boxShadow.dark},
      inset ${palette.boxShadow.light};
  }
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
