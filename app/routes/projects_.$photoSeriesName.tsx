import type { MetaFunction } from "@remix-run/cloudflare";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Scott King" },
    { name: "Photo series", content: "Something new" },
  ];
};

export async function loader() {
  return new Response(JSON.stringify({ title: "Hello", year: "2019" }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export default function PhotoSeries() {
  const data = useLoaderData<typeof loader>();
  const { photoSeriesName } = useParams();
  console.log(photoSeriesName, data);
  return (
    <div>
      <div className="flex mb-4">
        <p className="font-bold mr-1">{data.title}</p>
        <p className="mr-1">({data.year})</p>
        <p>By: Scott King</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center md:gap-8 xs:gap-1 w-full">
        <div>
          <img className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 object-cover" />
        </div>
      </div>
    </div>
  );
}
