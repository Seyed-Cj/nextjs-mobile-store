import React from "react";
import { Phone, MessageSquare, Mail, MapPin } from "lucide-react";
import { ContactCardItem } from "@/types/contact";

interface ContactInfoCardsProps {
  cards: ContactCardItem[];
}

const iconMap = {
  phone: Phone,
  whatsapp: MessageSquare,
  email: Mail,
  address: MapPin,
};

export default function ContactInfoCards({ cards }: ContactInfoCardsProps) {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      {cards.map((card) => {
        const IconComponent = iconMap[card.iconName];
        return (
          <div
            key={card.id}
            className="group flex items-start sm:items-center gap-4 sm:gap-5 p-5 sm:p-6 rounded-2xl border border-neutral-200/80 bg-white transition-all duration-200 hover:border-neutral-300 hover:shadow-xs"
          >
            {/* Icon inside circular outline (sits on right side in RTL) */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-neutral-900/10 text-neutral-900">
              <IconComponent className="h-5 w-5 stroke-[1.75]" />
            </div>

            {/* Card Content */}
            <div className="flex flex-col gap-0.5 text-start min-w-0 flex-1">
              <span className="text-xs font-semibold text-neutral-500">
                {card.title}
              </span>
              {card.href ? (
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-base font-semibold text-neutral-900 transition-colors hover:text-neutral-600 truncate dir-ltr text-start"
                >
                  {card.value}
                </a>
              ) : (
                <span className="text-base font-semibold text-neutral-900 leading-snug">
                  {card.value}
                </span>
              )}
              <span className="text-xs text-neutral-400 mt-0.5">
                {card.secondaryText}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
