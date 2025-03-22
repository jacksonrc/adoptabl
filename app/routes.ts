import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("login", "routes/login.tsx"),
  route("search", "routes/search.tsx"),
  route("favorites", "routes/favorites.tsx"),
] satisfies RouteConfig;
