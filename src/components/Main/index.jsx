import { useState, useEffect } from "react";
import axios from "axios";
import ContentItem from "../ContentItem";
import styled from "styled-components";

function Main({ userId }) {
  const [contents, setContents] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${
            import.meta.env.VITE_MYBURGER_SERVER_URI
          }/users/${userId}/contents`,
        );

        setContents(response.data.contents);
      } catch (error) {
        console.error("Error fetching contents", error);
      }
    }

    fetchData();

    const eventSource = new EventSource(
      `${import.meta.env.VITE_MYBURGER_SERVER_URI}/events`,
    );

    eventSource.onmessage = (event) => {
      const parsedData = JSON.parse(event.data);
      if (parsedData.action === "newContent" && parsedData.userId === userId) {
        setContents((prevContents) => [...prevContents, parsedData.content]);
      }
    };

    return () => {
      eventSource.close();
    };
  }, [userId]);

  async function handleDelete(contentId) {
    try {
      await axios.delete(
        `${
          import.meta.env.VITE_MYBURGER_SERVER_URI
        }/users/${userId}/contents/${contentId}`,
      );
      setContents(contents.filter((content) => content._id !== contentId));
    } catch (error) {
      console.error("Error deleting content", error);
    }
  }

  return (
    <MainContainer>
      <div>
        {contents.map((content) => (
          <ContentItem
            key={content._id}
            content={content}
            onDelete={handleDelete}
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

export default Main;
