
import path from 'path'
import { fileURLToPath } from 'url';
// import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin  from 'mini-css-extract-plugin'
import CssMinimizerPlugin from "css-minimizer-webpack-plugin"
import CopyPlugin from "copy-webpack-plugin"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const isProduction = process.env.NODE_ENV === 'production';

const config = {
  entry: [
    './app/init.tsx',
    './app/styles/styles.scss',
    './app/images/Jan-2016-bubble-v1_onwhite.gif',
    './app/images/chasm.jpg'
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    assetModuleFilename: "assets/[name][ext]",
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
    // new HtmlWebpackPlugin({
    //   template: path.resolve(__dirname, 'app/index.html'),
    //   inject: false
    // }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    }),
    new CopyPlugin({
      patterns: [
        { from: './app/utils/prism.js', to: './prism.js' },
      ],
    }),
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
              plugins: [
                "@babel/plugin-syntax-jsx",
              ],
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
        type: 'asset/resource',
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 8000,
  },
};

export default async function main() {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
};
