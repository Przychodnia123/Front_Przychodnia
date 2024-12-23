import next from "eslint-config-next";
import prettier from "eslint-config-prettier";

export default [
  ...next.coreWebVitals,
  ...next.typescript,
  ...prettier
];

