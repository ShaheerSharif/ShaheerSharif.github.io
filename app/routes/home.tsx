import type { Route } from "./+types/home";
import { PageHome } from "~/pages/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Portfolio" },
    { name: "description", content: "Shaheer portfolio" },
  ];
}

export default function Home() {
  return <PageHome />;
}
