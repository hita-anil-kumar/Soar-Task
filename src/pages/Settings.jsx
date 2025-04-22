// src/pages/Settings.jsx
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { fetchUserInfo } from "../api/mockApi";

const Layout = styled.div`
  display: flex;
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
  background: #f4f7fe;
  min-height: 100vh;
`;

const Container = styled.div`
  padding: 2rem;
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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;


const Tabs = styled.div`
  display: flex;
  justify-content: left;
  gap: 2rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  border-bottom: ${({ active }) => (active ? "2px solid #000" : "none")};
  color: ${({ active }) => (active ? "#000" : "#999")};
  cursor: pointer;
`;

const ProfileSection = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: #555;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #f9f9f9;
  font-size: 0.95rem;
`;

const SaveWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SaveButton = styled.button`
    background: #1e40af;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background-color: #2e5ce6;
  }

  &:active {
    transform: scale(0.96);
  }
`;

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [user, setUser] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchUserInfo().then((data) => {
      setUser(data);
      setFormData({
        name: data.name,
        username: data.name,
        email: data.email,
        password: "**********",
        dob: "25 January 1990",
        present: "San Jose, California, USA",
        permanent: "San Jose, California, USA",
        city: "San Jose",
        postal: "45962",
        country: "USA",
      });
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log("Saved Data:", formData);
    alert("Changes saved successfully!");
  };

  return (
    <Layout>
      <SidebarWrapper>
        <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
      </SidebarWrapper>
      <Content>
        <Header title="Setting" onMenuClick={() => setSidebarOpen(true)} />
        <Container>
          <Card>
            <Tabs>
              <Tab active={activeTab === "profile"} onClick={() => setActiveTab("profile")}>Edit Profile</Tab>
              <Tab active={activeTab === "preferences"} onClick={() => setActiveTab("preferences")}>Preference</Tab>
              <Tab active={activeTab === "security"} onClick={() => setActiveTab("security")}>Security</Tab>
            </Tabs>

            {activeTab === "profile" && (
              <>
                <ProfileSection>
                  <Avatar src={user.profileImage || "https://i.pravatar.cc/100"} alt="User" />
                </ProfileSection>

                <FormGrid>
                  <Field>
                    <Label>Your Name</Label>
                    <Input name="name" type="text" value={formData.name || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>User Name</Label>
                    <Input name="username" type="text" value={formData.username || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>Email</Label>
                    <Input name="email" type="email" value={formData.email || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>Password</Label>
                    <Input name="password" type="password" value={formData.password || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>Date of Birth</Label>
                    <Input name="dob" type="text" value={formData.dob || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>Present Address</Label>
                    <Input name="present" type="text" value={formData.present || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>Permanent Address</Label>
                    <Input name="permanent" type="text" value={formData.permanent || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>City</Label>
                    <Input name="city" type="text" value={formData.city || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>Postal Code</Label>
                    <Input name="postal" type="text" value={formData.postal || ""} onChange={handleChange} />
                  </Field>
                  <Field>
                    <Label>Country</Label>
                    <Input name="country" type="text" value={formData.country || ""} onChange={handleChange} />
                  </Field>
                </FormGrid>

                <SaveWrapper>
                  <SaveButton onClick={handleSave}>Save</SaveButton>
                </SaveWrapper>
              </>
            )}

            {activeTab !== "profile" && <p style={{ textAlign: "center", padding: "2rem" }}>Coming soon...</p>}
          </Card>
        </Container>
      </Content>
    </Layout>
  );
};

export default Settings;

