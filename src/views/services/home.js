import request from '../../util/request'


// 验证码
export function code ( code ) {
  return request({
    url: '/index.php/api/verify',
    method: 'post',
    data: code
  })
}

// 报名
export function login ( login ) {
  return request({
    url: '/index.php/api/login',
    method: 'post',
    data: login
  })
}




