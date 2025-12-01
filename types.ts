export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface GalleryImage {
  url: string;
  caption?: string;
}

export interface EventDetail {
  title: string;
  time: string;
  date: string;
  lunarDate?: string;
  locationName: string;
  address: string;
  mapLink: string;
  note?: string; // Ví dụ: Đón khách, Khai tiệc
}

export interface FamilyInfo {
  representative: string;
  address: string;
  fatherName?: string;
  motherName?: string;
}