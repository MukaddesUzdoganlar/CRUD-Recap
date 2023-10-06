import FlakeList from "@/components/FlakeList";
import styled from "styled-components";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <StyledHeader>Sugared Flakes</StyledHeader>
      <Link href={"/dashboard"}> Zum Dashboard</Link>
      <FlakeList />
    </div>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
  color: brown;
`;
