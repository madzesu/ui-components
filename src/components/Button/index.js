import React from "react";
import styled from "styled-components";
import styles from "./styles";

const Button = styled.button`
  ${(props) => props.primary && styles.primary(props)}
  ${(props) => props.secondary && styles.secondary(props)}
`;

// const Button = (props) => {
//   console.log('styles', styles);
//   return <button {...props} className={styles.button} />;
// };

export default Button;
