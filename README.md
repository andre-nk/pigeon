# OmahTI CMS Web App Starter

This is a OmahTI UGM's official Next.js app template that provides a solid foundation for building modern web applications tailored for rapid project development using Contentful CMS

**Features:**

- Next.js 14.1.0:
- React 18
- Tailwind CSS (+ clsx)
- Contentful Integration
- Contentful CLI Integration:
  Automatically export and generate type definitions and resolvers for Contentful content, reducing boilerplate code.

**Getting Started:**

1. **Use the template:**

   ```bash
   npx omahti-cms-web-starter new-project
   ```

2. **Configure Contentful:**

   To leverage Contentful CLI features, update the `MANAGEMENT_TOKEN` and `SPACE_ID` in your `package.json`:

   ```json
   {
      "name": "new-project",
      ...
      "scripts": {
        "dev": "next dev",
        ...
        "cf-export": "contentful space export --config contentful/export-config.json --management-token %MANAGEMENT_TOKEN% --space-id %SPACE_ID%",
        "cf-generate-types": "cf-content-types-generator contentful/export.json -X --out contentful/types"
      },
   }
   ```

   You can generate these values in your Contentful account settings. To fully utilize the Contentful features, refer to the Contentful documentation for details on creating content models, APIs, and data fetching: [https://www.contentful.com/developers/docs/](https://www.contentful.com/developers/docs/)
   </br>

3. **Start the development server:**

   ```bash
   npm run dev
   ```

**Developed by:**

- David Lois (DvaDvaD) - [Github](https://github.com/DvaDvaD)
- Andreas N. (andre-nk) - [Github](https://github.com/andre-nk)

**On Behalf of:**

- OmahTI UGM - [Github](https://github.com/OmahTI-UGM) | [Official Site](https://omahti.web.id/)
