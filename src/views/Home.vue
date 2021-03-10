<template>
  <div class="home">
    <!-- 头部 -->
    <div class="logo father">
      <img src="./../assets/img/logo.png" alt srcset />
      <span class="rule" @click="showPopup" ></span>
    </div>
    <!-- 标题 -->
    <img class="banner"  src="./../assets/img/banner.png" alt />
    

    <!-- 选择用户角色 -->
    <div class="role">
      <img class="role-title" src="./../assets/img/title1.png" alt="">
      <div class="role-con">
        <img class="selectRole" v-if="!isE" src="./../assets/img/e.png" alt="e">
        <img class="selectRole" v-else src="./../assets/img/e-1.png" alt="e">

        <img class="selectRole" v-if="!isS" src="./../assets/img/s.png" alt="s">
        <img class="selectRole" v-else src="./../assets/img/s-1.png" alt="s">

        <img class="selectRole" v-if="!isI" src="./../assets/img/i.png" alt="i">
        <img class="selectRole" v-else src="./../assets/img/i-1.png" alt="i">

        <img class="selectRole" v-if="!isM" src="./../assets/img/m.png" alt="m">
        <img class="selectRole" v-else src="./../assets/img/m-1.png" alt="m">
      </div>
    </div>

    <!-- 进入赛道 -->

    <div class="go">
      <img class="go-title" @click="goGame" src="./../assets/img/title2.png" alt="">
      <div class="go-con" @click="goGame">
        <img src="./../assets/img/track.png" alt="">
      </div>
    </div>

    <div class="word" style="margin-top: 30px;">
      <p>长按扫描下方二维码</p>
    </div>
    <div class="ewm">
      <img src="./../assets/img/ewm.png" alt srcset />
    </div>
    <div class="word" style="margin-bottom: 30px;">
      <p>立即关注</p>
      <p>【联通eSIM智能穿戴设备】</p>
      <p>开启无卡新生活</p>
    </div>

    <div class="prize" @click="myPrize">我的奖品</div>
    <!-- <img class="prize" @click="myPrize" src="./../assets/img/prize.png" alt=""> -->
    
    
    <!-- <div class="quanma" @click="quanma">
      <p>我的优惠券</p>
    </div> -->
    
    <!-- 弹框 -->
    <van-popup v-model="show" class="vanpopup">
      <div class="popup">
        <img src="./../assets/img/huodong.png" alt srcset />
        <p>1. 用户进入活动页面，选择游戏角色，并进入游戏；</p>
        <p>2. 用户填写姓名、电话、短信验证码；</p>
        <p>3. 用户点击“冲向终点”，进入赛道，过掷骰子的方式，游色自动前进对应步数，并解锁随机奖励；</p>
        <p>4. 随机奖励包括：增加掷骰子次数、步数、eSIM品牌手表优惠券、eSIM业务宣传、砍价，减少步数、次数或无变化等；</p>
        <p>5. 每个用户有3条生命，每条生命共有6次掷骰子的机会，限定90S内用完，完成额外任务（邀请好友助力）可再增加最多3次生命；</p>
        <p>6. 如用户一条生命未完成通关，则第二条生命的起点为第一条生命的终点，可继续第一条生命的步数；</p>
        <p>7. 若角色抵达终点，可获得“神秘惊喜”；</p>
        <p>8. 活动解释权归联通eSIM微信公众号所有。</p>
      </div>
    </van-popup>
    <!-- 弹框信息录入-->
    <van-popup
      v-model="showinformation"
      class="information father"
      :close-on-click-overlay="closeonclickoverlay"
    >
      <img src="./../assets/img/baoming.png" alt srcset class="imgh3" />
      <form class="biao father">
        <div class="biaodan">
          <img class="sub_img" src="./../assets/img/name.png" alt />
          <input type="text" v-model="submit.username" placeholder="请输入姓名" />
        </div>
        <div class="biaodan">
          <img class="sub_img" src="./../assets/img/phone.png" alt />
          <input type="tel" v-model="submit.mobile" placeholder="请输入手机号" />
        </div>
        <div class="biaodan">
          <img class="sub_img" src="./../assets/img/nub.png" alt />
          <input type="tel" v-model="submit.verify" />
          <span class="yan" @click.prevent="handleFetchCode" v-if="timeFlag">获取验证码</span>
          <span class="yan" @click.prevent="handleFetchCode" v-else disabled>{{ count }}s</span>
        </div>
      </form>
      <img class="but" @click="Submission" src="./../assets/img/submit.png" alt="">
      <!-- <a class="but" @click="Submission"></a> -->
    </van-popup>
    <!-- <van-popup v-model="showEnd" class="showEnd" :close-on-click-overlay="false">活动已结束~</van-popup> -->
    
  </div>
</template>

<script>
import { Button, Popup, Toast, Dialog } from "vant";
import { code, login  } from "./services/home";
import md5 from "md5";
import Cookies from "js-cookie";
import $ from 'jquery'

export default {
  name: "home",
  components: {
    [Button.name]: Button,
    [Popup.name]: Popup,
    [Toast.name]: Toast,
    [Dialog.name]: Dialog
  },
  data() {
    return {
      // showEnd: true,
      // closeonclickoverlay: false,
      isLogin: false,
      show: false,
      showinformation: false,
      closeonclickoverlay: true,
      timeFlag: true,
      count: 30,
      submit: {
        username: "",
        mobile: "",
        verify: "",
        code: ""
      },
      isE: false,
      isS: false,
      isI: false,
      isM: false,
    };
  },
  mounted() {
    let  mobile = Cookies.get("mobile");
    if (mobile) {
      this.isLogin = true;
      let role = Cookies.get("role");
      if (role) {
        switch (role) {
          case 'e':
            this.isE = true
            break;
          case 's':
            this.isS = true
            break;
          case 'i':
            this.isI = true
            break;
          case 'm':
            this.isM = true
            break;
        }
      }
    }
    
    this.choiceRole()

  },
  methods: {
    // //获取url中的参数
    // getUrlParam(name) {
    //   var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    //   var r = window.location.search.substr(1).match(reg); //匹配目标参数
    //   if (r != null) return unescape(r[2]);
    //   return null; //返回参数值
    // },

    // getUser() {
    //   var code = this.getUrlParam("code");
    //   if (code == null) {
    //     var curPath = "http://esimwx.10010sh.cn:8999/html/eSIMgame/index.html";
    //     var realPath =
    //       "https://www.shyy6688.com/wxunicom/index.php/Esim/Wx/getParamCode?backUrl=" +
    //       curPath;
    //     var url =
    //       "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx908fb9ef140ecc17&redirect_uri=" +
    //       encodeURIComponent(realPath) +
    //       "&response_type=code&scope=snsapi_base&state=123#wechat_redirect";
    //     window.location.href = url;
    //   } else {
    //     this.submit.code = code;
        
    //   }
    // },

    // 选择角色
    choiceRole () {
      let that = this;
      $(".selectRole").click(function(){
        let alt = $(this).attr('alt')
        // $(this).attr('src',alt)
        
        switch (alt) {
          case 'e':
            that.isE = true
            that.isS = false
            that.isI = false
            that.isM = false
            Cookies.set("role", alt); // 存token
            break;
          case 's':
            that.isS = true
            that.isE = false
            that.isI = false
            that.isM = false
            Cookies.set("role", alt); // 存token
            break;
          case 'i':
            that.isI = true
            that.isE = false
            that.isS = false
            that.isM = false
            Cookies.set("role", alt); // 存token
            break;
          case 'm':
            that.isM = true
            that.isE = false
            that.isS = false
            that.isI = false
            Cookies.set("role", alt); // 存token
            break;
        
        }
      })

    },

    goGame() {
      console.log(this.isLogin)
      if (this.isLogin) {
        let role = Cookies.get("role");
        // 判断是否报名
        // this.showinformation = true;
        if (role) {
          Toast('活动已结束~~');
          // this.$router.push({
          //   path: "/game"
          // });
        } else {
          Toast('请先选择角色哦~~');
        }
      } else {
        this.showinformation = true
      }
      
      
    },
    // 获取验证码
    handleFetchCode() {
      console.log('获取验证码')
      // 11位数字 13014005575
      let reg = /^1[0-9]{10}$/g;
      const mobile = this.submit.mobile;
      let verify = {
        mobile,
        debug: true
      };
      if (reg.test(mobile)) {
        code(verify).then(res => {
          console.log(res)
          if (res.msg === "success") {
            this.$toast.success(res.data.info);
            this.timeDown();
          } else {
            this.$toast.fail(res.msg);
          }
        });
      } else {
        this.$toast.fail("请输入11位手机号");
      }
    },
    // 再次获取验证码倒计时
    timeDown() {
      const TIME_COUNT = 30;
      if (!this.timer) {
        this.count = TIME_COUNT;
        this.timeFlag = false;
        this.timer = setInterval(() => {
          if (this.count > 1) {
            this.count--;
          } else {
            this.timeFlag = true;
            clearInterval(this.timer);
            this.timer = null;
          }
        }, 1000);
      }
    },
    // 报名提交
    Submission(e) {
      console.log('报名')
      let regPhone = /^1[0-9]{10}$/;
      // console.log(this.submit);
      if (regPhone.test(this.submit.mobile)) {
        login(this.submit).then(res => {
          console.log(res);
          if (res.msg === "success") {
            this.showinformation = false; // 关闭弹框
            this.isLogin = true;
            Cookies.set("token", res.data.token); // 存token
            Cookies.set("mobile", this.submit.mobile); // 存用户手机号每隔一个小时获取新的token以便token失效
          } else {
            this.$toast.fail(res.msg);
          }
        });
      } else {
        this.$toast.fail("请将信息填写完整");
      }
    },
    showPopup() {
      this.show = true;
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
.fr {
  float: right;
}
a {
  text-decoration: none;
}
.home {
  .showEnd {
    width: 50%;
    height: 100px;
    border-radius: 20px;
    line-height: 100px;
    font-size: 30px;
  }
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
      height: 120px;
      background: url(./../assets/img/rule.png) no-repeat;
      background-size: 100%;
      z-index: 9;
    }
  }
  // banner
  .banner {
    position: relative;
    width: 90%;
    top: -100px;
  }
  // 选择角色
  .role {
    width: 90%;
    margin: -40px auto 0 auto;
    .role-title {
      width: 100%;
    }
    .role-con {
      width: 100%;
      margin-top: 30px;
      padding: 30px 0;
      background: url(./../assets/img/bg1.png) no-repeat;
      background-size: 100% 100%;
      img {
        width: 20%;
        height: 160px;
        margin: 0 2%;
      }
    }
  }
  .go {
    width: 90%;
    margin: 50px auto 0 auto;
    .go-title {
      width: 100%;
    }
    .go-con {
      width: 100%;
      margin-top: 30px;
      background: url(./../assets/img/bg2.png) no-repeat;
      background-size: 100% 100%;
      img {
        width: 100%;
      }
    }
    .go-btn {
      width: 40%;
      height: 60px;
      margin: 20px auto;
      background: url(./../assets/img/enter.png) no-repeat;
      background-size: 100% 100%;
      position: relative;
      img {
        position: absolute;
        display: block;
        width: 60px;
        height: 80px;
        right: 0;
        top: 30%;
      }
    }
  }
  .ewm {
      img {
        width: 258px;
        height: 258px;
        margin: 10px auto;
      }
  }
  .word {
    width: 50%;
    margin: 20px auto;
      p {
        height: 28px;
        margin: 0;
        text-align: center;
        line-height: 28px;
        color: #d7e0fb;
        margin-bottom: 10px;
        font-weight: 700;
      }
  }
  .prize {
    position: fixed;
    width: 100%;
    height: 80px;
    bottom: 0;
    background: url(./../assets/img/prize.png) no-repeat;
    background-size: 100% 100%; 
    text-align: center;
    line-height: 80px;
    color: #fff;

  }
  // 弹框
  .van-popup.vanpopup {
    width: 70%;
    padding: 20px 10px;
    border-radius: 20px;
    img {
      width: 116px;
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

  // 信息录入弹框
  .van-popup.information {
    width: 70%;
    text-align: center;
    padding: 20px 20px 20px;
    border-radius: 20px;
    .imgh3 {
      width: 140px;
      margin-top: 30px;
    }
    .biao {
      .biaodan {
        position: relative;
        display: flex;
        margin-top: 30px;
        padding: 0 30px;
        .sub_img {
          position: absolute;
          left: 60px;
          top: 16px;
          width: 30px;
          height: 35px;
          z-index: 3;
        }

        input {
          width: 95%;
          height: 60px;
          border-radius: 6px;
          // margin-left: 10px;
          font-size: 30px;
          padding-left: 16.66%;
          border: 2px solid #593ae0;
          position: relative;
        }
        .yan {
          position: absolute;
          right: 12%;
          // background-color: #33a8ff;
          color: #6147cf;
          font-size: 24px;
          height: 62px;
          line-height: 62px;
          &:disabled {
            // background-color: #ccc;
          }
        }
      }
    }
    .but {
      display: block;
      width: 50%;
      margin: 30px auto;

    }
  }
  
}
</style>
