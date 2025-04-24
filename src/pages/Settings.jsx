import React, { useState, useEffect, useRef, useContext , Suspense} from "react";
import styled from "styled-components";
import { fetchUserInfo } from "../api/mockApi";
import { ReactComponent as EditIcon } from "../assets/icons/edit-pencil.svg";
import ArrowDownIcon from "../assets/icons/arrow-down.svg";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { UserContext } from '../context/UserContext';

//lazy load
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

const Tabs = styled.div`
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid #ddd;
  margin-bottom: 2rem;
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: 0.5rem;
  border-bottom: ${({ active }) => (active ? "2px solid #000" : "none")};
  color: ${({ active }) => (active ? "#000" : "#718EBF")};
  cursor: pointer;
  white-space: nowrap; // 🚀 Prevents line breaks
`;

const FormLayout = styled.div`
  display: flex;
  gap: 2rem;
  align-items: flex-start;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;


const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarWrapper = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
`;

const UploadInput = styled.input`
  display: none;
`;

const EditButton = styled.label`
  position: absolute;
  bottom: 0;
  right: 0;
  background: #232323;
  border-radius: 50%;
  padding: 6px;
  cursor: pointer;

  svg {
    width: 14px;
    height: 14px;
  }
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  flex: 1;
  width: 100%; /* Make sure it stretches */

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // Ensure full width on all screens
`;


const Label = styled.label`
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
  color: #555;
`;
const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff;
  font-size: 0.95rem;
  color: #718EBF;

  &::placeholder {
    color: #718EBF;
  }

  &[type="date"] {
    appearance: none;
    -webkit-appearance: none;
    padding-right: 2.5rem;
    background: url(${ArrowDownIcon}) no-repeat right 1rem center;
    background-size: 16px;
    cursor: pointer;
  }
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
  background: #232323;
  color: #fff;
  border: none;
  padding: 0.8rem 2rem;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 10px;
  cursor: pointer;
  width: 190px;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }

  &:hover {
    background: #333;
  }
`;



const DatePickerInput = styled(DatePicker)`
  width: 100%;
  padding: 0.8rem 2.5rem 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  background: #fff url(${ArrowDownIcon}) no-repeat right 1rem center;
  background-size: 16px;
  font-size: 0.95rem;
  color: #718EBF;
  appearance: none;
  cursor: pointer;

  &::placeholder {
    color: #718EBF;
  }
`;

const Settings = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const fileInputRef = useRef();
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({});
 

  useEffect(() => {
    fetchUserInfo().then((data) => {
      const stored = JSON.parse(localStorage.getItem("userProfile")) || data;
      setUser(stored);
      setFormData({ ...stored });
    });
  }, [setUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email" && value && !value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return;
    if (name === "password" && value && value.length < 6) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        const updated = { ...formData, profileImage: reader.result };
        setUser(updated);
        setFormData(updated);
        localStorage.setItem("userProfile", JSON.stringify(updated));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setUser(formData);
    localStorage.setItem("userProfile", JSON.stringify(formData));
    alert("Changes saved successfully!");
  };

  return (
    <Layout>
      <SidebarWrapper>

      <Suspense fallback={<div>Loading...</div>}>
      <Sidebar open={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} />
      </Suspense>
       
      </SidebarWrapper>
      <Content>
      <Suspense fallback={<div>Loading...</div>}>
      <Header title="Setting" onMenuClick={() => setSidebarOpen(true)} />
      </Suspense>

        
        <Container>
          <Card>
            <Tabs>
              <Tab active={activeTab === "profile"} onClick={() => setActiveTab("profile")}>Edit Profile</Tab>
              <Tab active={activeTab === "preferences"} onClick={() => setActiveTab("preferences")}>Preferences</Tab>
              <Tab active={activeTab === "security"} onClick={() => setActiveTab("security")}>Security</Tab>
            </Tabs>

            {activeTab === "profile" && (
              <>
                <FormLayout>
                <ProfileSection>
                <AvatarWrapper>
                  <Avatar src={formData.profileImage || "https://i.pravatar.cc/100"} alt="User" />
                  <UploadInput
                    type="file"
                    id="avatarUpload"
                    accept="image/*"
                    onChange={handleImageChange}
                    ref={fileInputRef}
                  />
                  <EditButton htmlFor="avatarUpload">
                    <EditIcon />
                  </EditButton>
                </AvatarWrapper>
              </ProfileSection>

                  <FormGrid>
                    <Field>
                      <Label>Your Name</Label>
                      <Input name="name" placeholder="Charlene Reed" value={formData.name} onChange={handleChange} />
                    </Field>
                    <Field>
                      <Label>User Name</Label>
                      <Input name="username" placeholder="Charlene Reed" value={formData.username} onChange={handleChange} />
                    </Field>
                    <Field>
                      <Label>Email</Label>
                      <Input name="email" type="email" placeholder="charlenereed@gmail.com" value={formData.email} onChange={handleChange} />
                    </Field>
                    <Field>
                      <Label>Password</Label>
                      <Input name="password" type="password" placeholder="**********" value={formData.password} onChange={handleChange} />
                    </Field>
                    <Field>
  <Label>Date of Birth</Label>
  <DatePickerInput
    selected={formData.dob ? new Date(formData.dob) : null}
    onChange={(date) => setFormData({ ...formData, dob: date })}
    placeholderText="25 January 1990"
    dateFormat="dd MMMM yyyy"
    showPopperArrow={false}
  />
</Field>
                    <Field>
                      <Label>Present Address</Label>
                      <Input name="present" placeholder="San Jose, California, USA" value={formData.present} onChange={handleChange} />
                    </Field>
                    <Field>
                      <Label>Permanent Address</Label>
                      <Input name="permanent" placeholder="San Jose, California, USA" value={formData.permanent} onChange={handleChange} />
                    </Field>
                    <Field>
                      <Label>City</Label>
                      <Input name="city" placeholder="San Jose" value={formData.city} onChange={handleChange} />
                    </Field>
                    <Field>
                      <Label>Postal Code</Label>
                      <Input name="postal" placeholder="45962" value={formData.postal} onChange={handleChange} />
                    </Field>
                    <Field>
                      <Label>Country</Label>
                      <Input name="country" placeholder="USA" value={formData.country} onChange={handleChange} />
                    </Field>
                  </FormGrid>
                </FormLayout>

                <SaveWrapper>
                  <SaveButton onClick={handleSave}>Save</SaveButton>
                </SaveWrapper>
              </>
            )}

            {activeTab !== "profile" && (
              <p style={{ textAlign: "center", padding: "2rem" }}>Coming soon...</p>
            )}
          </Card>
        </Container>
      </Content>
    </Layout>
  );
};

export default Settings;
