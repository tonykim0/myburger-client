import styled from "styled-components";
import logo from "../../assets/burger.png";

function Navbar() {
  return (
    <NavbarContainer>
      <Logo src={logo} alt="Logo" />
    </NavbarContainer>
  );
}

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
`;

const Logo = styled.img`
  height: 40px;
`;

export default Navbar;
