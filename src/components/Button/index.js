import React from "react";
import styled from "styled-components";
import Typography from "../Typography";
import styles from "./styles";

const StyledButton = styled.button`
  ${(props) => props.variant === "primary" && styles.primary(props)}
  ${(props) => props.variant === "secondary" && styles.secondary(props)}
`;

const Button = ({ children, ...props }) => {
  console.log("styles", styles);
  return (
    <StyledButton {...props}>
      <Typography variant="button">{children}</Typography>
    </StyledButton>
  );
};

export default Button;
