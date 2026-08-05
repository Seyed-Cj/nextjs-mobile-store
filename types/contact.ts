export interface ContactCardItem {
  id: string;
  iconName: "phone" | "whatsapp" | "email" | "address";
  title: string;
  value: string;
  secondaryText: string;
  href?: string;
}

export interface ScheduleItem {
  days: string;
  hours: string;
}

export interface BottomInfoCardItem {
  id: string;
  iconName: "clock" | "headphones" | "store";
  title: string;
  content: {
    type: "schedule" | "text";
    schedule?: ScheduleItem[];
    text?: string;
  };
}

export interface ContactPageData {
  breadcrumb: {
    home: string;
    contact: string;
  };
  header: {
    title: string;
    subtitle: string;
  };
  contactCards: ContactCardItem[];
  storeImage: {
    src: string;
    alt: string;
  };
  bottomInfoCards: BottomInfoCardItem[];
}
