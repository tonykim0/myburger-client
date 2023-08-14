import styled from "styled-components";
import Folder from "../Folder";

function Sidebar({ folderName, onLogout }) {
  return (
    <SidebarContainer>
      <div>
        <Button className="create-folder-btn">Create Folder</Button>
        <div className="sidebar-folders">
          <Folder
            name={folderName}
            onClick={() => console.log("Folder clicked!")}
          />
        </div>
      </div>
      <div>
        <Button className="settings-btn">Account Settings</Button>
        <Button className="logout-btn" onClick={onLogout}>
          Logout
        </Button>
      </div>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  width: 250px;
  background-color: #f7f7f7;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  padding: 10px 15px;
  margin-bottom: 10px;
  cursor: pointer;
`;

export default Sidebar;
