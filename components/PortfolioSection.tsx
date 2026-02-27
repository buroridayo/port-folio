"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { ProjectDetail } from "./ProjectDetail";

export const PortfolioSection = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const project = PORTFOLIO_PROJECTS[0]; // 今回のタイピングゲーム

  return (
    <div className="w-full py-10 relative">
      {/* メインカードエリア */}
      <div className="relative aspect-video w-full rounded-[2.5rem] bg-linear-to-b from-[#0f2f1f] to-black border border-white/10 overflow-hidden flex flex-col items-center justify-center group">
        {/* 背景の微弱な光 */}
        <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* プロジェクト画像 (写真を簡単に挿入可能) */}
        <div className="relative z-10 w-[60%] aspect-video rounded-lg border-2 border-neon/30 shadow-[0_0_30px_rgba(0,255,136,0.2)] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
          />
        </div>

        {/* 下部 Detail ボタン (画像のデザインを再現) */}
        <button
          onClick={() => setIsDetailOpen(true)}
          className="absolute bottom-8 w-[80%] max-w-md py-4 bg-neon text-black font-black text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,255,136,0.3)]"
        >
          Detail
        </button>

        {/* 右側の矢印ボタン (装飾) */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20">
          <span className="text-white text-2xl">▶</span>
        </div>
      </div>

      {/* 詳細モーダル */}
      {isDetailOpen && (
        <ProjectDetail
          project={project}
          onClose={() => setIsDetailOpen(false)}
        />
      )}
    </div>
  );
};
