import FlakeDetails from "@/components/FlakeDetails";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Details</h1>
      <FlakeDetails
      // name={flake.name}
      // brand={flake.brand}
      // ingredients={flake.ingredients}
      // nutritional_table={flake.nutritional_table}
      // image_url={flake.image_url}
      />
    </>
  );
}

// import ArtPieceDetails from "@/components/ArtPieceDetails/ArtPieceDetails";
// import { useRouter } from "next/router";

// export default function ArtPieceDetail({ pieces }) {
//   const router = useRouter();
//   const { slug } = router.query;

//   const piece = pieces.find((piece) => piece.slug === slug);

//   return (
//     <ArtPieceDetails
//       slug={piece.slug}
//       artist={piece.artist}
//       title={piece.name}
//       year={piece.year}
//       genre={piece.genre}
//       image={piece.imageSource}
//     />
//   );
// }
