import type { Route } from "./+types/error/404";
import { Page404 } from "~/pages/error/404";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Page not found" },
    { name: "description", content: "404 - Page not found" },
  ];
}

export default function Error404() {
  return <Page404 />;
}
