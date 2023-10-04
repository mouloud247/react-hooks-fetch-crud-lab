import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ newQuestion }) {
  const [questions, setQuestions] = useState([]);


  // Fetch questions from the server when the component mounts
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch("http://localhost:4000/questions");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        // Concatenate the fetched questions with the newQuestion (if it exists)

        setQuestions(data);


      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, [newQuestion]);

  const handleDeleteQuestion = (deletedQuestionId) => {
    // Filter out the deleted question from the questions state
    const updatedQuestions = questions.filter(
      (question) => question.id !== deletedQuestionId
    );

    // Update the state with the filtered questions
    setQuestions(updatedQuestions);
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}><QuestionItem question={question} onDelete={handleDeleteQuestion} /></li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
