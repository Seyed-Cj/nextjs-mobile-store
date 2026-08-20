import NewsletterForm from "./NewsletterForm";
import FooterLinks from "./FooterLinks";
import TrustBadges from "./TrustBadges";
import FooterBottom from "./FooterBottom";
import AppleLogo from "@/components/ui/AppleLogo";
import { getFooterLinks } from "@/lib/data/footer-links";

export default async function Footer() {
  const footerLinks = await getFooterLinks();

  return (
    <footer
      className="border-t border-gray-200 bg-gray-50 font-sans text-gray-900"
      dir="rtl"
    >
      <div className="mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-8 border-b border-gray-200 pb-8 md:flex-row md:items-center">
          <div className="max-w-md">
            <div className="mb-3 flex items-center gap-2">
              <AppleLogo className="mb-1 h-8 w-8 shrink-0 text-black" />
              <span className="text-xl font-bold tracking-tight text-gray-900">
                فروشگاه اپل
              </span>
            </div>
            <p className="text-right text-sm leading-relaxed text-gray-500">
              مرجع تخصصی ارائه جدیدترین محصولات اپل در ایران. تضمین اصالت کالا،
              بهترین قیمت و پشتیبانی کامل، تجربه خریدی مطمئن را برای شما فراهم
              می‌سازد.
            </p>
          </div>

          <NewsletterForm />
        </div>

        <FooterLinks columns={footerLinks} />

        <TrustBadges />

        <FooterBottom />
      </div>
    </footer>
  );
}
