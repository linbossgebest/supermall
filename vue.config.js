const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  lintOnSave: true,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets',resolve('src/assets'))
      .set('views',resolve('src/views'))
      .set('components',resolve('src/components'))
      .set('network',resolve('src/network'))
      .set('store',resolve('src/store'))
  }
};

// module.exports={
//     configureWebpack:{
//         resolve:{
//             alias:{
//                 '@':'src',
//                 'assets': '@/assets',
//                 'views':'@/views',
//                 'components':'@/components'
//             }
//         }
//     }
// }
