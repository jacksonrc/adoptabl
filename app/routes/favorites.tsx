import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adoptabl - Favorite Dogs" },
    { name: "description", content: "A list of your favorite dogs available for adoption." },
  ];
}

export default function Favorites() {
  return (
    <>
      <h1>Favorites</h1>
    </>
  );
}