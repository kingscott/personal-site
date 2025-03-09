import type { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Scott King" },
    { name: "projects", content: "Creative Projects" },
  ];
};

export default function Projects() {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <p className="font-bold">Photography</p>
        <div>
          <ul>
            <li aria-label="u00dok_1">
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="/projects/u00dok_1"
              >
                {`u00dok_1`}
              </Link>
            </li>
            <li aria-label="Waterloo Regional Space Program">
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="/projects/wrsp"
              >
                {`Waterloo Regional Space Program`}
              </Link>
            </li>
            <li aria-label="Painting Saskatchewan">
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="/projects/sask"
              >
                {`Painting Saskatchewan`}
              </Link>
            </li>
            <li aria-label="British Columbia by Train">
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="/projects/bc_train"
              >
                {`British Columbia by Train`}
              </Link>
            </li>
            <li aria-label="Barry Lorne symbols">
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="/projects/lorne_details"
              >
                {`Barry Lorne: Details`}
              </Link>
            </li>
            <li aria-label="Barry Lorne paintings">
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="/projects/lorne_paintings"
              >
                {`Barry Lorne: Paintings`}
              </Link>
            </li>
            <li aria-label="Work from hell">
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="/projects/wfh"
              >
                {`WFH: Work From Hell`}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-4">
        <p className="font-bold">Recording</p>
        <div>
          <ul>
            <li
              aria-label="In Bloom (Janelle Santi and Caroline Schmidt with Ian
                Vanderburgh)"
            >
              <p className="text-neutral-500">
                {`In Bloom (Janelle Santi and Caroline Schmidt with Ian
                Vanderburgh)`}
              </p>
            </li>
            <li
              aria-label="Love's Course (Janelle Santi and Caroline Schmidt with Devin
                Hilliker)"
            >
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="https://www.youtube.com/watch?v=o85v5nFMLP4"
              >
                {`Love's Course (Janelle Santi and Caroline Schmidt with Devin
                Hilliker)`}
              </Link>
            </li>
            <li
              aria-label="To Tell a Love Story: Selections from Wolf's Italienisches
                Liederbuch (Elizabeth and Mike Lepock with Anna Ronai)"
            >
              <Link
                className="duration-200 hover:text-red-800 transform transition-colors underline"
                to="https://www.youtube.com/watch?v=vjV8VfkR1ng"
              >
                {`To Tell a Love Story: Selections from Wolf's Italienisches
                Liederbuch (Elizabeth and Mike Lepock with Anna Ronai)`}
              </Link>
            </li>
            <li
              aria-label="Canadian Female Composers in Life, Love, and Misery (Caroline Schmidt
          with Christine Klaver-Schmidt)"
            >
              <p className="text-neutral-500">
                {`Canadian Female Composers in Life, Love, and Misery (Caroline Schmidt
          with Christine Klaver-Schmidt)`}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="font-bold">Print</p>
        <p>Coming soon</p>
      </div>
    </div>
  );
}
