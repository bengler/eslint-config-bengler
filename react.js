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
    "react/display-name": [2, {"ignoreTranspilerName": false}],
    "react/forbid-prop-types": 1,
    "react/jsx-boolean-value": 2,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": [2, "never"],
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-handler-names": 2,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-key": 2,
    "react/jsx-max-props-per-line": [2, {"maximum": 6}],
    "react/jsx-no-bind": 1,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-literals": 0,
    "react/jsx-no-undef": 2,
    "react/jsx-pascal-case": 2,
    "react/jsx-space-before-closing": [2, "always"],
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/no-danger": 1,
    "react/no-deprecated": 2,
    "react/no-did-mount-set-state": [1, "allow-in-func"],
    "react/no-did-update-set-state": 2,
    "react/no-direct-mutation-state": 2,
    "react/no-is-mounted": 2,
    "react/no-multi-comp": 2,
    "react/no-set-state": 0,
    "react/no-string-refs": 1,
    "react/no-unknown-property": 2,
    "react/prefer-es6-class": 0,
    "react/prop-types": 2,
    "react/react-in-jsx-scope": 2,
    "react/require-extension": 2,
    "react/sort-comp": 0,
    "react/sort-prop-types": 0,
    "react/self-closing-comp": 2,
    "react/wrap-multilines": 2
  }
};
