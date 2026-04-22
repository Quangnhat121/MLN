import { useState, useEffect } from "react";
import { BookPage } from "./book/BookPage";
import { GamePage } from "./game/GamePage";
import { AIUsagePage } from "./ai-usage/AIUsagePage";
import Navbar from "./game/sections/Navbar";

const TABS = [
  { id: "book", label: "Sách 3D" },
  { id: "game", label: "Trò chơi" },
  { id: "ai", label: "Sử dụng AI" },
];

function getActiveTab() {
  const hash = window.location.hash.replace("#", "");
  const path = window.location.pathname.replace("/", "");
  const from = TABS.find((t) => t.id === hash || t.id === path);
  return from ? from.id : "game";
}

function App() {
  const [activeTab, setActiveTab] = useState(getActiveTab);
  const [hasVisitedBook, setHasVisitedBook] = useState(false);

  // React to browser back/forward and hash changes
  useEffect(() => {
    const onNav = () => setActiveTab(getActiveTab());
    window.addEventListener("hashchange", onNav);
    window.addEventListener("popstate", onNav);
    return () => {
      window.removeEventListener("hashchange", onNav);
      window.removeEventListener("popstate", onNav);
    };
  }, []);

  const handleTabChange = (id) => {
    if (id === "book") setHasVisitedBook(true);
    setActiveTab(id);
    window.location.hash = id;
  };

  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      {/* Tab Content */}
      <div style={{ width: "100%", minHeight: "100vh" }}>
        {activeTab === "book" && <BookPage skipIntro={hasVisitedBook} />}
        {activeTab === "game" && <GamePage />}
        {activeTab === "ai" && <AIUsagePage />}
      </div>
    </div>
  );
}

export default App;
