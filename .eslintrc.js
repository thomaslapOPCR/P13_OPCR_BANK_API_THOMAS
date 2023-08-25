module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "import",
        "jsx-a11y"
    ],
    "rules": {
        "react/prop-types": 0,
        "indent": ["error", 2],
        "linebreak-style": 1,
        "quotes": ["off"],
       "eqeqeq": ["warn","always"]
    }
}
