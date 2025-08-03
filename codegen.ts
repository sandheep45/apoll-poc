import { GRAPHQL_SERVER_URL } from "@/contants";
import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: GRAPHQL_SERVER_URL,
  documents: ["**/*.graphql"],
  generates: {
    "src/graphql/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
    },
  },
  config: {
    useTypeImports: true,
    skipTypename: false,
    dedupeOperationSuffix: true,
    withHooks: true,
  },
  ignoreNoDocuments: true,
};

export default config;
