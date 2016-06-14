module.exports = {
  "plugins": [
    "import"
  ],
  "rules": {
    "import/default": "error",
    "import/export": "error",
    "import/extensions": ["error", {"js": "never", "json": "always"}],
    "import/imports-first": "error",
    "import/namespace": "error",
    "import/named": "error",
    "import/newline-after-import": "warn",
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-deprecated": "off",
    "import/no-duplicates": "error",
    "import/no-extraneous-dependencies": ["error", {"devDependencies": false}],
    "import/no-mutable-exports": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-namespace": "off",
    "import/no-nodejs-modules": "off",
    "import/no-unresolved": "error",
    "import/order": "warn",
    "import/prefer-default-export": "warn"
  },
  "settings": {
    "import/resolve": {
      "extensions": [".js", ".jsx", ".json"]
    }
  }
}