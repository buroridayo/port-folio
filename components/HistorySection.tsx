"use client";

import { useState, useRef } from "react";
import {
  EDUCATION_DATA,
  CAREER_DATA,
  CERTIFICATIONS,
} from "@/lib/history-data";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const HistorySection = () => {
  const [activeTab, setActiveTab] = useState<"edu" | "car">("edu");
  const contentRef = useRef<HTMLDivElement>(null);
  const data = activeTab === "edu" ? EDUCATION_DATA : CAREER_DATA;

  // タブ切り替え時のアニメーション
  useGSAP(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
    );
  }, [activeTab]);

  return (
    <div className="w-full space-y-12">
      {/* タブスイッチ */}
      <div className="flex justify-center">
        <div className="flex bg-black/40 border border-white/10 rounded-xl p-1 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("edu")}
            className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "edu"
                ? "bg-neon/20 text-neon shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                : "text-white/40 hover:text-white"
            }`}
          >
            経歴
          </button>
          <button
            onClick={() => setActiveTab("car")}
            className={`px-8 py-2 rounded-lg text-sm font-bold transition-all ${
              activeTab === "car"
                ? "bg-neon/20 text-neon shadow-[0_0_15px_rgba(0,255,136,0.3)]"
                : "text-white/40 hover:text-white"
            }`}
          >
            職歴
          </button>
        </div>
      </div>

      {/* タイムライン */}
      <div
        ref={contentRef}
        className="relative max-w-2xl mx-auto pl-8 border-l border-white/10 space-y-10"
      >
        {data.map((item, i) => (
          <div key={i} className="relative">
            {/* ドット */}
            <div className="absolute -left-9.25 top-1.5 w-4 h-4 rounded-full bg-black border-2 border-neon shadow-[0_0_10px_rgba(0,255,136,0.8)]" />

            <div className="space-y-1">
              <span className="text-xs font-mono text-neon/60 uppercase tracking-tighter">
                {item.date}
              </span>
              <h4 className="text-lg font-bold text-white/90">{item.title}</h4>
              {item.description && (
                <p className="text-sm text-white/50">{item.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* 資格セクション */}
      <div className="pt-10 border-t border-white/10">
        <h3 className="text-xl font-bold mb-6 text-neon tracking-widest italic">
          資格 / 国家資格
        </h3>
        <div className="grid gap-4">
          {CERTIFICATIONS.map((cert, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-neon/30 transition-all"
            >
              <span className="text-sm font-mono text-white/40">
                {cert.date}
              </span>
              <span className="text-sm font-bold text-white/80 group-hover:text-neon transition-colors">
                {cert.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
