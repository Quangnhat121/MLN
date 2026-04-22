import { useState, useEffect, useRef } from 'react';

/* ═══ CHARACTER PORTRAITS ════════════════════════════ */
const PORTRAITS = {
  minh: '/images/char-minh.png',
  friend_rich: '/images/char-rich.png',
  boss: '/images/char-boss.png',
  friend_hometown: '/images/char-hometown.png',
  boy_que: '/images/boy_que.png',
};

/* ═══ AUDIO ASSETS ══════════════════════════════════ */
const AUDIO = {
  bgm: '/audios/atmospheric-bgm.mp3',
  click: '/audios/click.mp3',
  voices: {
    1: '/audios/v-ch1.mp3',
    2: '/audios/v-ch2.mp3',
    3: '/audios/v-ch3.mp3',
    4: '/audios/v-ch4.mp3',
  }
};

const SCENARIOS = [
  {
    id: 1, act: 'CHƯƠNG 1', title: 'Minh của ngày đầu', tag: '🏠 Ký túc xá - Tuần 1',
    image: '/images/bg-dorm.png',
    voice: AUDIO.voices[1],
    ambient: '/audios/city-ambient.mp3',
    context: 'Ký túc xá, tuần đầu nhập học. Tiếng xe cộ ồn ào ngoài cửa sổ. Minh vừa lên thành phố. Phòng trọ chật, tiền ít, nhưng lòng đầy hào hứng với cuộc sống sinh viên.',
    character: { name: 'Thành (Bạn cùng phòng)', portrait: 'friend_rich', side: 'right', pitch: 1.8, rate: 1.2 },
    dialogue: '"Nay đi quán cà phê "hot trend" đắt tiền để check-in đi Minh! Chỗ này mới nổi, chỉ khoảng 100k một ly thôi. Quẩy đi!"',
    choices: [
      { 
        label: 'A', text: '"Mình gọi nước lọc thôi, tụi bạn cứ uống vui vẻ nhé."', 
        type: 'integrity',
        resultTitle: 'Minh vẫn là Minh', 
        result: 'Bạn cười xòa, sống đúng với hoàn cảnh của mình. Lòng nhẹ nhõm dù ví tiền eo hẹp.', 
        concept: 'Tồn tại xã hội quyết định Ý thức', 
        score: 50
      },
      { 
        label: 'B', text: 'Mở app vay tạm tiền mua ly nước đắt nhất để chụp ảnh cùng mọi người', 
        type: 'change',
        resultTitle: 'Bắt đầu chạy theo hình thức', 
        result: 'Ly nước lung linh trên ảnh, nhưng gánh nặng nợ nần bắt đầu nhen nhóm. Minh bắt đầu bị cuốn vào lối sống thành thị.', 
        concept: 'Thay đổi Tồn tại xã hội', 
        score: 10
      },
    ],
    secret: { 
      x: '75%', y: '40%', 
      title: 'Mẩu giấy trên bàn học', 
      content: '“Trong tiết học đầu tiên, thầy giáo đã nói: Ý thức không phải là cái gì tự nhiên có, nó được nhào nặn bởi chính những ly cà phê bạn uống, những bộ đồ bạn mặc và những người bạn chơi cùng.”' 
    }
  },
  {
    id: 2, act: 'CHƯƠNG 2', title: 'Môi trường bắt đầu "thấm"', tag: '💼 Công ty thực tập - 6 tháng sau',
    image: '/images/bg-office.png',
    voice: AUDIO.voices[2],
    ambient: '/audios/office-ambient.mp3',
    context: '6 tháng sau. Minh lọt vào nhóm bạn "rich kid" và thực tập tại một công ty lớn. Ánh đèn văn phòng sáng chói. Xung quanh toàn đồ hiệu và những câu chuyện về "vốn liếng", "quan hệ".',
    character: { name: 'Sếp (Giám đốc)', portrait: 'boss', side: 'right', pitch: 0.5, rate: 0.8 },
    dialogue: '"Minh này, em chỉnh sửa báo cáo doanh thu "đẹp" hơn thực tế một chút nhé. Để dễ lùa khách hàng ký hợp đồng lớn ấy mà. Sếp bảo kê rồi, không ai phát hiện đâu!"',
    choices: [
      { 
        label: 'A', text: 'Từ chối khéo, nộp đúng số liệu thật', 
        type: 'integrity',
        resultTitle: 'Giữ vững lương tâm', 
        result: 'Sếp không hài lòng, nhưng bạn thấy thanh thản vì không làm trái lương tâm. Minh vẫn đang cố gắng giữ mình.', 
        concept: 'Tính độc lập tương đối của Ý thức', 
        score: 50 
      },
      { 
        label: 'B', text: 'Tặc lưỡi sửa một chút — "Chỉ là cách trình bày thôi mà"', 
        type: 'adaptation',
        resultTitle: 'Sự thỏa hiệp', 
        result: 'Bạn tự nhủ chỉ là một chút thôi. Nhưng sự trung thực bắt đầu bị lung lay trước áp lực công việc.', 
        concept: 'Sự đồng hóa của ý thức', 
        score: 30 
      },
      { 
        label: 'C',  text: 'Chủ động "vẽ" thêm số liệu cho mượt', 
        type: 'change',
        resultTitle: 'Thương trường là chiến trường', 
        result: 'Bạn nhận được lời khen từ sếp. Minh đã bắt đầu chấp nhận luật chơi thực dụng của xã hội mới.', 
        concept: 'Tồn tại xã hội quyết định Ý thức', 
        score: 10
      },
    ],
    secret: { 
      x: '20%', y: '30%', 
      title: 'Ghi chú trên tập hồ sơ', 
      content: '“Sếp luôn nói về doanh số, nhưng đằng sau những con số đó là sự tha hóa của con người. Marx từng cảnh báo: Khi vật chất trở thành mục đích tự thân, con người chỉ còn là công cụ.”' 
    }
  },
  {
    id: 3, act: 'CHƯƠNG 2', title: 'Tiếng vọng từ quá khứ', tag: '📱 Tin nhắn từ quê nhà',
    image: '/images/bg-cafe.png',
    voice: AUDIO.voices[3],
    ambient: '/audios/rain-ambient.mp3',
    weather: 'rain',
    context: 'Tối đó về nhà, người bạn thân cởi trần tắm mưa ngày xưa ở quê nhắn tin mượn một ít tiền đóng học phí gấp vì gia đình gặp chuyện.',
    character: { name: 'Tùng (Bạn ở quê)', portrait: 'boy_que', side: 'left', pitch: 1.0, rate: 0.9 },
    dialogue: '"Minh ơi, nhà tớ kẹt quá. Cậu cho tớ mượn một ít nộp học phí được không? Tớ sẽ cố gắng trả sớm..."',
    choices: [
      { 
        label: 'A', text: 'Chuyển khoản ngay phần lớn số tiền mình có', 
        type: 'integrity',
        resultTitle: 'Tình bạn xuyên thời gian', 
        result: 'Dù bản thân cũng đang kẹt tiền nhà, bạn vẫn ưu tiên người bạn cũ. Minh vẫn còn đó nét chân thành ngày nào.', 
        concept: 'Bản chất con người', 
        score: 50 
      },
      { 
        label: 'B',  text: '"Để cuối tháng mình có lương rồi tính nhé"', 
        type: 'adaptation',
        resultTitle: 'Sự ưu tiên mới', 
        result: 'Trong tài khoản vẫn dư dả, nhưng bạn chọn cách trì hoãn. Minh đã bắt đầu tính toán hơn cho lợi ích cá nhân.', 
        concept: 'Sự tha hóa nhẹ', 
        score: 30 
      },
      { 
        label: 'C',  text: 'Đọc tin nhắn (Seen) nhưng… lờ đi không trả lời', 
        type: 'change',
        resultTitle: 'Quen với hào nhoáng', 
        result: 'Bạn tiếp tục lướt xem ảnh du lịch của đồng nghiệp và quên hẳn tin nhắn. Minh đã thực sự đổi thay.', 
        concept: 'Hoàn thiện tha hóa', 
        score: 0 
      },
    ],
  },
  {
    id: 4, act: 'CHƯƠNG 3', title: 'Nhìn lại gương', tag: '🏢 Cuối năm thứ 2',
    image: '/images/bg-office.png',
    voice: AUDIO.voices[4],
    ambient: '/audios/office-ambient.mp3',
    context: 'Cuối năm 2. Minh nay đã có mức thu nhập tốt, khoác lên người những bộ đồ đắt tiền, chính thức hòa nhập vào nhóm "elite" của trường.',
    character: { name: 'Bảo (Người bạn cũ)', portrait: 'friend_hometown', side: 'left', pitch: 1.5, rate: 1.1 },
    dialogue: '"Anh Minh ơi, sếp bảo không thích dân tỉnh lẻ lúa lúa, đưa em vào sẽ làm thấp giá trị kỳ thực tập của anh. Anh có thể nói đỡ giúp em được không?"',
    choices: [
      { 
        label: 'A', text: 'Dõng dạc bảo vệ bạn mình và rút đơn nếu cần', 
        type: 'integrity',
        resultTitle: 'Thức tỉnh', 
        result: 'Bạn dám bước ra để xây dựng một con đường mới tôn trọng giá trị con người. Ý thức đã chiến thắng hoàn cảnh.', 
        concept: 'Sự giác ngộ ý thức', 
        score: 60 
      },
      { 
        label: 'B',  text: '"Để mình hỏi thử sếp xem sao" rồi… im lặng phớt lờ', 
        type: 'adaptation',
        resultTitle: 'Sự hèn nhát thầm lặng', 
        result: 'Bạn sợ hỏng tiền đồ cá nhân nên đã chọn cách im lặng. Minh nay đã hoàn toàn thỏa hiệp với thực tại.', 
        concept: 'Sự giằng xé', 
        score: 20 
      },
      { 
        label: 'C',  text: '"Bạn nên tự nộp CV đi, chỗ này chỉ tuyển người profile đẹp thôi"', 
        type: 'change',
        resultTitle: 'Sự trôi dạt hoàn toàn', 
        result: 'Bạn nhìn người bạn cũ bằng ánh mắt kẻ cả. Minh trong gương giờ đã là một người hoàn toàn khác.', 
        concept: 'Tha hóa hoàn toàn', 
        score: 0 
      },
    ],
  },
];

/* ═══ COMPONENTS ══════════════════════════════════════ */

function TransparentSprite({ portraitKey, side, speaking }) {
  const src = PORTRAITS[portraitKey];
  const canvasRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i], g = data[i+1], b = data[i+2];
        if (r < 35 && g < 35 && b < 35) data[i+3] = 0;
      }
      ctx.putImageData(imageData, 0, 0);
    };
  }, [src]);

  const positioning = side === 'left' 
    ? { left: '2%', transform: speaking ? 'translateY(-20px) scale(1.05)' : 'scale(1)' } 
    : { right: '2%', transform: speaking ? 'translateY(-20px) scale(1.05)' : 'scale(1)' };

  return (
    <div style={{
      position: 'absolute', bottom: 0, height: '80vh', zIndex: speaking ? 100 : 90,
      transition: 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
      filter: speaking ? 'brightness(1.1) drop-shadow(0 0 30px rgba(255,255,255,0.2))' : 'brightness(0.7) grayscale(0.2)',
      ...positioning
    }}>
      <canvas ref={canvasRef} style={{ height: '100%', width: 'auto', display: 'block', objectFit: 'contain' }} />
      {speaking && (
        <div style={{ 
          position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)',
          background: 'gold', color: '#000', padding: '8px 25px', borderRadius: 20,
          fontSize: 12, fontWeight: 900, whiteSpace: 'nowrap', boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          animation: 'fadeUp 0.3s ease both', zIndex: 110
        }}>
          ĐANG NÓI...
        </div>
      )}
    </div>
  );
}

function RainEffect() {
  const drops = useRef(Array.from({ length: 150 }, (_, i) => ({
    id: i, left: Math.random() * 100, delay: Math.random() * 2, duration: 0.5 + Math.random() * 0.5, opacity: 0.1 + Math.random() * 0.3
  })));
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 10, overflow: 'hidden' }}>
      {drops.current.map(d => (
        <div key={d.id} style={{
          position: 'absolute', top: -20, left: `${d.left}%`, width: 1, height: 20,
          background: '#fff', opacity: d.opacity, animation: `rain-fall ${d.duration}s ${d.delay}s linear infinite`
        }} />
      ))}
      <style>{`@keyframes rain-fall { to { transform: translateY(100vh); } }`}</style>
    </div>
  );
}

function ActTransition({ act, title, quote, onDone }) {
  useEffect(() => {
    const timer = setTimeout(onDone, 2500);
    return () => clearTimeout(timer);
  }, [onDone]);
  return (
    <div onClick={onDone} style={{ position: 'fixed', inset: 0, zIndex: 5000, background: '#000', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40, cursor: 'pointer' }}>
      <p style={{ color: 'gold', fontSize: 13, fontWeight: 900, letterSpacing: 5, marginBottom: 15, animation: 'fadeUp 0.8s ease both' }}>{act.toUpperCase()}</p>
      <h1 style={{ fontSize: 40, fontWeight: 900, color: '#fff', marginBottom: 30, animation: 'fadeUp 1s 0.2s ease both' }}>{title}</h1>
      <p style={{ fontSize: 16, fontStyle: 'italic', color: 'rgba(255,255,255,0.6)', maxWidth: 550 }}>{quote}</p>
      <div style={{ position: 'absolute', bottom: 40, fontSize: 8, color: 'rgba(255,255,255,0.2)', letterSpacing: 3 }}>CLICK TO SKIP</div>
    </div>
  );
}

function StarField({ driftLevel }) {
  const stars = useRef(Array.from({ length: 120 }, (_, i) => ({
    id: i, x: Math.random() * 100, y: Math.random() * 100, size: 1 + Math.random() * 2, dur: 5 + Math.random() * 10, delay: Math.random() * 5
  })));
  const starColor = driftLevel > 70 ? 'rgba(255, 50, 50, 0.6)' : driftLevel > 40 ? 'rgba(255, 255, 255, 0.7)' : 'rgba(74, 222, 128, 0.6)';
  return (
    <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
      {stars.current.map(s => (
        <div key={s.id} style={{ position: 'absolute', left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size, background: starColor, borderRadius: '50%', boxShadow: `0 0 10px ${starColor}`, animation: `twinkle ${s.dur}s ${s.delay}s infinite alternate` }} />
      ))}
    </div>
  );
}

function SoundControl({ muted, setMuted }) {
  return (
    <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 1000 }}>
      <button onClick={() => setMuted(!muted)} style={{ background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', padding: '10px', borderRadius: '50%', cursor: 'pointer', width: 45, height: 45 }}>{muted ? '🔇' : '🔊'}</button>
    </div>
  );
}

function ConsciousnessMeter({ level }) {
  return (
    <div style={{ position: 'absolute', top: 30, left: 30, width: '220px', zIndex: 1000 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: 8, fontWeight: 900, color: 'rgba(255,255,255,0.4)', letterSpacing: 2 }}>
        <span style={{ color: level < 40 ? '#4ade80' : 'inherit' }}>BẢN NGÃ</span>
        <span style={{ color: level > 70 ? '#f87171' : 'inherit' }}>THA HÓA</span>
      </div>
      <div style={{ height: 4, width: '100%', background: 'rgba(255,255,255,0.05)', borderRadius: 10, overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
        <div style={{ height: '100%', width: `${level}%`, background: `linear-gradient(to right, #4ade80, gold, #f87171)`, transition: 'width 1.5s ease' }} />
      </div>
    </div>
  );
}

/* ═══ MAIN APP ════════════════════════════════════════ */

export default function GearOfEra() {
  const [phase, setPhase] = useState('cinematic');
  const [idx, setIdx] = useState(0);
  const [picked, setPicked] = useState(null);
  const [counts, setCounts] = useState({ integrity: 0, adaptation: 0, change: 0 });
  const [muted, setMuted] = useState(false);
  const [driftLevel, setDriftLevel] = useState(50);
  const [shouldShake, setShouldShake] = useState(false);
  const [isGlitching, setIsGlitching] = useState(false);
  const [achievement, setAchievement] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [showTransition, setShowTransition] = useState(false);

  const actQuotes = {
    1: "“Tồn tại xã hội quyết định ý thức của con người.”",
    2: "“Trong xã hội tư bản, vật chất trở thành quyền lực thống trị con người.”",
    3: "“Con người tạo ra hoàn cảnh nhiều như hoàn cảnh tạo ra con người.”",
    4: "“Mục tiêu là cải tạo thế giới, chứ không chỉ là giải thích nó.”"
  };

  const handleMouseMove = (e) => {
    setMouse({ x: (e.clientX / window.innerWidth - 0.5) * 30, y: (e.clientY / window.innerHeight - 0.5) * 30 });
  };

  const ambientRef = useRef(null);
  useEffect(() => {
    if (!muted && SCENARIOS[idx].ambient) {
      if (ambientRef.current) ambientRef.current.pause();
      ambientRef.current = new Audio(SCENARIOS[idx].ambient);
      ambientRef.current.loop = true;
      ambientRef.current.volume = 0.3;
      ambientRef.current.play().catch(() => { });
    }
    return () => { if (ambientRef.current) ambientRef.current.pause(); };
  }, [idx, muted, phase]);

  const handleChoice = (i) => {
    if (!muted) new Audio(AUDIO.click).play().catch(() => { });
    const c = SCENARIOS[idx].choices[i]; 
    setPicked(i);
    setCounts(prev => ({ ...prev, [c.type]: prev[c.type] + 1 }));
    
    if (c.type === 'integrity') {
      setDriftLevel(l => Math.max(0, l - 15));
      setAchievement("🌟 QUYẾT ĐỊNH CHÍNH TRỰC");
    }
    if (c.type === 'change') {
      setDriftLevel(l => Math.min(100, l + 20));
      setShouldShake(true); setIsGlitching(true);
      setAchievement("🥀 BẮT ĐẦU THA HÓA");
      setTimeout(() => { setShouldShake(false); setIsGlitching(false); }, 500);
    }
    if (c.type === 'adaptation') {
      setDriftLevel(l => Math.min(100, l + 10));
      setAchievement("⚖️ SỰ THỎA HIỆP");
    }

    setTimeout(() => { setPhase('result'); setAchievement(null); }, 1200);
  };

  const parallax = { bg: { x: mouse.x * 0.5, y: mouse.y * 0.5 }, sprite: { x: mouse.x * -1, y: mouse.y * -1 } };

  return (
    <div onMouseMove={handleMouseMove} style={{ position: 'relative', width: '100%', height: '100vh', background: '#050505', color: '#fff', overflow: 'hidden', fontFamily: "'Be Vietnam Pro', sans-serif" }} className={`${shouldShake ? 'shake-effect' : ''} ${driftLevel > 75 ? 'stress-pulse' : ''} ${isGlitching ? 'glitch-active' : ''}`}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@100;300;400;600;900&display=swap');
        @keyframes twinkle { from { opacity: 0.1 } to { opacity: 1 } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px) } to { opacity: 1; transform: translateY(0) } }
        @keyframes shake { 0%, 100% { transform: translate(0, 0); } 25% { transform: translate(-5px, 5px); } 50% { transform: translate(5px, -5px); } 75% { transform: translate(-5px, -5px); } }
        .shake-effect { animation: shake 0.4s cubic-bezier(.36,.07,.19,.97) both; }
        @keyframes heartbeat { 0% { transform: scale(1); } 50% { transform: scale(1.02); } 100% { transform: scale(1); } }
        .stress-pulse { animation: heartbeat 1s infinite ease-in-out; }
        @keyframes glitch { 0% { transform: translate(0) } 20% { transform: translate(-5px, 5px) skewX(5deg); filter: hue-rotate(90deg); } 40% { transform: translate(5px, -5px) skewY(-5deg); filter: hue-rotate(180deg); } 60% { transform: translate(-3px, 3px); filter: brightness(2); } 100% { transform: translate(0) } }
        .glitch-active { animation: glitch 0.3s ease infinite; }
        .bg-blur { filter: blur(10px) brightness(0.4) !important; transition: 1s; }
        .achievement-card { position: absolute; top: 100px; left: 30px; background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-left: 4px solid gold; padding: 10px 20px; border-radius: 8px; animation: fadeUp 0.5s ease both; z-index: 2000; }
      `}</style>

      <StarField driftLevel={driftLevel} />
      <SoundControl muted={muted} setMuted={setMuted} />
      {phase === 'game' && !showTransition && <ConsciousnessMeter level={driftLevel} />}
      {showTransition && <ActTransition act={SCENARIOS[idx].act} title={SCENARIOS[idx].title} quote={actQuotes[idx + 1]} onDone={() => setShowTransition(false)} />}
      {achievement && <div className="achievement-card"><span style={{ fontSize: 10, color: 'gold', fontWeight: 900, display: 'block' }}>DANH HIỆU</span><span style={{ fontSize: 14, fontWeight: 900 }}>{achievement}</span></div>}

      <div style={{ height: '100%', position: 'relative' }}>
        {phase === 'cinematic' && <Cinematic onDone={() => setPhase('rules')} />}
        {phase === 'rules' && <RulesScreen onStart={() => setPhase('game')} />}
        {phase === 'game' && <GameScreen scenario={SCENARIOS[idx]} onChoice={handleChoice} muted={muted} parallax={parallax} />}
        {phase === 'result' && <ResultScreen choice={SCENARIOS[idx].choices[picked]} onNext={() => { if (idx + 1 < SCENARIOS.length) { setIdx(idx + 1); setPhase('game'); setShowTransition(true); } else setPhase('end'); }} />}
        {phase === 'end' && <EndScreen counts={counts} onRestart={() => window.location.reload()} />}
      </div>
    </div>
  );
}

function Cinematic({ onDone }) {
  const [displayText, setDisplayText] = useState('');
  const fullText = "DRIFT — Khi đời sống đổi thay. Minh, một sinh viên tỉnh lẻ lên thành phố với trái tim chân phương. Nhưng giữa dòng xoáy hào nhoáng của vật chất và danh vọng, liệu Minh có giữ được chính mình?";
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => { i++; setDisplayText(fullText.slice(0, i)); if (i >= fullText.length) clearInterval(t); }, 40);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
      <h1 style={{ fontSize: 60, fontWeight: 900, color: 'gold', marginBottom: 30, letterSpacing: 10, animation: 'fadeUp 1s ease both' }}>DRIFT</h1>
      <p style={{ fontSize: 20, color: '#ccc', maxWidth: 700, fontStyle: 'italic' }}>{displayText}</p>
      {displayText.length >= fullText.length && <button onClick={onDone} style={{ marginTop: 40, padding: '18px 60px', background: 'gold', border: 'none', borderRadius: 50, fontWeight: 900, cursor: 'pointer' }}>BƯỚC VÀO →</button>}
    </div>
  );
}

function RulesScreen({ onStart }) {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
      <div style={{ maxWidth: 500, background: 'rgba(255,255,255,0.02)', padding: 50, borderRadius: 30, border: '1px solid rgba(255,255,255,0.1)' }}>
        <h2 style={{ color: 'gold', marginBottom: 20 }}>LUẬT CHƠI</h2>
        <p style={{ color: '#aaa', marginBottom: 30 }}>Mỗi lựa chọn của bạn sẽ tác động đến Ý thức của Minh theo quy luật tồn tại xã hội. Hãy cân nhắc kỹ.</p>
        <button onClick={onStart} style={{ padding: '15px 50px', background: 'gold', border: 'none', borderRadius: 10, fontWeight: 900, cursor: 'pointer' }}>BẮT ĐẦU</button>
      </div>
    </div>
  );
}

function GameScreen({ scenario, onChoice, muted, parallax }) {
  const [step, setStep] = useState('context');
  const [displayText, setDisplayText] = useState('');
  const [showSecret, setShowSecret] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const typingTimer = useRef(null);

  const startDialogue = () => {
    setStep('dialogue');
    setIsTyping(true);
    let i = 0;
    setDisplayText('');
    
    if (typingTimer.current) clearInterval(typingTimer.current);
    
    typingTimer.current = setInterval(() => {
      i++;
      setDisplayText(scenario.dialogue.slice(0, i));
      if (i >= scenario.dialogue.length) {
        clearInterval(typingTimer.current);
        setIsTyping(false);
        // Only auto-show choices if not using TTS or if TTS is very short
        if (muted) setTimeout(() => setStep('choices'), 1000);
      }
    }, 40);

    if (!muted) {
      window.speechSynthesis.cancel();
      const ut = new SpeechSynthesisUtterance(scenario.dialogue);
      ut.lang = 'vi-VN';
      ut.pitch = scenario.character.pitch;
      ut.rate = scenario.character.rate;
      ut.onend = () => {
        // Voice finished, now we can safely show choices
        setStep('choices'); 
      };
      window.speechSynthesis.speak(ut);
    }
  };

  const skipTyping = () => {
    if (isTyping) {
      clearInterval(typingTimer.current);
      setDisplayText(scenario.dialogue);
      setIsTyping(false);
      if (muted) setStep('choices');
    }
  };

  useEffect(() => {
    return () => {
      if (typingTimer.current) clearInterval(typingTimer.current);
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div style={{ height: '100%', position: 'relative' }} onClick={step === 'dialogue' ? skipTyping : null}>
      {scenario.weather === 'rain' && <RainEffect />}
      <div style={{ position: 'absolute', inset: '-50px', backgroundImage: `url(${scenario.image})`, backgroundSize: 'cover', backgroundPosition: 'center', filter: step === 'choices' ? 'blur(10px) brightness(0.3)' : 'brightness(0.4)', transform: `translate(${parallax.bg.x}px, ${parallax.bg.y}px)`, transition: 'all 1s' }} />
      {step === 'context' && (
        <div style={{ position: 'relative', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0,0,0,0.8)' }}>
          <div style={{ maxWidth: 600, textAlign: 'center', animation: 'fadeUp 1s ease' }}>
            <h2 style={{ color: 'gold', marginBottom: 20 }}>{scenario.title}</h2>
            <p style={{ lineHeight: 1.8, marginBottom: 40 }}>{scenario.context}</p>
            <button onClick={startDialogue} style={{ padding: '15px 50px', background: 'gold', border: 'none', borderRadius: 50, fontWeight: 900, cursor: 'pointer' }}>TIẾP TỤC</button>
          </div>
        </div>
      )}

      {(step === 'dialogue' || step === 'choices') && (
        <>
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 80, transform: `translate(${parallax.sprite.x}px, ${parallax.sprite.y}px)`, transition: '0.1s' }}>
            <TransparentSprite portraitKey={scenario.character.portrait} side={scenario.character.side} speaking={step === 'dialogue'} />
            <TransparentSprite portraitKey="minh" side={scenario.character.side === 'left' ? 'right' : 'left'} speaking={step === 'choices'} />
          </div>
          <div style={{ position: 'absolute', bottom: 50, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 100 }}>
            <div style={{ maxWidth: 800, textAlign: 'center', marginBottom: step === 'choices' ? 30 : 50 }}>
              <p style={{ color: 'gold', fontSize: 12, fontWeight: 900, marginBottom: 5 }}>{scenario.character.name}:</p>
              <p style={{ fontSize: 24, fontWeight: 600 }}>{displayText}</p>
            </div>
            {step === 'choices' && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', maxWidth: 500 }}>
                {scenario.choices.map((c, i) => (
                  <button key={i} onClick={() => onChoice(i)} style={{ padding: '15px 25px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 15, color: '#fff', cursor: 'pointer', textAlign: 'left' }}>{c.text}</button>
                ))}
              </div>
            )}
          </div>
        </>
      )}

      {scenario.secret && step === 'dialogue' && (
        <div onClick={() => setShowSecret(true)} style={{ position: 'absolute', left: scenario.secret.x, top: scenario.secret.y, width: 20, height: 20, background: 'gold', borderRadius: '50%', cursor: 'pointer', boxShadow: '0 0 10px gold' }} />
      )}

      {showSecret && (
        <div onClick={() => setShowSecret(false)} style={{ position: 'absolute', inset: 0, zIndex: 2000, background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: 40 }}>
          <div style={{ maxWidth: 400, border: '1px solid gold', padding: 30, borderRadius: 20 }}>
            <h3 style={{ color: 'gold', marginBottom: 15 }}>{scenario.secret.title}</h3>
            <p>{scenario.secret.content}</p>
          </div>
        </div>
      )}
    </div>
  );
}

function ResultScreen({ choice, onNext }) {
  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'rgba(0,0,0,0.95)' }}>
      <div style={{ maxWidth: 600, padding: 40 }}>
        <h2 style={{ color: 'gold', marginBottom: 20 }}>{choice.resultTitle}</h2>
        <p style={{ marginBottom: 40, lineHeight: 1.6 }}>{choice.result}</p>
        <button onClick={onNext} style={{ padding: '15px 50px', background: '#fff', color: '#000', border: 'none', borderRadius: 50, fontWeight: 900, cursor: 'pointer' }}>TIẾP TỤC</button>
      </div>
    </div>
  );
}

function EndScreen({ counts, onRestart }) {
  let title = "🌟 KẾT CỤC 1: VẪN LÀ MÌNH";
  let message = "Nhận diện được sự độc hại của môi trường, Minh không chỉ giữ được bản ngã mà còn dám bước ra để xây dựng một con đường mới. Ý thức đã chiến thắng hoàn cảnh.";
  let card = "Ý thức xã hội có tính độc lập tương đối. Sự giác ngộ giúp con người không đầu hàng hoàn cảnh vật chất, mà quay lại hành động để cải tạo thực tại.";
  let color = "#4ade80";

  if (counts.adaptation + counts.change >= 3) {
    title = "🥀 KẾT CỤC 3: MINH ĐÃ TRÔI";
    message = "Không có quyết định sinh tử nào đánh gục ta — chỉ là ngàn lần ta tự động buông tay trước mãnh lực của đồng tiền và danh vọng. Minh trong gương giờ đã là một người khác.";
    card = "Không phải ý thức quyết định đời sống mà chính đời sống quyết định ý thức. Ý thức xã hội thường lạc hậu hơn tồn tại xã hội. Ta dễ dàng tha hóa bản ngã trước khi kịp nhận ra môi trường vật chất xung quanh đã hoàn toàn đổi thay.";
    color = "#f87171";
  } else if (counts.integrity < 3) {
    title = "⚖️ KẾT CỤC 2: MINH ĐANG GIỮA DÒNG";
    message = "Phần lớn chúng ta đều ở đây — không hoàn toàn mất đi bản ngã trong sáng cũ, nhưng cũng đã dần thỏa hiệp và quen thuật với sự thực dụng của thực tại mới.";
    card = "Sự giằng xé giữa tàn dư của tư duy cũ và hoàn cảnh vật chất mới. Ý thức chưa hoàn toàn bị đồng hóa, nhưng cũng chưa đủ sức mạnh để thay đổi tồn tại xã hội.";
    color = "gold";
  }

  return (
    <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', background: 'radial-gradient(circle, #1a1a1a 0%, #000 100%)' }}>
      <div style={{ animation: 'fadeUp 1s ease both', maxWidth: 800, padding: 40 }}>
        <h2 style={{ fontSize: 22, color: '#9ca3af', marginBottom: 20, letterSpacing: 4 }}>KẾT THÚC HÀNH TRÌNH</h2>
        <div style={{ fontSize: 48, fontWeight: 900, color: color, textShadow: `0 0 40px ${color}33`, lineHeight: 1.2, marginBottom: 30 }}>{title}</div>
        <p style={{ fontSize: 22, lineHeight: 1.8, color: '#d1d5db', marginBottom: 50, fontStyle: 'italic', background: 'rgba(255,255,255,0.03)', padding: 30, borderRadius: 20 }}>"{message}"</p>
        
        <div className="marx-card" style={{ padding: '30px', textAlign: 'left', borderLeft: `8px solid ${color}`, background: 'rgba(0,0,0,0.5)', marginBottom: 50 }}>
          <p style={{ color: 'gold', fontWeight: 900, fontSize: 13, marginBottom: 15, letterSpacing: 2 }}>🃏 GÓC NHÌN CỦA MARX</p>
          <p style={{ fontSize: 18, lineHeight: 1.6, color: '#fff' }}>"{card}"</p>
        </div>

        <button onClick={onRestart} style={{ padding: '18px 70px', background: 'gold', color: '#000', border: 'none', borderRadius: 50, fontWeight: 900, cursor: 'pointer', boxShadow: '0 10px 40px rgba(212,175,55,0.3)', fontSize: 18 }}>CHƠI LẠI</button>
      </div>
    </div>
  );
}