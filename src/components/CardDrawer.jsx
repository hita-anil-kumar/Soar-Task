import React from "react";
import styled from "styled-components";
import CreditCard from "./CreditCard";

const DrawerOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({ open }) => (open ? "100%" : "0")};
  background: rgba(0, 0, 0, 0.3);
  transition: height 0.3s ease;
  z-index: ${({ open }) => (open ? 999 : -1)};
`;

const Drawer = styled.div`
  position: fixed;
  top: ${({ open }) => (open ? "0" : "-100%")};
  left: 0;
  width: 100%;
  height: 45vh;
  background: white;
  z-index: 1000;
  transition: top 0.4s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  padding: 1rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  font-weight: 600;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
`;

const CardListWrapper = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

const ScrollContainer = styled.div`
  max-height: 100%;
  overflow-y: auto;
  padding-right: 6px;

  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ccc;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

const CardDrawer = ({ open, onClose, cards }) => {
  return (
    <>
      <DrawerOverlay open={open} onClick={onClose} aria-hidden="true" />
      <Drawer
        open={open}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
      >
        <Header id="drawer-title">
          All Cards
          <CloseBtn
            onClick={onClose}
            aria-label="Close card drawer"
          >
            ✕
          </CloseBtn>
        </Header>
        <ScrollContainer role="region" aria-label="Card list">
          <CardListWrapper>
            {cards.map((card) => (
              <CreditCard
                key={card.id}
                variant={card.dark ? "dark" : "light"}
                name={card.name}
                expiry={card.expiry}
                number={card.number}
                balance={card.balance}
              />
            ))}
          </CardListWrapper>
        </ScrollContainer>
      </Drawer>
    </>
  );
};

export default CardDrawer;
