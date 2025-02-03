import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import { Link } from "@remix-run/react";
import photoSeriesData from "../../data/photoSeries.json";

export const meta: MetaFunction = () => {
  return [
    { title: "Scott King" },
    { name: "Photo series", content: "Something new" },
  ];
};

interface SeriesData {
  [key: string]: PhotoSeries;
}

interface PhotoSeries {
  imagesFolderPath: string;
  images: string[];
  title: string;
  year: string;
}

const getPhotoSeries = async (photoSeriesName: string) => {
  const seriesData = photoSeriesData as SeriesData;
  return new Response(
    JSON.stringify(seriesData[photoSeriesName] as PhotoSeries),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export async function loader({ params }: LoaderFunctionArgs) {
  if (params?.photoSeriesName === undefined) {
    return new Response("Not found", { status: 404 });
  }
  return await getPhotoSeries(params?.photoSeriesName);
}

export default function PhotoSeries() {
  const data = useLoaderData<PhotoSeries>();
  if (!data) return null;
  return (
    <div>
      <div className="flex mb-4">
        <p className="font-bold mr-1">{data.title}</p>
        <p className="mr-1">({data.year})</p>
      </div>
      <div className="flex flex-wrap gap-4 justify-center md:gap-8 xs:gap-1 w-full">
        {data?.images?.map((image) => {
          if (!image) return null;
          return (
            <img
              alt={image}
              className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-52 lg:w-52 object-cover"
              key={image}
              src={`/images/${data.imagesFolderPath}/${image}`}
            />
          );
        })}
      </div>
    </div>
  );
}
