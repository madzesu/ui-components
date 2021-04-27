import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from ".";

const DemoCheckbox = styled(Checkbox)`
  margin: 16px;
`;

const CheckboxDemo = () => {
  const [checkboxes, setCheckboxes] = useState({
    primary: false,
    secondary: false,
  });

  const handleCheck = (key) => () => {
    const oldValue = checkboxes[key];
    setCheckboxes((oldCheckboxes) => ({ ...oldCheckboxes, [key]: !oldValue }));
  };

  return (
    <div>
      <DemoCheckbox
        primary
        checked={checkboxes.primary}
        onClick={handleCheck("primary")}
      >
        Primary
      </DemoCheckbox>
      <DemoCheckbox
        secondary
        checked={checkboxes.secondary}
        onClick={handleCheck("secondary")}
      >
        Secondary
      </DemoCheckbox>
    </div>
  );
};

export default CheckboxDemo;
