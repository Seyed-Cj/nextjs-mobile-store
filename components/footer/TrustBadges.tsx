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
    <div className="mb-10 rounded-xl border border-gray-200 bg-white p-6 shadow-xs">
      <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-5">
        {featureBadges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.title}
              className="flex flex-col items-center p-2 text-center"
            >
              <div className="mb-3 shrink-0 rounded-full bg-gray-100 p-3 text-gray-900">
                <Icon className="h-6 w-6 stroke-[1.75]" aria-hidden="true" />
              </div>
              <h5 className="mb-1 text-sm font-bold text-gray-900">
                {badge.title}
              </h5>
              <p className="text-xs text-gray-500">{badge.description}</p>
            </div>
          );
        })}

        <div className="flex items-center justify-center gap-4 border-t border-gray-200 pt-4 md:col-span-2 md:border-t-0 md:border-r md:pt-0 md:pr-4">
          {/* trust logos */}
        </div>
      </div>
    </div>
  );
}
