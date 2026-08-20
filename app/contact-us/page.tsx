import React from "react";
import { Metadata } from "next";
import Breadcrumb from "@/components/products/listing/Breadcrumb";
import ContactHeader from "@/components/contact/ContactHeader";
import ContactInfoCards from "@/components/contact/ContactInfoCards";
import ContactStoreImage from "@/components/contact/ContactStoreImage";
import ContactHoursStrip from "@/components/contact/ContactHoursStrip";
import { getContactData } from "@/lib/data/contact";

export async function generateMetadata(): Promise<Metadata> {
  const data = await getContactData();
  return {
    title: "تماس با ما | اپل استور",
    description: data.header.subtitle,
  };
}

export default async function ContactPage() {
  const data = await getContactData();
  const breadcrumbItems = [
    { label: data.breadcrumb.home, href: "/" },
    { label: data.breadcrumb.contact },
  ];

  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* 1. Breadcrumb */}
        <Breadcrumb items={breadcrumbItems} className="mb-6 sm:mb-8" />

        {/* 2. Page Header */}
        <ContactHeader
          title={data.header.title}
          subtitle={data.header.subtitle}
        />

        {/* 3. Main Section: Cards (Right column in RTL) + Store Image (Left column in RTL) */}
        <section aria-label="اطلاعات تماس و تصویر فروشگاه">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            {/* Right Column in RTL: Contact Info Cards */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <ContactInfoCards cards={data.contactCards} />
            </div>

            {/* Left Column in RTL: Store Image */}
            <div className="lg:col-span-6 min-h-87.5 lg:min-h-0">
              <ContactStoreImage
                src={data.storeImage.src}
                alt={data.storeImage.alt}
              />
            </div>
          </div>
        </section>

        {/* 4. Bottom Info Strip */}
        <ContactHoursStrip cards={data.bottomInfoCards} />
      </div>
    </main>
  );
}
