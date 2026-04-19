import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ルパボワクイズ" },
    { name: "description", content: "Welcome to ルパボワクイズ!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
