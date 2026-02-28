"use client";

import { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_PROJECTS } from "@/lib/portfolio-data";
import { ProjectDetail } from "./ProjectDetail";

export const PortfolioSection = () => {
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  // 現在表示しているプロジェクトの番号を管理 (初期値は0)
  const [currentIndex, setCurrentIndex] = useState(0);

  const project = PORTFOLIO_PROJECTS[currentIndex];

  // 次のプロジェクトへ
  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PORTFOLIO_PROJECTS.length);
  };

  // 前のプロジェクトへ (左ボタンも作る場合)
  const prevProject = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + PORTFOLIO_PROJECTS.length) % PORTFOLIO_PROJECTS.length,
    );
  };

  return (
    <div className="w-full py-10 relative">
      {/* メインカードエリア */}
      <div className="relative aspect-video w-full rounded-[2.5rem] bg-linear-to-b from-[#0f2f1f] to-black border border-white/10 overflow-hidden flex flex-col items-center justify-center group">
        <div className="absolute inset-0 bg-neon/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

        {/* プロジェクト画像 */}
        <div className="relative z-10 w-[60%] aspect-video rounded-lg border-2 border-neon/30 shadow-[0_0_30px_rgba(0,255,136,0.2)] overflow-hidden transition-all duration-500">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            key={project.id} // keyを付けると画像切り替えがスムーズになります
          />
        </div>

        {/* 下部 Detail ボタン */}
        <button
          onClick={() => setIsDetailOpen(true)}
          className="absolute bottom-8 z-20 w-[80%] max-w-md py-4 bg-neon text-white font-black text-xl rounded-full hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_rgba(0,255,136,0.3)]"
        >
          Detail
        </button>

        {/* 左側の矢印ボタン (追加すると便利です) */}
        <button
          onClick={prevProject}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
        >
          <span className="text-white text-2xl">◀</span>
        </button>

        {/* 右側の矢印ボタン (修正) */}
        <button
          onClick={nextProject}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 cursor-pointer hover:bg-white/20 transition-all"
        >
          <span className="text-white text-2xl">▶</span>
        </button>
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
