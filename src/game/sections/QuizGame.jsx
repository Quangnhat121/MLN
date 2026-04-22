import React, { useState } from 'react';

const QUESTIONS = [
  {
    question: "Tồn tại xã hội là gì?",
    options: [
      "Toàn bộ đời sống tinh thần của xã hội",
      "Toàn bộ sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội",
      "Các quan hệ chính trị, pháp luật của xã hội",
      "Toàn bộ các quy luật vận động của tự nhiên"
    ],
    correct: 1,
    explanation: "Tồn tại xã hội dùng để chỉ toàn bộ sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội trong những giai đoạn lịch sử nhất định."
  },
  {
    question: "Yếu tố nào giữ vai trò quyết định, trực tiếp nhất trong tồn tại xã hội?",
    options: [
      "Điều kiện địa lý",
      "Mật độ dân số",
      "Phương thức sản xuất vật chất",
      "Môi trường sinh thái"
    ],
    correct: 2,
    explanation: "Phương thức sản xuất vật chất là yếu tố cơ bản nhất, quyết định sự tồn tại và phát triển của xã hội."
  },
  {
    question: "Mối quan hệ giữa tồn tại xã hội (TTXH) và ý thức xã hội (YTXH) là gì?",
    options: [
      "YTXH quyết định TTXH",
      "TTXH và YTXH không liên quan",
      "TTXH quyết định YTXH, YTXH có tính độc lập tương đối",
      "TTXH phản ánh YTXH một cách thụ động"
    ],
    correct: 2,
    explanation: "Chủ nghĩa duy vật lịch sử khẳng định TTXH quyết định YTXH, nhưng YTXH cũng có tính độc lập tương đối và tác động trở lại."
  },
  {
    question: "Yếu tố nào sau đây KHÔNG thuộc về tồn tại xã hội?",
    options: [
      "Điều kiện tự nhiên",
      "Dân số và mật độ dân số",
      "Hệ tư tưởng và tâm lý xã hội",
      "Phương thức sản xuất"
    ],
    correct: 2,
    explanation: "Hệ tư tưởng và tâm lý xã hội thuộc về Ý thức xã hội, không phải Tồn tại xã hội."
  }
];

export default function QuizGame() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === QUESTIONS[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < QUESTIONS.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <div className="quiz-container reveal visible">
        <div className="quiz-result">
          <div className="result-icon">🏆</div>
          <h2>Hoàn thành Quiz!</h2>
          <p className="result-score">
            Bạn đã trả lời đúng <strong>{score}</strong>/<strong>{QUESTIONS.length}</strong> câu hỏi.
          </p>
          <div className="result-rank">
            {score === QUESTIONS.length ? "Tiến sĩ Triết học 🎓" : score >= 2 ? "Học giả Ưu tú 📖" : "Cần cố gắng thêm 💪"}
          </div>
          <button className="quiz-btn" onClick={restartQuiz}>
            Thử lại
          </button>
        </div>
      </div>
    );
  }

  const q = QUESTIONS[currentQuestion];

  return (
    <div className="quiz-container reveal visible">
      <div className="quiz-header">
        <span className="quiz-progress">Câu hỏi {currentQuestion + 1} / {QUESTIONS.length}</span>
        <div className="progress-bar-bg">
          <div 
            className="progress-bar-fill" 
            style={{ width: `${((currentQuestion + 1) / QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="quiz-question-box">
        <h3>{q.question}</h3>
        <div className="options-grid">
          {q.options.map((option, index) => {
            let className = "option-card";
            if (isAnswered) {
              if (index === q.correct) className += " correct";
              else if (index === selectedOption) className += " incorrect";
              else className += " disabled";
            } else if (index === selectedOption) {
              className += " selected";
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleOptionClick(index)}
                disabled={isAnswered}
              >
                <span className="option-label">{String.fromCharCode(65 + index)}</span>
                <span className="option-text">{option}</span>
              </button>
            );
          })}
        </div>
      </div>

      {isAnswered && (
        <div className="quiz-feedback animate-in fade-in">
          <p className="explanation">
            <strong>{selectedOption === q.correct ? "✅ Chính xác!" : "❌ Chưa đúng!"}</strong> {q.explanation}
          </p>
          <button className="quiz-btn next" onClick={handleNext}>
            {currentQuestion === QUESTIONS.length - 1 ? "Xem kết quả" : "Câu tiếp theo"}
          </button>
        </div>
      )}
    </div>
  );
}
