import styled from "styled-components";
import useSWR from "swr";
import Image from "next/image";

export default function FlakeCard({ name, brand, image_url }) {
  return (
    <>
      <StyledWrapper>
        {/* <Image
          src={image_url}
          alt={name}
          height={300}
          width={300}
        ></Image> */}
        <h2> {name}</h2>
        <p>{brand}</p>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  background-color: lightyellow;
  border-radius: 20px;
  padding: 1rem;
`;
