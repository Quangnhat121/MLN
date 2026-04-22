import Hero from "./sections/Hero";
import TonTai from "./sections/TonTaiXaHoi";
import LotoShow from "./sections/LotoShow";

import useScrollReveal from "../hooks/useScrollReveal";

export const GamePage = () => {
  useScrollReveal();

  return (
    <div
      className="theory-page-container"
      style={{
        width: "100%",
        minHeight: "100vh",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <style>{`.theory-page-container::-webkit-scrollbar { display: none; }`}</style>
      <Hero />

      <TonTai />
      <section id="quiz">
        <LotoShow />
      </section>
    </div>
  );
};
