import express from 'express';
import path from 'path';

import WebpackDevServer from 'webpack-dev-server';
import webapck from 'webpack';

const app = express();
const port = 3000;

const devPort = 4000;


if(process.env.NODE_ENV === 'development') {
    console.log('Server is running on development mode');
    const config = require('../webpack.dev.config');
    const compiler = webapck(config);
    const devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log('webpack-dev-serverr is listening port', devPort)
    });
}

app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/hello', (req, res) => {
    return res.send('Hello CodeLab');
});

app.listen(port, () => {
    console.log('Express is listening on port', port);
});