import styled from "styled-components";

function Folder({ name, onClick }) {
  return (
    <FolderContainer onClick={onClick}>{name}Sample Folder</FolderContainer>
  );
}

const FolderContainer = styled.div`
  padding: 10px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

export default Folder;
