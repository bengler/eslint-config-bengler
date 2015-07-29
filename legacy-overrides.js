// Do not use this for new projects. Its going away eventually, but for now it provides a way to ease migration to
// base rules by turning some of the errors into warnings instead.

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
    "no-multiple-empty-lines": 1,

    "react/display-name": 1,
    "react/jsx-boolean-value": 1,
    "react/jsx-quotes": [1, "double"],
    "react/jsx-no-undef": 1,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-multi-comp": 1,
    "react/no-unknown-property": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/self-closing-comp": 1,
    "react/wrap-multilines": 1,
    "react/sort-comp": [1, {
      "order": [
        "displayName",
        "propTypes",
        "contextTypes",
        "childContextTypes",
        "mixins",
        "statics",
        "defaultProps",
        "constructor",
        "getDefaultProps",
        "getInitialState",
        "getChildContext",
        "componentWillMount",
        "componentDidMount",
        "componentWillReceiveProps",
        "shouldComponentUpdate",
        "componentWillUpdate",
        "componentDidUpdate",
        "componentWillUnmount",
        "/^on.+$/",
        "/^get.+$/",
        "/^render.+$/",
        "render"
      ]
    }]
  }
};
