import React from "react";
import styled from "styled-components";

const Layout = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Content = styled.main`
  flex: 1;
  overflow-y: auto;
  background: #f9f9f9;
`;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Content>{children}</Content>
    </Layout>
  );
};

export default MainLayout;

