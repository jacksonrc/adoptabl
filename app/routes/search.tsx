import type { Route } from "./+types/search";
import { searchAndFilterDogs } from '../api';
import { redirect } from "react-router";
import { Suspense } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adoptabl - Search Page" },
    { name: "description", content: "Search by breed, age, or name." },
  ];
}

export async function clientLoader({ request }: Route.ClientLoaderArgs) {
  try {
    let sizeParams = 25;
    let nextParams = 0;
    let filterParams = "breed:asc";
    const res = await searchAndFilterDogs(sizeParams, nextParams, filterParams);
    if (res?.ok && res.status == 200) {
      return res;
    } else {
      throw redirect("/login");
    }
  } catch (error) {
    throw new Error("Unauthorized request - try again.")
  }
}

// actions should include pagination and sort by asc/desc toggle?

export default function SearchPage({ loaderData }: Route.ComponentProps) {
  let dogs: string[] = loaderData.resultIds;
  return (
    <>
      <h1>Search Results</h1>
      <ul>
        {dogs.map((dog: string) => (
          <li key={dog}>
            {dog}
          </li>
        ))}
      </ul>
    </>
  )
}