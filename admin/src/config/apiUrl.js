let ipUrl = 'http://127.0.0.1:7001/admin/'

let servicePath = {
    checkLogin: ipUrl + 'checkLogin',  //  检查用户名密码是否正确
    getTypeInfo: ipUrl + 'getTypeInfo',

}
export default servicePath;