module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: {
          node: true,
        },
      },
    ],
  ],
  plugins: [
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '"@babel/proposal-object-rest-spread',
    'babel-plugin-lodash',
    'babel-plugin-idx',
    'babel-plugin-macros',
    'minify-dead-code-elimination',
  ],
}
