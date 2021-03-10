
import request from '../../util/request'
// import qs from 'qs'

// 专场列表
export function goodsList ( token ) {
  return request({
    url: '/index.php/index/goods/goods_list',
    method: 'get',
  })
}

// 我的奖品列表
export function prizeList ( token ) {
    return request({
      url: '/index.php/index/coupons/myCouponList',
      method: 'get',
    })
}

