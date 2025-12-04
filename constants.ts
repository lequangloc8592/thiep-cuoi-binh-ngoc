import { TimelineEvent, GalleryImage, EventDetail, FamilyInfo } from './types';

// ==========================================
// THÔNG TIN CƠ BẢN (BASIC INFO)
// ==========================================
export const GROOM_NAME = "An Bình"; // Tên ngắn hiển thị to
export const GROOM_FULL_NAME = "K' Vũ An Bình"; // Tên đầy đủ
export const GROOM_TITLE = "Quý nam";

export const BRIDE_NAME = "Hồng Ngọc"; // Tên ngắn hiển thị to
export const BRIDE_FULL_NAME = "Nguyễn Thị Hồng Ngọc"; // Tên đầy đủ
export const BRIDE_TITLE = "Trưởng nữ";

export const WEDDING_DATE = new Date('2025-12-14T09:00:00'); // Ngày dương lịch chính
export const WEDDING_HASHTAG = "#BinhNgocWedding";

// Ảnh nền to nhất đầu trang
export const HERO_IMAGE_URL = "/img/anh-bia.jpg";

// ==========================================
// THÔNG TIN GIA ĐÌNH (FAMILY INFO)
// ==========================================
export const FAMILY_BRIDE: FamilyInfo = {
  representative: "Ông Bà TRẦN VĂN THỊNH (Bác) - NGUYỄN THỊ THANH HUYỀN",
  address: "182 Tân Thành, Bắc Tân Uyên - TP. Hồ Chí Minh"
};

export const FAMILY_GROOM: FamilyInfo = {
  representative: "Ông Bà K' ĐÉT - VŨ THỊ BẠCH TUYẾT",
  address: "Ấp Trung Hậu, X. Xuân Quế - T. Đồng Nai"
};

// =========================
//  SỰ KIỆN NHÀ GÁI (ĐƠN GIẢN)
// =========================
export const EVENTS_BRIDE = [
  {
    title: "TIỆC CHUNG VUI NHÀ GÁI",
    date: "13",
    month: "12",
    year: "2025",
    weekday: "THỨ BẢY",
    lunarDate: "Tức ngày 24 Tháng 10 Năm Ất Tỵ",
    time: "11:00",
    note: "",
    locationName: "TẠI TƯ GIA NHÀ GÁI",
    address:
      "182 Tân Thành, Bắc Tân Uyên - TP. Hồ Chí Minh",
    mapLink: "https://maps.app.goo.gl/JCcBC9uqqrgEE3xL8"
  }
];


// =========================
//  SỰ KIỆN NHÀ TRAI (ĐƠN GIẢN)
// =========================
export const EVENTS_GROOM = [
  {
    title: "TIỆC CHUNG VUI NHÀ TRAI",
    date: "14",
    month: "12",
    year: "2025",
    weekday: "CHỦ NHẬT",
    lunarDate: "Tức ngày 25 Tháng 10 Năm Ất Tỵ ",
    time: "11:00",
    note: "",
    locationName: " Ấp Trung Hậu, Xã Xuân Quế, Tỉnh Đồng Nai",
    address:
      " Ấp Trung Hậu, Xã Xuân Quế, Tỉnh Đồng Nai",
    mapLink:
      "https://maps.app.goo.gl/CADyyKXpWWkcd9dc9",
  },
];

// ==========================================
// CẤU HÌNH GỬI FORM (RSVP CONFIG)
// ==========================================
export const GOOGLE_SCRIPT_URL = "";

export const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebvlOBnBoUbVQ827gIrpHfoG6JR26j6ipCREKhXLeedYelGg/viewform";

export const GOOGLE_FORM_EMBED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSebvlOBnBoUbVQ827gIrpHfoG6JR26j6ipCREKhXLeedYelGg/viewform?embedded=true";

// ==========================================
// CÂU CHUYỆN TÌNH YÊU (LOVE STORY)
// ==========================================
export const LOVE_STORY: TimelineEvent[] = [
  {
    year: "Khởi Đầu",
    title: "Lần Đầu Bắt Chuyện",
    description: "Tụi mình gặp nhau qua Facebook. Từ ngày 26/11, những tin nhắn đầu tiên bất ngờ trở thành thói quen mỗi ngày — nhẹ nhàng thôi, nhưng đủ khiến hai đứa thấy vui và mong chờ. Thời gian cứ thế trôi qua cho tới ngày 14/12. Tụi mình chọn ở cạnh nhau với tất cả sự tự nhiên và chân thành. Không cần lời hứa lớn lao, chỉ cần cảm giác an yên khi có nhau là đủ.",
    image: "/img/chuyen-tinh-1.jpg"
  },
  {
    year: "Kỷ Niệm",
    title: "Chuyến Đi Đầu Tiên",
    description: "Vũng Tàu là chuyến đi đầu tiên, nơi tụi mình cười nhiều hơn, nói thật lòng hơn và hiểu ra rằng: đi đâu cũng được, chỉ cần đi cùng nhau.",
    image: "/img/chuyen-tinh-2.jpg"
  },
  {
    year: "Đính Ước",
    title: "Một Ngày Đẹp Trời",
    description: "Không pháo hoa, không trang trí cầu kỳ. Chỉ là hai đứa ngồi trong một quán ăn quen, nói chuyện như mọi lần. Vậy mà giữa không gian bình thường nhất, Bình lại lấy ra một chiếc hộp nhỏ. Khoảnh khắc Ngọc nhìn lên, ánh mắt hai đứa gặp nhau, và câu trả lời được nói ra nhẹ như hơi thở — nhưng là quyết định chắc chắn nhất của cả hành trình: tụi mình sẵn sàng để bên nhau trọn đời.",
    image: "/img/chuyen-tinh-3.jpg"
  }
];

// ==========================================
// ALBUM ẢNH (GALLERY)
// ==========================================
export const GALLERY_IMAGES: GalleryImage[] = [
  { url: "/img/album-1.jpg" },
  { url: "/img/album-2.jpg" },
  { url: "/img/album-3.jpg" },
  { url: "/img/album-4.jpg" },
  { url: "/img/album-5.jpg" },
  { url: "/img/album-6.jpg" },
];

// ==========================================
// BANKING (FOR MONEY GIFTS)
// ==========================================
export const BANK_INFO_GROOM = {
  bankName: "vietcombank",
  accountNumber: "1027135490",
  ownerName: "K VU AN BINH",
  qrCodeUrl: "/img/qr-code.jpg"
};

export const BANK_INFO_BRIDE = {
  bankName: "BIDV",
  accountNumber: "0071000123456",
  ownerName: "NGUYEN THI HONG NGOC",
  qrCodeUrl: "/img/qr-code.jpg"
};

// ==========================================
// THÔNG TIN TÀI KHOẢN MỪNG CƯỚI (GIFT_ACCOUNTS)
// ==========================================
export const GIFT_ACCOUNTS = {
  groom: {
    label: "Nhà Trai",
    title: "K VU AN BINH",
    bank: "Vietcombank",
    account: "1027135490",
    qrImage: "/img/qr-groom.png", // đặt file ảnh vào public/img/qr-groom.png
  },
  bride: {
    label: "Nhà Gái",
    title: "NGUYEN THI HONG NGOC",
    bank: "BIDV",
    account: "6514329979",
    qrImage: "/img/qr-bride.png", // đặt file ảnh vào public/img/qr-bride.png
  },
};