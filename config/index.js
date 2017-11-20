/**
 * 根据不同的环境替换配置文件
 * dev 开发环境； dev 开发环境； test 测试环境； pre 预发环境； prod 生产环境
 */

const NODE_ENV = {
  dev: {
    // CDN 服务器
    // CDN_ADDRESS: 'http://127.0.0.1:8089/',
    CDN_ADDRESS: 'http://127.0.0.1:3000/',
    // API 服务器
    // SERVER_ADDRESS: 'http://192.168.23.218:8001',
    // SERVER_ADDRESS: 'http://192.168.23.136:7095',
    // SERVER_ADDRESS: 'http://192.168.23.212:8888',
    SERVER_ADDRESS: 'http://api.jumoreys.test2',
    // 认证中心
    USERCENTER_ADDRESS: 'http://uc3.dev.com',
    // 中台地址
    CENTER_ADDRESS: 'https://ecenter.jumore.test2',
    // 图片服务器
    IMG_ADDRESS: 'https://image.jumore.test/',
    // IMG_ADDRESS: 'https://img.jumore.com.pre',
    // 图片上传服务器
    // UPLOAD_ADDRESS: 'http://image5.jm.com'
    UPLOAD_ADDRESS: 'https://image.jumore.test/'
  },
  test: {
    // CDN 服务器
    CDN_ADDRESS: 'https://activity.jumore.test2/_nuxt/',
    // API 服务器
    SERVER_ADDRESS: 'http://api.jumoreys.test2',
    // 认证中心
    USERCENTER_ADDRESS: 'https://passport.jumore.test',
    // 中台地址
    CENTER_ADDRESS: 'https://ecenter.jumore.test2',
    // 图片上传服务器
    UPLOAD_ADDRESS: 'http://image5.jm.com',
    // 图片服务器
    IMG_ADDRESS: 'https://image.jumore.test'
  },
  pre: {
    // CDN 服务器
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    // API 服务器
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    // 认证中心
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    // 中台地址
    CENTER_ADDRESS: 'http://center.jtt.com',
    // 上传地址
    UPLOAD_ADDRESS: 'http://image5.jm.com',
    // 图片服务器
    IMG_ADDRESS: 'http://image.jm.com'
  },
  prod: {
    // CDN 服务器
    CDN_ADDRESS: 'http://127.0.0.1:3000/_nuxt/',
    // API 服务器
    SERVER_ADDRESS: 'http://webapi.jtt.com',
    // 认证中心
    USERCENTER_ADDRESS: 'http://test-uc3.dev.com',
    // 中台地址
    CENTER_ADDRESS: 'http://center.jtt.com',
    // 上传地址
    UPLOAD_ADDRESS: 'http://image5.jm.com',
    // 图片服务器
    IMG_ADDRESS: 'http://image.jm.com'
  }
}

module.exports = NODE_ENV[process.env.NODE_CONFIG]
