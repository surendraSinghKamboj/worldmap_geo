import Link from "next/link";
import world from "@/map_data/world.json";
import formatString from "@/utils/formatLink";
import generateRandomColor from "@/utils/color";

export default function Home() {
  return (
    <div className="w-full h-screen flex justify-center bg-black items-center">
      <svg width="1009.6727" height="665.96301">
        {world.map((country, index) => {
          return (
            <>
              <Link href={formatString(country.link)}>
                <path
                  key={index}
                  d={country.d}
                  style={{ fill: generateRandomColor() }}
                  id={country.id}
                  className="hover:fill-lime-600"
                />
              </Link>
            </>
          );
        })}
      </svg>
    </div>
  );
}
