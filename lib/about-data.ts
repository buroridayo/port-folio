import { SiGithub, SiZenn } from "react-icons/si";

export const ABOUT_DATA = {
  name: "上原 一輝",
  image: "/about/burori.jpg",
  intro: `社会人1年目から、自分のアイデアを形にするアプリ開発に魅力を感じ、Progateで学習を開始しました。
当初はJavaScriptを学んでいましたが、開発を進める中で型の重要性を実感し、より安全で堅牢なコードを書きたいという思いから、現在はTypeScriptとJavaScriptの基礎学習に注力しています。

一時期、体調を崩し退職を経験しましたが、その期間に「自分が本当に熱中できることは何か」を自問自答した結果、やはりものづくりを通して価値を提供したいという結論に至り、エンジニアへの道を決意しました。現在はプログラミングスクールを卒業して、スクールで学んだオブジェクト指向の基礎を活かしつつ、その知識をTypeScriptの型定義（Type/Interface）に応用するなど、技術の深掘りを楽しんでいます。`,
  hobbies: ["筋トレ（継続力）", "アプリ開発", "読書", "音楽鑑賞", "ゲーム"],
  socials: [
    { name: "GitHub", href: "https://github.com/buroridayo", icon: SiGithub },
    { name: "Zenn", href: "https://zenn.dev/burori", icon: SiZenn },
  ],
};
