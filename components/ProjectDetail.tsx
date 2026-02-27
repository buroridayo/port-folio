"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export const ProjectDetail = ({
  project,
  onClose,
}: {
  project: any;
  onClose: () => void;
}) => {
  const modalRef = useRef(null);

  useGSAP(() => {
    gsap.from(modalRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.5,
      ease: "power3.out",
    });
  });

  return (
    <div className="fixed inset-0 z-10000 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        ref={modalRef}
        className="bg-dark border border-neon/30 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-4xl p-8 md:p-12 shadow-2xl"
      >
        <div className="flex justify-between items-start mb-8">
          <h2 className="text-4xl font-black text-neon tracking-tighter italic">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-white/50 hover:text-white text-2xl"
          >
            ✕
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <section>
              <h3 className="text-neon font-bold mb-2 uppercase text-xs tracking-widest">
                About
              </h3>
              <p className="text-white/80 leading-relaxed">{project.about}</p>
            </section>

            <section>
              <h3 className="text-neon font-bold mb-2 uppercase text-xs tracking-widest">
                Features
              </h3>
              <ul className="list-disc list-inside text-white/60 text-sm space-y-1">
                {project.features.map((f: string) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </section>

            <section>
              <h3 className="text-neon font-bold mb-2 uppercase text-xs tracking-widest">
                Highlights
              </h3>
              <div className="space-y-2">
                {project.appeal.map((a: string) => (
                  <div
                    key={a}
                    className="p-3 bg-white/5 rounded-lg border-l-2 border-neon text-sm"
                  >
                    {a}
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-8">
            <section>
              <h3 className="text-neon font-bold mb-4 uppercase text-xs tracking-widest">
                Tech Stack (Code)
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  ...project.tech.frontend,
                  ...project.tech.backend,
                  ...project.tech.infra,
                ].map((t: string) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-neon/10 border border-neon/30 text-neon text-xs rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <a
                href={project.url}
                target="_blank"
                className="block w-full py-3 bg-white text-black text-center font-bold rounded-xl hover:bg-neon transition-colors"
              >
                Visit Live Site
              </a>
              <a
                href={project.github}
                target="_blank"
                className="block w-full py-3 border border-white/20 text-white text-center font-bold rounded-xl hover:bg-white/10 transition-colors"
              >
                View Github
              </a>
            </div>
            <p className="text-center text-white/20 text-xs font-mono">
              Build Duration: {project.period}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
