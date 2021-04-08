export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "606e5fa7b6529313b454e0ee",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-ivg9br56",
                  apiId: "1f3765d2-8a6d-4a38-8a46-85e92115972f",
                },
                {
                  buildHookId: "606e5fa7100bcf120587bebc",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-fn1dxsoy",
                  apiId: "383297f4-0e28-4811-ad7b-08a964e6272d",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/UncannyValle/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-fn1dxsoy.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
