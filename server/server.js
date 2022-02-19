import express from 'express';
import fs from 'fs';
import webpack from 'webpack';
import webpackConfigDev from '../webpack.config.dev.babel';
import webpackDevMiddleware from 'webpack-dev-middleware';
import HMR from 'webpack-hot-middleware';

const useDevServer = app => {
  const compiler = webpack(webpackConfigDev);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfigDev.output.publicPath
  }));
  app.use(HMR(compiler));
};

const app = express();

if (process.env.NODE_ENV !== 'production') {
  useDevServer(app);
}

app.get('/', (req, res)=>{
  const index = fs.readFileSync('./public/index.html', 'utf-8');
  res.send(index); 
});

app.listen(3000, ()=>{
  console.log('app listening on 3000');
});
