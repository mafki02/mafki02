function checkAnswers() {
  const correctAnswers = {
    q1: "Hypertext Markup Language",
    q2: "<a>",
    q3: "Cascading Style Sheets",
    q4: "JavaScript",
    q5: "Contains metadata about the document",
    q6: "HTTP",
    q7: "To make the webpage interactive",
    q8: "A design that adapts to different screen sizes",
    q9: "Document Object Model",
    q10: "Application Programming Interface",
    q11: "React",
    q12: "Displays an image",
    q13: "Content Delivery Network",
    q14: "HTML",
    q15: "Security"
  };

  let score = 0;
  const form = document.getElementById("quizForm");

  for (const [key, value] of Object.entries(correctAnswers)) {
    const selectedOption = form.querySelector(`input[name="${key}"]:checked`);
    if (selectedOption && selectedOption.value === value) {
      score++;
    }
  }

  const resultDiv = document.getElementById("result");
  resultDiv.textContent = `You scored ${score} out of 15.`;
  resultDiv.style.color = score > 10 ? "green" : "red";
}
