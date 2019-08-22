import React, { useState } from 'react';
import styled from 'styled-components';
import {
  useMenuState,
  useHiddenState,
  Menu,
  MenuItem,
  MenuDisclosure,
  MenuSeparator,
  Hidden
} from 'reakit';

const StyledMenuItem = styled(MenuItem)`
  display: block;
  padding: 4px 6px;
  color: #00c;
`;
const StyledMenu = styled(Menu)`
  background-color: #fff;
  border-radius: 4px;

  padding: 8px 10px;
  color: #00c;
`;

const Home = ({ t }) => {
  const menu = useMenuState();

  return (
    <div>
      <p>Welcome</p>
      <MenuDisclosure {...menu}>Preferences</MenuDisclosure>
      <StyledMenu {...menu} aria-label="Preferences">
        <StyledMenuItem {...menu} disabled>
          Extensions
        </StyledMenuItem>
        <MenuSeparator {...menu} />
        <MenuItem {...menu}>Keyboard shortcuts</MenuItem>
      </StyledMenu>
    </div>
  );
};

export default Home;
