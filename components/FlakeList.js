import styled from "styled-components";
import FlakeCard from "./FlakeCard";
import Link from "next/link";
import useSWR from "swr";

export default function FlakeList() {
  const { data: flakes, isLoading, error } = useSWR("/api/flakes");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!flakes) {
    return;
  }

  return (
    <>
      <StyledList>
        {flakes.map((flake) => (
          <li key={flake._id}>
            <Link href={`/flakes/${flake._id}`}>
              <FlakeCard
                name={flake.name}
                brand={flake.brand}
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
