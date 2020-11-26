import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavigationWrapper = styled.nav`
  position: fixed;
  display: flex;
  z-index: 99;
  align-items: center;
  justify-content: flex-start;
  padding: 20px 30px;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #fff;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (min-width: 800px) {
    width: 50vw;
  }
`

const Logo = styled.span`
  font-weight: 700;
  font-size: 30px;

  z-index: 3;

  @media (min-width: 800px) {
    font-size: 20px;
    margin: 0 10px 0 0;
  }
`

const NavigationList = styled.ul`
  height: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media (min-width: 800px) {
    flex-direction: row;
    justify-content: left;
  }
`
const NavigationItem = styled.ul`
  font-weight: 600;
  font-size: 45px;
  margin: 7% 32px;

  @media (min-width: 800px) {
    font-size: 15px;
    margin: 0 32px 0 0;
  }
`

const Toggle = styled.button`
  position: fixed;
  top: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  z-index: 99;
  border: none;
  background-color: transparent;

  @media (min-width: 800px) {
    display: none;
  }
`

const HamburgerButton = styled.div`
  width: 34px;
  margin: auto;
  height: 3px;
  background-color: #000;
  border: none;

  ::before,
  ::after {
    content: "";
    position: absolute;
    top: 10px;
    left: 8px;
    width: 34px;
    height: 3px;
    background-color: #000;
  }
  ::after {
    content: "";
    position: absolute;
    top: auto;
    bottom: 10px;
    width: 34px;
    height: 3px;
    background-color: #000;
  }
`

const NavigationBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.8);
  height: 100vh;
  width: 100vw;
  transform: ${({ isOpen }) =>
    isOpen ? "translateX(0%)" : "translateX(100%)"};
  transition: transform 0.4s;

  @media (min-width: 800px) {
    transform: translateX(0);
    position: relative;
    margin-left: 30px;
    background-color: transparent;
    height: auto;
    width: auto;
  }
`

const Navigation = () => {
  const [isOpenNav, setIsOpenNav] = useState(false)

  return (
    <NavigationWrapper>
      <Logo>
        <Link to="/">HATTA</Link>
      </Logo>
      <NavigationBox isOpen={isOpenNav}>
        <NavigationList>
          <NavigationItem>
            <Link to="/articles">articles</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/about">about</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/gallery">gallery</Link>
          </NavigationItem>
          <NavigationItem>
            <Link to="/contact">contact</Link>
          </NavigationItem>
        </NavigationList>
      </NavigationBox>
      <Toggle onClick={() => setIsOpenNav(!isOpenNav)}>
        <HamburgerButton></HamburgerButton>
      </Toggle>
    </NavigationWrapper>
  )
}

export default Navigation
