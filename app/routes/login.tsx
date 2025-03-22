import type { Route } from "./+types/login";
import { Form, redirect } from 'react-router';
import LoginImage from '../assets/login-image.jpg';
import Logo from '../assets/favicon.png';
import { fetchAccessToken } from '../api';

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Adoptabl - Login" },
    { name: "description", content: "Login to Adoptabl" },
  ];
}

export async function loader({ request }: Route.LoaderArgs) {

}

export async function clientAction({ request }: Route.ClientActionArgs) {
  try {
    const formData = await request.formData();
    const name = formData.get("name")?.toString();
    const email = formData.get("email")?.toString();
    const res = await fetchAccessToken(name, email);
    if (res?.ok) return redirect("/search");
  } catch (error) {
    throw new Error("Login failed - please try again or contact support.");
  }
}

export default function Login() {
  return (
    <>
      <div className="flex min-h-full flex-1">
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-lg lg:w-96">
            <div>
              <img
                alt="Adoptable (Fetch) logo"
                src={Logo}
                className="h-10 w-auto"
              />
              <h1 className="mt-8 text-2xl/9 font-bold tracking-tight text-gray-900 dark:text-white">Welcome to Adoptabl</h1>
              <p>The easiest way to <em>fetch</em> your furr-ever friend! Sign in to find adoptable dogs.</p>
            </div>

            <div className="mt-8">
              <div>
              <Form action="/login" method="POST" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                      Name
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="name"
                        type="name"
                        required
                        autoComplete="name"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900 dark:text-white">
                      Email address
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-600 sm:text-sm/6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-orange-400 dark:bg-orange-500 dark:hover:bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Sign in now
                    </button>
                  </div>
                </Form>
              </div>

            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            alt="Person reading a book with a shiba inu dog lying in their lap"
            src={LoginImage}
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </div>
    </>
  )
}
