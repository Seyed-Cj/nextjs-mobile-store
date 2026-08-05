import React from "react";
import { Store, Headphones, Clock } from "lucide-react";
import { BottomInfoCardItem } from "@/types/contact";

interface ContactHoursStripProps {
  cards: BottomInfoCardItem[];
}

const iconMap = {
  store: Store,
  headphones: Headphones,
  clock: Clock,
};

export default function ContactHoursStrip({ cards }: ContactHoursStripProps) {
  return (
    <section className="mt-12 sm:mt-16" aria-label="اطلاعات حضور و پاسخگویی">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        {cards.map((card) => {
          const IconComponent = iconMap[card.iconName];
          return (
            <div
              key={card.id}
              className="flex flex-col items-center p-6 sm:p-7 rounded-2xl border border-neutral-200/80 bg-white text-center transition-all duration-200 hover:border-neutral-300 hover:shadow-xs"
            >
              {/* Centered icon inside circular outline */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-900/10 text-neutral-900 mb-4">
                <IconComponent className="h-5 w-5 stroke-[1.75]" />
              </div>

              {/* Bold Title */}
              <h2 className="text-base sm:text-lg font-bold text-neutral-900 mb-3">
                {card.title}
              </h2>

              {/* Supporting Content */}
              {card.content.type === "schedule" && card.content.schedule && (
                <ul className="w-full text-xs sm:text-sm text-neutral-600 divide-y divide-neutral-100 mt-1">
                  {card.content.schedule.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-between py-2 gap-2"
                    >
                      <span className="font-medium text-neutral-700">{item.days}</span>
                      <span className="font-semibold text-neutral-900">{item.hours}</span>
                    </li>
                  ))}
                </ul>
              )}

              {card.content.type === "text" && card.content.text && (
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed max-w-xs">
                  {card.content.text}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
