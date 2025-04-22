import React from "react";
import styled from "styled-components";
import { ReactComponent as SendIcon } from "../assets/icons/sendIcon.svg";
import { ReactComponent as ArrowIcon } from "../assets/icons/arrowRightIcon.svg";

const users = [
  { name: "Livia Bator", role: "CEO", img: "https://i.pravatar.cc/150?img=32" },
  { name: "Randy Press", role: "Director", img: "https://i.pravatar.cc/150?img=12" },
  { name: "Workman", role: "Designer", img: "https://i.pravatar.cc/150?img=5" },
];

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
  flex-wrap: wrap;
`;

const Profile = styled.div`
  text-align: center;
  flex: 1;
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
  margin: 0;
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
  color: #8ba3cb;
  font-size: 1.1rem;
  font-weight: 500;
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
  font-weight: 500;
  color: #343c6a;
  max-width: 100px;

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
  return (
    <Box>
      <ContactList>
        {users.map((user, index) => (
          <Profile key={index}>
            <Avatar src={user.img} alt={user.name} />
            <Name>{user.name}</Name>
            <Role>{user.role}</Role>
          </Profile>
        ))}
        <ArrowWrapper>
          <ArrowIcon />
        </ArrowWrapper>
      </ContactList>

      <InputWrapper>
        <Label>Write Amount</Label>
        <InputRow>
          <AmountInput type="number" value="525.50" />
          <SendButton>
            Send <SendIcon />
          </SendButton>
        </InputRow>
      </InputWrapper>
    </Box>
  );
};

export default TransferBox;

