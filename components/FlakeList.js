import styled from "styled-components";
import { exampleflakes } from "@/lib/tempData";
import FlakeCard from "./FlakeCard";
import Link from "next/link";

export default function FlakeList() {
  const flakes = exampleflakes;
  // const flakes = useSWR("/api/products");

  // if (isLoading) {
  //   return <h1>Loading...</h1>;
  // }

  // if (!data) {
  //   return;
  // }

  return (
    <>
      <StyledList>
        {flakes.map((flake) => (
          <li key={flake._id}>
            <Link href={`/flake/${flake._id}`}>
              <FlakeCard
                name={flake.name}
                brand={flake.brand}
                ingredients={flake.ingredients}
                nutritional_table={flake.nutritional_table}
                image_url={flake.image_url}
              ></FlakeCard>
            </Link>
          </li>
        ))}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  list-style-type: none;
`;
