import request from '../../util/request'
// import qs from 'qs'


// 游戏初始状态
export function gameInitial ( token ) {
  return request({
    url: '/index.php/index/games/get_user',
    method: 'get',
  })
}

// 游戏开始 (次数-1)
export function gameStar () {
  return request({
    url: '/index.php/index/games/startplay',
    method: 'get',
  })
}

// 游戏开始 (生命-1)
export function updateLife () {
  return request({
    url: '/index.php/index/games/updateLife',
    method: 'get',
  })
}

// 拐角处优惠券
export function receiveOtherCoupon ( type ) {
  return request({
    url: '/index.php/index/coupons/receiveOtherCoupon',
    method: 'post',
    data: {
      type
    }
  })
}

// 随机奖励
export function randomReward () {
  return request({
    url: '/index.php/index/games/random_Reward',
    method: 'post',
  })
}

// 走到终点 
export function gameOver () {
  return request({
    url: '/index.php/index/games/tjUser',
    method: 'post',
    data: {
      num: '1'
    }
  })
}

