const getNamingConventionRule = () => [
  "error",
  {
    selector: "variable",
    format: ["camelCase", "UPPER_CASE"],
  },
  {
    selector: "variable",
    filter: "__typename",
    format: null,
  },
  {
    selector: "parameter",
    format: ["camelCase"],
  },
  {
    selector: "parameter",
    filter: "_",
    format: null,
  },
  {
    selector: "enumMember",
    format: ["UPPER_CASE", "PascalCase"],
  },
];

module.exports = {
  ignorePatterns: ["**/node_modules/", "**/dist/", "**/*.js"],
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  extends: [
    "airbnb-base",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: [
    "@typescript-eslint",
    "import",
    "no-only-tests",
    "prettier",
    "unicorn",
  ],
  rules: {
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-use-before-define": ["error", { functions: false }],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "allow-as-parameter",
      },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { ignoreRestSiblings: true },
    ],
    "@typescript-eslint/array-type": [
      "error",
      {
        default: "array-simple",
        readonly: "array-simple",
      },
    ],
    camelcase: "off",
    "@typescript-eslint/naming-convention": getNamingConventionRule(),
    curly: ["error", "all"],
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", ts: "never" },
    ],
    "import/no-extraneous-dependencies": ["error"],
    "import/no-named-as-default-member": "error",
    "import/prefer-default-export": "off",
    "lines-around-directive": "warn",
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "max-classes-per-file": "off",
    "new-cap": "off",
    "no-bitwise": "warn",
    "no-alert": "error",
    "no-console": ["error", { allow: ["warn", "info", "error"] }],
    "no-debugger": "error",
    "no-fallthrough": "warn",
    "no-nested-ternary": "off",
    // The Typescript version doesn't warn for optional chaining
    "no-unused-expressions": "off",
    "@typescript-eslint/no-unused-expressions": "error",

    // Deprecated in favor of ban-ts-comments: https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "error",

    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    "import/no-duplicates": "error",
    "no-plusplus": "off",
    "no-prototype-builtins": "warn",
    "no-restricted-globals": "error",
    "no-restricted-properties": "warn",
    "no-restricted-syntax": "warn",
    "no-return-assign": "error",
    "no-undef": "error",
    "no-underscore-dangle": "off",
    "no-unreachable": "warn",
    "no-unsafe-finally": "warn",
    // Turning "no-unused-vars" and "no-use-before-define" off
    // since the rule is already covered by
    // @typescript-eslint/no-unused-vars and @typescript-eslint/no-use-before-define
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-multiple-empty-lines": "error",
    "operator-assignment": "warn",
    "prefer-destructuring": "off",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "import/no-cycle": "error",
    "import/order": [
      "error",
      {
        alphabetize: {
          order: "asc",
        },
        pathGroups: [
          {
            pattern: "**/*.service",
            group: "object",
            position: "after",
          },
          {
            pattern: "**/*.helper",
            group: "object",
            position: "after",
          },
          {
            pattern: "types/**",
            group: "type",
          },
          {
            pattern: "types",
            group: "type",
          },
        ],
        groups: [
          "builtin",
          "external",
          "internal",
          "unknown",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        "newlines-between": "always",
      },
    ],
    // File and import related
    "unicorn/filename-case": [
      "warn",
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ], // Manual fix
    "unicorn/relative-url-style": "error",

    // Abbreviations and naming
    "unicorn/prevent-abbreviations": [
      "off",
      {
        checkShorthandImports: true,
        allowList: {
          req: true,
          res: true,
          ref: true,
          Param: true,
          args: true,
          env: true,
          Env: true,
          Ref: true,
          el: true,
          toRef: true,
          def: true,
          pkg: true,
          params: true,
          Params: true,
          Props: true,
          props: true,
          src: true,
        },
      },
    ], // Manual fix

    // Array and function related
    "unicorn/require-number-to-fixed-digits-argument": "error",
  },
  settings: {
    "import/resolver": {
      node: {
        moduleDirectory: ["node_modules"],
      },
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
