import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [question, setQuestion] = useState({}); // State to store questions

  // Function to add a new question to the state
  const updateQuestionList = (newQuestion) => {
    setQuestion(newQuestion);
  };

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm updateQuestionList={updateQuestionList} /> : <QuestionList newQuestion={question} />}
    </main>
  );
}

export default App;
