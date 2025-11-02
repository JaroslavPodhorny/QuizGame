import "./App.css";
import Discover from "./components/discover/Discover";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import CreateQuiz from "./components/create_quiz/CreateQuiz";
import Popup from "./components/Popup";
import { useState } from "react";
import QuizPopup from "./components/QuizPopup";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateQuizClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <Router>
        <Header onCreateQuizClick={handleCreateQuizClick} />

        <Routes>
          <Route path="/" element={<Discover />} />
          <Route path="/discover" element={<Discover />} />
          <Route
            path="/my-quizzes"
            element={<div className="text-white">To be implemented</div>}
          />
          <Route path="/create-quiz" element={<CreateQuiz />} />
        </Routes>

        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <QuizPopup onCreateClick={handleClosePopup} />
        </Popup>
      </Router>
    </>
  );
}

export default App;
