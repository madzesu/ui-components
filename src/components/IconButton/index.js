import React from 'react';
import styled from "styled-components";
import styles from "./styles";

const StyledButton = styled.button`
  ${(props) => props.variant === "primary" && styles.primary(props)}
  ${(props) => props.variant === "secondary" && styles.secondary(props)}
`;

const IconButton = (props) => {
  return (
    <StyledButton {...props} />
  );
};

export default IconButton;
