import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchUsers } from "../api/mockApi";
import { ReactComponent as SendIcon } from "../assets/icons/sendIcon.svg";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrowRightIcon.svg";

const Box = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 32px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  max-width: 520px;
  @media (max-width: 816px) {
    padding: 1rem;
    max-width: 25rem;
   
  }
`;
const Profile = styled.div`
  text-align: center;
  width: 90px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 70px;
  }
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
    
  }
`;

const Name = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e1e1e;
  margin: 0.3rem 0 0;

  @media (max-width: 480px) {
    font-size: 0.75rem;
  }
`;

const Role = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  color: #8ba3cb;
  margin: 0.2rem 0 0;

  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;
const ContactRow = styled.div.attrs(() => ({
    role: "group",
    "aria-label": "Transfer contacts carousel"
  }))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
  }
`;

const ScrollArea = styled.div`
  display: flex;
  gap: 1.2rem;
  overflow-x: auto;
  margin: 0 auto; /* centers the scroll area */
  justify-content: center;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 816px) {
    justify-content: center;
  }
`;

const ArrowWrapper = styled.button.attrs((props) => ({
    "aria-label": props.rotate ? "Previous users" : "Next users",
    title: props.rotate ? "Previous users" : "Next users"
  }))`
  background: #f4f7fe;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;

  transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "none")};

  svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;

    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-wrap: nowrap;
    flex-direction: row;
  }
`;

const Label = styled.label.attrs(() => ({
    htmlFor: "amount-input"
  }))`
  color: #718ebf;
  font-size: 1rem;
  font-weight: 400;
  white-space: nowrap;
`;

const InputRow = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f4f7fe;
  border-radius: 999px;
  padding: 0.6rem 1rem;
  min-width: 0;
  overflow: hidden;
  gap: 0.5rem;
`;

const AmountInput = styled.input.attrs(() => ({
    id: "amount-input",
    "aria-label": "Amount to send"
  }))`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1rem;
  color: #718ebf;
  min-width: 0;

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button.attrs(() => ({
    "aria-label": "Send money"
  }))`
  background: #1e1e1e;
  color: #fff;
  border: none;
  padding: 0.6rem 1.2rem;
  font-size: 0.9rem;
  font-weight: 500;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  white-space: nowrap;
  flex-shrink: 0;

  &:hover {
    background: #333;
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    width: 18px;
    height: 18px;
  }
`;

const TransferBox = () => {
  const [users, setUsers] = useState([]);
  const [rawAmount, setRawAmount] = useState("525.50");
  const [isFocused, setIsFocused] = useState(false);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    fetchUsers().then(setUsers);
  }, []);

  const visibleUsers = users.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex + 3 < users.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const formatAmount = (value) => {
    const num = parseFloat(value);
    return isNaN(num) ? "" : num.toFixed(2);
  };

  const handleAmountChange = (e) => {
    const input = e.target.value.replace(/[^\d.]/g, "");
    if ((input.match(/\./g) || []).length > 1) return;
    setRawAmount(input);
  };

  const handleBlur = () => {
    setRawAmount(formatAmount(rawAmount));
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  return (
    <Box>
    <ContactRow>
    <ScrollArea>
      {visibleUsers.map((user, index) => (
        <Profile key={index}>
          <Avatar src={user.img} alt={user.name} />
          <Name>{user.name}</Name>
          <Role>{user.role}</Role>
        </Profile>
      ))}
    </ScrollArea>
  
    {startIndex + 3 < users.length && (
      <ArrowWrapper onClick={handleNext}>
        <ArrowIcon />
      </ArrowWrapper>
    )}
  </ContactRow>
  
  
      <InputWrapper>
        <Label>Write Amount</Label>
        <InputRow>
          <AmountInput
            type="text"
            value={isFocused ? rawAmount : `$${formatAmount(rawAmount)}`}
            onChange={handleAmountChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            placeholder="0.00"
          />
          <SendButton>
            Send <SendIcon />
          </SendButton>
        </InputRow>
      </InputWrapper>
    </Box>
  );
};

export default TransferBox;
