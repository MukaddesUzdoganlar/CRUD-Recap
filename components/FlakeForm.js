export default function FlakeForm({ onSubmit, formName, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const flakes = Object.fromEntries(formData);
    onSubmit(flakes);
  }
  return (
    <FormContainer aria-labelledby={formName} onsubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Input
        type="text"
        id="name"
        name="name"
        defaultValue={defaultData?.name}
      />

      <Label htmlFor="name">Brand</Label>
      <Input
        type="text"
        id="brand"
        brand="name"
        defaultValue={defaultData?.brand}
      />

      <Label htmlFor="name">Ingredients</Label>
      <Input
        type="text"
        id="ingredients"
        ingredients="name"
        defaultValue={defaultData?.ingredients}
      />

      <Label htmlFor="name">Nutritionals</Label>
      <Input
        type="text"
        id="nutritional_table"
        nutritional_table="name"
        defaultValue={defaultData?.nutritional_table}
      />

      <Label htmlFor="name">Image</Label>
      <Input
        type="text"
        id="image_url"
        image="image_url"
        defaultValue={defaultData?.image_url}
      />

      <button type="submit">
        {defaultData ? "Update flake" : "Add a new flake"}
      </button>
    </FormContainer>
  );
}
