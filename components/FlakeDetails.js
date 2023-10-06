import styled from "styled-components";
import useSWR from "swr";
import Image from "next/image";

export default function FlakeDetails({
  name,
  brand,
  ingredients,
  nutritional_table,
  image_url,
}) {
  const flake = {
    _id: "1",
    name: "Cheerios",
    brand: "General Mills",
    ingredients: [
      "Whole Grain Oats",
      "Corn Starch",
      "Sugar",
      "Salt",
      "Tripotassium Phosphate",
      "Vitamin E",
    ],
    nutritional_table: [
      "Calories: 100",
      "Total Fat: 2g",
      "Cholesterol: 0mg",
      "Sodium: 140mg",
      "Total Carbohydrate: 20g",
      "Protein: 3g",
    ],
    image_url:
      "https://images.unsplash.com/photo-1646838979504-041107041f80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1476&q=80",
  };
  return (
    <>
      <StyledWrapper>
        {/* <Image
          src={image_url}
          alt={name}
          height={300}
          width={300}
        ></Image> */}
        <h2> {flake.name}</h2>
        <p>{flake.brand}</p>
        <p> Ingredients: {flake.ingredients}</p>
        <p> Nutritional Information: {flake.nutritional_table}</p>
      </StyledWrapper>
    </>
  );
}

const StyledWrapper = styled.div`
  background-color: lightyellow;
  border-radius: 20px;
  padding: 1rem;
`;
