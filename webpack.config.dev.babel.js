import webpack from 'webpack';
import path from 'path';

const mode = process.env.NODE_ENV;

console.log(`mode: ${mode}`);

const config = {
  mode,
  entry:[
    'webpack-hot-middleware/client?reload=true&timeout=1000',
    path.resolve(__dirname, 'src/'),
  ],
  output:{
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve:{
    extensions: ['.js','.json','.jsx']
  },
  devtool: 'source-map',
  module:{
    rules:[
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
        include: path.resolve(__dirname, 'src')
      },
      {
        test: /\.css?/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss?/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止
              url: false,
            },
          }
        ],
      },
    ]
  }
};

export default config;