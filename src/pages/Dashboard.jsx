import React, { useState, useEffect, Suspense } from "react";
import styled from "styled-components";
import { fetchCards } from "../api/mockApi";

// lazy load
const Header = React.lazy(() => import("../components/Header"));
const Sidebar = React.lazy(() => import("../components/Sidebar"));
const CardList = React.lazy(() => import("../components/CardList"));
const TransactionList = React.lazy(() => import("../components/TransactionList"));
const WeeklyActivityChart = React.lazy(() => import("../charts/WeeklyActivityChart"));
const ExpensePieChart = React.lazy(() => import("../charts/ExpensePieChart"));
const BalanceLineChart = React.lazy(() => import("../charts/BalanceLineChart"));
const TransferBox = React.lazy(() => import("../components/TransferBox"));
const CardDrawer = React.lazy(() => import("../components/CardDrawer"));

const Layout = styled.div`
  display: flex;
  background-color: #f5f7fa;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const SidebarWrapper = styled.nav`
  @media (min-width: 769px) {
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #e0e0e0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Content = styled.main`
  flex: 1;
  background: #f9f9f9;
  min-height: 100vh;
  width: 100%;
`;

const ContentArea = styled.section`
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

const SideBySideWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 0 2rem 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 0 1rem 1.5rem;
  }
`;

const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const SeeAllButton = styled.button`
  background: none;
  border: none;
  color: #343c6a;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  line-height: 21px;

  &:hover {
    text-decoration: underline;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (max-width: 816px) {
    gap: 0.75rem;
  }
`;

const SectionTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 550;
  color: #343c6a;

  @media (max-width: 768px) {
    font-size: 1.1rem;
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
    <Layout role="application" aria-label="Financial Dashboard">
      <SidebarWrapper aria-label="Sidebar Navigation">
        <Suspense fallback={<div role="status" aria-live="polite">Loading sidebar...</div>}>
          <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
        </Suspense>
      </SidebarWrapper>

      <Content aria-label="Main Content Area">
        <Suspense fallback={<div role="status" aria-live="polite">Loading header...</div>}>
          <Header title="Overview" onMenuClick={() => setSidebarOpen(true)} />
        </Suspense>

        <ContentArea>
          <Section aria-labelledby="my-cards-heading">
            <SectionHeader>
              <SectionTitle id="my-cards-heading">My Cards</SectionTitle>
              <SeeAllButton onClick={() => setDrawerOpen(true)}>See All</SeeAllButton>
            </SectionHeader>
            <Suspense fallback={<div>Loading cards...</div>}>
              <CardList cards={allCards} limit={2} />
            </Suspense>
          </Section>

          <Section aria-labelledby="transactions-heading">
            <SectionTitle id="transactions-heading">Recent Transactions</SectionTitle>
            <Suspense fallback={<div>Loading transactions...</div>}>
              <TransactionList />
            </Suspense>
          </Section>

          <Section aria-labelledby="weekly-heading">
            <SectionTitle id="weekly-heading">Weekly Activity</SectionTitle>
            <Suspense fallback={<div>Loading chart...</div>}>
              <WeeklyActivityChart />
            </Suspense>
          </Section>

          <Section aria-labelledby="expenses-heading">
            <SectionTitle id="expenses-heading">Expense Statistics</SectionTitle>
            <Suspense fallback={<div>Loading pie chart...</div>}>
              <ExpensePieChart />
            </Suspense>
          </Section>
        </ContentArea>

        <SideBySideWrapper>
          <Section aria-labelledby="transfer-heading">
            <SectionTitle id="transfer-heading">Quick Transfer</SectionTitle>
            <Suspense fallback={<div>Loading transfer box...</div>}>
              <TransferBox />
            </Suspense>
          </Section>

          <Section aria-labelledby="balance-heading">
            <SectionTitle id="balance-heading">Balance History</SectionTitle>
            <Suspense fallback={<div>Loading balance chart...</div>}>
              <BalanceLineChart />
            </Suspense>
          </Section>
        </SideBySideWrapper>

        <Suspense fallback={null}>
          <CardDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} cards={allCards} />
        </Suspense>
      </Content>
    </Layout>
  );
};

export default Dashboard;
