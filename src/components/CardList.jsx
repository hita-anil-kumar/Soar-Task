import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCards } from "../api/mockApi";
import CreditCard from "./CreditCard";

const CardsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  @media (max-width: 768px) {
    padding-bottom: 1rem;
  }
`;

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards().then(setCards);
  }, []);

  return (
    <CardsWrapper>
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
    </CardsWrapper>
  );
};

export default CardList;

