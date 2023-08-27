import styled from "styled-components";
import Folder from "../Folder";

function Sidebar() {
  return (
    <SidebarContainer>
      <Folder />
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 25%;
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export default Sidebar;
