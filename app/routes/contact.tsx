import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Scott King" },
    { name: "description", content: "Welcome to my site!" },
  ];
};

export default function Contact() {
  return (
    <div className="flex flex-col">
      <div className="mb-4">
        <p>
          If you would like to get a hold of me, shoot me an email
          <span className="link">
            <a
              aria-label="Email address"
              href="mailto:piton_tent_0g@icloud.com?subject=👋"
            />
          </span>
        </p>
        <code>piton_tent_0g@icloud.com</code>
        <p className="text-xs">
          I use a service to obfuscate my personal email address. The above
          email will redirect to my personal address.
        </p>
      </div>
      <div>
        <p>Otherwise, you can find me here:</p>
        <ul>
          <li className="link">
            <a
              aria-label="GitHub"
              href="https://github.com/kingscott"
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          </li>
          <li className="link">
            <a
              aria-label="LinkedIn"
              href="https://linkedin.com/in/kingscott22"
              rel="noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
