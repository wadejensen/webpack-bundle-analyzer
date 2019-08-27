const { start } = require('./viewer');

module.exports = {
  start,
  BundleReportPlugin: require('./BundleAnalyzerPlugin')
};
