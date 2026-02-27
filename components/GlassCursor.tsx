"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export const GlassCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!cursorRef.current) return;

    // パフォーマンス最適化のための Setter
    const xSetter = gsap.quickSetter(cursorRef.current, "x", "px");
    const ySetter = gsap.quickSetter(cursorRef.current, "y", "px");

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(
        {},
        {
          duration: 0.6,
          ease: "power3.out",
          onUpdate: function () {
            xSetter(e.clientX - 40);
            ySetter(e.clientY - 40);
          },
        },
      );
    };

    // ホバー時のインタラクション
    const onMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 0.3,
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        borderColor: "rgba(57, 255, 20, 0.6)", // ネオン強調
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    };

    const onMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        backgroundColor: "rgba(255, 255, 255, 0.15)",
        borderColor: "rgba(255, 255, 255, 0.3)",
        duration: 0.4,
        ease: "power2.out",
      });
    };

    // イベントリスナーの登録
    window.addEventListener("mousemove", onMouseMove);

    // aタグやbuttonタグへのインタラクション適用
    const interactiveElements = document.querySelectorAll(
      "a, button, .hover-target",
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnter);
      el.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnter);
        el.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed top-0 left-0
        w-20 h-20
        rounded-full
        pointer-events-none
        z-9999
        hidden md:block /* モバイルでは非表示 */
        
        /* ガラス表現 */
        backdrop-blur-md
        backdrop-saturate-150
        bg-white/15
        border border-white/30
        shadow-glass-cursor
        will-change-transform
      "
      style={{
        boxShadow:
          "0 8px 32px rgba(0,0,0,0.3), inset 0 0 10px rgba(57, 255, 20, 0.15), inset 0 0 5px rgba(255,255,255,0.4)",
      }}
    >
      <div className="absolute inset-0 rounded-full bg-linear-to-br from-white/20 via-transparent to-transparent opacity-50" />
    </div>
  );
};
