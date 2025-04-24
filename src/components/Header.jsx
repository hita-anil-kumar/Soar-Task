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
  border-bottom: 1px solid #e0e0e0;

  @media (max-width: 816px) {
    padding: 1rem;
  }
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 816px) {
    display: block;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Center = styled.div`
  flex: 1;
  display: flex;
  justify-content: left;

  @media (max-width: 816px) {
    position: relative;
    justify-content: center;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Right = styled.nav`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Hamburger = styled(FiMenu).attrs({
  'aria-label': 'Open menu',
  role: 'button',
})`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 817px) {
    display: none;
  }
`;

const Title = styled.h2`
  font-size: 1.6rem;
  font-weight: 500;
  color: #343c6a;
  margin: 0;

  @media (max-width: 816px) {
    font-size: 1.4rem;
  }
`;

const ProfileImage = styled.img.attrs(({ alt }) => ({
  role: 'img',
  'aria-label': `${alt}'s profile image`,
}))`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 816px) {
    position: relative;
    right: 2%;
    transform: translateX(-50%);
  }
`;

const IconButton = styled.button`
  background: #f5f8fe;
  border-radius: 50%;
  padding: 0.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;

  svg {
    width: 20px;
    height: 20px;
    color: #3f51b5;
  }

  @media (max-width: 816px) {
    display: none;
  }
`;

const SearchBar = styled.div`
  background: #f5f8fe;
  border-radius: 30px;
  display: flex;
  align-items: center;
  padding: 0.4rem 1rem;
  width: 100%;

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
    flex-shrink: 0;
  }

  &.desktop {
    display: flex;

    @media (max-width: 816px) {
      display: none;
    }
  }

  &.mobile {
    display: none;

    @media (max-width: 816px) {
      display: flex;
      width: 100%;
      margin: 1rem 0 0 0;
    }
  }
`;

const Header = ({ title = "Overview", onMenuClick }) => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  return (
    <HeaderContainer role="banner" aria-label="Main Header">
      <TopRow>
        <Left>
          <Hamburger onClick={onMenuClick} />
        </Left>

        <Center>
          <Title>{title}</Title>
        </Center>

        <Right aria-label="Header actions">
          <SearchBar className="desktop" role="search" aria-label="Search form">
            <FiSearch aria-hidden="true" />
            <input type="text" placeholder="Search for something" aria-label="Search input" />
          </SearchBar>
          <IconButton onClick={() => navigate("/settings")} aria-label="Settings">
            <HeaderSettingsIcon />
          </IconButton>
          <IconButton aria-label="Notifications">
            <HeaderNotificationIcon />
          </IconButton>
          <ProfileImage
            src={user.profileImage || "https://i.pravatar.cc/100"}
            alt={user.name}
          />
        </Right>
      </TopRow>

      {/* Mobile search bar */}
      <BottomRow>
        <SearchBar className="mobile" role="search" aria-label="Search form">
          <FiSearch aria-hidden="true" />
          <input type="text" placeholder="Search for something" aria-label="Search input" />
        </SearchBar>
      </BottomRow>
    </HeaderContainer>
  );
};

export default Header;
