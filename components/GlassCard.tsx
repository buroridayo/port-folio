import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
  id?: string;
}

export const GlassCard = ({
  children,
  title,
  className,
  id,
}: GlassCardProps) => {
  return (
    <section
      id={id}
      className={`
        relative overflow-hidden
        /* 明るさアップ: bg-white/10 -> bg-white/20, saturateを追加 */
        backdrop-blur-md backdrop-saturate-180 bg-white/18
        /* 境界線をより白く */
        border border-white/80
        shadow-glass-inset
        rounded-[2.5rem]
        p-8 md:p-12
        transition-all duration-500
        /* ホバー時にネオングリーンの光を透過させる */
        hover:bg-white/0.25 hover:border-neon/60
        glass-reflection
        ${className}
      `}
    >
      {/* タイトルの文字も少し光らせる */}
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-widest uppercase italic border-l-4 border-neon pl-4 drop-shadow-[0_0_8px_rgba(57,255,20,0.8)]">
          {title}
        </h2>
      )}
      <div className="text-white font-medium leading-relaxed">{children}</div>
    </section>
  );
};
