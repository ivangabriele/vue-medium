module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'dist/index.js',
    library: 'VueMedium',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'babel-loader',
          options: { presets: ['es2015', 'stage-2'] },
        }],
      },
    ],
  },
}
