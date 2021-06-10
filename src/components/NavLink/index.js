import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Typography from "../Typography";

const StyledLink = styled(Link)`
  color: pink;
`;

const NavLink = ({ children, ...props }) => {
  return (
    <StyledLink {...props}>
      <Typography variant="label">{children}</Typography>
    </StyledLink>
  );
};

export default NavLink;
