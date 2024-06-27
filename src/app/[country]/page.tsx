import Link from "next/link";
import readJsonFile from "@/actions/mapReader";
import formatString from "@/utils/formatLink";
import generateRandomColor from "@/utils/color";

interface CountryView {
  link: string;
  d: string;
  id: string;
}

interface HomeProps {
  params: {
    country: string;
  };
}

export default async function Home({ params: { country } }: HomeProps) {
  const data = await readJsonFile(country + ".json");
  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <svg width="1009.6727" height="665.96301">
        {data.map((countryView: CountryView, index: number) => (
          <Link key={index} href={formatString(countryView.link)}>
            <path
              d={countryView.d}
              id={countryView.id}
              style={{ fill: generateRandomColor() }}
              className="hover:fill-lime-600 relative"
            />
          </Link>
        ))}
      </svg>
    </div>
  );
}
