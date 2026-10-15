import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),

    // At the end
    route("*", "routes/error/404.tsx"),
] satisfies RouteConfig;
