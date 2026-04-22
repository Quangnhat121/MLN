import React from 'react';

const TOOLS = [
  {
    name: 'NotebookLM',
    purpose: 'Tóm tắt slide giáo trình của trường thành các từ khóa, ý chính.',
    human: 'Đối chiếu với giáo trình gốc. Biên tập lại thành câu thoại ngắn gọn. Tự biên soạn lại câu hỏi quiz để đảm bảo độ khó.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
    )
  },
  {
    name: 'Antigravity',
    purpose: 'Gợi ý cú pháp, viết nhanh boilerplate code trong lúc lập trình.',
    human: 'Review toàn bộ logic. Cấu hình các thông số Three.js, xử lý các lỗi tương tác (click, hover, state).',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
    )
  },
  {
    name: 'Tencent 3D',
    purpose: 'Tạo file 3D thô (base mesh) cho các vật thể trong môi trường.',
    human: 'Giảm dung lượng lưới (optimize mesh), gắn texture và cấu hình hiệu ứng ánh sáng trên web.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    )
  },
  {
    name: 'Gemini',
    purpose: 'Tạo hình ảnh 2D, texture bề mặt (VD: vân gỗ, kim loại).',
    human: 'Dùng Photoshop cắt nền, chỉnh màu đồng bộ với thiết kế UI tổng thể của dự án.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    )
  }
];

export const AIUsagePage = () => {
  return (
    <div className="w-full min-h-screen bg-[#0d0705] text-[#ede6d6] pt-32 pb-24 px-6 md:px-12 relative overflow-y-auto flex justify-center">
      
      {/* Background Ornaments */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#1a120d] to-transparent opacity-50 pointer-events-none"></div>

      <div className="max-w-[1000px] w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-4">
          <span className="section-label text-[#c9922a] mb-4 tracking-[0.2em] block uppercase font-['Outfit'] text-xs font-semibold">Phụ Lục Đặc Biệt</span>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl font-medium tracking-wide mb-6">Báo Cáo Ứng Dụng AI</h1>
          <div className="w-24 h-[1px] bg-[#c9922a] mx-auto opacity-40"></div>
          <p className="mt-6 text-[#a39481] font-['Outfit'] font-light max-w-2xl mx-auto leading-relaxed">
            Minh bạch. Liêm chính học thuật. Trách nhiệm tuyệt đối. Báo cáo này định rõ ranh giới giữa sự hỗ trợ của Trí tuệ Nhân tạo và dấu ấn tri thức của con người trong toàn bộ vòng đời phát triển dự án.
          </p>
        </div>

        {/* Cột chính */}
        <div className="grid grid-cols-1 gap-12">
          
          {/* Part 1: Cam Kết Liêm Chính */}
          <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-12 hover:bg-[rgba(255,255,255,0.03)] transition-colors">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#c9922a] block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl tracking-wider" style={{ fontVariantNumeric: "lining-nums" }}>1. Cam Kết Liêm Chính & Trách Nhiệm</h2>
            </div>
            <div className="mb-8 pl-11">
              <span className="text-[#a39481] text-xs font-['Outfit'] italic tracking-wide">(Đáp ứng mục 4.2 & 4.4)</span>
            </div>
            <div className="space-y-6 font-['Outfit'] font-light text-[#b8a996] leading-relaxed">
              <div className="flex flex-col gap-2">
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80">Cam kết cốt lõi</h3>
                <p>Nhóm khẳng định AI chỉ đóng vai trò là trợ lý hỗ trợ xử lý dữ liệu thô. <strong className="text-[#c9922a] font-normal">Không để AI làm thay hoàn toàn.</strong> Sinh viên là người trực tiếp xây dựng logic, thiết kế kiến trúc và quyết định nội dung của sản phẩm cuối cùng.</p>
              </div>
              <div className="w-full h-[1px] bg-[rgba(255,255,255,0.05)] my-2"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80">Kiểm chứng thông tin</h3>
                <p>Mọi nội dung do AI sinh ra (đặc biệt là tóm tắt lý luận chính trị) đều được đối chiếu trực tiếp với <strong className="text-[#ede6d6] font-normal">Giáo trình LLCT chính thống</strong> của trường. Nhóm chịu trách nhiệm 100% về độ chính xác của thông tin.</p>
              </div>
              <div className="w-full h-[1px] bg-[rgba(255,255,255,0.05)] my-2"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80">Phân định rõ ràng</h3>
                <p>AI tạo ra tài nguyên thô (model 3D, text, ảnh). Sinh viên chịu trách nhiệm chỉnh sửa (optimize mesh 3D, cắt gọt nội dung, fix bug code) để tích hợp vào website.</p>
              </div>
            </div>
          </section>

          {/* Part 2: Ứng dụng Sáng tạo */}
          <section className="bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] rounded-[20px] p-8 md:p-12 hover:bg-[rgba(255,255,255,0.03)] transition-colors">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-[#c9922a] block">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
              </span>
              <h2 className="font-['Playfair_Display'] text-2xl tracking-wider" style={{ fontVariantNumeric: "lining-nums" }}>2. Ứng Dụng Sáng Tạo</h2>
            </div>
            <div className="mb-8 pl-11">
              <span className="text-[#a39481] text-xs font-['Outfit'] italic tracking-wide">(Đáp ứng mục 4.3)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 font-['Outfit'] font-light text-[#b8a996] leading-relaxed">
              <div>
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80 mb-3 border-b border-[rgba(255,255,255,0.1)] pb-2 block">Tóm tắt & Kịch bản</h3>
                <p className="text-sm">Dùng AI rút gọn giáo trình đồ sộ thành key-points. Nhóm dựa vào dàn ý đó để <strong>tự viết kịch bản tương tác</strong> và biên soạn bộ câu hỏi trắc nghiệm (quiz).</p>
              </div>
              <div>
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80 mb-3 border-b border-[rgba(255,255,255,0.1)] pb-2 block">Tài nguyên 3D gốc</h3>
                <p className="text-sm">Tự sinh model 3D thô bằng AI (không copy trên mạng). Sau đó, sinh viên tự tay thêm texture, chỉnh sửa ánh sáng để đưa vào môi trường web (Three.js).</p>
              </div>
              <div>
                <h3 className="text-[#ede6d6] font-medium tracking-widest text-[11px] uppercase opacity-80 mb-3 border-b border-[rgba(255,255,255,0.1)] pb-2 block">Pair-Programming</h3>
                <p className="text-sm">AI gợi ý các đoạn code lặp lại (boilerplate). Nhóm nắm giữ phần thiết kế kiến trúc, xử lý luồng dữ liệu (state management) và sửa lỗi logic.</p>
              </div>
            </div>
          </section>

          {/* Part 3: Tool Breakdown */}
          <section className="pt-8">
            <div className="flex flex-col items-center gap-1 mb-10 text-center">
              <h2 className="font-['Playfair_Display'] text-3xl tracking-wider" style={{ fontVariantNumeric: "lining-nums" }}>3. Bảng Phân Định Công Cụ AI</h2>
              <span className="text-[#a39481] text-xs font-['Outfit'] italic tracking-wide mt-2">(Đáp ứng mục 4.1)</span>
            </div>

            <div className="space-y-6">
              {TOOLS.map((tool, idx) => (
                <div key={idx} className="bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.04)] rounded-[16px] p-6 transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon & Name */}
                    <div className="md:w-1/4 flex flex-col items-center md:items-start text-center md:text-left md:border-r border-[rgba(255,255,255,0.05)] pr-4">
                      <div className="text-[#c9922a] bg-[rgba(201,146,42,0.1)] p-3 rounded-full mb-3 inline-block border border-[rgba(201,146,42,0.2)]">
                        {tool.icon}
                      </div>
                      <h3 className="font-['Playfair_Display'] text-xl text-[#ede6d6] tracking-wide">{tool.name}</h3>
                    </div>
                    {/* Details */}
                    <div className="md:w-3/4 flex flex-col sm:flex-row gap-6 font-['Outfit'] font-light">
                      <div className="sm:w-1/2 bg-[rgba(0,0,0,0.2)] rounded-[12px] p-5 border border-[rgba(255,255,255,0.02)]">
                        <span className="text-[#7a6040] text-[10px] uppercase tracking-widest font-medium block mb-3">Vai trò của AI (Input thô)</span>
                        <p className="text-[#a39481] text-sm leading-relaxed">{tool.purpose}</p>
                      </div>
                      <div className="sm:w-1/2 bg-[rgba(201,146,42,0.05)] rounded-[12px] p-5 border border-[rgba(201,146,42,0.1)]">
                        <span className="text-[#c9922a] text-[10px] uppercase tracking-widest font-medium block mb-3 flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                          Sinh viên xử lý (Hoàn thiện)
                        </span>
                        <p className="text-[#ede6d6] text-sm leading-relaxed">{tool.human}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
