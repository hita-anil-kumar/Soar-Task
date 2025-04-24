import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Accounts from "./pages/Accounts";
import CreditCardsPage from "./pages/CreditCards";
import Investments from "./pages/Investments";
import Loans from "./pages/Loans";
import MyPrivilages from "./pages/MyPrivilages";
import Services from "./pages/Services";
import Transactions from "./pages/Transactions";
import MainLayout from "./layouts/MainLayout";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (

    <Router>
    <UserProvider>
      <Routes>
        <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
        <Route path="/accounts" element={<MainLayout><Accounts /></MainLayout>} />
        <Route path="/credit-cards" element={<MainLayout><CreditCardsPage /></MainLayout>} />
        <Route path="/investments" element={<MainLayout><Investments /></MainLayout>} />
        <Route path="/loans" element={<MainLayout><Loans /></MainLayout>} />
        <Route path="/privileges" element={<MainLayout><MyPrivilages /></MainLayout>} />
        <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
        <Route path="/transactions" element={<MainLayout><Transactions /></MainLayout>} />
      </Routes>
      </UserProvider>
    </Router>

  );
};

export default App;

<Router>
<UserProvider>
  <Routes>
    <Route path="/" element={<MainLayout><Dashboard /></MainLayout>} />
    <Route path="/settings" element={<MainLayout><Settings /></MainLayout>} />
    <Route path="/accounts" element={<MainLayout><Accounts /></MainLayout>} />
    <Route path="/credit-cards" element={<MainLayout><CreditCardsPage /></MainLayout>} />
    <Route path="/investments" element={<MainLayout><Investments /></MainLayout>} />
    <Route path="/loans" element={<MainLayout><Loans /></MainLayout>} />
    <Route path="/privileges" element={<MainLayout><MyPrivilages /></MainLayout>} />
    <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
    <Route path="/transactions" element={<MainLayout><Transactions /></MainLayout>} />
  </Routes>
  </UserProvider>
</Router>