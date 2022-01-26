import React from "react";
import { useJsonFetch } from "hooks/useJsonFetch";
import "./App.css";

const App = () => {
  const urlData = "http://localhost:7070/data"; // success response
  const urlError = "http://localhost:7070/error"; // error
  const urlLoading = "http://localhost:7070/loading"; // loading
  const options: { method: string } = { method: "GET" };
  const { data, loading, error, errorMessage } = useJsonFetch(urlData, options);

  const dataToDisplay = () => {
    if (loading) {
      return "Идет загрузка данных...";
    }

    if (error) {
      return `Произошла ошибка ${errorMessage}`;
    }

    return `данные получены ${JSON.stringify(data)}`;
  };

  return <div className="App">{dataToDisplay()}</div>;
};

export default App;
