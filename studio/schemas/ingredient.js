export default {
  name: "ingredient",
  title: "Ingredient",
  type: "document", 
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string" 
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "notes",
      title: "Notes",
      type: "text"
    }
  ]
}


