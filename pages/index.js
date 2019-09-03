import React, { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
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

const MenuContainer = styled.div`
  display: inline-block;
`;

const StyledMenuDisclosure = styled(MenuItem)`
  color: #09c;
  font-size: 16px;
  padding: 12px;
  position: relative;
  background: transparent;
  border: none;
  vertical-align: middle;
  &:hover {
    color: #0c2;
  }
  outline: none;
`;
const StyledMenu = styled(Menu)`
  position: absolute;
  border-top: 2px solid #9ce;
  padding: 10px;
  background: #fff;
  border-radius: 0 0 4px 4px;
  box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.04);
  outline: none;
`;

const StyledMenuItem = styled(MenuItem)`
  white-space: nowrap;
  display: block;
  padding: 15px 20px;
  border: none;
  background: #fff;
  border-radius: 4px;
  &:hover {
    box-shadow: none;
    outline: none;
    color: #9ce;
  }
  outline: none;
`;

const Home = () => {
  const menu = useMenuState();

  const { opacity, scale, display } = useSpring({
    opacity: menu.visible ? 1 : 0,
    display: menu.visible ? 'block' : 'none',
    scale: menu.visible ? 1 : 0,
    onRest: menu.unstable_stopAnimation,
    config: name => ({
      tension: name === 'opacity' ? 250 : 300,
      friction: 25
    })
  });

  return (
    <HomeWrap>
      <h1>Next with Reakit</h1>
      <MenuContainer
        onMouseEnter={() => {
          menu.show();
        }}
        onMouseLeave={() => {
          menu.hide();
        }}
      >
        <StyledMenuDisclosure {...menu}>Animated Menu</StyledMenuDisclosure>
        <StyledMenu
          {...menu}
          aria-label="Preferences"
          style={{
            opacity,
            display,
            transformOrigin: 'top bottom',
            transform: scale.interpolate(
              s => `${menu.unstable_popoverStyles.transform} scaleY(${s})`
            )
          }}
        >
          {props => (
            <animated.div {...props}>
              <StyledMenuItem {...menu} disabled>
                Extensions
              </StyledMenuItem>
              <MenuSeparator {...menu} />
              <StyledMenuItem {...menu}>Keyboard shortcuts</StyledMenuItem>
            </animated.div>
          )}
        </StyledMenu>
      </MenuContainer>
    </HomeWrap>
  );
};

export default Home;
