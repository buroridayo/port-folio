"use client";

import { useState } from "react";

export const ContactForm = () => {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xs font-bold text-neon uppercase tracking-widest">
            Name
          </label>
          <input
            name="name"
            required
            placeholder="Name"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label className="text-xs font-bold text-neon uppercase tracking-widest">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="example@gmail.com"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-bold text-neon uppercase tracking-widest">
          Message
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="お気軽にご連絡ください！"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-neon focus:outline-none transition-colors resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full py-4 bg-neon text-black font-black text-lg rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 shadow-[0_0_20px_rgba(0,255,136,0.2)]"
      >
        {status === "loading" ? "SENDING..." : "SEND MESSAGE"}
      </button>

      {status === "success" && (
        <p className="text-neon text-center text-sm font-bold animate-pulse">
          お問い合わせありがとうございます。
          <br />
          メッセージはSlackにて即座に確認し、追ってお返事させていただきます。
        </p>
      )}
      {status === "error" && (
        <p className="text-red-500 text-center text-sm font-bold">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
    </form>
  );
};
