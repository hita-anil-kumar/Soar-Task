import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchTransactions } from "../api/mockApi";
import { ReactComponent as CreditCardIcon } from "../assets/icons/cardIcon.svg";
import { ReactComponent as PaypalIcon } from "../assets/icons/paypalIcon.svg";
import { ReactComponent as UserIcon } from "../assets/icons/userIcon.svg";

const Container = styled.div.attrs(() => ({
    role: "region",
    "aria-label": "Recent transactions list"
  }))`
  background: white;
  border-radius: 24px;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  
    @media (max-width: 816px) {
    padding: 1rem;
    max-width: 25rem;
   
  }
`;

const ScrollContainer = styled.div`
  max-height: 218px;
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

const ListWrapper = styled.div.attrs(() => ({
    role: "list"
  }))`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Item = styled.div.attrs(() => ({
    role: "listitem"
  }))`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
  flex-wrap: wrap;

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  @media (max-width: 816px) {
    gap: 0.8rem;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;

    @media (max-width: 816px) {
    gap: 0.6rem;
  }
`;

const IconBox = styled.div`
  background: ${({ bg }) => bg || "#eee"};
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 50px;
    height: 50px;

    @media (max-width: 816px) {
      width: 50px;
      height: 50px;
    }
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 0.95rem;
  font-weight: 500;
  color: #232323;
  margin: 0;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #8ba3cb;
  margin: 0.3rem 0 0;
`;

const Amount = styled.p.attrs(({ color, children }) => ({
    "aria-label": `Transaction amount ${children.includes('-') ? 'debit' : 'credit'} ${children}`
  }))`
  font-size: 1rem;
  font-weight: 400;
  margin: 0;
  color: ${({ color }) => color || "#232323"};


  @media (max-width: 816px) {
    font-size: 0.9rem;
  }
`;

const iconMap = {
  card: {
    icon: <CreditCardIcon />,
    bg: "#fff4d6",
  },
  paypal: {
    icon: <PaypalIcon />,
    bg: "#f1f0ff",
  },
  user: {
    icon: <UserIcon />,
    bg: "#e5fcf6",
  },
};

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions().then(setTransactions);
  }, []);

  return (
    <Container>
      <ScrollContainer>
        <ListWrapper>
          {transactions.map((tx, idx) => {
            const iconConfig = iconMap[tx.icon] || {};
            return (
              <Item key={idx}>
                <Info>
                  <IconBox  bg={iconConfig.bg}>{iconConfig.icon}</IconBox>
                  <TextInfo>
                    <Title>{tx.name}</Title>
                    <Date>{tx.date}</Date>
                  </TextInfo>
                </Info>
                <Amount color={tx.color}>{tx.amount}</Amount>
              </Item>
            );
          })}
        </ListWrapper>
      </ScrollContainer>
    </Container>
  );
};

export default TransactionList;
