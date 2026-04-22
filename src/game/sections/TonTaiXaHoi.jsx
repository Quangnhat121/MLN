import ExpandCard from '../../components/ExpandCard';

export default function TonTaiXaHoi() {
  return (
    <section id="ton-tai">
      <div className="page-section">
        {/* --- 3.4.1. TỒN TẠI XÃ HỘI --- */}
        <div className="section-header reveal">
          <span className="section-label">Phần 3.4.1</span>
          <h2>Tồn Tại Xã Hội</h2>
          <div className="section-divider" />
          <p>
            Khái niệm dùng để chỉ toàn bộ những sinh hoạt vật chất và những điều kiện sinh hoạt vật chất của xã hội trong những giai đoạn lịch sử nhất định.
          </p>
        </div>

        {/* Factors of Social Existence */}
        <div className="feature-grid reveal delay-1">
          <div className="feature-card">
            <div className="fc-num">01</div>
            <h4>Điều Kiện Tự Nhiên</h4>
            <p>
              Toàn bộ những điều kiện vật chất tự nhiên tạo thành những điều kiện khách quan cho sự sinh tồn và phát triển. Giới tự nhiên được ví như <strong>“thân thể vô cơ”</strong> của con người.
            </p>
          </div>

          <div className="feature-card">
            <div className="fc-num">02</div>
            <h4>Điều Kiện Dân Số</h4>
            <p>
              Bao gồm các phương diện về số lượng, cơ cấu, mật độ phân bố... Ví dụ: Cấu trúc cư dân lúa nước Việt Nam tạo nên tổ chức làng xã ổn định.
            </p>
          </div>

          <div className="feature-card">
            <div className="fc-num">03</div>
            <h4>Phương Thức Sản Xuất</h4>
            <p>
              Yếu tố cơ bản và trực tiếp nhất quy định sự sinh tồn. Bao gồm mặt <strong>vật chất – kĩ thuật</strong> (trình độ công nghệ) và mặt <strong>kinh tế - xã hội</strong>.
            </p>
          </div>
        </div>

        <div className="phan-separator reveal" style={{ margin: '5rem 0' }} />

        {/* --- 3.4.2. Ý THỨC XÃ HỘI --- */}
        <div className="section-header reveal">
          <span className="section-label">Phần 3.4.2</span>
          <h2>Ý Thức Xã Hội</h2>
          <div className="section-divider" />
          <p>
            Chỉ các mặt, các bộ phận khác nhau của lĩnh vực tinh thần xã hội nảy sinh từ tồn tại xã hội và phản ánh tồn tại xã hội.
          </p>
        </div>

        <div className="def-box reveal delay-1">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 2a10 10 0 0 1 10 10h-10V2z"></path><path d="M12 12L2.8 2.2"></path><path d="M16.2 7.8l3.9 3.9"></path><circle cx="12" cy="12" r="10"></circle></svg>
            <h3 style={{ margin: 0 }}>Kết Cấu Của Ý Thức Xã Hội</h3>
          </div>
          
          <div className="level-diagram">
            <div className="level-column">
              <h4 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Xét theo trình độ phản ánh</h4>
              <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-muted)' }}>
                <li><strong>Tâm lý xã hội:</strong> Phản ánh trực tiếp, tự phát đời sống hàng ngày (phong phú, lây lan, tâm lý dân tộc).</li>
                <li><strong>Hệ tư tưởng:</strong> Giai đoạn phát triển cao, được khái quát hóa thành lý luận, học thuyết.</li>
              </ul>
            </div>
            <div className="level-column">
              <h4 style={{ color: 'var(--gold)', marginBottom: '1rem' }}>Xét theo lĩnh vực phản ánh</h4>
              <div className="level-tags">
                <span className="level-tag">Chính trị</span>
                <span className="level-tag">Pháp quyền</span>
                <span className="level-tag">Đạo đức</span>
                <span className="level-tag">Thẩm mỹ</span>
                <span className="level-tag">Tôn giáo</span>
                <span className="level-tag">Khoa học</span>
                <span className="level-tag">Triết học</span>
              </div>
            </div>
          </div>
        </div>

        {/* Class Nature Card */}
        <div className="icon-card reveal delay-2" style={{ maxWidth: '800px', margin: '2rem auto', textAlign: 'left' }}>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '2.5rem' }}>⚖️</div>
            <div>
              <h4 style={{ margin: '0 0 0.5rem 0' }}>Tính Giai Cấp Của Ý Thức</h4>
              <p>
                Trong xã hội có giai cấp, ý thức xã hội cũng mang tính giai cấp. Tư tưởng của giai cấp thống trị thường là tư tưởng thống trị xã hội, trong khi hệ tư tưởng bị trị phản kháng nhằm lật đổ chế độ bóc lột.
              </p>
            </div>
          </div>
        </div>

        <div className="phan-separator reveal" style={{ margin: '5rem 0' }} />

        {/* --- MỐI QUAN HỆ BIỆN CHỨNG --- */}
        <div className="section-header reveal">
          <span className="section-label">Mối Liên Kết</span>
          <h2>Quan Hệ Biện Chứng</h2>
          <div className="section-divider" />
        </div>

        <div className="dialectic-wrapper reveal delay-1">
          <div className="dialectic-side left">
            <h4 style={{ color: 'var(--gold-pale)' }}>Tồn tại xã hội</h4>
            <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>QUYẾT ĐỊNH</p>
          </div>
          <div className="dialectic-mid">Biện chứng</div>
          <div className="dialectic-side" style={{ background: 'var(--card-bg)' }}>
            <h4 style={{ color: 'var(--brown-dark)' }}>Ý thức xã hội</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>PHẢN ÁNH</p>
          </div>
        </div>

        <div style={{ maxWidth: '850px', margin: '3rem auto' }} className="reveal delay-2">
          <h3 className="font-serif" style={{ textAlign: 'center', marginBottom: '2rem' }}>Tính độc lập tương đối của ý thức</h3>
          
          <div className="ri-list">
            <div className="ri-item">
              <div className="ri-num">01</div>
              <div>
                <strong>Thường lạc hậu hơn:</strong> Do sức mạnh thói quen, truyền thống bảo thủ và sự níu kéo của các lực lượng phản tiến bộ.
              </div>
            </div>
            <div className="ri-item">
              <div className="ri-num">02</div>
              <div>
                <strong>Có thể vượt trước:</strong> Tư tưởng tiến bộ có thể dự báo tương lai và chỉ đạo hoạt động thực tiễn hiệu quả.
              </div>
            </div>
            <div className="ri-item">
              <div className="ri-num">03</div>
              <div>
                <strong>Tính kế thừa:</strong> Các quan điểm lý luận luôn dựa trên việc kế thừa tài sản tinh thần của các thời đại trước.
              </div>
            </div>
            <div className="ri-item">
              <div className="ri-num">04</div>
              <div>
                <strong>Tác động qua lại:</strong> Các hình thái ý thức (chính trị, đạo đức, tôn giáo...) luôn ảnh hưởng lẫn nhau.
              </div>
            </div>
            <div className="ri-item" style={{ borderLeft: '4px solid var(--gold)' }}>
              <div className="ri-num">05</div>
              <div>
                <strong>Tác động trở lại:</strong> Đây là biểu hiện quan trọng nhất. Ý thức tiến bộ thúc đẩy xã hội, ý thức lạc hậu kìm hãm sự phát triển.
              </div>
            </div>
          </div>
        </div>

        {/* Footer Reference */}
        <div style={{ marginTop: '4rem', textAlign: 'center', opacity: 0.5, fontSize: '0.8rem' }} className="reveal">
          <p>Nguồn: Giáo trình Triết học Mác-Lênin (NXB Chính trị quốc gia)</p>
        </div>
      </div>
    </section>
  );
}
