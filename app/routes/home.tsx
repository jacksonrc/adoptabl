import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adoptabl" },
    { name: "description", content: "The easiest way to fetch your furr-ever friend!" },
  ];
}

export default function Home() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4 px-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-4xl font-bold text-center dark:text-white dark:text-white">
            Welcome to Adoptabl!
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            The easiest way to <em>fetch</em> your furr-ever friend!
          </p>
        </header>
        <nav className="flex flex-col sm:flex-row items-align gap-4">
          <Link to="/login" className="bg-orange-500 text-white text-center font-bold py-2 px-4 rounded hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 dark:text-black">
            Login To Get Started
          </Link>
          <Link to="/search" className="bg-orange-500 text-white text-center font-bold py-2 px-4 rounded hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 dark:text-black">
            Search for Dogs
          </Link>        
          <Link to="/favorites" className="bg-orange-500 text-white text-center font-bold py-2 px-4 rounded hover:bg-orange-600 dark:bg-orange-400 dark:hover:bg-orange-500 dark:text-black">
            View Your Favorites
          </Link>
        </nav>
      </div>
    </main>
  );
}
