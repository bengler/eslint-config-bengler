// Use this for react projects
module.exports = {
  "env": {
    "node": true,
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/display-name": ["error", {"ignoreTranspilerName": false}],
    "react/forbid-prop-types": "warn",
    "react/forbid-component-props": "off",
    "react/jsx-wrap-multilines": "error",
    "react/jsx-no-comment-textnodes": "error",
    "react/jsx-sort-props": "off",
    "react/jsx-first-prop-new-line": ["error", "multiline"],
    "react/jsx-no-target-blank": "error",
    "react/jsx-filename-extension": ["error", {"extensions": [".js"]}],
    "react/jsx-boolean-value": "error",
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": ["error", "never"],
    "react/jsx-equals-spacing": ["error", "never"],
    "react/jsx-handler-names": "error",
    "react/jsx-indent": ["error", 2],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-key": "error",
    "react/jsx-max-props-per-line": ["error", {"maximum": 6}],
    "react/jsx-no-bind": "warn",
    "react/jsx-no-duplicate-props": "error",
    "react/jsx-no-literals": "off",
    "react/jsx-no-undef": "error",
    "react/jsx-pascal-case": "error",
    "react/jsx-space-before-closing": ["error", "always"],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/no-danger": "warn",
    "react/no-danger-with-children": "error",
    "react/no-deprecated": "error",
    "react/no-did-mount-set-state": "warn",
    "react/no-did-update-set-state": "error",
    "react/no-direct-mutation-state": "error",
    "react/no-find-dom-node": "warn",
    "react/no-is-mounted": "error",
    "react/no-multi-comp": "error",
    "react/no-render-return-value": "error",
    "react/no-set-state": "off",
    "react/no-string-refs": "warn",
    "react/no-unknown-property": "error",
    "react/prefer-es6-class": "off",
    "react/prop-types": "error",
    "react/react-in-jsx-scope": "error",
    "react/require-optimization": "warn",
    "react/require-render-return": "error",
    "react/prefer-stateless-function": "warn",
    "react/sort-comp": "off",
    "react/sort-prop-types": "off",
    "react/self-closing-comp": "error"
  }
}
