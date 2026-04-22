// Hero section – redesigned to match reference layout
export default function Hero() {
  return (
    <section className="hero-v2" id="hero">
      <div className="hero-v2-bg" />
      <div className="hero-v2-overlay" />

      <div className="hero-v2-portrait-wrap">
        <img
          src="https://2.bp.blogspot.com/-vJJLM_UJj60/UVc5Ks_FsdI/AAAAAAAAMTs/KgMqgO_S2_s/s1600/Mac-Anghen-Lenin.jpg"
          alt="Karl Marx & Lenin"
          className="hero-v2-portrait"
        />
        <div className="hero-v2-portrait-fade" />
      </div>

      <div className="hero-v2-content">
        <div className="hero-v2-badge">
          <span className="badge-dot">●</span> NHÓM 5
        </div>

        <h1 className="hero-v2-title">
          <span className="hero-v2-title-sm">Kinh tế chính trị</span>
          <span className="hero-v2-title-lg">Mác–Lênin</span>
        </h1>

        <p className="hero-v2-subtitle">Tồn Tại Xã Hội & Ý Thức Xã Hội</p>

        <p className="hero-v2-desc">
          Triết học không chỉ là nền tảng tư duy mà còn là ngọn đuốc soi sáng
          lịch sử. Khám phá sự tương tác biện chứng giữa tồn tại xã hội và ý
          thức thông qua trải nghiệm tương tác và hệ thống khảo nghiệm chuyên
          sâu.
        </p>

        <div className="hero-v2-actions">
          <a href="#quiz" className="hero-v2-btn primary group">
            <span>Khảo Nghiệm Tri Thức</span>
            <div className="btn-icon-wrapper">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </div>
          </a>
          <a href="#ton-tai" className="hero-v2-btn secondary group">
            <span>Tiến Vào Học Thuyết</span>
          </a>
        </div>

        <div className="hero-v2-pills block mt-8">
          <a href="#ton-tai" className="hero-v2-pill">
            Nền Tảng Tồn Tại XH
          </a>
          <a href="#y-thuc" className="hero-v2-pill">
            Hình Thái Ý Thức XH
          </a>
          <a href="#bien-chung" className="hero-v2-pill">
            Mối Quan Hệ Biện Chứng
          </a>
        </div>
      </div>
    </section>
  );
}
