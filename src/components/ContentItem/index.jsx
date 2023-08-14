import styled from "styled-components";

function ContentItem({ content, onDelete }) {
  return (
    <ContentItemContainer>
      {content.type === "text" ? (
        <p>{content.text}</p>
      ) : (
        <ContentImage src={content.imageURL} alt="Content" />
      )}
      <DeleteButton onClick={() => onDelete(content.id)}>Delete</DeleteButton>
    </ContentItemContainer>
  );
}

const ContentItemContainer = styled.div`
  border: 1px solid #ddd;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentImage = styled.img`
  max-width: 100%;
  max-height: 500px;
  object-fit: cover;
`;

const DeleteButton = styled.button`
  background-color: orange;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
`;

export default ContentItem;
