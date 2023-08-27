import { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import axios from "axios";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const token = new URLSearchParams(window.location.search).get("token");

    async function validateToken() {
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_MYBURGER_SERVER_URI}/users/login`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );

        if (response.data && response.data.success) {
          setIsAuthenticated(true);
          setUserId(response.data.userId);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Token validation error", error);
        setIsAuthenticated(false);
      }
    }

    validateToken();
  }, []);

  function handleLogout() {}

  if (isAuthenticated === null) {
    return <p>Loading...</p>;
  }

  if (!isAuthenticated) {
    return (
      <ErrorMessage>
        Authentication failed. Please log in again through the extension.
      </ErrorMessage>
    );
  }

  return (
    <AppContainer>
      <Navbar onLogout={handleLogout} />
      <ContentContainer>
        <Sidebar />
        <Main userId={userId} />
      </ContentContainer>
    </AppContainer>
  );
}

const ErrorMessage = styled.p`
  color: red;
  text-align: center;
  margin-top: 50px;
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-grow: 1;
`;

export default App;
