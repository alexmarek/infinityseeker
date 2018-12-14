module.exports = {
  loaders: [
    {
        test: /\.jsx$/,
        loader: 'babel'
    },
    {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/
    },
  ]
}
