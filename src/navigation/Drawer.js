import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import ExpandMenu from "./ExpandMenu";
import Logo from "../asset/logo2.png"
const Drawer = ({ isOpen, toggleDrawer, routes }) => {
  const navigate = useNavigate()

  const [sidebar, setSidebar] = useState(false);
  let menuref = useRef()
  const showSidebar = () => setSidebar(!sidebar);
  // useEffect(() => {
  //   let handler = (e) => {
  //     if (!menuref.current.c) {

  //       setSidebar(false)
  //     }
  //   }
  //   document.addEventListener('mousedown', handler)
  // })

  return (
    <>
      {isOpen && <Backdrop onClick={toggleDrawer} />}
      <SDrawer isOpen={isOpen} className={showSidebar ? `active` : 'inactive'}>
        <RightNav>
          <img onClick={() => navigate("/")} src={Logo} alt="" className='nav-logo' />
          <NavRoutes>
            {/* {routes?.subRoutes?.map((sub) => {
              return <ExpandMenu to={sub.link} route={sub} key={sub.name} />

            })} */}
            {routes.map((route) => {
              if (route.subRoutes) {
                return <ExpandMenu to={route.link} route={route} key={route.name} onClick={toggleDrawer} />;
              }
              return (
                <>

                  <NavRoute
                    onClick={toggleDrawer}
                    to={route.link}
                    key={route.name}
                  >
                    {route.name}
                  </NavRoute>
                </>
              );
            })}
          </NavRoutes>
        </RightNav>
      </SDrawer>
    </>
  );
};

export default Drawer;
const SNavbarBrand = styled.h2`
  font-size: 3rem;
`;
const Backdrop = styled.div`
  height: 100%;
  width: 100%;
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  transition: 0.3s ease;

  background-color: rgba(0, 0, 0, 0.2);
`;
const SDrawer = styled.div`
  z-index: 150;
  position: absolute;
  top: 0;
  height: 150vh;
  width: 100%;
  background-color: white;
  transition: 0.3s ease;

  transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
`;

const RightNav = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem;
`;
const NavRoutes = styled.div``;
const NavRoute = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 2.5rem;
  padding: 0.5rem;
`;

const LoginButton = styled.button`
  padding: 0.7rem 3rem;
  background-color: white;
  border: 1px solid black;
  border-radius: 3rem;
  transition: 0.3s ease;
  align-self: flex-start;
  &:hover {
    transition: 0.3s ease;
    border: 1px solid transparent;
    background-color: yellow;
    box-shadow: 0px 0px 10px yellow;
  }
`;