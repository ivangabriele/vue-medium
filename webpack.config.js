const config = {
  entry: './src/index.js',
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

const libraryConfig = Object.assign({
  output: {
    filename: 'dist/index.js',
    library: 'VueMedium',
  },
}, config)

const libraryMinifiedConfig = Object.assign({
  output: {
    filename: 'dist/index.min.js',
    library: 'VueMedium',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [{
          loader: 'uglify',
        }],
      },
    ],
  },
}, config)

const commonJsConfig = Object.assign({
  output: {
    filename: 'dist/index.common.js',
    libraryTarget: 'commonjs',
  },
}, config)

module.exports = [
  libraryConfig,
  libraryMinifiedConfig,
  commonJsConfig,
]
