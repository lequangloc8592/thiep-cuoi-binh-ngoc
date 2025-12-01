import React, { useState } from "react";
import { GOOGLE_FORM_EMBED_URL, GIFT_ACCOUNTS } from "../constants";

type GiftSide = "groom" | "bride";

const Rsvp: React.FC = () => {
  const [side, setSide] = useState<GiftSide>("groom");

  const activeAccount =
    side === "groom" ? GIFT_ACCOUNTS.groom : GIFT_ACCOUNTS.bride;

  return (
    <section id="rsvp" className="py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* FORM GỬI LỜI NHẮN / RSVP */}
        <div>
          <div className="bg-white/95 rounded-3xl shadow-lg border border-wedding-lightPink/60 p-6 md:p-8 h-full flex flex-col">
            <p className="text-xs tracking-[0.25em] uppercase text-wedding-gray mb-2">
              Gửi lời nhắn
            </p>
            <h2 className="text-xl font-serif text-wedding-darkGray mb-3">
              Xác nhận tham dự & gửi lời chúc
            </h2>
            <p className="text-sm text-wedding-gray mb-5">
              Bạn có thể điền trực tiếp vào mẫu bên dưới. Thông tin sẽ được lưu
              lại an toàn trên Google Sheets để gia đình tiện sắp xếp đón tiếp.
            </p>

            <div className="relative w-full rounded-2xl overflow-hidden border border-wedding-lightPink/70 bg-wedding-lightPink/10 flex-1">
              <iframe
                title="RSVP Form"
                src={GOOGLE_FORM_EMBED_URL}
                className="w-full h-[480px] md:h-full"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                loading="lazy"
              >
                Đang tải…
              </iframe>
            </div>
          </div>
        </div>

        {/* HỘP MỪNG CƯỚI / CHUYỂN KHOẢN */}
        <div>
          <div className="bg-white/95 rounded-3xl shadow-lg border border-wedding-lightPink/60 p-6 md:p-8 h-full flex flex-col">
            {/* Icon + title */}
            <div className="flex flex-col items-center mb-6">
              <div className="w-12 h-12 rounded-full bg-wedding-lightPink/40 flex items-center justify-center mb-3">
                <span className="text-lg">🎁</span>
              </div>
              <h3 className="text-lg md:text-xl font-serif text-wedding-darkGray">
                Hộp Mừng Cưới
              </h3>
              <p className="text-xs text-wedding-gray mt-1">
                Chọn người nhận nếu bạn muốn gửi quà từ xa
              </p>
            </div>

            {/* Tabs Nhà Trai / Nhà Gái */}
            <div className="bg-wedding-lightPink/20 rounded-full p-1 mb-6 flex">
              <button
                type="button"
                onClick={() => setSide("groom")}
                className={`flex-1 text-xs md:text-sm py-2 rounded-full transition-all ${side === "groom"
                    ? "bg-white shadow font-medium text-wedding-darkGray"
                    : "text-wedding-gray"
                  }`}
              >
                {GIFT_ACCOUNTS.groom.label}
              </button>
              <button
                type="button"
                onClick={() => setSide("bride")}
                className={`flex-1 text-xs md:text-sm py-2 rounded-full transition-all ${side === "bride"
                    ? "bg-white shadow font-medium text-wedding-darkGray"
                    : "text-wedding-gray"
                  }`}
              >
                {GIFT_ACCOUNTS.bride.label}
              </button>
            </div>

            {/* QR + thông tin tài khoản */}
            <div className="flex flex-col items-center">
              <div className="w-52 h-52 md:w-56 md:h-56 bg-white rounded-2xl border border-wedding-lightPink/70 flex items-center justify-center overflow-hidden mb-4">
                {activeAccount.qrImage ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={activeAccount.qrImage}
                    alt={`QR ${activeAccount.title}`}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <span className="text-xs text-wedding-gray">
                    Chưa cấu hình ảnh QR
                  </span>
                )}
              </div>

              <div className="text-center">
                <p className="text-xs uppercase tracking-[0.2em] text-wedding-gray mb-1">
                  Người nhận
                </p>
                <p className="text-sm md:text-base font-semibold text-wedding-darkGray mb-1">
                  {activeAccount.title}
                </p>
                <p className="text-sm text-wedding-pink font-mono mb-1">
                  {activeAccount.account}
                </p>
                <p className="text-xs text-wedding-gray mb-4">
                  {activeAccount.bank}
                </p>

                <p className="text-[11px] text-wedding-gray">
                  Bạn có thể quét mã QR hoặc chuyển khoản theo thông tin trên.
                  Xin chân thành cảm ơn tấm lòng của bạn 💗
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rsvp;
