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

const HomeWrap = styled.div`
  color: #666;
  width: 1000px;
  margin: 100px auto;
  line-height: 2;
`;
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

const Home = () => {
  const menu = useMenuState();

  return (
    <HomeWrap>
      <p>Next with Reakit</p>
      <MenuDisclosure {...menu}>Preferences</MenuDisclosure>
      <StyledMenu {...menu} aria-label="Preferences">
        <StyledMenuItem {...menu} disabled>
          Extensions
        </StyledMenuItem>
        <MenuSeparator {...menu} />
        <StyledMenuItem {...menu}>Keyboard shortcuts</StyledMenuItem>
      </StyledMenu>
    </HomeWrap>
  );
};

export default Home;
