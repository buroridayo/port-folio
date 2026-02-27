"use client";

import Image from "next/image";
import { ABOUT_DATA } from "@/lib/about-data";

export const AboutSection = () => {
  return (
    <div className="w-full space-y-8 py-4">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
        {/* 左側：画像エリア (4カラム) */}
        <div className="md:col-span-4 flex justify-center lg:justify-start">
          <div className="relative w-64 h-64 md:w-80 md:h-80 group">
            <div className="absolute inset-0 bg-neon/20 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/10">
              <Image
                src={ABOUT_DATA.image}
                alt={ABOUT_DATA.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>

        {/* 右側：テキストエリア (8カラム) */}
        <div className="md:col-span-8 space-y-6">
          <div>
            <h4 className="text-2xl font-bold text-white mb-1">
              Name : {ABOUT_DATA.name}
            </h4>
            <div className="h-0.5 w-12 bg-neon" />
          </div>

          <p className="text-white/70 leading-relaxed text-sm whitespace-pre-line">
            {ABOUT_DATA.intro}
          </p>

          <div className="space-y-2">
            <p className="text-sm">
              <span className="text-neon font-bold">趣味：</span>
              <span className="text-white/60">
                {ABOUT_DATA.hobbies.join("、")}
              </span>
            </p>
          </div>

          {/* SNSアイコン（判別ロジックを追加） */}
          <div className="flex gap-6 pt-4 items-center">
            {ABOUT_DATA.socials.map((sns) => {
              const isImagePath = typeof sns.icon === "string";
              const Icon = sns.icon;

              return (
                <a
                  key={sns.name}
                  href={sns.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-7 h-7 flex items-center justify-center grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition-all"
                  aria-label={sns.name}
                >
                  {isImagePath ? (
                    /* Qiitaなどの画像パスの場合 */
                    <Image
                      src={Icon as string}
                      alt={sns.name}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    /* GitHubなどのReactアイコンの場合 */
                    <div className="text-2xl text-white hover:text-neon transition-colors">
                      <Icon />
                    </div>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
