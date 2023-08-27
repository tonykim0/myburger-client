import styled from "styled-components";
import deleteIcon from "../../assets/trash-can.png";

function ContentItem({ content, onDelete }) {
  function handleDelete(event) {
    event.preventDefault();
    onDelete(content._id);
  }

  return (
    <ContentItemContainer>
      <ContentText>
        <CopiedText>{content.data}</CopiedText>
        {content.url && content.title && (
          <>
            Source :{" "}
            <a href={content.url} target="_blank" rel="noopener noreferrer">
              {content.title}
            </a>
          </>
        )}
      </ContentText>
      <DeleteButton onClick={handleDelete}>
        <img src={deleteIcon} alt="Delete" />
      </DeleteButton>
    </ContentItemContainer>
  );
}

const ContentItemContainer = styled.div`
  border: 2px solid #ddd;
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContentText = styled.div`
  flex-grow: 1;
  margin-right: 50px;
`;

const CopiedText = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`;

export default ContentItem;
