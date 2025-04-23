import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FiSearch, FiMenu } from "react-icons/fi";
import { UserContext } from "../context/UserContext";

import { ReactComponent as HeaderSettingsIcon } from "../assets/icons/headerSettingsIcon.svg";
import { ReactComponent as HeaderNotificationIcon } from "../assets/icons/headerNotificationIcon.svg";

const HeaderContainer = styled.header`
  background: #fff;
  padding: 1.5rem 2rem;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
    position: relative;
  }
`;

const Hamburger = styled(FiMenu)`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }

  @media (max-width: 768px) {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #343c6a;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const IconButton = styled.div`
  background: #f5f8fe;
  border-radius: 50%;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    color: #3f51b5;
  }
`;

const SearchBar = styled.div`
  margin-top: 1rem;
  background: #f5f8fe;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  max-width: 600px;

  input {
    border: none;
    background: transparent;
    padding: 0.4rem 0.5rem;
    font-size: 0.9rem;
    color: #7d8fb3;
    width: 100%;
    outline: none;
  }

  svg {
    color: #a5b4cb;
  }

  &.desktop {
    display: flex;

    @media (max-width: 768px) {
      display: none;
    }
  }

  &.mobile {
    display: none;
    width: 100%;

    @media (max-width: 768px) {
      display: flex;
    }
  }
`;

const Header = ({ title = "Overview", onMenuClick }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer>
      <TopRow>
        <Hamburger onClick={onMenuClick} />
        <Title>{title}</Title>
        <RightSection>
          <SearchBar className="desktop">
            <FiSearch />
            <input type="text" placeholder="Search for something" />
          </SearchBar>
          <IconButton onClick={() => navigate("/settings")}>
            <HeaderSettingsIcon />
          </IconButton>
          <IconButton>
            <HeaderNotificationIcon />
          </IconButton>
          <ProfileImage
          src={user.profileImage || "https://i.pravatar.cc/100"}
          alt={user.name}
        />
        </RightSection>
      </TopRow>

      {/* Mobile search bar */}
      <SearchBar className="mobile">
        <FiSearch />
        <input type="text" placeholder="Search for something" />
      </SearchBar>
    </HeaderContainer>
  );
};

export default Header;
