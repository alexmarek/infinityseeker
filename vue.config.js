module.exports = {
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
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
