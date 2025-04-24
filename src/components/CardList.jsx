import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchCards } from "../api/mockApi";
import CreditCard from "./CreditCard";

const CardsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  overflow-x: auto;

  @media (max-width: 816px) {
    padding-bottom: 1rem;
  }
`;

const CardList = ({ limit }) => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards().then(setCards);
  }, []);

  const visibleCards = limit ? cards.slice(0, limit) : cards;

  return (
    <CardsWrapper
      role="region"
      aria-label="List of credit cards"
    >
      {visibleCards.map((card) => (
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
