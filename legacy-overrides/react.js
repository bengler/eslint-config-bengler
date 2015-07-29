module.exports = {
  "rules": {
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
}
