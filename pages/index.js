import FlakeList from "@/components/FlakeList";
import styles from "@/styles";
import styled from "styled-components";

export default function HomePage() {
  return (
    <div>
      <StyledHeader>Sugared Flakes</StyledHeader>
      <FlakeList />
    </div>
  );
}

const StyledHeader = styled.h1`
  text-align: center;
  color: brown;
`;
