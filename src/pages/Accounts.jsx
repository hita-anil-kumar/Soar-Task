import React, { useState, Suspense } from "react";
import styled from "styled-components";

// Lazy load
const Header = React.lazy(() => import("../components/Header"));
const Sidebar = React.lazy(() => import("../components/Sidebar"));

const Layout = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.nav`
  @media (min-width: 769px) {
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #e0e0e0;
  }
`;

const Content = styled.main`
  flex: 1;
  background: #f4f7fe;
  min-height: 100vh;
`;

const Container = styled.section`
  padding: 2rem;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const Accounts = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout role="application" aria-label="Accounts Page Layout">
      <SidebarWrapper aria-label="Sidebar Navigation">
        <Suspense fallback={<div role="status" aria-live="polite">Loading Sidebar...</div>}>
          <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
        </Suspense>
      </SidebarWrapper>

      <Content aria-label="Accounts Main Content">
        <Suspense fallback={<div role="status" aria-live="polite">Loading Header...</div>}>
          <Header title="Accounts" onMenuClick={() => setSidebarOpen(true)} />
        </Suspense>

        <Container aria-labelledby="accounts-heading">
          <Card role="region" aria-labelledby="accounts-heading">
            <h2 id="accounts-heading">Coming Soon...</h2>
          </Card>
        </Container>
      </Content>
    </Layout>
  );
};

export default Accounts;
