module.exports = {
  "ecmaFeatures": {
    "arrowFunctions": true,
    "blockBindings": true,
    "classes": true,
    "defaultParams": true,
    "destructuring": true,
    "forOf": true,
    "generators": false,
    "modules": true,
    "objectLiteralComputedProperties": true,
    "objectLiteralDuplicateProperties": false,
    "objectLiteralShorthandMethods": true,
    "objectLiteralShorthandProperties": true,
    "spread": true,
    "restParams": true,
    "experimentalObjectRestSpread": true,
    "superInFunctions": true,
    "templateStrings": true,
    "jsx": false
  },
  "rules": {
    "accessor-pairs": 1,
    "array-bracket-spacing": [2, "never"],
    "arrow-body-style": [2, "as-needed"],
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "block-spacing": [2, "always"],
    "brace-style": [2, "1tbs", {"allowSingleLine": false}],
    "callback-return": 2,
    "camelcase": 2,
    "comma-dangle": 0,
    "comma-spacing": [2, {"after": true, "before": false}],
    "comma-style": [2, "last"],
    "complexity": [1, 9],
    "computed-property-spacing": 2,
    "consistent-return": 2,
    "consistent-this": [2, "self"],
    "constructor-super": 2,
    "curly": 2,
    "default-case": 2,
    "dot-location": [2, "property"],
    "dot-notation": [2, {"allowKeywords": true}],
    "eol-last": 2,
    "eqeqeq": 0,
    "func-names": 0,
    "func-style": 0,
    "generator-star-spacing": [2, {"after": true, "before": false}],
    "global-require": 0,
    "guard-for-in": 2,
    "handle-callback-err": 2,
    "id-length": [1, {"exceptions": ["i", "j", "x", "y", "z"], "min": 2}],
    "id-match": 0,
    "indent": [2, 2, {"SwitchCase": 1}],
    "init-declarations": 0,
    "jsx-quotes": [2, "prefer-double"],
    "key-spacing": [2, {"afterColon": true, "beforeColon": false}],
    "linebreak-style": 2,
    "lines-around-comment": 0,
    "max-depth": [2, 2],
    "max-len": [2, 150, 4],
    "max-nested-callbacks": [2, 3],
    "max-params": [2, 5],
    "max-statements": [1, 50],
    "new-cap": [2, {"capIsNew": false}],
    "new-parens": 0,
    "newline-after-var": 0,
    "no-alert": 2,
    "no-array-constructor": 2,
    "no-arrow-condition": 2,
    "no-bitwise": 2,
    "no-caller": 2,
    "no-case-declarations": 2,
    "no-catch-shadow": 0,
    "no-class-assign": 2,
    "no-cond-assign": [2, "always"],
    "no-console": 2,
    "no-const-assign": 2,
    "no-constant-condition": 2,
    "no-continue": 0,
    "no-control-regex": 2,
    "no-debugger": 2,
    "no-delete-var": 2,
    "no-div-regex": 1,
    "no-dupe-args": 2,
    "no-dupe-class-members": 2,
    "no-dupe-keys": 2,
    "no-duplicate-case": 2,
    "no-else-return": 2,
    "no-empty": 2,
    "no-empty-character-class": 2,
    "no-empty-label": 2,
    "no-empty-pattern": 2,
    "no-eq-null": 2,
    "no-eval": 2,
    "no-ex-assign": 2,
    "no-extend-native": 2,
    "no-extra-bind": 2,
    "no-extra-boolean-cast": 2,
    "no-extra-parens": [2, "functions"],
    "no-extra-semi": 2,
    "no-fallthrough": 2,
    "no-floating-decimal": 2,
    "no-func-assign": 2,
    "no-implicit-coercion": 0,
    "no-implied-eval": 2,
    "no-inline-comments": 0,
    "no-inner-declarations": 2,
    "no-invalid-regexp": 2,
    "no-invalid-this": 0,
    "no-irregular-whitespace": 2,
    "no-iterator": 1,
    "no-label-var": 2,
    "no-labels": 2,
    "no-lone-blocks": 2,
    "no-lonely-if": 2,
    "no-loop-func": 2,
    "no-magic-numbers": 1,
    "no-mixed-requires": 2,
    "no-mixed-spaces-and-tabs": 2,
    "no-multi-spaces": 2,
    "no-multi-str": 2,
    "no-multiple-empty-lines": [2, {"max": 2}],
    "no-native-reassign": 2,
    "no-negated-condition": 2,
    "no-negated-in-lhs": 2,
    "no-nested-ternary": 2,
    "no-new": 2,
    "no-new-func": 2,
    "no-new-object": 2,
    "no-new-require": 2,
    "no-new-wrappers": 2,
    "no-obj-calls": 2,
    "no-octal": 2,
    "no-octal-escape": 2,
    "no-param-reassign": 1,
    "no-path-concat": 2,
    "no-plusplus": 0,
    "no-process-env": 1,
    "no-process-exit": 1,
    "no-proto": 2,
    "no-redeclare": 2,
    "no-regex-spaces": 2,
    "no-restricted-modules": 0,
    "no-restricted-syntax": [2, "WithStatement"],
    "no-return-assign": 2,
    "no-script-url": 2,
    "no-self-compare": 2,
    "no-sequences": 2,
    "no-shadow": 2,
    "no-shadow-restricted-names": 2,
    "no-spaced-func": 2,
    "no-sparse-arrays": 2,
    "no-sync": 1,
    "no-ternary": 0,
    "no-this-before-super": 2,
    "no-throw-literal": 2,
    "no-trailing-spaces": 2,
    "no-undef": 2,
    "no-undef-init": 2,
    "no-undefined": 2,
    "no-underscore-dangle": 0,
    "no-unexpected-multiline": 1,
    "no-unneeded-ternary": 2,
    "no-unreachable": 2,
    "no-unused-expressions": 2,
    "no-unused-vars": [2, {"args": "none", "vars": "all"}],
    "no-use-before-define": [2, "nofunc"],
    "no-useless-call": 2,
    "no-useless-concat": 2,
    "no-var": 2,
    "no-void": 0,
    "no-warning-comments": [1, {"location": "anywhere", "terms": ["todo", "fixme", "xxx"]}],
    "no-with": 2,
    "object-curly-spacing": [2, "never"],
    "object-shorthand": [2, "methods"],
    "one-var": [2, "never"],
    "operator-assignment": [2, "always"],
    "operator-linebreak": [2, "before"],
    "padded-blocks": 0,
    "prefer-arrow-callback": 2,
    "prefer-const": 2,
    "prefer-reflect": 1,
    "prefer-spread": 2,
    "prefer-template": 2,
    "quote-props": [2, "as-needed"],
    "quotes": [2, "single", "avoid-escape"],
    "radix": 2,
    "require-jsdoc": 0,
    "require-yield": 2,
    "semi": [2, "never"],
    "semi-spacing": [2, {"after": true, "before": false}],
    "sort-vars": 0,
    "space-after-keywords": 2,
    "space-before-blocks": 2,
    "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
    "space-before-keywords": [2, "always"],
    "space-in-parens": [2, "never"],
    "space-infix-ops": 2,
    "space-return-throw-case": 2,
    "space-unary-ops": 2,
    "spaced-comment": 0,
    "strict": [2, "never"],
    "use-isnan": 2,
    "valid-jsdoc": 0,
    "valid-typeof": 2,
    "vars-on-top": 0,
    "wrap-iife": [2, "any"],
    "wrap-regex": 0,
    "yoda": 2
  }
};
