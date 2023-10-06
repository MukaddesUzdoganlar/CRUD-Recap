import connect, { disconnect } from "@/db/connect";
import Flake from "@/db/Models/Flake";

export default async function handler(request, response) {
  await connect();

  switch (request.method) {
    case "GET":
      try {
        const allFlakes = await Flake.find();
        if (allFlakes.length === 0 || !allFlakes) {
          throw new Error("No Products found.");
        }
        return response.status(200).json(allFlakes);
      } catch (error) {
        return response.status(404).json({ message: error.message });
      }

    case "POST":
      try {
        const flake = request.body;
        const flakeResponse = await Flake.create(flake);
        if (!flakeResponse) {
          throw new Error("Could not create new Flake.");
        }
        return response.status(200).json({
          message: `The Flake ${flakeResponse.name} was successfully created with the id of ${flakeResponse._id}`,
        });
      } catch (error) {
        return response.status(404).json({ message: error.message });
      }

    default:
      return response
        .status(403)
        .json({ message: "Method not allowed on that route." });
  }
}
