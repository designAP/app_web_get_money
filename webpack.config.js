const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
//const { resolve } = require("path");

module.exports = {
    entry: "./src/index.js",
    output:{
        path: path.resolve(__dirname, "dist"),
        filename: "build.js"
    },
    resolve:{
        extensions: ['.js', '.jsx']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/node_modules/,
                use:{
                    loader:"babel-loader"
                }
            },

            {
              test:/\.html$/,
              use:[
                  { 
                      loader:"html-loader"
                  }
              ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 25000
                    }
                }
            }
        ]

    },

    plugins:[
        new HtmlWebPackPlugin({
            template:"./public/index.html",
            filename: "./index.html"
        })
    ]
    
}


