export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="flex flex-col items-center justify-between gap-2 border-t border-gray-200 pt-6 text-xs text-gray-500 sm:flex-row">
      <p className="text-center font-medium text-gray-600 sm:text-right">
        © {currentYear} تمامی حقوق این وبسایت برای فروشگاه اپل است.
      </p>

      <p className="text-center text-gray-400 sm:text-left">SeyedCj</p>
    </div>
  );
}
