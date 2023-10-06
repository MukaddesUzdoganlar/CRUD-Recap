import { createNewFlake } from "@/lib/api";
import { useRouter } from "next/router";

export default function FlakeForm({ formName }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const flakes = Object.fromEntries(formData);
    createNewFlake(flakes);
    event.target.reset();
    router.push("/");
  }
  return (
    <form aria-labelledby={formName} onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" name="brand" />

      <label htmlFor="ingredients">Ingredients</label>
      <input type="text" id="ingredients" name="ingredients" />

      <label htmlFor="nutritional_table">Nutritionals</label>
      <input type="text" id="nutritional_table" name="nutritional_table" />

      <label htmlFor="image_url">Image</label>
      <input type="text" id="image_url" name="image_url" />

      <button type="submit">Add a new flake</button>
    </form>
  );
}
