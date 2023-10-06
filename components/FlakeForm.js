import { createNewFlake } from "@/lib/api";

export default function FlakeForm({ formName }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const flakes = Object.fromEntries(formData);
    createNewFlake(flakes);
  }
  return (
    <form aria-labelledby={formName} onsubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />

      <label htmlFor="brand">Brand</label>
      <input type="text" id="brand" brand="name" />

      <label htmlFor="ingredients">Ingredients</label>
      <input type="text" id="ingredients" ingredients="name" />

      <label htmlFor="nutritional_table">Nutritionals</label>
      <input type="text" id="nutritional_table" nutritional_table="name" />

      <label htmlFor="image_url">Image</label>
      <input type="text" id="image_url" image="image_url" />

      <button type="submit">Add a new flake</button>
    </form>
  );
}
