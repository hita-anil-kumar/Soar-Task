import React from "react";
import styled from "styled-components";

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
  height: 70vh;
  background: white;
  z-index: 1000;
  transition: top 0.4s ease;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  padding: 1rem 2rem;
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
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
`;

const CardDrawer = ({ open, onClose, cards }) => {
  return (
    <>
      <DrawerOverlay open={open} onClick={onClose} />
      <Drawer open={open}>
        <Header>
          All Cards
          <CloseBtn onClick={onClose}>✕</CloseBtn>
        </Header>
        <CardListWrapper>
          {cards.map((card) => (
            <Card key={card.id}>
              <p><strong>{card.name}</strong></p>
              <p>{card.number}</p>
              <p>Expires {card.expiry}</p>
              <p>Balance: {card.balance}</p>
            </Card>
          ))}
        </CardListWrapper>
      </Drawer>
    </>
  );
};

export default CardDrawer;