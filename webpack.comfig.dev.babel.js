import path from 'path';

export default {
  mode: 'development',
  entry:[
    path.resolve(__dirname, 'src/')
  ],
  output:{
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve:{
    extensions: ['.js','.json','.jsx']
  },
  module:{
    rules:[
      {
        test: /\.jsx?$/,
        use:{
          loader: 'babel-loader'
        },
        include: path.resolve(__dirname, 'src')
      }
    ]
  }
};