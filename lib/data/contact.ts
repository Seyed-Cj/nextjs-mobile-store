import { ContactPageData } from "@/types/contact";

export const contactData: ContactPageData = {
  breadcrumb: {
    home: "خانه",
    contact: "تماس با ما",
  },
  header: {
    title: "تماس با ما",
    subtitle: "ما همیشه آماده شنیدن نظرات، پیشنهادات و پاسخگویی به سوالات شما هستیم.",
  },
  contactCards: [
    {
      id: "phone",
      iconName: "phone",
      title: "تلفن فروشگاه",
      value: "۰۲۱-۱۲۳۴۵۶۷۸",
      secondaryText: "پاسخگویی ۱۰ الی ۲۲",
      href: "tel:02112345678",
    },
    {
      id: "whatsapp",
      iconName: "whatsapp",
      title: "پشتیبانی واتساپ",
      value: "۰۹۱۲-۱۲۳۴۵۶۷",
      secondaryText: "پاسخگویی سریع در ساعات کاری",
      href: "https://wa.me/989121234567",
    },
    {
      id: "email",
      iconName: "email",
      title: "ایمیل",
      value: "info@iphoneshop.ir",
      secondaryText: "پاسخگویی حداکثر ۲۴ ساعت",
      href: "mailto:info@iphoneshop.ir",
    },
    {
      id: "address",
      iconName: "address",
      title: "آدرس فروشگاه",
      value: "تهران، خیابان ولیعصر، نرسیده به میدان ونک، برج نگار، طبقه ۵",
      secondaryText: "امکان مراجعه حضوری با هماهنگی قبلی",
    },
  ],
  storeImage: {
    src: "/images/store-front.png",
    alt: "فروشگاه اپل استور",
  },
  bottomInfoCards: [
    {
      id: "store-hours",
      iconName: "store",
      title: "ساعات حضور در فروشگاه",
      content: {
        type: "schedule",
        schedule: [
          { days: "شنبه تا چهارشنبه", hours: "۱۰:۰۰ الی ۲۱:۰۰" },
          { days: "پنجشنبه", hours: "۱۰:۰۰ الی ۱۹:۰۰" },
          { days: "جمعه و ایام تعطیل", hours: "تعطیل" },
        ],
      },
    },
    {
      id: "support-hours",
      iconName: "headphones",
      title: "ساعات پاسخگویی تلفنی و واتساپ",
      content: {
        type: "text",
        text: "تیم پشتیبانی ما در تمام روزهای کاری از ساعت ۹:۰۰ الی ۲۲:۰۰ آماده پاسخگویی به تماس‌ها و پیام‌های شما در واتساپ می‌باشد.",
      },
    },
    {
      id: "in-person-visit",
      iconName: "clock",
      title: "مراجعه حضوری",
      content: {
        type: "text",
        text: "برای مراجعه حضوری و دریافت خدمات مشاوره یا خرید مستقیم، می‌توانید در ساعات کاری فروشگاه به آدرس ثبت شده مراجعه فرمایید.",
      },
    },
  ],
};
