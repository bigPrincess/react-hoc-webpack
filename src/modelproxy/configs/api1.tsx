var host = "http://fc-c.dev.rs.com";

module.exports = {
    "key": "api1",
    "title": "测试接口数据",
    "state": "dev",
    "engine": "default",
    "mockDir": "./mocks/",
    "states": {
        "prod": "/api/fc-c",
        "dev": host
    },
    "interfaces": [{
        "path": "/parameter/loupan",
        "method": "get",
        "key": "get-noparam",
        "title": "获取新房筛选条件"
        
    }]
}

