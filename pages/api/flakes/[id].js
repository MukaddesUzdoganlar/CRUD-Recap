import connect from "@/db/connect";
import Flake from "@/db/Models/Flake";

export default async function handler(request, response) {
  await connect();
  const { id } = request.query;
  switch (request.method) {
    case "GET":
      try {
        const flakeResponse = await Flake.findById(id);
        if (!flakeResponse) {
          throw new Error("Flake was not found.");
        }
        return response.status(200).json(flakeResponse);
      } catch (error) {
        return response.status(404).json({ message: error.message });
      }

    case "DELETE":
      try {
        const flakeResponse = await Flake.findByIdAndDelete(id);
        if (!flakeResponse) {
          throw new Error("Flake was not deleted.");
        }
        return response
          .status(200)
          .json({ message: "Flake successfully deleted." });
      } catch (error) {
        return response.status(404).json({ message: error.message });
      }

    case "PUT":
      try {
        const updatedFlake = request.body;
        const flakeResponse = await Flake.findByIdAndUpdate(id, updatedFlake);

        if (!flakeResponse) {
          throw new Error("Could not update the Flake.");
        }
        return response
          .status(200)
          .json({ message: `Flake ${flakeResponse._id} as updated.` });
      } catch (error) {
        return response.status(404).json({ message: error.message });
      }

    default:
      return response
        .status(403)
        .json({ message: "Method not allowed on that route." });
  }
}
