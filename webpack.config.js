const path = require("path");

module.exports = {
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	module: {
		rules: [
			//加载css npm install --save-dev style-loader css-loader
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			},
			//加载图片 npm install --save-dev file-loader
			{ test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
			//加载字体
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: ["file-loader"]
			},
			/**
			 * 此外，可以加载的有用资源还有数据，如 JSON 文件，CSV、TSV 和 XML。类似于 NodeJS，JSON 支持实际上是内置的，也就是说 import Data from './data.json' 默认将正常运行。要导入 CSV、TSV 和 XML，你可以使用 csv-loader 和 xml-loader。让我们处理这三类文件
			 * npm install --save-dev csv-loader xml-loader
			 */
       {
         test: /\.(csv|tsv)$/,
         use: [
           'csv-loader'
         ]
       },
       {
         test: /\.xml$/,
         use: [
           'xml-loader'
         ]
       }
		]
	}
};
