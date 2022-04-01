module.exports = {
  'packages/server/!(static)/**/*.{js,jsx,ts,tsx}': [
    // https://eslint.org/docs/user-guide/command-line-interface
    'eslint --config ./.eslintrc.js --ignore-path ./.eslintignore --fix --color --'
  ],
  'packages/web/!(public)/**/*.{js,jsx,ts,tsx}': [
    // https://eslint.org/docs/user-guide/command-line-interface
    'eslint --config ./.eslintrc.js --ignore-path ./.eslintignore --fix --color --'
  ],
  // https://prettier.io/docs/en/cli.html
  '*': ['pretty-quick --staged --verbose'],
  // https://stylelint.io/user-guide/usage/cli
  'packages/web/!(public)/**/*.{css,less,styl,scss,sass}': [
    // 'stylelint --config ./.stylelintrc.json -i ./.stylelintignore  **/*.{less} --fix'
  ]
}
