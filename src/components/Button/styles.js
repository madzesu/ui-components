import { palette } from "../../utils/theme";

export const primary = (props) => `
  background: ${palette.primary.main};
`;

export const secondary = (props) => `
  background: ${palette.secondary.main};
`;

const styles = {
  primary,
  secondary,
}

export default styles;
