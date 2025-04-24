import React from "react";
import styled from "styled-components";
import { ReactComponent as ChipLight } from "../assets/icons/cardChipWhiteIcon.svg"; 
import { ReactComponent as ChipDark } from "../assets/icons/cardChipBlackIcon.svg"; 
import { ReactComponent as MastercardDark } from "../assets/icons/masterCardDark.svg";
import { ReactComponent as MastercardLight } from "../assets/icons/masterCardLight.svg";



const CardContainer = styled.div`
  flex: 0 0 350px;
  min-width: 350px;
  border-radius: 25px;
 width: 350px;
 height: 235px;

  background: ${({ variant }) =>
    variant === "dark"
      ? "linear-gradient(107.38deg, #5B5A6F 2.61%, #000000 101.2%)"
      : "#fff"};
  color: ${({ variant }) => (variant === "dark" ? "#fff" : "#343C6A")};
  border: ${({ variant }) =>
    variant === "light" ? "1px solid #DFEAF2" : "none"};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ variant }) =>
    variant === "dark" ? "none" : "0 4px 10px rgba(0, 0, 0, 0.05)"};

`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
   padding: 1.5rem;
`;

const BalanceGroup = styled.div``;

const Label = styled.div`
width: 42px;
height: 14px;
left: 26px;
top: 71px;
font-style: normal;
line-height: 14px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ variant }) =>
    variant === "dark" ? "#FFFFFF;" : "#718EBF"};
`;

const Balance = styled.div`
font-style: normal;
line-height: 24px;

  font-size: 20px;
  font-weight: 400;
  color: inherit;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
   padding: 0rem 1.5rem 1.5rem 1.5rem;
   
`;


const NameLabel = styled.div`
font-style: normal;
line-height: 14px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ variant }) =>
    variant === "dark" ? "rgba(255, 255, 255, 0.7)" : "#718EBF"};
`;

const Name = styled.div`
  font-size: 15px;
  font-weight: 400;
`;

const NumberRow = styled.div`

  display: flex;
  height : 70px;
  justify-content: space-between;
  align-items: center;
  background: ${({ variant }) =>
    variant === "dark"
      ? "linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0) 100%)"
      : "#fff"};
  border-top: ${({ variant }) =>
    variant === "light" ? "1px solid #DFEAF2" : "none"};
  border-radius: 0 0 25px 25px;
   padding: 1.2rem 1.2rem 1.2rem 1.2rem;
`;

const CardNumber = styled.div`
  font-size: 22px;
  font-weight: 400;
  letter-spacing: 2px;
 
`;

const Toggle = styled.div`
  width: 44px;
  height: 30px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Dot = styled.div`
  width: 30px;
  height: 30px;
  background: ${({ variant }) =>
    variant === "dark" ? "rgba(255,255,255,0.5)" : "rgba(145, 153, 175, 0.5)"};
  border-radius: 50%;
`;

const StyledChipDark = styled(ChipDark)`
  width: 26px;
  height: 26px;

  path {
    fill: #fff; // Adjust if needed
  }
`;

const StyledChipLight = styled(ChipLight)`
  width: 26px;
  height: 26px;

  path {
    fill: #2E2E2E; // Adjust if needed
  }
`;

const CreditCard = ({ variant = "light", name, expiry, number, balance }) => {
  return (
    <CardContainer variant={variant}>
    <TopRow>
    <BalanceGroup>
      <Label variant={variant}>Balance</Label>
      <Balance>{balance}</Balance>
    </BalanceGroup>
    {variant === "dark" ? <StyledChipLight /> : <StyledChipDark />}
  </TopRow>
  
  
      <DetailsRow>
        <div>
          <NameLabel variant={variant}>CARD HOLDER</NameLabel>
          <Name>{name}</Name>
        </div>
        <div>
          <NameLabel variant={variant}>VALID THRU</NameLabel>
          <Name>{expiry}</Name>
        </div>
      </DetailsRow>

      <NumberRow variant={variant}>
        <CardNumber>{number}</CardNumber>
        <Toggle>
        {variant === "dark" ? <MastercardDark /> : <MastercardLight />}
      </Toggle>
      </NumberRow>
    </CardContainer>
  );
};

export default CreditCard;

