import { ContactForm } from "./ContactForm";

export const ContactCard = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start py-6">
      {/* 左側：メッセージエリア */}
      <div className="lg:col-span-4 space-y-4">
        <h3 className="text-3xl font-black text-white italic tracking-tighter">
          LET'S <span className="text-neon">CONNECT</span>.
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">
          開発案件のご相談や採用に関するお問い合わせ、また技術的な情報交換など、幅広く受け付けております。
          <br />
          メッセージは私のSlackへダイレクトに届きますので、内容を確認次第、迅速に折り返しご連絡いたします。
        </p>
      </div>

      {/* 右側：フォームエリア */}
      <div className="lg:col-span-8 w-full bg-white/5 border border-white/10 p-8 rounded-4xl backdrop-blur-sm">
        <ContactForm />
      </div>
    </div>
  );
};
