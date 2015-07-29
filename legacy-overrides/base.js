module.exports = {
  "rules": {
    "quotes": 1,
    "comma-dangle": [1, "always-multiline"],
    "semi": [1, "always"],
    "brace-style": 1,
    "no-var": 1,
    "prefer-const": 1,
    "block-scoped-var": 1, // Looks like elint has a bug here. It won't allow referencing function declarations before its definition
    "spaced-line-comment": 1,
    "no-nested-ternary": 1,
    "strict": 1,
    "no-else-return": 1,
    "space-before-function-paren": 1,
    "no-param-reassign": 1,
    "no-multiple-empty-lines": 1
  }
};
