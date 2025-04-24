import React, { useState, Suspense } from "react";
import styled from "styled-components";

// lazy load
const Header = React.lazy(() => import("../components/Header"));
const Sidebar = React.lazy(() => import("../components/Sidebar"));

const Layout = styled.div`
  display: flex;
`;

const SidebarWrapper = styled.div`
  @media (min-width: 769px) {
    width: 250px;
    background-color: #fff;
    border-right: 1px solid #e0e0e0;
  }
`;

const Content = styled.div`
  flex: 1;
  background: #f4f7fe;
  min-height: 100vh;
`;

const Container = styled.div`
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

const Loans = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Layout role="main">
      <SidebarWrapper aria-label="Sidebar navigation">
        <Suspense fallback={<div>Loading...</div>}>
          <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
        </Suspense>
      </SidebarWrapper>

      <Content>
        <Suspense fallback={<div>Loading...</div>}>
          <Header title="Setting" onMenuClick={() => setSidebarOpen(true)} />
        </Suspense>

        <Container>
          <Card role="region" aria-labelledby="loans-title">
            <h2 id="loans-title">Coming Soon ....</h2>
          </Card>
        </Container>
      </Content>
    </Layout>
  );
};

export default Loans;
