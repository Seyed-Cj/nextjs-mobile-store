import { Product, ProductVariant } from "@/types/product";
import { LatestProductSlide } from "@/types";

export const allProducts: Product[] = [
  {
    id: "iphone-17-pro-max",
    name: "آیفون 17 پرومکس",
    tagline: "بیشترین توانایی. پیشرفته‌ترین تراشه، دوربین تلسکوپی و باتری عظیم.",
    description: "آیفون ۱۷ پرومکس، اوج مهندسی و نوآوری اپل، با قدرتمندترین تراشه تاریخ گوشی‌های هوشمند یعنی A19 Pro و بدنه تیتانیومی صیقل‌خورده معرفی شده است. این پرچمدار با نمایشگر غول‌پیکر ۶.۹ اینچی Super Retina XDR و روشنایی فوق‌العاده در زیر نور خورشید، تجربه‌ای بی‌مانند از تماشای محتوا و اجرای سنگین‌ترین بازی‌ها با نرخ نوسازی ۱۲۰ هرتز ProMotion به ارمغان می‌آورد.\n\nسیستم دوربین سه‌گانه حرفه‌ای با سه سنسور ۴۸ مگاپیکسلی فیوژن، اولتراواید و تله‌فوتوی پریسکوپی، جزئیاتی شگفت‌انگیز در هر شرایط نوری ثبت می‌کند و امکان ضبط ویدیوهای سینمایی 4K با فرمت ProRes Log را میسر می‌سازد. به لطف نسل دوم معماری ۳ نانومتری و باتری بهینه‌سازی‌شده، تا ۳۳ ساعت شارژدهی مداوم در دستان شما خواهد بود.",
    image: "/products/iphone-17pro/iphone-card-40-17pro-202509.jpg",
    images: [
      "/products/iphone-17pro/iphone-card-40-17pro-202509.jpg",
      "/products/iphone-17pro/iphone-17-promax-deep-blue-256-untitled-1_0006_iphone-17-pro-finish-select-202509-6-9inch-deepblue.jpg",
      "/products/iphone-17pro/iphone-17-promax-silver-256-untitled-1_0000_iphone-17-pro-finish-select-202509-6-9inch-silver.jpg",
    ],
    priceFrom: 275000000,
    currency: "تومان",
    colors: [
      { name: "نارنجی (Orange)", hex: "#FE8E49" },
      { name: "نقره‌ای (Silver)", hex: "#E2E4E1" },
      { name: "آبی (Blue)", hex: "#42475C" },
    ],
    storageOptions: ["256GB", "512GB", "1TB", "2TB"],
    variants: [
      // Orange variants
      { id: "var-17pm-org-256", sku: "IPH17PM-ORG-256", colorName: "نارنجی (Orange)", colorHex: "#FE8E49", storage: "256GB", price: 275000000, stock: 5, inStock: true },
      { id: "var-17pm-org-512", sku: "IPH17PM-ORG-512", colorName: "نارنجی (Orange)", colorHex: "#FE8E49", storage: "512GB", price: 305000000, stock: 2, inStock: true }, // Low stock test
      { id: "var-17pm-org-1tb", sku: "IPH17PM-ORG-1TB", colorName: "نارنجی (Orange)", colorHex: "#FE8E49", storage: "1TB", price: 345000000, stock: 0, inStock: false }, // Out of stock test
      // Note: 2TB Orange is omitted intentionally to test non-existent SKU combination

      // Silver variants
      { id: "var-17pm-slv-256", sku: "IPH17PM-SLV-256", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "256GB", price: 275000000, stock: 8, inStock: true },
      { id: "var-17pm-slv-512", sku: "IPH17PM-SLV-512", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "512GB", price: 305000000, stock: 4, inStock: true },
      { id: "var-17pm-slv-1tb", sku: "IPH17PM-SLV-1TB", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "1TB", price: 345000000, stock: 3, inStock: true },
      { id: "var-17pm-slv-2tb", sku: "IPH17PM-SLV-2TB", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "2TB", price: 395000000, stock: 1, inStock: true },

      // Blue variants
      { id: "var-17pm-blu-256", sku: "IPH17PM-BLU-256", colorName: "آبی (Blue)", colorHex: "#42475C", storage: "256GB", price: 275000000, stock: 6, inStock: true },
      { id: "var-17pm-blu-512", sku: "IPH17PM-BLU-512", colorName: "آبی (Blue)", colorHex: "#42475C", storage: "512GB", price: 305000000, stock: 3, inStock: true },
      { id: "var-17pm-blu-1tb", sku: "IPH17PM-BLU-1TB", colorName: "آبی (Blue)", colorHex: "#42475C", storage: "1TB", price: 345000000, stock: 2, inStock: true },
      { id: "var-17pm-blu-2tb", sku: "IPH17PM-BLU-2TB", colorName: "آبی (Blue)", colorHex: "#42475C", storage: "2TB", price: 395000000, stock: 0, inStock: false },
    ],
    totalStock: 34,
    specs: [
      { label: "صفحه نمایش", value: "۶.۹ اینچ Super Retina XDR OLED با ProMotion ۱۲۰Hz" },
      { label: "تراشه پردازنده", value: "Apple A19 Pro (۳ نانومتری نسل ۲)" },
      { label: "دوربین اصلی", value: "سه‌گانه ۴۸ مگاپیکسل فیوژن + ۴۸ مگاپیکسل اولتراواید + ۴۸ مگاپیکسل پریسکوپ تله‌فوتو 5x" },
      { label: "دوربین سلفی", value: "۲۴ مگاپیکسل TrueDepth با فوکوس خودکار" },
      { label: "جنس بدنه", value: "تیتانیوم گرید ۵ برس‌خورده و شیشه مات پشتی Ceramic Shield" },
      { label: "باتری و شارژدهی", value: "تا ۳۳ ساعت پخش ویدیو مداوم و پشتیبانی از MagSafe" },
      { label: "درگاه و اتصالات", value: "USB-C نسل ۳ (سرعت ۱۰ گیگابیت بر ثانیه) و Wi-Fi 7" },
      { label: "مقاومت در برابر آب", value: "استاندارد IP68 (عمق ۶ متر تا ۳۰ دقیقه)" },
      { label: "سیستم‌عامل", value: "iOS 19 با قابلیت‌های هوش مصنوعی پیشرفته" },
      { label: "وزن و ابعاد", value: "۲۲۵ گرم - ۱۶۳ × ۷۷.۶ × ۸.۲۵ میلی‌متر" },
    ],
    href: "/products/iphone-17-pro-max",
    badge: "جدید",
    category: "iphone",
    series: "iPhone 17 Series",
    inStock: true,
    isNew: true,
    createdAt: "2026-01-15",
    popularity: 99,
  },
  {
    id: "iphone-17",
    name: "آیفون 17",
    tagline: "پیشرفته‌تر از همیشه در دستان شما با نمایشگر پروموشن ۱۲۰ هرتز.",
    description: "آیفون ۱۷ با طراحی مدرن آلومینیومی و رنگ‌های الهام‌بخش، جهشی بزرگ در تجربه کاربری روزمره است. این مدل برای اولین بار به نمایشگر ۶.۳ اینچی Super Retina XDR با فناوری ProMotion ۱۲۰ هرتز مجهز شده تا تمامی اسکرول‌ها، انیمیشن‌ها و تعاملات لمسی با بالاترین روانی ممکن انجام شوند.\n\nتراشه A19 Bionic با بهره‌وری انرژی استثنایی و موتور عصبی ۱۶ هسته‌ای پیشرفته، پردازش‌های هوش مصنوعی اپل را به شکل آنی پردازش می‌کند. سیستم دوربین پیشرفته ۴۸ مگاپیکسلی با قابلیت فیوژن و عکاسی ماکرو به شما اجازه می‌دهد تصاویری شفاف با رنگ‌های طبیعی خلق کنید و با شارژدهی تمام‌روزه، در هر لحظه همراه مطمئن شما باشد.",
    image: "/products/iphone-17/iphone-card-40-17-202509.jpg",
    images: [
      "/products/iphone-17/iphone-card-40-17-202509.jpg",
      "/products/iphone-17/apple-iphone-17-256gb-sage.png",
      "/products/iphone-17/apple-iphone-17-4.png",
      "/products/iphone-17/apple-iphone-17-5.png",
    ],
    priceFrom: 205000000,
    currency: "تومان",
    colors: [
      { name: "سبز مریم‌گلی (Sage)", hex: "#8FA698" },
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سفید (White)", hex: "#F2F1EC" },
      { name: "مشکی (Black)", hex: "#38373B" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    variants: [
      { id: "var-17-sag-256", sku: "IPH17-SAG-256", colorName: "سبز مریم‌گلی (Sage)", colorHex: "#8FA698", storage: "256GB", price: 205000000, stock: 6, inStock: true },
      { id: "var-17-sag-512", sku: "IPH17-SAG-512", colorName: "سبز مریم‌گلی (Sage)", colorHex: "#8FA698", storage: "512GB", price: 230000000, stock: 3, inStock: true },
      { id: "var-17-sag-1tb", sku: "IPH17-SAG-1TB", colorName: "سبز مریم‌گلی (Sage)", colorHex: "#8FA698", storage: "1TB", price: 265000000, stock: 1, inStock: true },

      { id: "var-17-pnk-256", sku: "IPH17-PNK-256", colorName: "صورتی (Pink)", colorHex: "#EBCBD4", storage: "256GB", price: 205000000, stock: 4, inStock: true },
      { id: "var-17-pnk-512", sku: "IPH17-PNK-512", colorName: "صورتی (Pink)", colorHex: "#EBCBD4", storage: "512GB", price: 230000000, stock: 2, inStock: true },
      { id: "var-17-pnk-1tb", sku: "IPH17-PNK-1TB", colorName: "صورتی (Pink)", colorHex: "#EBCBD4", storage: "1TB", price: 265000000, stock: 0, inStock: false }, // Out of stock test

      { id: "var-17-wht-256", sku: "IPH17-WHT-256", colorName: "سفید (White)", colorHex: "#F2F1EC", storage: "256GB", price: 205000000, stock: 8, inStock: true },
      { id: "var-17-wht-512", sku: "IPH17-WHT-512", colorName: "سفید (White)", colorHex: "#F2F1EC", storage: "512GB", price: 230000000, stock: 5, inStock: true },
      { id: "var-17-wht-1tb", sku: "IPH17-WHT-1TB", colorName: "سفید (White)", colorHex: "#F2F1EC", storage: "1TB", price: 265000000, stock: 2, inStock: true },

      { id: "var-17-blk-256", sku: "IPH17-BLK-256", colorName: "مشکی (Black)", colorHex: "#38373B", storage: "256GB", price: 205000000, stock: 10, inStock: true },
      { id: "var-17-blk-512", sku: "IPH17-BLK-512", colorName: "مشکی (Black)", colorHex: "#38373B", storage: "512GB", price: 230000000, stock: 4, inStock: true },
      { id: "var-17-blk-1tb", sku: "IPH17-BLK-1TB", colorName: "مشکی (Black)", colorHex: "#38373B", storage: "1TB", price: 265000000, stock: 2, inStock: true },
    ],
    totalStock: 47,
    specs: [
      { label: "صفحه نمایش", value: "۶.۳ اینچ Super Retina XDR با ProMotion ۱۲۰Hz" },
      { label: "تراشه پردازنده", value: "Apple A19 Bionic (۳ نانومتری)" },
      { label: "دوربین اصلی", value: "دوگانه ۴۸ مگاپیکسل فیوژن + ۱۲ مگاپیکسل اولتراواید" },
      { label: "دوربین سلفی", value: "۱۸ مگاپیکسل TrueDepth" },
      { label: "جنس بدنه", value: "آلومینیوم با کیفیت صنایع هوایی و پوشش سرامیک شیلد" },
      { label: "باتری و شارژدهی", value: "تا ۲۷ ساعت پخش ویدیو" },
      { label: "درگاه و اتصالات", value: "USB-C استاندارد و Wi-Fi 7" },
      { label: "مقاومت در برابر آب", value: "استاندارد IP68" },
      { label: "سیستم‌عامل", value: "iOS 19" },
      { label: "وزن", value: "۱۷۵ گرم" },
    ],
    href: "/products/iphone-17",
    badge: "جدید",
    category: "iphone",
    series: "iPhone 17 Series",
    inStock: true,
    isNew: true,
    createdAt: "2026-01-05",
    popularity: 95,
  },
  {
    id: "iphone-16-pro",
    name: "آیفون 16 پرو",
    tagline: "طراحی تیتانیومی مستحکم، تراشه A18 Pro و دکمه کنترل دوربین.",
    description: "آیفون ۱۶ پرو توازن بی‌نقصی از قدرت خارق‌العاده و ابعاد ارگونومیک است. بدنه تیتانیوم گرید ۵ با حاشیه‌های فوق‌باریک در اطراف نمایشگر ۶.۳ اینچی ProMotion، ظاهری چشم‌نواز و احساسی بی‌نظیر هنگام در دست گرفتن خلق کرده است. دکمه جدید Camera Control دسترسی آنی به تنظیمات عکاسی، زوم و فوکوس را درست همانند یک دوربین عکاسی حرفه‌ای فراهم می‌آورد.\n\nبا بهره‌گیری از تراشه A18 Pro، این دستگاه قدرتمندترین موتور رهگیری پرتو (Ray Tracing) سخت‌افزاری و پردازش گرافیکی را برای اجرای بازی‌های کنسولی ارائه می‌دهد. دوربین اصلی ۴۸ مگاپیکسلی با سنسور کواد پیکسل نسل دوم و دوربین تله‌فوتو با زوم اپتیکال ۵ برابری، ثبت شفاف‌ترین لحظات را تضمین می‌کنند.",
    image: "/products/iphone-16pro/iphone16pro.jpg",
    images: ["/products/iphone-16pro/iphone16pro.jpg"],
    priceFrom: 215000000,
    currency: "تومان",
    colors: [
      { name: "صحرا (Desert Titanium)", hex: "#C0A794" },
      { name: "طبیعی (Natural Titanium)", hex: "#BEB7A4" },
      { name: "سفید (White Titanium)", hex: "#F2F1EC" },
      { name: "مشکی (Black Titanium)", hex: "#38373B" },
    ],
    storageOptions: ["128GB", "256GB", "512GB", "1TB"],
    variants: [
      { id: "var-16p-dst-128", sku: "IPH16P-DST-128", colorName: "صحرا (Desert Titanium)", colorHex: "#C0A794", storage: "128GB", price: 215000000, stock: 4, inStock: true },
      { id: "var-16p-dst-256", sku: "IPH16P-DST-256", colorName: "صحرا (Desert Titanium)", colorHex: "#C0A794", storage: "256GB", price: 235000000, stock: 3, inStock: true },
      { id: "var-16p-dst-512", sku: "IPH16P-DST-512", colorName: "صحرا (Desert Titanium)", colorHex: "#C0A794", storage: "512GB", price: 265000000, stock: 1, inStock: true },
      { id: "var-16p-dst-1tb", sku: "IPH16P-DST-1TB", colorName: "صحرا (Desert Titanium)", colorHex: "#C0A794", storage: "1TB", price: 295000000, stock: 0, inStock: false },

      { id: "var-16p-nat-128", sku: "IPH16P-NAT-128", colorName: "طبیعی (Natural Titanium)", colorHex: "#BEB7A4", storage: "128GB", price: 215000000, stock: 5, inStock: true },
      { id: "var-16p-nat-256", sku: "IPH16P-NAT-256", colorName: "طبیعی (Natural Titanium)", colorHex: "#BEB7A4", storage: "256GB", price: 235000000, stock: 3, inStock: true },
      { id: "var-16p-nat-512", sku: "IPH16P-NAT-512", colorName: "طبیعی (Natural Titanium)", colorHex: "#BEB7A4", storage: "512GB", price: 265000000, stock: 2, inStock: true },
      { id: "var-16p-nat-1tb", sku: "IPH16P-NAT-1TB", colorName: "طبیعی (Natural Titanium)", colorHex: "#BEB7A4", storage: "1TB", price: 295000000, stock: 1, inStock: true },

      { id: "var-16p-wht-128", sku: "IPH16P-WHT-128", colorName: "سفید (White Titanium)", colorHex: "#F2F1EC", storage: "128GB", price: 215000000, stock: 6, inStock: true },
      { id: "var-16p-wht-256", sku: "IPH16P-WHT-256", colorName: "سفید (White Titanium)", colorHex: "#F2F1EC", storage: "256GB", price: 235000000, stock: 4, inStock: true },
      { id: "var-16p-wht-512", sku: "IPH16P-WHT-512", colorName: "سفید (White Titanium)", colorHex: "#F2F1EC", storage: "512GB", price: 265000000, stock: 2, inStock: true },
      { id: "var-16p-wht-1tb", sku: "IPH16P-WHT-1TB", colorName: "سفید (White Titanium)", colorHex: "#F2F1EC", storage: "1TB", price: 295000000, stock: 1, inStock: true },

      { id: "var-16p-blk-128", sku: "IPH16P-BLK-128", colorName: "مشکی (Black Titanium)", colorHex: "#38373B", storage: "128GB", price: 215000000, stock: 7, inStock: true },
      { id: "var-16p-blk-256", sku: "IPH16P-BLK-256", colorName: "مشکی (Black Titanium)", colorHex: "#38373B", storage: "256GB", price: 235000000, stock: 5, inStock: true },
      { id: "var-16p-blk-512", sku: "IPH16P-BLK-512", colorName: "مشکی (Black Titanium)", colorHex: "#38373B", storage: "512GB", price: 265000000, stock: 2, inStock: true },
      { id: "var-16p-blk-1tb", sku: "IPH16P-BLK-1TB", colorName: "مشکی (Black Titanium)", colorHex: "#38373B", storage: "1TB", price: 295000000, stock: 1, inStock: true },
    ],
    totalStock: 47,
    specs: [
      { label: "صفحه نمایش", value: "۶.۳ اینچ Super Retina XDR OLED با ProMotion ۱۲۰Hz" },
      { label: "تراشه پردازنده", value: "Apple A18 Pro" },
      { label: "دوربین اصلی", value: "سه‌گانه ۴۸ مگاپیکسل + ۴۸ مگاپیکسل اولتراواید + ۱۲ مگاپیکسل تله‌فوتو 5x" },
      { label: "کلیدهای اختصاصی", value: "دکمه کنترل لمسی دوربین (Camera Control) و دکمه اکشن" },
      { label: "جنس بدنه", value: "تیتانیوم گرید ۵" },
      { label: "باتری و شارژدهی", value: "تا ۲۷ ساعت پخش ویدیو" },
      { label: "درگاه و اتصالات", value: "USB-C با سرعت انتقال ۱۰ گیگابیت بر ثانیه (USB 3)" },
      { label: "سیستم‌عامل", value: "iOS 18 (قابل ارتقا به iOS 19)" },
      { label: "وزن", value: "۱۹۹ گرم" },
    ],
    href: "/products/iphone-16-pro",
    badge: "پرفروش",
    category: "iphone",
    series: "iPhone 16 Series",
    inStock: true,
    isNew: false,
    createdAt: "2025-09-10",
    popularity: 92,
  },
  {
    id: "iphone-16",
    name: "آیفون 16",
    tagline: "طراحی نوآورانه با دکمه کمرا کنترل و تراشه پرقدرت A18.",
    description: "آیفون ۱۶ با بازطراحی هوشمندانه ماژول دوربین عمودی و پشتیبانی از ضبط ویدیوهای فضایی (Spatial Video)، دنیایی تازه از ثبت خاطرات را پیش روی شما قرار می‌دهد. شیشه پشتی با فناوری تزریق رنگ درون ساختار مولکولی و محافظ فوق‌العاده مقاوم سرامیک شیلد، زیبایی پایدار و مقاومت بالا را ترکیب کرده‌اند.\n\nتراشه ۶ هسته‌ای A18 به طور ویژه برای اجرای روان قابلیت‌های هوش مصنوعی و اجرای بدون افت فریم بازی‌ها طراحی شده است. دکمه اکشن چندمنظوره و دکمه لمسی کنترل دوربین، سرعت دسترسی شما به امکانات حیاتی گوشی را به حداکثر می‌رسانند.",
    image: "/products/iphone-16/iphone-card-40-16plus-202509.jpg",
    images: [
      "/products/iphone-16/iphone-card-40-16plus-202509.jpg",
      "/products/iphone-16/apple-iphone-16-black.png.webp",
      "/products/iphone-16/apple-iphone-16-pink.png-3.webp",
      "/products/iphone-16/apple-iphone-16-white.png.webp",
    ],
    priceFrom: 185000000,
    currency: "تومان",
    colors: [
      { name: "صورتی (Pink)", hex: "#EBCBD4" },
      { name: "سفید (White)", hex: "#F2F1EC" },
      { name: "مشکی (Black)", hex: "#2E3033" },
      { name: "آبی آسمانی (Sky Blue)", hex: "#A2B4F9" },
    ],
    storageOptions: ["128GB", "256GB", "512GB"],
    variants: [
      { id: "var-16-pnk-128", sku: "IPH16-PNK-128", colorName: "صورتی (Pink)", colorHex: "#EBCBD4", storage: "128GB", price: 185000000, stock: 5, inStock: true },
      { id: "var-16-pnk-256", sku: "IPH16-PNK-256", colorName: "صورتی (Pink)", colorHex: "#EBCBD4", storage: "256GB", price: 205000000, stock: 3, inStock: true },
      { id: "var-16-pnk-512", sku: "IPH16-PNK-512", colorName: "صورتی (Pink)", colorHex: "#EBCBD4", storage: "512GB", price: 235000000, stock: 1, inStock: true },

      { id: "var-16-wht-128", sku: "IPH16-WHT-128", colorName: "سفید (White)", colorHex: "#F2F1EC", storage: "128GB", price: 185000000, stock: 6, inStock: true },
      { id: "var-16-wht-256", sku: "IPH16-WHT-256", colorName: "سفید (White)", colorHex: "#F2F1EC", storage: "256GB", price: 205000000, stock: 4, inStock: true },
      { id: "var-16-wht-512", sku: "IPH16-WHT-512", colorName: "سفید (White)", colorHex: "#F2F1EC", storage: "512GB", price: 235000000, stock: 2, inStock: true },

      { id: "var-16-blk-128", sku: "IPH16-BLK-128", colorName: "مشکی (Black)", colorHex: "#2E3033", storage: "128GB", price: 185000000, stock: 7, inStock: true },
      { id: "var-16-blk-256", sku: "IPH16-BLK-256", colorName: "مشکی (Black)", colorHex: "#2E3033", storage: "256GB", price: 205000000, stock: 5, inStock: true },
      { id: "var-16-blk-512", sku: "IPH16-BLK-512", colorName: "مشکی (Black)", colorHex: "#2E3033", storage: "512GB", price: 235000000, stock: 2, inStock: true },

      { id: "var-16-sky-128", sku: "IPH16-SKY-128", colorName: "آبی آسمانی (Sky Blue)", colorHex: "#A2B4F9", storage: "128GB", price: 185000000, stock: 4, inStock: true },
      { id: "var-16-sky-256", sku: "IPH16-SKY-256", colorName: "آبی آسمانی (Sky Blue)", colorHex: "#A2B4F9", storage: "256GB", price: 205000000, stock: 2, inStock: true },
      { id: "var-16-sky-512", sku: "IPH16-SKY-512", colorName: "آبی آسمانی (Sky Blue)", colorHex: "#A2B4F9", storage: "512GB", price: 235000000, stock: 0, inStock: false },
    ],
    totalStock: 41,
    specs: [
      { label: "صفحه نمایش", value: "۶.۱ اینچ Super Retina XDR OLED با روشنایی ۲۰۰۰ نیت" },
      { label: "تراشه پردازنده", value: "Apple A18 (تراشه ۶ هسته‌ای)" },
      { label: "دوربین اصلی", value: "دوگانه ۴۸ مگاپیکسل فیوژن + ۱۲ مگاپیکسل اولتراواید با فوکوس خودکار ماکرو" },
      { label: "دکمه کنترل دوربین", value: "دکمه اختصاصی Camera Control و Action Button" },
      { label: "جنس بدنه", value: "آلومینیوم بازیافتی با شیشه پشتی رنگ‌آمیزی‌شده" },
      { label: "باتری و شارژدهی", value: "تا ۲۲ ساعت پخش ویدیو" },
      { label: "درگاه ارتباطی", value: "USB-C" },
      { label: "سیستم‌عامل", value: "iOS 18 (قابل ارتقا به iOS 19)" },
      { label: "وزن", value: "۱۷۰ گرم" },
    ],
    href: "/products/iphone-16",
    category: "iphone",
    series: "iPhone 16 Series",
    inStock: true,
    isNew: false,
    createdAt: "2025-09-01",
    popularity: 88,
  },
  {
    id: "macbook-pro-2026",
    name: "مک‌بوک پرو ۲۰۲۶",
    tagline: "قدرت پردازشی بی‌نظیر با تراشه M5 Pro/Max برای حرفه‌ای‌ترین پروژه‌ها.",
    description: "مک‌بوک پرو ۲۰۲۶ با تراشه‌های قدرتمند M5 Pro و M5 Max، تعریف تازه‌ای از توان پردازشی در ایستگاه‌های کاری قابل حمل ارائه می‌کند. این هیولای پردازشی برای تدوین‌گران ویدیوی 8K، برنامه‌نویسان، طراحان سه‌بعدی و مهندسان هوش مصنوعی طراحی شده و عملکردی خیره‌کننده با مصرف بهینه انرژی ارائه می‌دهد.\n\nنمایشگر بی‌نظیر ۱۶.۲ اینچی Liquid Retina XDR با حداکثر روشنایی ۱۶۰۰ نیت و کنتراست یک به یک میلیون، دقیق‌ترین تفکیک رنگی را تضمین می‌کند. تنوع کاملی از درگاه‌های تاندربولت ۵، خروجی HDMI با رزولوشن 8K، درگاه کارت حافظه SDXC و شارژدهی باورنکردنی ۲۴ ساعته، این دستگاه را به ابزار نهایی متخصصان بدل کرده است.",
    image: "/products/macbook2026/mac-card-40-macbook-air-202503.jpg",
    images: [
      "/products/macbook2026/mac-card-40-macbook-air-202503.jpg",
      "/products/macbook2026/macbook2026.jpg",
      "/products/macbook2026/macbook20262.jpg",
    ],
    priceFrom: 240000000,
    currency: "تومان",
    colors: [
      { name: "مشکی فضایی (Space Black)", hex: "#232426" },
      { name: "نقره‌ای (Silver)", hex: "#E2E4E1" },
      { name: "خاکستری فضایی (Space Gray)", hex: "#68696E" },
    ],
    storageOptions: ["512GB", "1TB", "2TB", "4TB"],
    variants: [
      { id: "var-mbp-spb-512", sku: "MBP26-SPB-512", colorName: "مشکی فضایی (Space Black)", colorHex: "#232426", storage: "512GB", price: 240000000, stock: 4, inStock: true },
      { id: "var-mbp-spb-1tb", sku: "MBP26-SPB-1TB", colorName: "مشکی فضایی (Space Black)", colorHex: "#232426", storage: "1TB", price: 280000000, stock: 3, inStock: true },
      { id: "var-mbp-spb-2tb", sku: "MBP26-SPB-2TB", colorName: "مشکی فضایی (Space Black)", colorHex: "#232426", storage: "2TB", price: 335000000, stock: 1, inStock: true },
      { id: "var-mbp-spb-4tb", sku: "MBP26-SPB-4TB", colorName: "مشکی فضایی (Space Black)", colorHex: "#232426", storage: "4TB", price: 410000000, stock: 0, inStock: false },

      { id: "var-mbp-slv-512", sku: "MBP26-SLV-512", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "512GB", price: 240000000, stock: 5, inStock: true },
      { id: "var-mbp-slv-1tb", sku: "MBP26-SLV-1TB", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "1TB", price: 280000000, stock: 2, inStock: true },
      { id: "var-mbp-slv-2tb", sku: "MBP26-SLV-2TB", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "2TB", price: 335000000, stock: 1, inStock: true },
      { id: "var-mbp-slv-4tb", sku: "MBP26-SLV-4TB", colorName: "نقره‌ای (Silver)", colorHex: "#E2E4E1", storage: "4TB", price: 410000000, stock: 1, inStock: true },

      { id: "var-mbp-spg-512", sku: "MBP26-SPG-512", colorName: "خاکستری فضایی (Space Gray)", colorHex: "#68696E", storage: "512GB", price: 240000000, stock: 3, inStock: true },
      { id: "var-mbp-spg-1tb", sku: "MBP26-SPG-1TB", colorName: "خاکستری فضایی (Space Gray)", colorHex: "#68696E", storage: "1TB", price: 280000000, stock: 2, inStock: true },
      { id: "var-mbp-spg-2tb", sku: "MBP26-SPG-2TB", colorName: "خاکستری فضایی (Space Gray)", colorHex: "#68696E", storage: "2TB", price: 335000000, stock: 0, inStock: false },
      { id: "var-mbp-spg-4tb", sku: "MBP26-SPG-4TB", colorName: "خاکستری فضایی (Space Gray)", colorHex: "#68696E", storage: "4TB", price: 410000000, stock: 0, inStock: false },
    ],
    totalStock: 22,
    specs: [
      { label: "صفحه نمایش", value: "۱۶.۲ اینچ Liquid Retina XDR (وضوح ۳۴۵۶ × ۲۲۳۴ پیکسل با روشنایی ۱۶۰۰ نیت)" },
      { label: "تراشه پردازنده", value: "Apple M5 Pro / M5 Max (تراشه قدرتمند ۱۶ تا ۲۴ هسته‌ای)" },
      { label: "حافظه رم یکپارچه", value: "۳۶ تا ۱۲۸ گیگابایت حافظه یکپارچه پرسرعت" },
      { label: "باتری و شارژدهی", value: "تا ۲۴ ساعت پخش ویدیو و وب‌گردی مداوم" },
      { label: "درگاه‌ها و اتصالات", value: "۳ درگاه تاندربولت ۵، خروجی HDMI، درگاه کارت حافظه SDXC و شارژر MagSafe 3" },
      { label: "صدا و میکروفون", value: "سیستم صوتی ۶ اسپیکره با ووفرهای خنثی‌کننده لرزش و پشتیبانی از Spatial Audio" },
      { label: "سیستم‌عامل", value: "macOS Sequoia" },
      { label: "وزن", value: "۲.۱۴ کیلوگرم" },
    ],
    href: "/products/macbook-pro-2026",
    badge: "جدید",
    category: "mac",
    series: "MacBook Pro",
    inStock: true,
    isNew: true,
    createdAt: "2026-02-01",
    popularity: 97,
  },
  {
    id: "macbook-neo",
    name: "مک‌بوک نئو ۲۰۲۶",
    tagline: "سبک‌ترین، باریک‌ترین و هوشمندترین مک‌بوک نسل جدید اپل.",
    description: "مک‌بوک نئو ۲۰۲۶ باریک‌ترین، سبک‌ترین و تحسین‌برانگیزترین لپ‌تاپ اپل است که با وزن تنها ۹۹۰ گرم و ضخامت ۹.۵ میلی‌متر، استانداردهای قابلیت حمل را ارتقا داده است. طراحی تمام آلومینیومی بدون فن (Fanless) به این معناست که لپ‌تاپ حتی زیر سنگین‌ترین وظایف محاسباتی کاملاً بی‌صدا و خنک کار می‌کند.\n\nصفحه نمایش ۱۳.۶ اینچی Liquid Retina با پشتیبانی از گستره رنگی P3 و ۵۰۰ نیت روشنایی، متون و تصاویر را با وضوح شگفت‌انگیز نمایش می‌دهد. با تراشه کم‌مصرف و پرقدرت M4 و شارژدهی ۱۸ ساعته باتری، مک‌بوک نئو همراهی ایده‌آل برای کار، تحصیل و سفر است.",
    image: "/products/macbook-neo/mac-card-40-macbook-neo-202603.jpg",
    images: [
      "/products/macbook-neo/mac-card-40-macbook-neo-202603.jpg",
    ],
    priceFrom: 130000000,
    currency: "تومان",
    colors: [
      { name: "میدنایت (Midnight)", hex: "#1C2331" },
      { name: "استارلایت (Starlight)", hex: "#F5EBE6" },
      { name: "نقره‌ای (Silver)", hex: "#E3E4E6" },
    ],
    storageOptions: ["256GB", "512GB", "1TB"],
    variants: [
      { id: "var-neo-mid-256", sku: "MBNEO-MID-256", colorName: "میدنایت (Midnight)", colorHex: "#1C2331", storage: "256GB", price: 130000000, stock: 5, inStock: true },
      { id: "var-neo-mid-512", sku: "MBNEO-MID-512", colorName: "میدنایت (Midnight)", colorHex: "#1C2331", storage: "512GB", price: 155000000, stock: 3, inStock: true },
      { id: "var-neo-mid-1tb", sku: "MBNEO-MID-1TB", colorName: "میدنایت (Midnight)", colorHex: "#1C2331", storage: "1TB", price: 190000000, stock: 1, inStock: true },

      { id: "var-neo-sta-256", sku: "MBNEO-STA-256", colorName: "استارلایت (Starlight)", colorHex: "#F5EBE6", storage: "256GB", price: 130000000, stock: 6, inStock: true },
      { id: "var-neo-sta-512", sku: "MBNEO-STA-512", colorName: "استارلایت (Starlight)", colorHex: "#F5EBE6", storage: "512GB", price: 155000000, stock: 2, inStock: true },
      { id: "var-neo-sta-1tb", sku: "MBNEO-STA-1TB", colorName: "استارلایت (Starlight)", colorHex: "#F5EBE6", storage: "1TB", price: 190000000, stock: 0, inStock: false },

      { id: "var-neo-slv-256", sku: "MBNEO-SLV-256", colorName: "نقره‌ای (Silver)", colorHex: "#E3E4E6", storage: "256GB", price: 130000000, stock: 4, inStock: true },
      { id: "var-neo-slv-512", sku: "MBNEO-SLV-512", colorName: "نقره‌ای (Silver)", colorHex: "#E3E4E6", storage: "512GB", price: 155000000, stock: 2, inStock: true },
      { id: "var-neo-slv-1tb", sku: "MBNEO-SLV-1TB", colorName: "نقره‌ای (Silver)", colorHex: "#E3E4E6", storage: "1TB", price: 190000000, stock: 1, inStock: true },
    ],
    totalStock: 24,
    specs: [
      { label: "صفحه نمایش", value: "۱۳.۶ اینچ Liquid Retina با ۵۰۰ نیت روشنایی و پشتیبانی از ۱ میلیارد رنگ" },
      { label: "تراشه پردازنده", value: "Apple M4 نسل جدید با بازدهی حرارتی فوق‌العاده" },
      { label: "سیستم خنک‌کننده", value: "طراحی بدون فن (Fanless) کاملاً بی‌صدا" },
      { label: "ضخامت و بدنه", value: "باریک‌ترین بدنه مک‌بوک با ضخامت تنها ۹.۵ میلی‌متر" },
      { label: "باتری و شارژدهی", value: "تا ۱۸ ساعت استفاده مداوم" },
      { label: "درگاه‌ها", value: "۲ درگاه تاندربولت ۴ / USB 4، جک هدفون ۳.۵ میلی‌متری و MagSafe 3" },
      { label: "سیستم‌عامل", value: "macOS Sequoia" },
      { label: "وزن", value: "۹۹۰ گرم" },
    ],
    href: "/products/macbook-neo",
    badge: "جدید",
    category: "mac",
    series: "MacBook Neo",
    inStock: true,
    isNew: true,
    createdAt: "2026-03-01",
    popularity: 93,
  },
];

export const featuredProducts: Product[] = allProducts;
export const iPhoneProducts: Product[] = allProducts.filter(
  (p) => p.category === "iphone",
);

export async function getFeaturedProducts(): Promise<Product[]> {
  return featuredProducts;
}

export async function getIPhoneProducts(): Promise<Product[]> {
  return iPhoneProducts;
}

export async function getAllProducts(): Promise<Product[]> {
  return allProducts;
}

export async function getProductsByCategory(
  categorySlug?: string,
): Promise<Product[]> {
  if (!categorySlug || categorySlug.toLowerCase() === "all") {
    return allProducts;
  }
  const norm = categorySlug.toLowerCase().trim();
  return allProducts.filter(
    (p) => (p.category && p.category.toLowerCase() === norm) || p.id === norm,
  );
}

export async function getProductById(id: string): Promise<Product | undefined> {
  const normalizedId = id.toLowerCase().trim();
  const rawId = normalizedId.replace(/-/g, "");
  
  return allProducts.find((p) => {
    const pNorm = p.id.toLowerCase().trim();
    const pRaw = pNorm.replace(/-/g, "");

    if (pNorm === normalizedId || pRaw === rawId) return true;

    // Common aliases & fallbacks
    if ((normalizedId === "iphone-17-pro" || rawId === "iphone17pro" || rawId === "iphone17promax") && p.id === "iphone-17-pro-max") return true;
    if ((normalizedId === "iphone-16pro" || rawId === "iphone16pro") && p.id === "iphone-16-pro") return true;
    if ((normalizedId === "macbook-pro" || normalizedId === "macbook2026" || rawId === "macbookpro" || rawId === "macbook2026" || rawId === "macbookprom4") && p.id === "macbook-pro-2026") return true;
    if ((normalizedId === "macbookneo" || rawId === "macbookneo") && p.id === "macbook-neo") return true;

    return false;
  });
}

export const latestProducts: LatestProductSlide[] = [
  {
    tag: "New Mac Pro",
    title: "مک‌بوک پرو ۲۰۲۶",
    description: "مشاهده قیمت و خرید قدرتمندترین مک‌بوک اپل با تراشه M5",
    href: "/products/macbook-pro-2026",
    image: "/images/macbook-pro-2025.jpg",
    theme: "light",
  },
  {
    tag: "New Macbook",
    title: "مک‌بوک نئو",
    description: "مشاهده قیمت و خرید جدیدترین سری مک‌بوک نئو ۲۰۲۶",
    href: "/products/macbook-neo",
    image: "/images/neo2026.jpg",
    theme: "dark",
  },
  {
    tag: "iPhone 17 Pro",
    title: "آیفون ۱۷ پرومکس",
    description: "مشاهده و خرید جدیدترین پرچمدار اپل با بدنه تیتانیومی",
    href: "/products/iphone-17-pro-max",
    image: "/images/iphone-17-pro.jpg",
    theme: "light",
  },
  {
    tag: "iPhone 17",
    title: "آیفون ۱۷",
    description: "مشاهده قیمت و خرید آیفون ۱۷ با نمایشگر پروموشن ۱۲۰ هرتز",
    href: "/products/iphone-17",
    image: "/images/ipad-air-2026.jpg",
    theme: "dark",
  },
];

export const products = latestProducts;

export async function getLatestProducts(): Promise<LatestProductSlide[]> {
  return latestProducts;
}





