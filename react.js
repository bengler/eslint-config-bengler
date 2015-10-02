// Use this for react projects
module.exports = {
  "env": {
    "node": true,
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "ecmaFeatures": {
    "jsx": true
  },
  "rules": {
    "react/no-set-state": 0,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-set-state.md
    "react/jsx-no-literals": 0,
    "react/jsx-indent-props": [2, 2],
    "react/jsx-closing-bracket-location": 1, // Consider undecided. We should gather some experience with this
    "react/no-direct-mutation-state": 2,
    "react/forbid-prop-types": 1,
    "react/no-danger": 1,            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/.md
    "react/require-extension": 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/require-extension.md
    "react/jsx-boolean-value": 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
    "react/jsx-curly-spacing": [2, 'never'],  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
    "react/jsx-max-props-per-line": [2, {maximum: 6}],  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-max-props-per-line.md
    "react/jsx-no-duplicate-props": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-duplicate-props.md
    "react/jsx-no-undef": 2,         // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-no-undef.md
    "react/jsx-sort-props": 0,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-props.md
    "react/jsx-sort-prop-types": 0,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-sort-prop-types.md
    "react/jsx-uses-react": 2,       // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-react.md
    "react/jsx-uses-vars": 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-uses-vars.md
    "react/no-did-mount-set-state": [1, "allow-in-func"], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-mount-set-state.md
    "react/no-did-update-set-state": 2, // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
    "react/no-multi-comp": 2,        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-multi-comp.md
    "react/no-unknown-property": 2,  // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-unknown-property.md
    "react/prop-types": 2,           // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
    "react/react-in-jsx-scope": 2,   // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/self-closing-comp": 2,    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/wrap-multilines": 2,      // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/wrap-multilines.md
    "react/display-name": [2, {"acceptTranspilerName": true}], // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/display-name.md
    "react/sort-comp": 2
  }
};
