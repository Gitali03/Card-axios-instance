import "./App.css";
import Card from "./components/Card";
import api from "./api";
import { useEffect, useState } from "react";

function App() {
  const [cardContent, setCardContent] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const fetchData = async () => {
    try {
      const response = await api.get("posts");
      const fetchedData = response.data;

      const updatedData = fetchedData.map((item) => ({
        ...item,
        variant: item.id === 1 ? "big" : "small",
        title: item.title,
        content: item.body,
      }));

      setCardContent(updatedData);
    } catch (error) {
      console.error("An error occurred while fetching data.", error);
      setErrorMessage("An error occurred while fetching data.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {errorMessage && <div className="error">{errorMessage}</div>}
      <h1 className="page-header">Sektörel Raporlar</h1>
      <div>
        {cardContent
          .filter((bigCard) => bigCard.variant === "big")
          .map((bigCard) => (
            <Card
              key={bigCard.id}
              title={bigCard.title}
              variant={bigCard.variant}
              content={bigCard.content}
            />
          ))}
      </div>

      <div className="grid-container">
        {cardContent
          .filter((smallCard) => smallCard.variant === "small")
          .map((smallCard) => (
            <Card
              key={smallCard.id}
              title={smallCard.title}
              variant={smallCard.variant}
              content={smallCard.content}
            />
          ))}
      </div>

      <a href="" className="show-link">
        <button disabled className="show-button">
          Daha Fazla Göster
        </button>
      </a>
    </>
  );
}

export default App;
