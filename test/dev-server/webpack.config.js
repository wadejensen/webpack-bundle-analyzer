const BundleReportPlugin = require('../../lib/BundleAnalyzerPlugin');

module.exports = {
  entry: `${__dirname}/src.js`,
  output: {
    path: `${__dirname}/output`,
    filename: 'bundle.js'
  },
  plugins: [
    new BundleReportPlugin({
      analyzerMode: 'static',
      reportFilename: 'report.html',
      openAnalyzer: false
    })
  ]
};
