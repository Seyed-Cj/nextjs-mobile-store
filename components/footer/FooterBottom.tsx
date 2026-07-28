export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500">
      <p className="text-gray-600 font-medium text-center sm:text-right">
        © {currentYear} تمامی حقوق این وبسایت برای فروشگاه اپل است.
      </p>

      <p className="text-gray-400 text-center sm:text-left">
        SeyedCj
      </p>
    </div>
  );
}
