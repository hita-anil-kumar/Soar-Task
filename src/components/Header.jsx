import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FiSearch, FiMenu } from "react-icons/fi";
import { fetchUserInfo } from "../api/mockApi";
import { ReactComponent as HeaderSettingsIcon } from "../assets/icons/headerSettingsIcon.svg"; // Optional: replace with your actual settings icon SVG
import { ReactComponent as HeaderNotificationIcon } from "../assets/icons/headerNotificationIcon.svg";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background: #fff;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  h2 {
    font-size: 1.6rem;
    font-weight: 700;
    color: #343c6a;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const SearchBar = styled.div`
  position: relative;
  background: #f5f8fe;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  min-width: 200px;

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

const ProfileImage = styled.img`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
`;

const Hamburger = styled(FiMenu)`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = ({ title = "Overview", onMenuClick }) => {
  const [user, setUser] = useState({ name: "", profileImage: "" });

  useEffect(() => {
    fetchUserInfo().then((data) => setUser(data));
  }, []);

  return (
    <HeaderContainer>
      <LeftSection>
        <Hamburger onClick={onMenuClick} />
        <h2>{title}</h2>
      </LeftSection>
      <RightSection>
        <SearchBar>
          <FiSearch />
          <input type="text" placeholder="Search for something" />
        </SearchBar>
        <IconButton>
          <HeaderSettingsIcon />
        </IconButton>
        <IconButton>
          <HeaderNotificationIcon />
        </IconButton>
        {user.profileImage && <ProfileImage src={user.profileImage} alt={user.name} />}
      </RightSection>
    </HeaderContainer>
  );
};

export default Header;

