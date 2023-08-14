import styled from "styled-components";
import ContentItem from "../ContentItem";

function Main({ folderName, contents, onDelete }) {
  return (
    <MainContainer>
      <FolderTitle>{folderName}</FolderTitle>
      <div>
        {contents
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .map((content) => (
            <ContentItem
              key={content.id}
              content={content}
              onDelete={onDelete}
            />
          ))}
      </div>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const FolderTitle = styled.h2`
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

export default Main;
