module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "rules": {
    "arrow-body-style": 0,
    "prefer-arrow-callback": 0,
    "func-names": 0,
    "no-unused-expressions": 0,
    "react/jsx-no-bind": 0,
    "react/jsx-uses-react": 1,
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0
  },
  "parserOptions": {
    "ecmaVersion": 6,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true
    }
  },
  "globals": {
    "browser": true,
    "expect": true
  },
  "plugins": [
    "react"
  ]
};
