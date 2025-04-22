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
`;

const ContactList = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const Profile = styled.div`
  text-align: center;
  width: 100px;
  flex-shrink: 0;
`;

const Avatar = styled.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
`;

const Name = styled.p`
  font-size: 1rem;
  font-weight: 700;
  color: #1e1e1e;
  margin: 0.5rem 0 0;
`;

const Role = styled.p`
  font-size: 0.9rem;
  font-weight: 500;
  color: #8ba3cb;
  margin: 0.5rem 0 0;
`;

const ArrowWrapper = styled.button`
  background: #f4f7fe;
  border: none;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform: ${({ rotate }) => (rotate ? "rotate(180deg)" : "none")};
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Label = styled.div`
  color: #718ebf;
  font-size: 1.1rem;
  font-weight: 200;
  min-width: 120px;
`;

const InputRow = styled.div`
  background: #f4f7fe;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  flex: 1;
`;

const AmountInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1.2rem;
  font-weight: 200;
  color: #718ebf;
  max-width: 120px;

  &:focus {
    outline: none;
  }
`;

const SendButton = styled.button`
  background: #1e1e1e;
  color: #fff;
  border: none;
  padding: 0.6rem 1.8rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 999px;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #333;
  }

  &:active {
    transform: scale(0.97);
  }

  svg {
    width: 20px;
    height: 20px;
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
      <ContactList>
        {startIndex > 0 && (
          <ArrowWrapper rotate onClick={handlePrev}>
            <ArrowIcon />
          </ArrowWrapper>
        )}
        {visibleUsers.map((user, index) => (
          <Profile key={index}>
            <Avatar src={user.img} alt={user.name} />
            <Name>{user.name}</Name>
            <Role>{user.role}</Role>
          </Profile>
        ))}
        {startIndex + 3 < users.length && (
          <ArrowWrapper onClick={handleNext}>
            <ArrowIcon />
          </ArrowWrapper>
        )}
      </ContactList>

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
