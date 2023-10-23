import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Menu from "./Menu";
import Logo2 from "../asset/logo2.png";

const Navbar = ({ toggleDrawer, routes }) => {
  const navigate = useNavigate()
  return (
    <SNavbar>
      <NavContainer>
        <DrawerButton onClick={toggleDrawer}>
          <FaBars />
        </DrawerButton>
        <img onClick={() => navigate("/")} src={Logo2} alt="" className='nav-logo' />
        <RightNav>
          <NavRoutes>
            {routes && routes.map((route) => {
              if (route.subRoutes) {
                return <Menu route={route} key={route.name} />;
              }
              return (
                <NavRoute to={route.link} key={route.name}>
                  {route.name}
                </NavRoute>
              );
            })}
          </NavRoutes>
          <button onClick={() => navigate("/donate-now")} className="donation-btn nav-donate-btn">DONATE NOW</button>
        </RightNav>
      </NavContainer>
    </SNavbar>
  );
};

export default Navbar;

const DrawerButton = styled.button`
  all: unset;
  font-size: 16px;
  display: grid;
  @media (min-width: 768px) {
    display: none;
  }
`;

const SNavbar = styled.nav`
  background-color: white;
`;
const NavContainer = styled.div`
  padding: 1rem;
  height: 70px;
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
`;
const SNavbarBrand = styled.h2`
  font-size: 16px;
`;
const RightNav = styled.div`
  display: flex;
  gap: 2rem;
`;
const NavRoutes = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
  display: flex;
  gap: 1rem;
  font-size: 16px;
  align-items: center;
`;
const NavRoute = styled(Link)`
  text-decoration: none;
  color: blck;
  padding: 0.5rem;
  transition: 0.5s ease;

  &:hover {
    transition: 0.5s ease;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 10px white;
  }
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;

  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;