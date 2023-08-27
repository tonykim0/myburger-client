import styled from "styled-components";
import logo from "../../assets/burger.png";

function Navbar({ onLogout }) {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
      <LogoutButton onClick={onLogout}>Log out</LogoutButton>{" "}
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #333;
`;

const Logo = styled.img`
  height: 50px;
`;

const LogoutButton = styled.button`
  background: orange;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
`;

export default Navbar;
