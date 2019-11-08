const withCss=require('@zeit/next-css')  //配置使next可以加载css
if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}

module.exports = withCss({})