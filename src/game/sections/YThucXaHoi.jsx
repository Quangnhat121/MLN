import ExpandCard from '../../components/ExpandCard';

const LINH_VUC_ITEMS = [
  { e: '🏛️', label: 'Ý thức chính trị' },
  { e: '⚖️', label: 'Ý thức pháp quyền' },
  { e: '❤️', label: 'Ý thức đạo đức' },
  { e: '🎨', label: 'Ý thức thẩm mỹ' },
  { e: '🙏', label: 'Ý thức tôn giáo' },
  { e: '🔬', label: 'Ý thức khoa học' },
  { e: '💡', label: 'Ý thức triết học' },
];

export default function YThucXaHoi() {
  return (
    <section id="y-thuc" style={{ background: 'var(--cream-dark)' }}>
      <div className="page-section">
        {/* Header */}
        <div className="section-header reveal">
          <span className="section-label">Tiết 47 – Phần 3.4.2</span>
          <h2>Ý thức xã hội</h2>
          <div className="section-divider" />
          <p>Kết cấu và tính giai cấp của ý thức xã hội trong chủ nghĩa duy vật lịch sử</p>
        </div>

        {/* Definition */}
        <div className="def-box reveal delay-1">
          <h3>📌 Khái niệm Ý thức xã hội</h3>
          <p>
            Là khái niệm triết học chỉ <strong>các mặt, các bộ phận khác nhau của lĩnh vực
            tinh thần xã hội</strong> như quan điểm, tư tưởng, tình cảm, tâm trạng, truyền
            thống... của một cộng đồng xã hội. Những bộ phận này <em>nảy sinh từ tồn tại xã
            hội và phản ánh tồn tại xã hội</em>.
          </p>
        </div>

        {/* Two-level diagram */}
        <div className="section-header reveal" style={{ marginBottom: '1.2rem' }}>
          <span className="section-label">Xét về trình độ phản ánh</span>
          <h2 style={{ fontSize: '1.6rem' }}>Hai cấp độ của Ý thức xã hội</h2>
          <div className="section-divider" />
        </div>

        <div className="level-diagram reveal">
          <div className="level-column">
            <div className="lc-label">Cấp độ 1 – Thấp hơn</div>
            <h4>🗣️ Tâm lý xã hội<br /><small style={{ fontWeight: 400, fontSize: '0.85rem' }}>(Ý thức thông thường)</small></h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Thể hiện trong ý thức cá nhân, phản ánh <strong>trực tiếp và tự phát</strong>{' '}
              những điều kiện sinh hoạt hằng ngày. Mang tính phong phú, lây lan, đặc trưng
              tâm lý dân tộc.
            </p>
            <div className="level-tags">
              <span className="level-tag">Tình cảm</span>
              <span className="level-tag">Tâm trạng</span>
              <span className="level-tag">Phong tục</span>
              <span className="level-tag">Truyền thống</span>
              <span className="level-tag">Tự phát</span>
            </div>
          </div>

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '0 0.5rem', color: 'var(--gold)', fontSize: '1.8rem',
            flexShrink: 0,
          }}>
            ↕️
          </div>

          <div className="level-column" style={{ borderColor: 'var(--gold)', background: 'linear-gradient(135deg, rgba(201,146,42,0.06), var(--card-bg))' }}>
            <div className="lc-label">Cấp độ 2 – Cao hơn</div>
            <h4>📚 Hệ tư tưởng<br /><small style={{ fontWeight: 400, fontSize: '0.85rem' }}>(Ý thức lý luận)</small></h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
              Giai đoạn phát triển cao hơn, khi tư tưởng được{' '}
              <strong>khái quát hóa, hệ thống hóa</strong> thành các lý thuyết, học thuyết.
              Được xây dựng bởi các nhà tư tưởng chuyên nghiệp.
            </p>
            <div className="level-tags">
              <span className="level-tag">Lý luận</span>
              <span className="level-tag">Học thuyết</span>
              <span className="level-tag">Hệ thống hóa</span>
              <span className="level-tag">Tự giác</span>
            </div>
          </div>
        </div>

        {/* Fields of consciousness */}
        <div className="section-header reveal" style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>
          <span className="section-label">Xét về lĩnh vực phản ánh</span>
          <h2 style={{ fontSize: '1.6rem' }}>7 hình thái Ý thức xã hội</h2>
          <div className="section-divider" />
        </div>

        <div className="card-grid reveal" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))' }}>
          {LINH_VUC_ITEMS.map((item, i) => (
            <div className="icon-card" key={item.label} style={{ animationDelay: `${i * 0.08}s` }}>
              <span className="icon-emoji">{item.e}</span>
              <h4 style={{ fontSize: '0.82rem' }}>{item.label}</h4>
            </div>
          ))}
        </div>

        {/* Class nature */}
        <div className="section-header reveal" style={{ marginTop: '4rem', marginBottom: '1.5rem' }}>
          <span className="section-label">Tính giai cấp</span>
          <h2 style={{ fontSize: '1.6rem' }}>Ý thức xã hội mang tính giai cấp</h2>
          <div className="section-divider" />
        </div>

        <div className="card-grid card-grid-2">
          <ExpandCard title="⚔️ Tư tưởng thống trị" defaultOpen>
            <p>
              Trong xã hội có giai cấp, <strong>tư tưởng thống trị là tư tưởng của giai cấp
              thống trị</strong> – giai cấp nắm phương tiện sản xuất vật chất cũng đồng thời
              nắm phương tiện sản xuất tinh thần. Họ phổ biến tư tưởng đó thành "lẽ phải chung".
            </p>
          </ExpandCard>

          <ExpandCard title="🔥 Tư tưởng bị trị" defaultOpen>
            <p>
              Hệ tư tưởng của <strong>giai cấp bị trị</strong> thường là sự phản kháng nhằm
              lật đổ chế độ bóc lột. Trong xã hội TBCN, giai cấp công nhân xây dựng hệ tư
              tưởng Mác – Lê-nin làm vũ khí lý luận.
            </p>
          </ExpandCard>

          <ExpandCard title="🌐 Ví dụ lịch sử">
            <ul>
              <li>Phong kiến: Tư tưởng Nho giáo phục vụ vua chúa.</li>
              <li>TBCN: Tự do cá nhân, thị trường tự do phục vụ tư sản.</li>
              <li>XHCN: Chủ nghĩa tập thể, vai trò lãnh đạo của Đảng.</li>
            </ul>
          </ExpandCard>

          <ExpandCard title="📝 Ý nghĩa thực tiễn">
            <ul>
              <li>Nhận diện tính giai cấp trong các quan điểm tư tưởng hiện đại.</li>
              <li>Cơ sở đấu tranh bảo vệ hệ tư tưởng tiến bộ.</li>
              <li>Phê phán các quan điểm phản động, lạc hậu.</li>
            </ul>
          </ExpandCard>
        </div>
      </div>

      <div className="phan-separator" />
    </section>
  );
}
