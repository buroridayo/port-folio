import { NavBar } from "@/components/NavBar";
import { GlassCard } from "@/components/GlassCard";
import { SkillSection } from "@/components/SkillSection";
import { HistorySection } from "@/components/HistorySection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { AboutSection } from "@/components/AboutSection";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-12 py-32 px-4 max-w-5xl mx-auto">
      <NavBar />

      {/* About セクション (小さめ) */}
      <GlassCard id="home" title="About" className="w-full">
        <AboutSection />
      </GlassCard>

      {/* PortFolio セクション (大きめ) */}
      <GlassCard id="port" title="Portfolio" className="w-full">
        <PortfolioSection />
      </GlassCard>

      {/* History セクション (大きめ) */}
      <GlassCard id="history" title="History" className="w-full">
        <HistorySection />
      </GlassCard>

      {/* Skill セクション (大きめ) */}
      <GlassCard id="skill" title="Skill" className="w-full">
        <SkillSection />
      </GlassCard>

      <footer className="mt-12 text-white/30 text-xs font-mono tracking-tighter">
        © 2026 CODING-PARTNER // ALL RIGHTS RESERVED.
      </footer>
    </main>
  );
}
