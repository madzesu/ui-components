import React from "react";
import styled from "styled-components";
import styles from "./styles";

const Checkbox = styled.div`
  ${(props) => props.primary && styles.primary(props)}
  ${(props) => props.secondary && styles.secondary(props)}
`;

export default Checkbox;
