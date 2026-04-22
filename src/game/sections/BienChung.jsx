import ExpandCard from '../../components/ExpandCard';

const RI_ITEMS = [
  {
    n: '1',
    title: '⏳ Ý thức thường lạc hậu hơn tồn tại',
    desc: `Nguyên nhân: ý thức chỉ là sự phản ánh; sức mạnh của thói quen, truyền thống
      bảo thủ; những lực lượng phản tiến bộ lưu giữ tư tưởng cũ để chống lại sự tiến bộ.`,
    emoji: '⏳',
  },
  {
    n: '2',
    title: '🚀 Ý thức có thể vượt trước tồn tại',
    desc: `Trong những điều kiện nhất định, tư tưởng con người có thể dự báo được tương lai,
      chỉ đạo hoạt động thực tiễn. Ví dụ: Mác dự báo sự sụp đổ của CNTB từ thế kỷ XIX.`,
    emoji: '🚀',
  },
  {
    n: '3',
    title: '📜 Tính kế thừa trong ý thức xã hội',
    desc: `Các quan điểm lý luận được tạo ra trên cơ sở kế thừa tài liệu lý luận của các
      thời đại trước đó – không có tri thức nào được tạo ra từ con số không.`,
    emoji: '📜',
  },
  {
    n: '4',
    title: '🔗 Tác động qua lại giữa các hình thái',
    desc: `Trong mỗi thời đại, thường có một hình thái ý thức nổi lên hàng đầu và tác động
      mạnh đến các hình thái khác. Ví dụ: Thời kỳ phong kiến – tôn giáo chi phối nghệ thuật,
      triết học.`,
    emoji: '🔗',
  },
  {
    n: '5',
    title: '💥 Tác động trở lại tồn tại xã hội',
    desc: `Biểu hiện quan trọng nhất: Ý thức tiến bộ, cách mạng sẽ THÚC ĐẨY xã hội phát
      triển; ý thức lạc hậu sẽ NGĂN CẢN sự phát triển. Đây là cơ sở để đề cao vai trò lý
      luận trong cách mạng.`,
    emoji: '💥',
  },
];

export default function BienChung() {
  return (
    <section id="bien-chung">
      <div className="page-section">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-label">Tiết 48 – Phần 3.4.3</span>
          <h2>Quan hệ biện chứng</h2>
          <div className="section-divider" />
          <p>
            Mối quan hệ biện chứng giữa Tồn tại xã hội và Ý thức xã hội –<br />
            quyết định và tác động qua lại không tách rời
          </p>
        </div>

        {/* Dialectic diagram */}
        <div className="dialectic-wrapper reveal delay-1">
          <div className="dialectic-side left">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: '0.5rem' }}>
              NỀN TẢNG VẬT CHẤT
            </p>
            <h3 style={{ color: '#fff' }}>🌍 Tồn tại xã hội</h3>
            <p>Điều kiện địa lý, dân số, phương thức sản xuất</p>
            <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(255,255,255,0.1)', borderRadius: '8px' }}>
              <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>
                ⇒ <strong style={{ color: '#fff' }}>Quyết định</strong> nội dung, tính chất,
                xu hướng biến đổi của ý thức xã hội
              </p>
            </div>
          </div>

          <div className="dialectic-mid">⇄ BIỆN CHỨNG ⇄</div>

          <div className="dialectic-side right">
            <p style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
              PHẢN ÁNH & TÁC ĐỘNG
            </p>
            <h3>🧠 Ý thức xã hội</h3>
            <p style={{ color: 'var(--text-muted)' }}>Tâm lý, tư tưởng, học thuyết, văn hóa</p>
            <div style={{ marginTop: '1rem', padding: '0.75rem', background: 'rgba(201,146,42,0.1)', borderRadius: '8px', border: '1px solid rgba(201,146,42,0.2)' }}>
              <p style={{ fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
                ⇒ <strong>Tác động trở lại</strong>: thúc đẩy hoặc kìm hãm sự phát triển
                của tồn tại xã hội
              </p>
            </div>
          </div>
        </div>

        {/* Part A – TSXH quyết định YTXH */}
        <div className="section-header reveal" style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>
          <span className="section-label">Nguyên lý 1</span>
          <h2 style={{ fontSize: '1.6rem' }}>Tồn tại xã hội quyết định Ý thức xã hội</h2>
          <div className="section-divider" />
        </div>

        <div className="card-grid card-grid-2">
          <ExpandCard title="📖 Luận điểm cốt lõi" defaultOpen>
            <ul>
              <li>Ý thức xã hội <strong>ra đời từ</strong> tồn tại xã hội và <strong>phản ánh</strong> tồn tại xã hội.</li>
              <li>Tồn tại xã hội quyết định nội dung, tính chất, đặc điểm và xu hướng biến đổi của ý thức xã hội.</li>
              <li>Khi tồn tại xã hội (nhất là phương thức sản xuất) thay đổi → ý thức xã hội sớm hay muộn cũng thay đổi theo.</li>
            </ul>
          </ExpandCard>

          <ExpandCard title="🌐 Minh chứng lịch sử" defaultOpen>
            <ul>
              <li>🎯 Xã hội phong kiến → tư tưởng đẳng cấp, trung quân ái quốc, Nho giáo thống trị.</li>
              <li>🏭 TBCN → tư tưởng tự do, bình đẳng, nhân quyền.</li>
              <li>🌱 Đổi mới 1986 VN → thay đổi tư duy kinh tế từ kế hoạch hóa sang thị trường.</li>
            </ul>
          </ExpandCard>
        </div>

        {/* Part B – Relative independence */}
        <div className="section-header reveal" style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>
          <span className="section-label">Nguyên lý 2</span>
          <h2 style={{ fontSize: '1.6rem' }}>Tính độc lập tương đối của Ý thức xã hội</h2>
          <div className="section-divider" />
          <p>
            Ý thức xã hội <em>không</em> phụ thuộc máy móc vào tồn tại xã hội mà có đời sống
            riêng và tác động trở lại một cách tích cực
          </p>
        </div>

        <ul className="ri-list">
          {RI_ITEMS.map((item, i) => (
            <li key={item.n} className="ri-item" style={{ animationDelay: `${i * 0.12}s` }}>
              <div className="ri-num">{item.n}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Practical application */}
        <div className="section-header reveal" style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>
          <span className="section-label">Vận dụng</span>
          <h2 style={{ fontSize: '1.6rem' }}>Ý nghĩa lý luận &amp; thực tiễn</h2>
          <div className="section-divider" />
        </div>

        <div className="card-grid card-grid-2">
          <ExpandCard title="🔬 Ý nghĩa lý luận" defaultOpen>
            <ul>
              <li>Khắc phục CNDV tầm thường (chỉ thấy vật chất, phủ nhận vai trò ý thức).</li>
              <li>Khắc phục CNDT (đề cao ý thức tuyệt đối, phủ nhận cơ sở vật chất).</li>
              <li>Phép biện chứng thực sự: <em>vật chất quyết định, ý thức tác động ngược lại</em>.</li>
            </ul>
          </ExpandCard>

          <ExpandCard title="🇻🇳 Thực tiễn Việt Nam" defaultOpen>
            <ul>
              <li>Đổi mới tư duy kinh tế phù hợp giai đoạn phát triển mới.</li>
              <li>Giữ gìn và phát huy bản sắc văn hóa dân tộc trong hội nhập.</li>
              <li>Đấu tranh chống tư tưởng lạc hậu, cơ hội chủ nghĩa.</li>
              <li>Xây dựng hệ tư tưởng Mác – Lê-nin làm nền tảng tinh thần xã hội.</li>
            </ul>
          </ExpandCard>

          <ExpandCard title="🧪 Câu hỏi tự kiểm tra">
            <ul>
              <li>❓ Tại sao nói tồn tại xã hội quyết định ý thức xã hội nhưng ý thức vẫn có vai trò độc lập?</li>
              <li>❓ Phân biệt tâm lý xã hội và hệ tư tưởng qua ví dụ cụ thể.</li>
              <li>❓ Vì sao ý thức xã hội có thể "vượt trước" tồn tại xã hội?</li>
              <li>❓ Liên hệ thực tiễn: Đổi mới 1986 phản ánh quy luật nào?</li>
            </ul>
          </ExpandCard>

          <ExpandCard title="📚 Tài liệu tham khảo">
            <ul>
              <li>Giáo trình Triết học Mác – Lê-nin, NXB Chính trị Quốc gia Sự thật.</li>
              <li>Viện Nghiên cứu con người – Tài liệu hội thảo.</li>
              <li>Tổng cục Chính trị QĐND Việt Nam – Tài liệu nghiên cứu.</li>
            ử lý hững bộ phận này <em>nảy sinh từ tồn tại xã
            hội và phản ánh tồn tại xã hội</em>.
            </ul>
          </ExpandCard>
        </div>

        {/* Summary box */}
        <div className="summary-box reveal">
          <h2>Tổng kết 3 tiết học</h2>
          <p>
            Ba tiết học 46 – 47 – 48 phân tích sâu mối quan hệ giữa vật chất và tinh thần
            trong đời sống xã hội – nền tảng của chủ nghĩa duy vật lịch sử.
          </p>
          <div className="summary-flex">
            <div className="summary-stat">
              <span className="stat-num">3</span>
              <span className="stat-label">Yếu tố cơ bản<br />của Tồn tại XH</span>
            </div>
            <div className="summary-stat">
              <span className="stat-num">2</span>
              <span className="stat-label">Cấp độ<br />Ý thức XH</span>
            </div>
            <div className="summary-stat">
              <span className="stat-num">7</span>
              <span className="stat-label">Hình thái<br />Ý thức XH</span>
            </div>
            <div className="summary-stat">
              <span className="stat-num">5</span>
              <span className="stat-label">Biểu hiện độc lập<br />tương đối</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
