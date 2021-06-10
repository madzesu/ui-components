import { primaryBase } from '../Button/styles';

const sizes = (props) => `
  min-height: 48px;
  min-width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const primary = (props) => `
  ${primaryBase(props)}
  ${sizes(props)}
`;

const styles = {
  primary,
};

export default styles;
