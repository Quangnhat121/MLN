import { useState, useEffect } from "react";

export const IntroScreen = ({ onEnter }) => {
  const [isHiding, setIsHiding] = useState(false);

  const handleEnter = () => {
    setIsHiding(true);
    // Wait for animation to finish before unmounting/triggering logic
    setTimeout(() => {
      onEnter();
    }, 1000); // 1 second fade out
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#ede8e1] transition-all duration-1000 ease-[cubic-bezier(0.32,0.72,0,1)] ${
        isHiding ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      <div className="noise-overlay" />
      <div className="vignette-overlay" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-6">
        <p
          className="text-[#C5272D] font-semibold tracking-[0.2em] uppercase text-xs mb-6 opacity-0 animate-[fadeIn_1s_ease_0.5s_forwards]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Học phần: Triết học Mác – Lênin
        </p>

        <h1
          className="text-5xl md:text-7xl font-bold mb-4 text-[#1A1A1A] opacity-0 animate-[slideInFromTop_1s_ease_0.8s_forwards]"
          style={{ fontFamily: "'Playfair Display', serif", lineHeight: 1.2 }}
        >
          Tồn tại Xã hội <br />
          <span className="italic font-light opacity-80" style={{ fontFamily: "'EB Garamond', serif" }}>&</span>{" "}
          Ý thức
        </h1>

        <div className="w-12 h-[1px] bg-[#C5272D]/40 my-8 mx-auto opacity-0 animate-[fadeIn_1s_ease_1.2s_forwards]" />

        <p
          className="text-[#8B8680] text-sm md:text-base max-w-md mx-auto leading-relaxed mb-12 opacity-0 animate-[fadeIn_1s_ease_1.5s_forwards]"
          style={{ fontFamily: "'Outfit', sans-serif" }}
        >
          Khám phá mô hình 3D tương tác mô tả mối quan hệ biện chứng giữa điều kiện vật chất và đời sống tinh thần của con người.
        </p>

        <button
          onClick={handleEnter}
          className="group relative overflow-hidden rounded-full bg-[#1A1A1A] text-[#FAFAF8] px-10 py-4 font-medium text-sm tracking-[0.1em] uppercase transition-transform hover:scale-105 active:scale-95 opacity-0 animate-[fadeIn_1s_ease_1.8s_forwards]"
          style={{ fontFamily: "'Outfit', sans-serif", boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }}
        >
          <span className="relative z-10 flex items-center gap-3">
            Bắt đầu khám phá
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
          <div className="absolute inset-0 bg-[#C5272D] translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-y-0" />
        </button>
      </div>

      <div className="absolute bottom-10 text-center opacity-0 animate-[fadeIn_1s_ease_2.2s_forwards]">
        <p className="text-[10px] uppercase tracking-widest text-[#8B8680]/60" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Sử dụng tai nghe & chuột để có trải nghiệm tốt nhất
        </p>
      </div>
    </div>
  );
};
