import React from "react";
import styled from "styled-components";
import { ReactComponent as SoarTaskIcon } from "../assets/icons/soarTaskIcon.svg";
import { ReactComponent as DashboardIcon } from "../assets/icons/dashboardIcon.svg";
import { ReactComponent as TransactionsIcon } from "../assets/icons/transactionsIcon.svg";
import { ReactComponent as AccountsIcon } from "../assets/icons/accountsIcon.svg";
import { ReactComponent as InvestmentsIcon } from "../assets/icons/investmentsIcon.svg";
import { ReactComponent as CardsIcon } from "../assets/icons/cardsIcon.svg";
import { ReactComponent as LoansIcon } from "../assets/icons/loansIcon.svg";
import { ReactComponent as ServicesIcon } from "../assets/icons/servicesIcon.svg";
import { ReactComponent as PrivilegesIcon } from "../assets/icons/privilegesIcon.svg";
import { ReactComponent as SettingsIcon } from "../assets/icons/settingsIcon.svg";
import { Link, useLocation } from "react-router-dom";

const SidebarWrapper = styled.div`
  width: 240px;
  height: 100vh;
  background: white;
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? "0" : "-100%")};
  transition: left 0.3s ease;
  z-index: 1000;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);

  @media (min-width: 769px) {
    left: 0;
    position: relative;
    box-shadow: none;
  }
`;
const Brand = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-style: normal;
  font-weight: 800;
  font-size: 1.2rem;
  line-height: 30px;
  color: #343c6a;

  padding: 1.5rem 2rem;

  svg {
    width: 24px;
    height: 24px;
    flex-shrink: 0;
  }
`;

const IconWrapper = styled.div`

width: 35px;
height: 35px;
left: 38px;
top: 31px;


  display: flex;
  align-items: left;
  gap: 1rem;

  svg {
    width: 20px;
    height: 20px;
    fill: ${({ active }) => (active ? "#1e40af" : "#999")};
    transition: fill 0.3s ease;
  }
`;

const Nav = styled.ul`
  list-style: none;
  padding: 2rem 1rem 0rem 0rem;
  margin: 0;
`;

// const NavItem = styled.li`
//   display: flex;
//   align-items: center;
//   gap: 1rem;
//   padding: 0.8rem 1rem;
//   margin-bottom: 0.5rem;
//   border-radius: 8px;
//   font-size: 18px;
//   line-height: 22px;
//   color: ${({ $active }) => ($active ? "#232323;" : "#b1b1b1")};
//   font-weight: 500;
//   cursor: pointer;
//   transition: all 0.2s ease;

//   svg {
//     width: 20px;
//     height: 20px;
//     fill: ${({ $active }) => ($active ? "#232323;" : "#999")};
//   }

//   &:hover {
//     background: #f0f4ff;
//     color: #232323;

//     svg {
//       fill: #232323;
//     }
//   }
// `;
const NavItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.8rem 1rem 0.8rem 1.5rem;
  margin-bottom: 0.5rem;
  border-radius: 8px;
  font-size: 18px;
  line-height: 22px;
  color: ${({ $active }) => ($active ? "#232323" : "#b1b1b1")};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ $active }) => ($active ? "#232323" : "#999")};
  }

  &:hover {
    background: #f0f4ff;
    color: #232323;

    svg {
      fill: #232323;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;  
    width: 6px;
    height: 40px;
    border-radius: 2px;
    background-color: ${({ $active }) => ($active ? "#232323" : "transparent")};
  }
`;

const Sidebar = ({ open, toggleSidebar }) => {
  const location = useLocation();

  const navItems = [
    { to: "/", icon: <DashboardIcon/>, label: "Dashboard" },
    { to: "/transactions", icon: <TransactionsIcon />, label: "Transactions" },
    { to: "/accounts", icon: <AccountsIcon />, label: "Accounts" },
    { to: "/investments", icon: <InvestmentsIcon />, label: "Investments" },
    { to: "/credit-cards", icon: <CardsIcon />, label: "Credit Cards" },
    { to: "/loans", icon: <LoansIcon />, label: "Loans" },
    { to: "/services", icon: <ServicesIcon />, label: "Services" },
    { to: "/privileges", icon: <PrivilegesIcon />, label: "My Privileges" },
    { to: "/settings", icon: <SettingsIcon />, label: "Setting" },
  ];

  return (
    <SidebarWrapper open={open}>
   
      <Brand>  <SoarTaskIcon/> Soar Task</Brand>
      <Nav>
        {navItems.map(({ to, icon, label }) => (
          <Link key={to} to={to} onClick={toggleSidebar} style={{ textDecoration: "none" }}>
            <NavItem $active={location.pathname === to}>
              {icon} {label}
            </NavItem>
          </Link>
        ))}
      </Nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
