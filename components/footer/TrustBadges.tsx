import { ShieldCheck, Truck, BadgeCheck } from "lucide-react";

const featureBadges = [
  {
    title: "پرداخت امن",
    description: "با درگاه های معتبر بانکی",
    icon: ShieldCheck,
  },
  {
    title: "ارسال سریع",
    description: "به سراسر کشور",
    icon: Truck,
  },
  {
    title: "ضمانت اصالت کالا",
    description: "مستقیم از نمایندگی رسمی",
    icon: BadgeCheck,
  },
];

export default function TrustBadges() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10 shadow-xs">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
        {featureBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.title}
              className="flex flex-col items-center text-center p-2"
            >
              <div className="p-3 bg-gray-100 text-gray-900 rounded-full mb-3 shrink-0">
                <Icon className="w-6 h-6 stroke-[1.75]" aria-hidden="true" />
              </div>
              <h5 className="font-bold text-sm text-gray-900 mb-1">
                {badge.title}
              </h5>
              <p className="text-xs text-gray-500">
                {badge.description}
              </p>
            </div>
          );
        })}

        <div className="md:col-span-2 flex items-center justify-center gap-4 pt-4 md:pt-0 border-t md:border-t-0 md:border-r border-gray-200 md:pr-4">
          {/* trust logos */}
        </div>
      </div>
    </div>
  );
}
