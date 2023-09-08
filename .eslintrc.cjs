module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    "overrides": [
        {
            "env": {
                "node": true,
            },
            "files": [
                ".eslintrc.{js,cjs}",
            ],
            "parserOptions": {
                "sourceType": "script",
            },
        },
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
    },
    "plugins": [
        "@typescript-eslint",
    ],
    "rules": {
        "indent": [ "error", 4, ],
        "comma-dangle": [
            "error", 
            {
                "arrays": "always",
                "objects": "always",
                "imports": "always",
                "exports": "always",
                "functions": "never",
            },
        ],
        "object-curly-spacing" : [
            "error",
            "always",
            {
                "arraysInObjects" : true,
                "objectsInObjects" : true,
            },
        ],
        "array-bracket-spacing" : [
            "error",
            "always",
            {
                "singleValue": true,
                "objectsInArrays" : true,
                "arraysInArrays" : true,
            },
        ],
        "comma-spacing" : [
            "error",
            {
                "before": false,
                "after": true,
            },
        ],
        "space-in-parens": [ "error", "never", ],
    },
}
