export default {
  /*backend: { name: "git-gateway", branch: "main" },*/
  backend: { name: "test-repo", branch: "main" },
  local_backend: true,
  media_folder: "public/images",
  public_folder: "/images",
  collections: [
    {
      name: "sluzby",
      label: "Služby",
      folder: "content/sluzby/",
      extension: "mdx",
      format: "frontmatter",
      create: true,
      slug: "{{sluzba}}",
      identifier_field: "sluzba",
      summary: "{{title}}",
      fields: [
        { label: "Cesta", name: "sluzba", widget: "string" },
        { label: "Title", name: "title", widget: "string" },
        {
          label: "Tags",
          label_singular: "Tag",
          name: "tags",
          widget: "list",
          summary: "{{fields.tag}}",
          fields: [
            {
              label: "Tag",
              name: "tag",
              widget: "relation",
              collection: "meta",
              file: "tags",
              search_fields: ["tags.*"],
              display_fields: ["tags.*"],
              value_field: "tags.*",
            },
          ],
        },
        { label: "Body", name: "body", widget: "markdown" },
      ],
    },
    {
      name: "meta",
      label: "Meta",
      delete: false,
      editor: { preview: false },
      files: [
        {
          name: "tags",
          label: "Štítky",
          file: "content/meta/tags.json",
          description: "Seznam štítků",
          fields: [
            {
              name: "tags",
              label: "Štítky",
              label_singular: "Štítek",
              widget: "list",
              fields: [
                {
                  label: "Štítek",
                  name: "title",
                  widget: "string",
                  hint: "Název štítku",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
