import React from "react";

function QuestionItem({ question, onDelete }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  const handleDelete = async () => {
    try {
      // Make a DELETE request to remove the question on the server
      await fetch(`http://localhost:4000/questions/${id}`, {
        method: "DELETE",
      });

      // Call the onDelete function to remove the question from the UI
      onDelete(id);
    } catch (error) {
      console.error("Error deleting question:", error);
    }
  };

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={handleDelete}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
