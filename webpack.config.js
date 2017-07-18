module.exports = (webpackConfig)=> {
  let retVal = Object.assign({}, webpackConfig, {
    externals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      // 提出ant design的公共资源
      //'antd': 'antd',
    }
  });
  return retVal;
};
