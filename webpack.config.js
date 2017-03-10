const config = {
  entry: './src/index.es6',
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

const umdConfig = Object.assign({
  output: {
    filename: 'dist/index.umd.js',
    library: "VueMedium",
    libraryTarget: 'umd',
  },
}, config)

const testConfig = Object.assign({
  output: {
    filename: 'spec/indexSpec.js',
    library: 'VueMediumSpec',
    libraryTarget: "assign"
  },
}, config)

module.exports = [
  libraryConfig,
  libraryMinifiedConfig,
  commonJsConfig,
  umdConfig,
  // testConfig,
]
