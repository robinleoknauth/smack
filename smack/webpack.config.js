const path = require('path');

module.exports = {
 context: __dirname,
 entry: "./frontend/smack.jsx",
 output: {
   path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
   filename: 'bundle.js'   // webpack would not install bundle.js -> thus i manually created the file bundler
   // named it back to bundle.js because apperently there now is a bundle.js
 },
 resolve: {
   extensions: ['.js', '.jsx', '*']
 },
 module: {
   loaders: [
     {
       test: /\.jsx?$/,
       exclude: /(node_modules)/,
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2015']
       }
     }
   ]
 },
 devtool: 'source-map'
};
