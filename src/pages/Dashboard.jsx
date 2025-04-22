import React, { useState,useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import CardList from "../components/CardList";
import TransactionList from "../components/TransactionList";
import WeeklyActivityChart from "../charts/WeeklyActivityChart";
import ExpensePieChart from "../charts/ExpensePieChart";
import BalanceLineChart from "../charts/BalanceLineChart";
import TransferBox from "../components/TransferBox";
import CardDrawer from "../components/CardDrawer";
import { fetchCards } from "../api/mockApi";



const Layout = styled.div`
  display: flex;
  background-color: #F5F7FA;
`;

const SidebarWrapper = styled.div`
  @media (min-width: 769px) {
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #e0e0e0;
    overflow-y: auto;
  }
`;

const Content = styled.div`
  flex: 1;
  background: #f9f9f9;
  min-height: 100vh;
`;

const ContentArea = styled.div`
  padding: 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const SideBySideWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;
const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SeeAllButton = styled.button`
  background: none;
  border: none;
  color: #1e40af;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    gap: 0.75rem;
  }
`;



const SectionTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [allCards, setAllCards] = useState([]);

  useEffect(() => {
    fetchCards().then(setAllCards);
  }, []);

  return (
    <Layout>
      <SidebarWrapper>
        <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
      </SidebarWrapper>
      <Content>
        <Header title="Overview" onMenuClick={() => setSidebarOpen(true)} />
        <ContentArea>
        <Section>
        <SectionHeader>
          <SectionTitle>My Cards</SectionTitle>
          <SeeAllButton onClick={() => setDrawerOpen(true)}>See All</SeeAllButton>
        </SectionHeader>
        <CardList />
      </Section>
      

          <Section>
            <SectionTitle>Recent Transactions</SectionTitle>
            <TransactionList />
          </Section>

          <Section>
            <SectionTitle>Weekly Activity</SectionTitle>
            <WeeklyActivityChart />
          </Section>

          <Section>
            <SectionTitle>Expense Statistics</SectionTitle>
            <ExpensePieChart />
          </Section>


        </ContentArea>

            <SideBySideWrapper>
    <Section>
        <SectionTitle>Quick Transfer</SectionTitle>
        <TransferBox />
    </Section>

    <Section>
        <SectionTitle>Balance History</SectionTitle>
        <BalanceLineChart />
    </Section>
    </SideBySideWrapper>

        <CardDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        cards={allCards}
      />
      </Content>
    </Layout>
  );
};

export default Dashboard;
 

// <Section>
// <SectionTitle>Balance History</SectionTitle>
// <BalanceLineChart />
// </Section>