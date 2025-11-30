import "./App.css";
import Discover from "./components/discover/Discover";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import QuizForm from "./components/create_quiz/QuizForm";
import Popup from "./components/Popup";
import { useState } from "react";
import QuizPopup from "./components/QuizPopup";
import { AuthProvider } from "./contexts/AuthContext";
//import ProtectedRoute from "./components/ProtectedRoute";
import QuizInfo from "./components/quiz_info/QuizInfo";

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleCreateQuizClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <AuthProvider>
      <Router>
        <Header onCreateQuizClick={handleCreateQuizClick} />
        <div className="pt-20 md:pt-25">
          <Routes>
            <Route path="/" element={<Discover />} />
            <Route path="/discover" element={<Discover />} />
            <Route
              path="/my-quizzes"
              element={<div className="text-white">To be implemented</div>}
            />
            <Route path="/create-quiz/:quizId" element={<QuizForm />} />
            <Route path="/:quizId" element={<QuizInfo />} />
          </Routes>
        </div>

        <Popup isOpen={isPopupOpen} onClose={handleClosePopup}>
          <QuizPopup onCreated={handleClosePopup} />
        </Popup>
      </Router>
    </AuthProvider>
  );
}

export default App;
