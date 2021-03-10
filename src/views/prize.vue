<template>
<div class="prize">
    <img class="title" src="./../assets/img/prize/title.png" alt="">
    <div class="center" v-for="list in lists" :key="list.id">
        <div class="center-con father">
            <img class="centerImg" :src="url + list.coupon_img" alt="">
            <div class="centerRight">
                <div class="price father">
                    <span class="priceYou fl">￥<span>{{ list.coupon_quota }}</span></span>
                    <span class="man fl">{{ list.limit }}</span>
                </div>
                <div class="jin">{{ list.goods_name }}</div>
            </div>
        </div>
        <div class="btn" @click="goUse(list.coupon_goods)" v-show="list.orderno == null"></div>
        <div class="btn1" @click="look" v-show="list.orderno !== null"></div>
    </div>
    <div class="center" v-for="jdList in jdLists" :key="jdList.id" v-show="jdLists.length !== 0">
        <div class="center-con father">
            <img class="centerImg" :src="url + jdList.img_url" alt="">
            <div class="centerRight">
                <div class="price father">
                    <span class="priceYou fl">￥<span>{{ jdList.price }}</span></span>
                    <span class="man fl">{{ jdList.limit }}</span>
                </div>
                <div class="jin">{{ jdList.name }}</div>
            </div>
        </div>
        <div class="btn2" @click="copyMa($event,jdList.url)"></div>
    </div>
    <div v-show="lists.length == 0 && jdLists.length == 0" class="others">
        ╥﹏╥...<br /><br />
        您还没有奖品，请先去挑战吧~
    </div>
    <div v-show="lists.length !== 0 || jdLists.lenght !== 0" class="popup">
        <h3 class="h3"></h3>
        <span class="span">AMAZFIT 智能手表 2、TicWatch Pro 4G版手表使用规则：</span>
        <p>1、用户复制优惠券领取链接；</p>
        <p>2、在手机浏览器打开链接，点击“立即领取”；</p>
        <p>3、登录京东账号，点击“去活动页”；</p>
        <p>4、选择优惠券适用商品进行下单；</p>
        <p>5、进入订单支付页面，选择京东优惠券即可。</p>
    </div>
    <div class="fanhui" @click="Return">
          <p>返回活动主页</p>
      </div>
</div>
</template>

<script>
import { Button,Popup, Toast } from "vant";
import Clip from './../util/clipboard';
import Cookies from "js-cookie";
import { prizeList } from "./services/prize";
import wx from 'weixin-js-sdk'

export default {
    components: {
        [Button.name]: Button,
        [Popup.name]: Popup,
        [Toast.name]: Toast
    },
    data (){
        return {
            others: [],
            ruiheng: null,
            token: '',
            lists: [],
            jdLists: [],
            url: 'http://192.168.1.108',
        }
    },
    mounted() {
        // this.token = Cookies.get("token"); // 获取存储的token
        this.getList()

    },
    methods: {
        getList(){
            prizeList().then(res => {
                console.log(res)
                this.lists = res.data.coupon_list
                this.jdLists = res.data.jd_coupon
            })
        },
        copyMa($event,code) {
            // 复制成功
            Clip($event, code);
            Toast("复制成功");
        },
        // 去使用
        goUse(id) {
            window.location.href = "https://www.shyy6688.com/twelve_game/ShoppingMall/index.html?type=1&g_id=" + id;
        },
        // 查看订单
        look() {
             window.location.href = "https://www.shyy6688.com/twelve_game/ShoppingMall/index.html#/detailsorder?orderno=2019121014113334147835777780";
        },
        Return () {
            this.$router.push({
                path: '/'
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import url("./../assets/css/bootstrap.min.css");
*{
    margin: 0 auto;
    padding: 0;
}
.father:after{
    content: '';
    display: block;
    height: 0;
    clear: both;
}
.father{
    zoom: 1;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
a {
  text-decoration: none;
}
.prize {
    width: 100%;
    min-height: 100vh;
    background: url("./../assets/img/prize/bg.png") no-repeat;
    background-size: 100% 100%;
    text-align: center;
    padding-top:60px ;
    padding-bottom: 30px;
    .title {
        display: block;
        width: 50%;
        margin: 0 auto;
    }
    .center {
        width: 80%;
        height: 270px;
        background-image: url("./../assets/img/prize/wireframe.png");
        background-size: 100% 100%;
        background-repeat:no-repeat;
        margin-top: 60px;
        padding: 25px 45px;
        
        .center-con {
            background: rgb(179, 0, 244);
            height: 160px;
            border-radius: 10px;
            .centerImg {
                width: 100px;
                height: 80%;
                margin: 3% 0 0 50px;
                float: left;
            }
            .centerRight {
                width: 60%;
                height: 80%;
                float: right;
                margin-right: 20px;
                margin-top: 3%;
                background: url(./../assets/img/prize/bg-1.png) no-repeat;
                background-size: 100% 100%;
                .price {
                    width: 100%;
                    .priceYou {
                        display: block;
                        color: red;
                        font-weight: 700;
                        margin-left: 30px;
                        span {
                            font-size: 60px;
                        }
                    }
                    .man {
                        display: block;
                        height: 40px;
                        text-align: center;
                        line-height: 40px;
                        padding: 5px;
                        background: rgb(255, 215, 183);
                        margin-top: 10%;
                        margin-left: 10px;
                        color: red;
                    }
                }
                .jin {
                    width: 100%;
                    text-align: center;
                    line-height: 40px;
                }
            }
        }
        .btn{
            width: 160px;
            height: 46px;
            background: url("./../assets/img/prize/button-1.png") no-repeat;
            background-size: 100%;
            margin-top: 20px;
        }
        .btn1{
            width: 160px;
            height: 46px;
            background: url("./../assets/img/prize/button2.png") no-repeat;
            background-size: 100%;
            margin-top: 20px;
        }
        .btn2{
            width: 160px;
            height: 46px;
            background: url("./../assets/img/prize/copy.png") no-repeat;
            background-size: 100%;
            margin-top: 20px;
        }
    }
    .others {
        font-size: 30px;
        font-weight: bold;
        color: rgb(235, 235, 241);
        margin-top: 150px;
    }
    .popup {
        width: 80%;
        margin: 100px auto 50px auto;
      text-align: left;
      
      padding: 0 45px 20px 45px;
      font-size: 24px;
      line-height: 1.5;
      color: #fff;
      .span {
        display: inline-block;
        font-weight: bold;
        margin-bottom: 10px;
        margin-top: 10px;
      }
      p {
        font-size: 24px;
        // text-indent: -1.4em;
        // margin-left: 1.4em;
        line-height: 1.5;
      }
    }
    .fanhui {
      width: 370px;
      height: 70px;
      margin-top: 40px;
    //   margin-bottom: 30px;
      background-image: url("./../assets/img/prize/button4.png");
      background-size: 100% 100%;
      p {
        height: 70px;
        line-height: 70px;
        font-size: 30px;
        color: #7c42ff;
      }
   }
    
}
</style>