const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: ['./app/init.tsx', './app/styles.scss'],
  output: {
    path: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '...'],
    roots: [path.resolve('./app')]
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    // new OptimizeCssAssetsPlugin({}),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: ['/node_modules/'],
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ["@babel/plugin-syntax-jsx"],
              presets: [
                ['@babel/preset-react', {
                  include: [
                    '@babel/plugin-proposal-nullish-coalescing-operator',
                    '@babel/plugin-proposal-optional-chaining',
                  ],
                }],
              ],
            }
          },
          {
            loader: 'ts-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
    ],
  },
  devServer: {
    open: true,
    host: 'localhost',
  },
};

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
