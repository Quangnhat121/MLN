import { useMemo, useState } from "react";

const WIN_LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const QUESTION_MAP = {
  1: {
    type: "mcq",
    title: "Câu 1",
    question:
      "Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là nền kinh tế:",
    options: [
      "Chỉ dựa vào mệnh lệnh Nhà nước",
      "Vận hành theo quy luật thị trường, có sự quản lý của Nhà nước",
      "Không có kinh tế tư nhân",
      "Chỉ có kinh tế nhà nước",
    ],
    correctIndex: 1,
  },
  2: {
    type: "mcq",
    title: "Câu 2",
    question:
      "Mục tiêu lớn của mô hình kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam là gì?",
    options: [
      "Chỉ tăng lợi nhuận",
      "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
      "Chỉ phát triển công nghiệp",
      "Chỉ mở rộng buôn bán quốc tế",
    ],
    correctIndex: 1,
  },
  3: {
    type: "mcq",
    title: "Câu 3",
    question:
      "Trong nền kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam:",
    options: [
      "Chỉ có một hình thức sở hữu",
      "Có nhiều hình thức sở hữu, nhiều thành phần kinh tế",
      "Không có kinh tế tư nhân",
      "Không có cạnh tranh",
    ],
    correctIndex: 1,
  },
  4: {
    type: "mcq",
    title: "Câu 4",
    question: "Kinh tế nhà nước trong mô hình này giữ vai trò gì?",
    options: [
      "Vai trò phụ",
      "Không có vai trò",
      "Vai trò chủ đạo",
      "Chỉ hoạt động khi cần thiết",
    ],
    correctIndex: 2,
  },
  5: {
    type: "mcq",
    title: "Câu 5",
    question: "Kinh tế tư nhân được xem là:",
    options: [
      "Thành phần phải xóa bỏ",
      "Một động lực quan trọng của nền kinh tế",
      "Thành phần không cần phát triển",
      "Thành phần không bình đẳng với các thành phần khác",
    ],
    correctIndex: 1,
  },
  6: {
    type: "mcq",
    title: "Câu 6",
    question:
      "Đúng hay sai: Kinh tế thị trường định hướng xã hội chủ nghĩa phủ nhận vai trò của thị trường.",
    options: ["Đúng", "Sai"],
    correctIndex: 1,
  },
  7: {
    type: "fill",
    title: "Câu 7",
    question:
      'Điền khuyết: Kinh tế thị trường định hướng xã hội chủ nghĩa ở Việt Nam hướng tới mục tiêu "dân giàu, ________, dân chủ, công bằng, văn minh".',
    correctText: "nước mạnh",
  },
  8: {
    type: "mcq",
    title: "Câu 8",
    question: "Lợi ích kinh tế là gì?",
    options: [
      "Lợi ích tinh thần duy nhất",
      "Lợi ích vật chất thu được khi thực hiện hoạt động kinh tế",
      "Lợi ích chỉ của doanh nghiệp",
      "Lợi ích không liên quan đến sản xuất",
    ],
    correctIndex: 1,
  },
  9: {
    type: "mcq",
    title: "Câu 9",
    question:
      "Nhà nước có vai trò gì trong nền kinh tế thị trường định hướng xã hội chủ nghĩa?",
    options: [
      "Không cần can thiệp",
      "Chỉ thu thuế",
      "Quản lý, điều tiết nền kinh tế, khắc phục khuyết tật của thị trường",
      "Chỉ quản lý doanh nghiệp nhà nước",
    ],
    correctIndex: 2,
  },
};

const LABELS = ["A", "B", "C", "D"];

const COLOR_LAYOUTS = {
  blue: [1, 5, 7, 3, 9, 2, 6, 8, 4],
  pink: [2, 8, 4, 1, 6, 9, 7, 3, 5],
  yellow: [9, 3, 6, 4, 1, 8, 2, 5, 7],
  green: [5, 2, 8, 7, 4, 1, 9, 6, 3],
};

const COLOR_OPTIONS = [
  {
    id: "blue",
    name: "Xanh dương",
    color: "#3ca7e5",
    strong: "#2f83bb",
    soft: "rgba(60, 167, 229, 0.35)",
  },
  {
    id: "pink",
    name: "Hồng",
    color: "#e55ab7",
    strong: "#be3e95",
    soft: "rgba(229, 90, 183, 0.35)",
  },
  {
    id: "yellow",
    name: "Vàng",
    color: "#f3d54d",
    strong: "#dfb827",
    soft: "rgba(243, 213, 77, 0.35)",
  },
  {
    id: "green",
    name: "Xanh lá",
    color: "#79d84f",
    strong: "#57b536",
    soft: "rgba(121, 216, 79, 0.35)",
  },
];

function normalizeText(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/\s+/g, " ")
    .trim();
}

function findWinningLine(correctNumbers) {
  const correctSet = new Set(correctNumbers);
  return WIN_LINES.find((line) => line.every((n) => correctSet.has(n))) || null;
}

export default function LotoShow() {
  const [selectedColorId, setSelectedColorId] = useState(null);
  const [drawnNumber, setDrawnNumber] = useState(null);
  const [openedCell, setOpenedCell] = useState(null);
  const [openedNumber, setOpenedNumber] = useState(null);
  const [correctCells, setCorrectCells] = useState([]);
  const [wrongCells, setWrongCells] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [textAnswer, setTextAnswer] = useState("");
  const [feedback, setFeedback] = useState(null);
  const [winningLine, setWinningLine] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);

  const usedCells = useMemo(
    () => new Set([...correctCells, ...wrongCells]),
    [correctCells, wrongCells],
  );

  const boardLayout = useMemo(() => {
    if (!selectedColorId) return [1, 2, 3, 4, 5, 6, 7, 8, 9];
    return COLOR_LAYOUTS[selectedColorId] || [1, 2, 3, 4, 5, 6, 7, 8, 9];
  }, [selectedColorId]);

  const valueToCellIndex = useMemo(() => {
    const map = new Map();
    boardLayout.forEach((value, idx) => {
      map.set(value, idx + 1);
    });
    return map;
  }, [boardLayout]);

  const availableNumbers = useMemo(() => {
    return boardLayout.filter((value) => {
      const cellIndex = valueToCellIndex.get(value);
      return !usedCells.has(cellIndex);
    });
  }, [boardLayout, usedCells, valueToCellIndex]);

  const selectedColor = useMemo(
    () => COLOR_OPTIONS.find((option) => option.id === selectedColorId) || null,
    [selectedColorId],
  );

  const lotoThemeStyle = useMemo(() => {
    if (!selectedColor) return undefined;
    return {
      "--loto-accent": selectedColor.color,
      "--loto-accent-strong": selectedColor.strong,
      "--loto-accent-soft": selectedColor.soft,
    };
  }, [selectedColor]);

  const currentQuestion = openedNumber ? QUESTION_MAP[openedNumber] : null;

  const spinNumber = () => {
    if (
      isGameOver ||
      feedback ||
      openedCell ||
      drawnNumber !== null ||
      availableNumbers.length === 0
    )
      return;
    const randomIdx = Math.floor(Math.random() * availableNumbers.length);
    const nextNumber = availableNumbers[randomIdx];
    setDrawnNumber(nextNumber);
    setSelectedOption(null);
    setTextAnswer("");
  };

  const openQuestion = (number, cellIndex) => {
    if (
      isGameOver ||
      feedback ||
      number !== drawnNumber ||
      usedCells.has(cellIndex)
    )
      return;

    setOpenedCell(cellIndex);
    setOpenedNumber(number);
    setSelectedOption(null);
    setTextAnswer("");
  };

  const resolveRound = (isCorrect) => {
    const targetCell = openedCell;
    const targetNumber = openedNumber;
    if (!targetCell || !targetNumber) return;

    const nextCorrect = isCorrect
      ? [...correctCells, targetCell]
      : correctCells;
    const nextWrong = isCorrect ? wrongCells : [...wrongCells, targetCell];
    const line = findWinningLine(nextCorrect);
    const allDone =
      nextCorrect.length + nextWrong.length === boardLayout.length;
    const question = QUESTION_MAP[targetNumber];

    setCorrectCells(nextCorrect);
    setWrongCells(nextWrong);
    setWinningLine(line);
    setFeedback({
      isCorrect,
      answerText:
        question.type === "fill"
          ? "nước mạnh"
          : `${LABELS[question.correctIndex]}. ${question.options[question.correctIndex]}`,
    });

    if (line || allDone) {
      setIsGameOver(true);
    }
  };

  const submitAnswer = () => {
    if (!currentQuestion || !openedCell) return;

    if (currentQuestion.type === "mcq") {
      if (selectedOption === null) return;
      resolveRound(selectedOption === currentQuestion.correctIndex);
      return;
    }

    const normalizedInput = normalizeText(textAnswer);
    const normalizedCorrect = normalizeText(currentQuestion.correctText);
    if (!normalizedInput) return;
    resolveRound(normalizedInput === normalizedCorrect);
  };

  const nextRound = () => {
    setFeedback(null);
    setDrawnNumber(null);
    setOpenedCell(null);
    setOpenedNumber(null);
    setSelectedOption(null);
    setTextAnswer("");
  };

  const resetBoard = () => {
    setDrawnNumber(null);
    setOpenedCell(null);
    setOpenedNumber(null);
    setCorrectCells([]);
    setWrongCells([]);
    setSelectedOption(null);
    setTextAnswer("");
    setFeedback(null);
    setWinningLine(null);
    setIsGameOver(false);
  };

  const restart = () => {
    resetBoard();
  };

  const handleSelectColor = (colorId) => {
    setSelectedColorId(colorId);
    resetBoard();
  };

  const handleChangeColor = () => {
    setSelectedColorId(null);
    resetBoard();
  };

  const gameResultText = winningLine
    ? "Kết thúc: đã có người đạt 3 ô liên tiếp."
    : "Đã mở hết 9 ô nhưng chưa có đường 3 ô liên tiếp.";

  const winningLineValues = winningLine
    ? winningLine.map((cellIndex) => boardLayout[cellIndex - 1])
    : null;

  return (
    <section className="loto-wrap reveal visible" style={lotoThemeStyle}>
      <div className="loto-bg-layer" />
      <div className="loto-overlay" />

      <div className="loto-content">
        <header className="loto-heading">
          <p className="loto-kicker">TRÒ CHƠI NHỎ</p>
          <h2>LÔ TÔ SHOW</h2>
          <p className="loto-sub">
            Quay số, mở ô, trả lời đúng để chinh phục 3 ô liên tiếp.
          </p>
        </header>

        {!selectedColor && (
          <div className="loto-color-screen">
            <p className="loto-color-prompt">Chọn tờ của bạn đi nè!</p>
            <div className="loto-color-grid">
              {COLOR_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  className="loto-color-card"
                  onClick={() => handleSelectColor(option.id)}
                  aria-label={`Chọn màu ${option.name}`}
                >
                  <span
                    className="loto-color-chip"
                    style={{ backgroundColor: option.color }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}

        {selectedColor && (
          <div className="loto-main-grid">
            <div className="loto-board-panel">
              <div className="loto-color-badge">
                Màu đã chọn: <strong>{selectedColor.name}</strong>
              </div>

              <div className="loto-board">
                {boardLayout.map((value, idx) => {
                  const cellIndex = idx + 1;
                  const isWrong = wrongCells.includes(cellIndex);
                  const isCorrect = correctCells.includes(cellIndex);
                  const isCurrentDraw = drawnNumber === value;
                  const isActive = openedCell === cellIndex;
                  const inWinningLine = winningLine
                    ? winningLine.includes(cellIndex)
                    : false;

                  let className = "loto-cell";
                  if (isWrong) className += " wrong";
                  if (isCorrect) className += " correct";
                  if (isCurrentDraw && !isWrong && !isCorrect)
                    className += " drawn";
                  if (isActive) className += " active";
                  if (inWinningLine) className += " winner";

                  return (
                    <button
                      key={cellIndex}
                      className={className}
                      onClick={() => openQuestion(value, cellIndex)}
                      disabled={
                        isWrong ||
                        isCorrect ||
                        isGameOver ||
                        drawnNumber !== value ||
                        feedback !== null
                      }
                    >
                      {value}
                    </button>
                  );
                })}
              </div>

              <div className="loto-controls">
                <button
                  className="loto-btn spin"
                  onClick={spinNumber}
                  disabled={
                    isGameOver ||
                    drawnNumber !== null ||
                    openedCell !== null ||
                    feedback !== null ||
                    availableNumbers.length === 0
                  }
                >
                  Quay Lô Tô
                </button>
                <button className="loto-btn reset" onClick={restart}>
                  Chơi lại
                </button>
                <button className="loto-btn reset" onClick={handleChangeColor}>
                  Đổi màu
                </button>
              </div>

              <p className="loto-drawn-number">
                Số quay ra: <strong>{drawnNumber ?? "--"}</strong>
              </p>
              <p className="loto-hint">
                Bấm vào ô vừa quay để trả lời câu hỏi.
              </p>
            </div>

            <div className="loto-qa-panel">
              {!openedCell && !feedback && !isGameOver && (
                <div className="loto-empty">
                  <p>Hãy bấm Quay Lô Tô để bắt đầu.</p>
                </div>
              )}

              {currentQuestion && (
                <div className="loto-question-box">
                  <div className="loto-question-title">
                    {currentQuestion.title}
                  </div>
                  <p className="loto-question-text">
                    {currentQuestion.question}
                  </p>

                  {currentQuestion.type === "mcq" && (
                    <div className="loto-options">
                      {currentQuestion.options.map((option, idx) => {
                        const isPicked = selectedOption === idx;
                        return (
                          <button
                            key={option}
                            className={`loto-option ${isPicked ? "picked" : ""}`}
                            onClick={() => setSelectedOption(idx)}
                          >
                            <span>{LABELS[idx]}.</span>
                            <span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {currentQuestion.type === "fill" && (
                    <div className="loto-fill-wrap">
                      <input
                        type="text"
                        className="loto-fill-input"
                        placeholder="Nhập đáp án"
                        value={textAnswer}
                        onChange={(e) => setTextAnswer(e.target.value)}
                      />
                    </div>
                  )}

                  <button className="loto-btn submit" onClick={submitAnswer}>
                    Chốt đáp án
                  </button>
                </div>
              )}

              {feedback && (
                <div
                  className={`loto-feedback ${feedback.isCorrect ? "ok" : "bad"}`}
                >
                  <p>
                    {feedback.isCorrect
                      ? "Chính xác! Ô này đã được mở thành công."
                      : `Sai rồi! Đáp án đúng là ${feedback.answerText}. Ô này đã bị khóa màu xám.`}
                  </p>
                  {!isGameOver && (
                    <button className="loto-btn next" onClick={nextRound}>
                      Quay tiếp
                    </button>
                  )}
                </div>
              )}

              {isGameOver && (
                <div className="loto-gameover">
                  <h3>{gameResultText}</h3>
                  {winningLineValues && (
                    <p>Bộ 3 chiến thắng: {winningLineValues.join(" - ")}</p>
                  )}
                  <button className="loto-btn reset" onClick={restart}>
                    Làm ván mới
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
