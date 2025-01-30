import { useState } from "react";
import type { LinksFunction } from "@remix-run/cloudflare";
import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="fixed left-0 top-0 w-full">
          <div className="bg-neutral-100 flex items-center justify-between opacity-90 relative">
            <div>
              <img
                className="h-16"
                alt="Scott King logo"
                src="/scott-logo-light.png"
              />
            </div>
            <div className="md:hidden xs:px-4 mr-4">
              <button
                className="flex font-medium group/menu hover:bg-neutral-200 items-center px-4 py-2 ring-red-400 ring-1 rounded-full shadow-lg shadow-neutral-800/4 text-sm text-neutral-800"
                onClick={() => setNavOpen(!navOpen)}
              >
                Menu
              </button>
            </div>
            <nav
              className={`inset-x-4 fixed ${
                navOpen ? "visible" : "invisible"
              } md:block md:visible md:relative md:top-0 origin-top top-20 z-0`}
              aria-label="Main menu"
              role="navigation"
            >
              <ul
                className={`bg-neutral-200 flex flex-col ${
                  navOpen ? "" : "opacity-0"
                } p-4 rounded-md md:bg-neutral-100 md:flex md:flex-row md:justify-end md:mr-4 md:opacity-100 md:space-x-8 md:space-y-0 md:top-0 md:visible relative space-y-4 transition-[opacity] ease-in-out duration-500`}
              >
                <li
                  className="duration-200 flex hover:text-red-800 justify-center text-base transform transition-colors"
                  aria-label="Home page"
                >
                  <Link to="/">Home</Link>
                </li>
                <li
                  className="duration-200 flex hover:text-red-800 justify-center text-base transform transition-colors"
                  aria-label="Contact information"
                >
                  <Link to="/contact">Contact</Link>
                </li>
                <li
                  className="duration-200 flex hover:text-red-800 justify-center text-base transform transition-colors"
                  aria-label="Scott's creative work"
                >
                  <Link to="/series">Creative Work</Link>
                </li>
                <li
                  className="duration-200 flex hover:text-red-800 justify-center text-base transform transition-colors"
                  aria-label="Art cv"
                >
                  <Link to="/scott-king-cv.pdf" reloadDocument>
                    CV
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="flex pt-20 px-8">{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
