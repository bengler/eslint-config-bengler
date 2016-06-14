module.exports = {
  "plugins": [
    "import"
  ],
  "rules": {
    "import/default": 2,
    "import/export": 2,
    "import/extensions": [2, {"js": "never", "json": "always"}],
    "import/imports-first": 2,
    "import/namespace": 2,
    "import/named": 2,
    "import/newline-after-import": 1,
    "import/no-amd": 2,
    "import/no-commonjs": 2,
    "import/no-deprecated": 0,
    "import/no-duplicates": 2,
    "import/no-extraneous-dependencies": [2, {"devDependencies": false}],
    "import/no-mutable-exports": 2,
    "import/no-named-as-default": 2,
    "import/no-named-as-default-member": 2,
    "import/no-namespace": 0,
    "import/no-nodejs-modules": 0,
    "import/no-unresolved": 2,
    "import/order": 1,
    "import/prefer-default-export": 1
  },
  "settings": {
    "import/resolve": {
      "extensions": [".js", ".jsx", ".json"]
    }
  }
}