import styled from "styled-components";

function Folder() {
  return <FolderContainer>My Folder</FolderContainer>;
}

const FolderContainer = styled.div`
  padding: 10px;
  border: 2px solid #ddd;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Folder;
