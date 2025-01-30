import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Scott King" },
    { name: "description", content: "Welcome to my site!" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen">
      <p className="mt-8">Hello, welcome to my site.</p>
    </div>
  );
}
