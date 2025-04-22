import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchTransactions } from "../api/mockApi";

// SVG Icons
import { ReactComponent as CreditCardIcon } from "../assets/icons/cardIcon.svg";
import { ReactComponent as PaypalIcon } from "../assets/icons/paypalIcon.svg";
import { ReactComponent as UserIcon } from "../assets/icons/userIcon.svg";

const Container = styled.div`
  background: white;
  border-radius: 24px;
  padding: 1.2rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;

  &:not(:last-child) {
    border-bottom: 1px solid #f0f0f0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.4rem;
  }
`;

const Info = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
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
    width: 22px;
    height: 22px;
  }
`;

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  font-size: 0.95rem;
  font-weight: 600;
  color: #232323;
  margin: 0;
`;

const Date = styled.p`
  font-size: 0.8rem;
  color: #8ba3cb;
  margin: 0.3rem 0 0;
`;

const Amount = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  color: ${({ color }) => color || "#232323"};
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
      <ListWrapper>
        {transactions.map((tx, idx) => {
          const iconConfig = iconMap[tx.icon] || {};
          return (
            <Item key={idx}>
              <Info>
                <IconBox bg={iconConfig.bg}>{iconConfig.icon}</IconBox>
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
    </Container>
  );
};

export default TransactionList;

