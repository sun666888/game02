<template>
  <div class="home">
    <!-- 头部 -->
    <div class="logo father">
      <img src="./../assets/img/logo.png" alt srcset />
      <span class="rule" @click="showPopup" ></span>
    </div>
    <!-- 标题 -->
    <img class="banner"  src="./../assets/img/tehui/banner.png" alt />
    
    <!-- 砍价专区 -->
    <div class="kan">
      <img src="./../assets/img/tehui/title1.png" alt="">
      <div class="card father">
          <img class="proImg" src="./../assets/img/tehui/img.png" alt="">
          <div class="card-right fl">
            <div class="proTit">Tic Watch Pro 4G 版 智能双屏，自由接听</div>
            <div class="proPrice">
              <span class="price">最低价￥599</span>
              <span class="originPrice">￥1799</span>
            </div>
            <div class="proBot father">
              <span>限时特价</span>
              <img @click="goKan()" src="./../assets/img/tehui/icon.png" alt="">
            </div>
          </div>
      </div>
    </div>
    <!-- 特价专区 -->
    <div class="te">
      <img src="./../assets/img/tehui/title2.png" alt="">
      <div class="products father">
        <div class="product" v-for="product in products" :key="product.id">
          <img class="proImg" :src="url + product.cover" alt="">
          <div class="proTit">{{ product.title }}</div>
          <div class="proPrice">
            <span class="price">￥{{ product.price }}</span>
            <span class="originPrice">￥{{ product.ori_price }}</span>
          </div>
          <div class="proBot father">
            <span>限时特价</span>
            <img @click="goBug(product.id)" src="./../assets/img/tehui/button.png" alt="">
          </div>
        </div>
      </div>
    </div>
    

    <div class="prize" @click="myPrize">
      我的奖品
    </div>
    
    
    <!-- 弹框 -->
    <van-popup v-model="show" class="vanpopup">
      <div class="popup">
        <img src="./../assets/img/tehui/huodong.png" alt srcset />
        <p>特价专场规则：</p>
        <p>1. 本eSIM特价专场将于12月12日上午10点准时开放（包括砍价商品）；</p>
        <p>2. eSIM特价商品数量有限，售完即止；</p>
        <p>3. eSIM特价商品将于活动结束后1-3个工作日安排发货；</p>
        <p>4. 本活动商品不支持退货，仅支持因质量问题7天内换货，且需提供相关照片证明；</p>
        <p>5. 如有任何疑问，可拨打活动热线400-021-0356进行咨询；</p>
        <p>6. 本活动最终解释权归联通eSIM微信公众号所有。</p>
      </div>
    </van-popup>
    
    
  </div>
</template>

<script>
import { Button, Popup, Toast, Dialog, Card } from "vant";
import { goodsList } from "./services/prize";
import md5 from "md5";
import Cookies from "js-cookie";
import $ from 'jquery'

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog,
    [Card.name]: Card,
  },
  data() {
    return {
      show: false,
      imageURL: require('./../assets/img/tehui/img.png'),
      url: 'http://192.168.1.108',
      products: []
    };
  },
  mounted() {
    this.getGoodsList()
  },
  methods: {
    
    getGoodsList() {
      goodsList().then(res => {
        console.log(res)
        this.products = res.data.goods
      })
    },
    
    showPopup() {
      this.show = true;
    },
    // 砍价
    goKan() {
      window.location.href = "http://www.shyy6688.com/wxbms/app/index.php?i=25&c=entry&m=ewei_shopv2&do=mobile&r=bargain.detail&id=5"
    },
    // 购买
    goBug(id) {
      window.location.href = "https://www.shyy6688.com/twelve_game/ShoppingMall/index.html?type=2&g_id=" + id;
    },
    myPrize() {
      this.$router.push({
          path: "/prize"
        });
    }
    
  }
};
</script>

<style lang="scss" scoped>
@import url("./../assets/css/bootstrap.min.css");
* {
  margin: 0 auto;
  padding: 0;
}
[contenteditable="true"],
input,
textarea {
  -webkit-user-select: text !important;
  -khtml-user-select: text !important;
  -moz-user-select: text !important;
  -ms-user-select: text !important;
  -o-user-select: text !important;
  user-select: text !important;
}
.father:after {
  content: "";
  display: block;
  height: 0;
  clear: both;
}
.father {
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
.home {
  width: 100%;
  // height: 100vh;
  background: url(./../assets/img/bg.jpg) no-repeat;
  background-size: 100% 100%;
  text-align: center;
  padding: 0 0 80px 0;
  // 顶部
  .logo {
    position: relative;
    padding: 40px 20px 0 20px;
    img {
      display: block;
      width: 120px;
      float: left;
    }
    .van-button {
      float: right;
      height: 60px;
      line-height: 40px;
      padding: 10px;
    }
    .rule {
      position: absolute;
      right: 20px;
      top: 30px;
      width: 40px;
      height: 150px;
      background: url(./../assets/img/tehui/rule.png) no-repeat;
      background-size: 100% 100%;
      z-index: 9;
    }
  }
  // banner
  .banner {
    position: relative;
    width: 90%;
    top: -100px;
  }
  .kan {
    width: 90%;
    margin: -40px auto 0 auto;
    img {
      width: 100%;
    }
    .card {
      width: 80%;
      border-radius: 10px;
      margin-top: 40px;
      background: #fff;
      .proImg {
        display: block;
        width: 30%;
        float: left;
      }
      .card-right {
        float: left;
        width: 65%;
        .proTit {
          text-align: left;
          font-weight: 800;
          margin-top: 20px;
        }
        .proPrice {
          margin: 10px auto;
          text-align: left;
          .price {
            color: #ff0100;
          }
          .originPrice {
            text-decoration:line-through;
            margin-left: 10px;
            color: #777;
          }
        }
        .proBot {
          margin: 10px auto 10px auto;
          span{
            float: left;
            color: #fe0000;
          }
          img {
            float: right;
            width: 35%;
            height: 35px;
            margin-right: 10px;
          }
        }
      }
    }
  }
  .te {
    width: 90%;
    margin: 40px auto;
    img{
      width: 100%;
    }
    .products{
      width: 100%;
      .product{
        width: 46%;
        margin: 20px 2%;
        float: left;
        padding-bottom: 10px;
        border-radius: 10px;
        background: #fff;
        .proImg{
          width: 100%;
        }
        .proTit {
          padding: 0 10px;
          margin: 10px 0;
          line-height: 30px;
          font-weight: 900;
          text-align: left;
        }
        .proPrice {
          margin: 10px auto;
          padding: 0 10px;
          text-align: left;
          .price {
            color: #8956f9;
            font-size: 14px;
          }
          .originPrice {
            text-decoration:line-through;
            margin-left: 10px;
            color: #777;
          }
        }
        .proBot {
          padding: 0 10px;
          margin: 10px auto 0 auto;
          span{
            float: left;
            color: #8b56fc;
          }
          img {
            float: right;
            width: 40%;
            height: 35px;
            margin-right: 20px;
          }
        }
      }
    }
  }
  .prize {
    position: fixed;
    width: 100%;
    height: 60px;
    bottom: 0;
    background: url(./../assets/img/prize.png) no-repeat;
    background-size: 100% 100%; 
    text-align: center;
    line-height: 60px;
    color: #fff;
  }

  // 弹框
  .van-popup.vanpopup {
    width: 70%;
    padding: 20px 10px;
    border-radius: 20px;
    img {
      width: 40%;
      margin-top: 30px;
      margin-bottom: 30px;
      display: inherit;
    }
    .popup {
      text-align: left;
      padding: 0 30px 20px 30px;
      font-size: 24px;
      line-height: 1.5;
      p {
        font-size: 24px;
        // text-indent: -1.4em;
        // margin-left: 1.4em;
        line-height: 1.5;
      }
    }
  }

  
}
</style>
