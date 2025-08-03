import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "https://graphqlzero.almansi.me/api",
  // this assumes that all your source files are in a top-level `src/` directory - you might need to adjust this to your file structure
  // documents: ["src/**/*.{ts,tsx,graphql}"],
  documents: ["src/**/*.graphql"],
  generates: {
    // "./src/__generated__/": {
    //   preset: "client",
    //   plugins: [
    //     "typescript",
    //     "typescript-operations",
    //     "typescript-react-apollo",
    //   ],
    //   presetConfig: {
    //     gqlTagName: "gql",
    //   },
    //   config: {
    //     withHooks: true,
    //     dedupeOperationSuffix: true,
    //     useTypeImports: true,
    //   },
    // },
    "src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        useTypeImports: true,
        // force types-only output
        skipTypename: false,
        dedupeOperationSuffix: true,
        withHooks: true,
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
