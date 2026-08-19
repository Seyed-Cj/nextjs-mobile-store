import { Review, RatingSummary, StarRating } from "@/types/review";

export const sampleReviews: Review[] = [
  // iPhone 17 Pro Max
  {
    id: "rev-17pm-1",
    productId: "iphone-17-pro-max",
    authorName: "علیرضا محمدی",
    rating: 5,
    date: "۲۵ بهمن ۱۴۰۴",
    text: "کیفیت ساخت بدنه و سرعت تراشه فوق‌العاده است. سیستم دوربین زوم ۵ برابری و نمایشگر پروموشن کیفیت شگفت‌انگیزی دارد. شارژدهی باتری هم به مراتب بهتر از نسل‌های قبلی شده است.",
    helpfulCount: 14,
  },
  {
    id: "rev-17pm-2",
    productId: "iphone-17-pro-max",
    authorName: "سارا رستمی",
    rating: 5,
    date: "۱۸ بهمن ۱۴۰۴",
    text: "رنگ نارنجی جدید بسیار خاص و شیک است. وزن گوشی با وجود ابعاد بزرگش به خاطر تیتانیوم بسیار متعادل طراحی شده و کار با دکمه جدید کمرا کنترل لذت‌بخش است.",
    helpfulCount: 9,
  },
  {
    id: "rev-17pm-3",
    productId: "iphone-17-pro-max",
    authorName: "مهدی کاظمی",
    rating: 4,
    date: "۱۰ بهمن ۱۴۰۴",
    text: "گوشی بی‌نظیریه فقط قیمتش بالاست. از لحاظ پردازش بازی‌ها و ادیت ویدیو با کیفیت ۴K هیچ نقصی نداره و داغ نمی‌کنه.",
    helpfulCount: 6,
  },
  {
    id: "rev-17pm-4",
    productId: "iphone-17-pro-max",
    authorName: "نیلوفر عباسی",
    rating: 5,
    date: "۳ بهمن ۱۴۰۴",
    text: "تحویل فوق‌العاده سریع بود و بسته‌بندی پلمپ و اصل اپل به دستم رسید. کیفیت اسپیکرها و صفحه نمایش واقعا خیره‌کننده است.",
    helpfulCount: 4,
  },
  {
    id: "rev-17pm-5",
    productId: "iphone-17-pro-max",
    authorName: "امیرحسین رضایی",
    rating: 5,
    date: "۲۸ دی ۱۴۰۴",
    text: "برای عکاسی حرفه‌ای خریدم و با خروجی ProRAW نتایج خارق‌العاده‌ای ثبت می‌کنه. پیشنهاد می‌کنم حتما نسخه ۲۵۶ یا ۵۱۲ گیگابایت رو تهیه کنید.",
    helpfulCount: 11,
  },
  {
    id: "rev-17pm-6",
    productId: "iphone-17-pro-max",
    authorName: "فاطمه شریفی",
    rating: 4,
    date: "۱۵ دی ۱۴۰۴",
    text: "همه چیز عالیه، فقط پیشنهاد می‌کنم قاب باکیفیت و محافظ لنز هم حتما همزمان سفارش بدید.",
    helpfulCount: 3,
  },
  {
    id: "rev-17pm-7",
    productId: "iphone-17-pro-max",
    authorName: "پرهام انصاری",
    rating: 5,
    date: "۸ دی ۱۴۰۴",
    text: "بهترین پرچمدار اپل تا امروز. پشتیبانی و پیگیری فروشگاه هم عالی بود.",
    helpfulCount: 5,
  },

  // iPhone 17
  {
    id: "rev-17-1",
    productId: "iphone-17",
    authorName: "احسان نظری",
    rating: 5,
    date: "۲۴ بهمن ۱۴۰۴",
    text: "اضافه شدن نرخ تازه‌سازی ۱۲۰ هرتز به آیفون استاندارد بزرگترین ارتقای ممکن بود. بسیار روان و خوش‌دست است.",
    helpfulCount: 12,
  },
  {
    id: "rev-17-2",
    productId: "iphone-17",
    authorName: "مریم حسینی",
    rating: 5,
    date: "۱۴ بهمن ۱۴۰۴",
    text: "رنگ سبز مریم‌گلی فوق‌العاده زیباست. دوربین ۴۸ مگاپیکسلی در نور کم عکس‌های بسیار شارپی ثبت می‌کنه.",
    helpfulCount: 8,
  },
  {
    id: "rev-17-3",
    productId: "iphone-17",
    authorName: "پویا کریمی",
    rating: 4,
    date: "۵ بهمن ۱۴۰۴",
    text: "ارگونومی عالی و وزن مناسب. با شارژر اصلی سریع شارژ میشه و عمر باتری برای کل روز کافیه.",
    helpfulCount: 5,
  },
  {
    id: "rev-17-4",
    productId: "iphone-17",
    authorName: "مینا طاهری",
    rating: 5,
    date: "۲۲ دی ۱۴۰۴",
    text: "خرید بسیار لذت‌بخشی بود. از پشتیبانی خوب فروشگاه هم متشکرم.",
    helpfulCount: 3,
  },
  {
    id: "rev-17-5",
    productId: "iphone-17",
    authorName: "سینا بهرامی",
    rating: 4,
    date: "۱۰ دی ۱۴۰۴",
    text: "کیفیت ساخت درجه یک. صدای اسپیکرها خیلی شفاف‌تر از آیفون قبلیم شده.",
    helpfulCount: 4,
  },
  {
    id: "rev-17-6",
    productId: "iphone-17",
    authorName: "زهرا نوری",
    rating: 5,
    date: "۲ دی ۱۴۰۴",
    text: "طراحی خیلی شیک و خوش‌دست با عملکرد فوق‌العاده سریع نرم‌افزاری.",
    helpfulCount: 7,
  },

  // iPhone 16 Pro
  {
    id: "rev-16p-1",
    productId: "iphone-16-pro",
    authorName: "کامران صادقی",
    rating: 5,
    date: "۲۷ دی ۱۴۰۴",
    text: "دکمه جدید کمرا کنترل برای فیلم‌برداری عالی عمل می‌کنه. تیتانیوم صحرایی هم رنگ خیلی باوقار و قشنگیه.",
    helpfulCount: 15,
  },
  {
    id: "rev-16p-2",
    productId: "iphone-16-pro",
    authorName: "الهام جعفری",
    rating: 5,
    date: "۱۶ دی ۱۴۰۴",
    text: "صفحه نمایش روشن‌تر شده و در آفتاب مستقیم کاملاً خواناست. دوربین تله‌فوتو 5x هم عالیه.",
    helpfulCount: 9,
  },
  {
    id: "rev-16p-3",
    productId: "iphone-16-pro",
    authorName: "نوید قاسمی",
    rating: 4,
    date: "۵ دی ۱۴۰۴",
    text: "قدرت پردازش A18 Pro محشره. برای ادیت عکس در لایت‌روم هیچ کندی نداره.",
    helpfulCount: 6,
  },
  {
    id: "rev-16p-4",
    productId: "iphone-16-pro",
    authorName: "شیدا مرادی",
    rating: 5,
    date: "۲۰ آذر ۱۴۰۴",
    text: "بسته‌بندی اورجینال و رجیستر شده با گارانتی معتبر رسید. ممنون از سایت خوبتون.",
    helpfulCount: 4,
  },
  {
    id: "rev-16p-5",
    productId: "iphone-16-pro",
    authorName: "داریوش فلاح",
    rating: 5,
    date: "۵ آذر ۱۴۰۴",
    text: "گوشی فوق‌العاده با ارگونومی عالی و عملکرد باتری پایدار.",
    helpfulCount: 7,
  },
  {
    id: "rev-16p-6",
    productId: "iphone-16-pro",
    authorName: "نگین یوسفی",
    rating: 4,
    date: "۱۸ آبان ۱۴۰۴",
    text: "خیلی راضی هستم، شارژدهی و دوربین هر دو عالی هستند.",
    helpfulCount: 2,
  },

  // iPhone 16
  {
    id: "rev-16-1",
    productId: "iphone-16",
    authorName: "آرش ملکی",
    rating: 5,
    date: "۲۲ دی ۱۴۰۴",
    text: "دکمه اکشن باتن و کمرا کنترل کاربردی هستند. نسبت به قیمتش امکانات خوبی از سری پرو به ارث برده.",
    helpfulCount: 10,
  },
  {
    id: "rev-16-2",
    productId: "iphone-16",
    authorName: "فرشته کریمی",
    rating: 5,
    date: "۱۰ دی ۱۴۰۴",
    text: "رنگ صورتی بسیار ملایم و جذابه. کیفیت فیلمبرداری و عکاسی پرتره فوق‌العاده‌ست.",
    helpfulCount: 8,
  },
  {
    id: "rev-16-3",
    productId: "iphone-16",
    authorName: "بهزاد زمانی",
    rating: 4,
    date: "۲۵ آذر ۱۴۰۴",
    text: "سرعت گوشی عالی و بدون نقص، باتری هم یک روز و نیم رو کامل جواب میده.",
    helpfulCount: 5,
  },
  {
    id: "rev-16-4",
    productId: "iphone-16",
    authorName: "رها احمدی",
    rating: 4,
    date: "۱۲ آذر ۱۴۰۴",
    text: "خیلی راضی‌ام از خریدم، همه چیز با اصالت و دقیق تحویل شد.",
    helpfulCount: 3,
  },
  {
    id: "rev-16-5",
    productId: "iphone-16",
    authorName: "مجید باقری",
    rating: 5,
    date: "۱ آذر ۱۴۰۴",
    text: "یکی از بهترین گزینه‌ها برای استفاده روزمره و حرفه‌ای.",
    helpfulCount: 6,
  },
  {
    id: "rev-16-6",
    productId: "iphone-16",
    authorName: "هلیا سعیدی",
    rating: 5,
    date: "۱۵ آبان ۱۴۰۴",
    text: "خیلی خوش‌دسته و ظاهر متفاوتی نسبت به مدل‌های قبلی داره.",
    helpfulCount: 4,
  },

  // MacBook Pro 2026
  {
    id: "rev-mbp-1",
    productId: "macbook-pro-2026",
    authorName: "کیوان جهانگیری",
    rating: 5,
    date: "۲۸ بهمن ۱۴۰۴",
    text: "برای رندرینگ سه‌بعدی و کدنویسی سنگین خریدم. پردازنده M5 Pro واقعاً سرعتی فضایی دارد و فن‌ها حتی زیر بار سنگین صدایی ندارند.",
    helpfulCount: 16,
  },
  {
    id: "rev-mbp-2",
    productId: "macbook-pro-2026",
    authorName: "ساناز ابراهیمی",
    rating: 5,
    date: "۱۵ بهمن ۱۴۰۴",
    text: "صفحه نمایش ۱۶ اینچ با رزولوشن بی‌نظیر برای ادیتورهای ویدیو بهشت است. شارژدهی باتری هم بیش از ۲۰ ساعت دوام می‌آورد.",
    helpfulCount: 12,
  },
  {
    id: "rev-mbp-3",
    productId: "macbook-pro-2026",
    authorName: "سامان پناهی",
    rating: 5,
    date: "۲ بهمن ۱۴۰۴",
    text: "کیفیت صدای اسپیکرها در حد یک سیستم صوتی حرفه‌ای است. تاندربولت ۵ هم سرعت عجیبی در انتقال فایل‌ها دارد.",
    helpfulCount: 8,
  },
  {
    id: "rev-mbp-4",
    productId: "macbook-pro-2026",
    authorName: "هدیه مختاری",
    rating: 4,
    date: "۱۸ دی ۱۴۰۴",
    text: "لپ‌تاپی کامل برای حرفه‌ای‌ها. فقط کمی وزنش سنگین است ولی با توجه به قدرتش کاملاً توجیه‌پذیره.",
    helpfulCount: 5,
  },
  {
    id: "rev-mbp-5",
    productId: "macbook-pro-2026",
    authorName: "میلاد گودرزی",
    rating: 5,
    date: "۵ دی ۱۴۰۴",
    text: "بهترین ورک‌استیشن قابل حملی که تابه‌حال ساخته شده.",
    helpfulCount: 9,
  },
  {
    id: "rev-mbp-6",
    productId: "macbook-pro-2026",
    authorName: "ترانه حیدری",
    rating: 5,
    date: "۲۰ آذر ۱۴۰۴",
    text: "عملکرد عالی، کیبورد نرم و تاچ‌پد بسیار دقیق. ارزش خرید بالایی داره.",
    helpfulCount: 4,
  },

  // MacBook Neo
  {
    id: "rev-neo-1",
    productId: "macbook-neo",
    authorName: "بابک یزدانی",
    rating: 5,
    date: "۲۸ بهمن ۱۴۰۴",
    text: "باورنکردنیه که چقدر سبکه! زیر یک کیلوگرم وزن داره و بدون فن کار می‌کنه بدون اینکه ذره‌ای گرم بشه.",
    helpfulCount: 14,
  },
  {
    id: "rev-neo-2",
    productId: "macbook-neo",
    authorName: "مونا فرهمند",
    rating: 5,
    date: "۱۸ بهمن ۱۴۰۴",
    text: "برای دانشگاه و کارهای روزمره و برنامه‌نویسی وب فوق‌العاده است. باتریش ۲ روز کامل بدون نیاز به شارژ کار می‌کنه.",
    helpfulCount: 11,
  },
  {
    id: "rev-neo-3",
    productId: "macbook-neo",
    authorName: "پیمان خسروی",
    rating: 4,
    date: "۶ بهمن ۱۴۰۴",
    text: "طراحی مدرن و باریک. رنگ استارلایتش خیلی جذابه و اثر انگشت جذب نمی‌کنه.",
    helpfulCount: 7,
  },
  {
    id: "rev-neo-4",
    productId: "macbook-neo",
    authorName: "رویا معتمد",
    rating: 5,
    date: "۲۰ دی ۱۴۰۴",
    text: "خیلی شیک و جمع‌وجور، به راحتی داخل هر کیفی جا میشه. از خریدش کاملاً راضی‌ام.",
    helpfulCount: 5,
  },
  {
    id: "rev-neo-5",
    productId: "macbook-neo",
    authorName: "شایان کریمی",
    rating: 5,
    date: "۸ دی ۱۴۰۴",
    text: "صفحه نمایش رتینا با کیفیت بالا و حاشیه‌های بسیار باریک.",
    helpfulCount: 6,
  },
  {
    id: "rev-neo-6",
    productId: "macbook-neo",
    authorName: "فریبا کاظمیان",
    rating: 4,
    date: "۲۵ آذر ۱۴۰۴",
    text: "کیفیت ساخت عالی مثل همیشه از اپل. سرعتش برای کارهای اداری و مالتی‌مدیا عالیه.",
    helpfulCount: 3,
  },
];

export function calculateRatingSummary(reviews: Review[]): RatingSummary {
  if (reviews.length === 0) {
    return {
      average: 0,
      totalCount: 0,
      distribution: [
        { star: 5, count: 0 },
        { star: 4, count: 0 },
        { star: 3, count: 0 },
        { star: 2, count: 0 },
        { star: 1, count: 0 },
      ],
    };
  }

  let totalSum = 0;
  const counts: Record<StarRating, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };

  for (const review of reviews) {
    totalSum += review.rating;
    const clampedStar = Math.min(5, Math.max(1, Math.round(review.rating))) as StarRating;
    counts[clampedStar] = (counts[clampedStar] || 0) + 1;
  }

  const rawAverage = totalSum / reviews.length;
  const average = Math.round(rawAverage * 10) / 10; // 1 decimal place

  return {
    average,
    totalCount: reviews.length,
    distribution: [
      { star: 5, count: counts[5] },
      { star: 4, count: counts[4] },
      { star: 3, count: counts[3] },
      { star: 2, count: counts[2] },
      { star: 1, count: counts[1] },
    ],
  };
}

export async function getReviewsByProductId(productId: string): Promise<Review[]> {
  const normId = productId.toLowerCase().trim();
  const matched = sampleReviews.filter(
    (r) => r.productId.toLowerCase() === normId ||
           (normId === "iphone-17-pro" && r.productId === "iphone-17-pro-max")
  );

  // Fallback to sampleReviews slice if product has no specific reviews
  if (matched.length > 0) return matched;
  return sampleReviews.slice(0, 6);
}

export async function getRatingSummaryByProductId(productId: string): Promise<RatingSummary> {
  const reviews = await getReviewsByProductId(productId);
  return calculateRatingSummary(reviews);
}
