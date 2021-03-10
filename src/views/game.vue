<template>
  <div class="home">
        <div class="game" >
                <!-- 生命值 -->
          <div class="life">
          </div>
          <!-- 赛道 -->
          <div class="track">
              <img class="fiveG" src="./../assets/img/game/tu4.png" alt="">
              <img class="tu5" src="./../assets/img/game/tu5.png" alt="">
              <img class="wifi" src="./../assets/img/game/wifi.png" alt="">
              <img class="eSIM" src="./../assets/img/game/eSIM.png" alt="">
              <img class="tu2" src="./../assets/img/game/tu2.png" alt="">
              <img class="e" src="./../assets/img/game/e.png" alt="">
              <img class="tu3" src="./../assets/img/game/tu3.png" alt="">
              <img class="tu1" src="./../assets/img/game/tu1.png" alt="">
              <img class="ren" :src="roleSmall" alt="">
              <!-- 开始 -->
              <img class="start" src="./../assets/img/game/start.png" alt="">
              <div class="one step" style="left:5%;top:48%;"></div>
              <div class="two step" style="left:10%;top:44%;"></div>
              <div class="three step" style="left:14%;top:39%;"></div>
              <div class="four step" style="left:17%;top:31%;"></div>
              <div class="five step" style="left:22%;top:39%;"></div>
              <div class="six step" style="left:26%;top:44%;"></div>
              <div class="mi step" style="left:30%;top:48%;"></div>
              <div class="seven step " style="left:26%;top:55%;"></div>
              <div class="eight step" style="left:22%;top:60%;"></div>
              <div class="hua step" style="left:17%;top:64%;"></div>
              <div class="nine step" style="left:22%;top:71%;"></div>
              <div class="ten step" style="left:26%;top:75%;"></div>
              <div class="eleven step" style="left:30%;top:79%;"></div>
              <div class="twelve step" style="left:34%;top:83%;"></div>
              <div class="jeep step" style="left:38%;top:86%;"></div>
              <div class="five_one step" style="left:43%;top:82%;"></div>
              <div class="five_two step" style="left:47%;top:78%;"></div>
              <div class="five_three step" style="left:51%;top:73%;"></div>
              <div class="five_four step" style="left:55%;top:68%;"></div>
              <div class="five_five step" style="left:59%;top:63%;"></div>
              <div class="five_six step" style="left:63%;top:58%;"></div>
              <div class="five_seven step" style="left:67%;top:53%;"></div>
              <div class="five_eight step" style="left:71%;top:48%;"></div>
              <div class="ruiheng step" style="left:74%;top:40%;"></div>
              <div class="six_one step" style="left:70%;top:37%;"></div>
              <div class="six_two step" style="left:66%;top:32%;"></div>
              <div class="six_three step" style="left:62%;top:27%;"></div>
              <div class="sanxing step" style="left:57%;top:19%;"></div>
              <div class="seven_one step" style="left:62%;top:15%;"></div>
              <div class="seven_two step" style="left:66%;top:10%;"></div>
              <div class="huami step" style="left:69.5%;top:2%;"></div>
              <div class="eight_one step" style="left:74%;top:11%;"></div>
              <div class="eight_two step" style="left:78%;top:16%;"></div>
              <div class="eight_three step" style="left:82%;top:21%;"></div>
              <div class="wenwen step" style="left:86%;top:25%;"></div>
              <div id="dizhi" v-show="!isShow"></div>
              <div id="jingxi" @click="goJing" v-show="isShow">
                  <img class="guang" src="./../assets/img/game/guang.png" alt="">
                  <img class="shou_1" src="./../assets/img/game/shou_1.png" alt="">
              </div>


          </div>
      </div>
      <div class="foot father" >
          <div class="foot-left fl father">
            <div class="wrap fl">
                <div id="dice" class="dice dice_1"></div>
            </div>
            <div class="forward fl">
                <div class="forward-btn" @click="gameStart">
                    <div class="icon"><span>{{ play_num }}</span>次机会</div>
                    <img class="shou" src="./../assets/img/game/shou.png" alt="">
                </div>
                <div class="forward-count">{{ time }}s</div>
            </div>
          </div>
          
          <div class="foot-right fl">
              <div class="right-img">
                  <img @click="myFen" src="./../assets/img/game/button_2.png" alt="">
                  <img style="margin-left:60px;" @click="myPrize" src="./../assets/img/game/button_3.png" alt="">
              </div>
              <div class="word">距离终点仅剩<span>{{ step }}</span>步，到达即可获取神秘惊喜哦！</div>
          </div>
      </div>

      <!-- 小弹框 -->
        <van-popup v-model="show" class="vanpopup" :close-on-click-overlay="false">
            <div class="popup">
                <div>{{ reward }}</div>
                <img class="popupRen" :src="img" alt="">
                <img class="popupBtn" @click="closeShow" src="./../assets/img/game/button.png" alt="">
            </div>
        </van-popup>
      <!-- 大弹框 -->
        <van-popup v-model="showBig" class="vanpopupBig" :close-on-click-overlay="false">
            <div class="popup">
                <div>{{ rewardBig }}</div>
                <img class="popupBtn" @click="closeShowBig" src="./../assets/img/game/button.png" alt="">
            </div>
        </van-popup>
      <!-- 优惠券弹框 -->
        <van-popup v-model="showQuan" class="vanpopupQuan" :close-on-click-overlay="false">
            <div class="popup">
                <p>{{ quan1 }}</p>
                <p>{{ quan2 }}</p>
                <img class="popupBtn" @click="closeShowQuan" src="./../assets/img/game/button.png" alt="">
            </div>
        </van-popup>

        <van-overlay v-show="isFen" @click="onClickHide" z-index="99">
            <div class="share">
                <img class="shareImg" src="./../assets/img/game/share.png" alt="">
                <div class="shareText">
                    点击右上角分享朋友或朋友圈哦~
                </div>
            </div>
        </van-overlay>
      
          

  </div>

</template>
<script>
import { Button, Popup, Toast, Dialog, Overlay } from "vant";
import { gameInitial, gameStar, updateLife, gameOver, receiveOtherCoupon, randomReward, appid  } from "./services/game";
import md5 from "md5";
import Cookies from "js-cookie";
import $  from 'jquery';
import wxapi from '../util/wxapi.js'
export default {
    name: 'home',
    components: {
        [Button.name]: Button,
        [Popup.name]: Popup,
        [Toast.name]: Toast,
        [Dialog.name]: Dialog,
        [Overlay.name]: Overlay,
    },
    data() {
        return {
            count: 90,
            step: 34,
            time: 90,
            play_num: 0,
            life_num: 0,
            role: '',
            img: '',
            roleSmall: '',
            isLife: true,   // 是否是新生命的开始
            isShow: false,   // 终点的神秘惊喜出现
            num: 0, // 色子点数（用来计算小人行走的时间）
            initialCount: 0,    // 每次的初始值
            totalCount: 0,      // 每次的终点
            show: false,     // 小弹窗
            isReward: false,    // 小弹窗是否为随机步数
            reward: '',      // 小弹窗随机奖励
            showBig: false,   // 大弹窗
            rewardBig: '',    // 大弹窗随机奖励
            showQuan: false,     // 优惠券弹窗
            quan1: '',          // 优惠券第一行
            quan2: '',          // 优惠券第二行
            rewardStep: 0,         // 随机奖励的加减步数
            isOver: false,         // 是否已到达终点
            isFen: false            //分享
        };
    },
    mounted() {
        let that =this;

        wxapi.wxRegister(that.wxRegCallback())


        that.getGameInitial()
        let isLife = Cookies.get("isLife");     // 获取是否为新生命
        let totalCount = Cookies.get("totalCount");     // 获取是否为新生命
        let step = Cookies.get("step");     // 获取是否为新生命
        if (isLife !== undefined) {
            that.isLife = isLife;
        }
        console.log(totalCount)
        if (totalCount !==undefined) {  // 用户出去再进来保存之前记录以及小人位置
            that.totalCount = totalCount;
            that.step = step
            let steps = document.getElementsByClassName('step'),
                ren = document.getElementsByClassName('ren')[0];
            
            if (totalCount == 0 || totalCount == 3 || totalCount == 6 || totalCount == 9 || totalCount == 14 || totalCount == 23 || totalCount == 27 || totalCount == 30 || totalCount == 34) {
                
                ren.style.left = (parseInt(steps[totalCount].style.left) + 0.5) + '%';
                ren.style.top = (parseInt(steps[totalCount].style.top) - 11) + '%';
            } else {
                ren.style.left = (parseInt(steps[totalCount].style.left) - 0.5) + '%';
                ren.style.top = (parseInt(steps[totalCount].style.top) - 13) + '%';
            }
        }
        let isOver = Cookies.get("isOver");     // 获取是否已到达终点
        if (isOver !== undefined) {
            that.isOver = isOver;
            that.isShow = true
        }
        
        let shareLife = Cookies.get("shareLife");
        if (shareLife !== undefined) {
            that.shareLife = shareLife
        }

        that.renderResize()
        let role = Cookies.get("role");
        that.img = require('./../assets/img/' + role + '-1.png')
        that.roleSmall = require('./../assets/img/game/' + role + '-1.png')
        
    },
    methods: {
        // 初始获取屏幕可视化区域宽和高 旋转页面
        renderResize () {
            let width = document.documentElement.clientWidth,
            height = document.documentElement.clientHeight;

            let home = document.getElementsByClassName('home')[0]
            home.style.width = height + 'px'
            home.style.height = width + 'px'
            home.style.transformOrigin = width/2 + 'px'
            
        },
        // 获取微信appid
        wxRegCallback () {
            // 用于微信JS-SDK回调
            this.wxShareTimeline()
            this.wxShareAppMessage()
        },
        wxShareTimeline () {
            let that = this;
            // 微信自定义分享到朋友圈
            let option = {
                title: '掷骰子，向前进，解锁神秘好礼！', // 分享标题, 请自行替换
                link: 'http://esimwx.10010sh.cn:8999/wxunicom/twelve_game/game/index.html', // 分享链接，根据自身项目决定是否需要split
                imgUrl: 'https://www.shyy6688.com/twelve_game/public/static/uploads/1111.png', // 分享图标, 请自行替换，需要绝对路径
                success: () => {
                    // alert('分享成功11')
                    that.addLife()
                },
                error: () => {
                    alert('已取消分享')
                }
            }
            // 将配置注入通用方法
            wxapi.ShareTimeline(option)
        },
        wxShareAppMessage () {
            let that = this;
            // 微信自定义分享给朋友
            let option = {
                title: '掷骰子，向前进，解锁神秘好礼！', // 分享标题, 请自行替换
                desc: 'eSIM手表爆款直降：5大品牌，6款产品，iWatch 5仅需...', // 分享描述, 请自行替换
                link: 'http://esimwx.10010sh.cn:8999/wxunicom/twelve_game/game/index.html', // 分享链接，根据自身项目决定是否需要split
                imgUrl: 'https://www.shyy6688.com/twelve_game/public/static/uploads/1111.png', // 分享图标, 请自行替换，需要绝对路径
                success: () => {
                    // alert('分享成功22')
                    that.addLife()
                },
                error: () => {
                    alert('已取消分享')
                }
            }
            // 将配置注入通用方法
            wxapi.ShareAppMessage(option)
        },
        // 分享获取生命
        addLife() {
            let shareLife = this.shareLife;
            if (shareLife < 4) {
                extraPlayNum(shareLife,this.token).then(res => {
                    if (res.msg == 'success') {
                        Toast('分享成功，生命+1');
                        this.getGameInitial()
                        this.shareLife ++ 
                        Cookies.set("shareLife", shareLife);
                    } else {
                        Toast(res.msg);
                    }
                })
            } else {
                Toast('很抱歉，您的获取额外生命已经上限~~');
            }
            
        },
        // 游戏初始生命和次数
        getGameInitial() {
            gameInitial().then(res => {
                console.log(res)
                this.play_num = res.data.userInfo.play_num
                this.life_num = res.data.userInfo.life_num
                this.life()
            })
        },
        // 生命
        life() {
            let life_num = this.life_num;
            for(let i=0; i<life_num; i++) {
                let img = this.img;
                var txt=$("<img />").attr("src",img).css({
                    'display': 'inline-block',
                    'width': '30px',
                    'height': '35px',
                    'margin-left': '5px'
                });
                $(".life").append(txt)
            }

        },
        // 游戏开始
        gameStart() {
            let that = this;
            // 生命-1 次数-1 
            let isLife = that.isLife,
                play_num = that.play_num,
                isOver = that.isOver;
            console.log(isLife)
            if (isOver) {
                that.showBig = true
                that.rewardBig = '恭喜您到达终点成功解锁神秘奖励，快点进去看看吧~~'
            } else {
                if (isLife) {   // 是否为新生命的开始
                    // 当为新生命开始时 生命-1 次数-1 并且倒计时
                    updateLife().then(res => {
                        console.log(res)
                        if (res.msg == '生命次数为0') {
                            that.showBig = true
                            that.rewardBig = '很遗憾没生命了哦~点击获取生命最多可增加三条生命呢~~'
                        } else {
                            that.countDown()    // 倒计时
                            that.life_num = res.data.life_num   // 生命-1
                            $(".life").find('img:last').remove()   // 更新左上角小人数量
                            that.isLife = false                 // 更新isLife
                            Cookies.set("isLife", that.isLife);       // 存isLife 用来避免用户出去又进来的情况
                            gameStar().then(res => {
                                console.log(res)
                                that.play_num = res.data.play_num  // 次数-1
                                that.dice()             // 摇色子
                            })
                        }
                        
                    })
                } else if (isLife == false && play_num !== 0){
                    // 不为新生命时 只更新次数-1
                    gameStar().then(res => {
                        console.log(res)
                        that.play_num = res.data.play_num  // 次数-1
                        that.dice()             // 摇色子
                        
                    })
                } else if(isLife == false && play_num == 0) {
                    // 当次数为0时更新更新isLife
                    that.show = true
                    that.reward = '挑战失败，生命-1'
                    clearInterval(that.timer);  // 停止倒计时
                    that.time = 90          // 初始倒计时时间
                    that.isLife = true                 // 更新isLife
                    Cookies.set("isLife", that.isLife);       // 存isLife 用来避免用户出去又进来的情况
                }
            }
            
        },
        // 摇色子
        dice() {
            let that = this;
            
            var dice = $("#dice");
			var num = Math.floor(Math.random()*6+1);//生成随机数1-6
			dice.attr("class","dice");//清除上次动画后的点数
			        dice.css('cursor','default');
			        // 骰子动画
			        dice.animate({left: '+2px'}, 100,function(){
			            dice.addClass("dice_t");
			        }).delay(200).animate({top:'-2px'},100,function(){
			            dice.removeClass("dice_t").addClass("dice_s");
			        }).delay(200).animate({opacity: 'show'},600,function(){
			            dice.removeClass("dice_s").addClass("dice_e");
			        }).delay(100).animate({left:'-2px',top:'2px'},100,function(){
			            dice.removeClass("dice_e").addClass("dice_"+num);
			            dice.css('cursor','pointer');
                    });

            that.num = num; // 色子点数
            that.initialCount = that.totalCount; // 将上次的终点赋值为新一次的起点
            that.totalCount = that.initialCount + num ; // 新一次的终点为起点+色子的点数 
            if (that.totalCount > 34) {
                that.totalCount = 34
            }
            setTimeout(function() {
                that.getSteps()     // 等色子停止开始走
            }, 1000);
        },
        // 小人行走
        getSteps() {
            let that = this;
            // 获取每个格子定位的left和top百分比 然后让小人移动到此处
            let steps = document.getElementsByClassName('step');
            let data = [];
            for (let i=0; i<steps.length;i++) {
                let obj = {};
                // 因为小人移动到方块的位置时因为大小不一样会导致位置不精确，所以将获取的位置进行加减让小人达到更准确的位置  
                // 因为拐角处的格子大一点，因此要和其他小方块分开定位的左右加减一点
                if (i == 0 || i == 3 || i == 6 || i == 9 || i == 14 || i == 23 || i == 27 || i == 30 || i == 34) {
                    obj.left = (parseInt(steps[i].style.left) + 0.5) + '%';
                    obj.top = (parseInt(steps[i].style.top) - 11) + '%';
                } else {
                    obj.left = (parseInt(steps[i].style.left) - 0.5) + '%';
                    obj.top = (parseInt(steps[i].style.top) - 13) + '%';
                }
                data.push(obj);
            }

            let rewardStep = that.rewardStep,       // 随机奖励步数的加减
                initialCount,                        // 每步的起点
                totalCount;                             // 每步的终点
            console.log(rewardStep)
                if (rewardStep == 0) {      // 如果没有随机奖励步数，
                    initialCount = that.initialCount, // 起点为初始值
                    totalCount = that.totalCount;   // 每次的终点
                    that.step = 34 - totalCount;
                    Cookies.set("totalCount", totalCount);       // 存取终点 用于记录用户出去进来的位置
                    Cookies.set("step", that.step);       // 存取step 用于记录用户出去进来的位置

                    for (let i = initialCount; i < totalCount; i++ ) {
                        $(".ren").animate(data[i+1], 400, "linear")
                    }
                    let num = that.num;
                    setTimeout(function() {
                        that.isWin()     // 等小人停止后判断是否中奖
                    }, 400*num);

                } else if (rewardStep == 1){        // 如果随机步数为-1
                    initialCount = that.totalCount  // 起点为上次的终点
                    that.totalCount = that.totalCount - rewardStep  // 终点为减价随机奖励的步数
                    if (that.totalCount <= 0) {
                        that.totalCount = 0
                    }
                    that.step = 34 - that.totalCount;
                    Cookies.set("totalCount", that.totalCount);       // 存取终点 用于记录用户出去进来的位置
                    Cookies.set("step", that.step);       // 存取step 用于记录用户出去进来的位置

                    $(".ren").animate(data[that.totalCount], 400, "linear")

                    setTimeout(function() {
                        that.isWin()     // 等小人停止后判断是否中奖
                    }, 400);
                    that.rewardStep = 0 // 恢复随机步数为0
                } else if (rewardStep == 2) {
                    initialCount = that.totalCount  // 起点为上次的终点
                    that.totalCount = that.totalCount + rewardStep  // 终点为减价随机奖励的步数
                    if (that.totalCount > 34) {
                        that.totalCount = 34
                    }
                    that.step = 34 - that.totalCount;
                    Cookies.set("totalCount", that.totalCount);       // 存取终点 用于记录用户出去进来的位置
                    Cookies.set("step", that.step);       // 存取step 用于记录用户出去进来的位置
                    
                    for (let i = initialCount; i < that.totalCount; i++ ) {
                        $(".ren").animate(data[i+1], 400, "linear")
                    }
                    setTimeout(function() {
                        that.isWin()     // 等小人停止后判断是否中奖
                    }, 800);
                    that.rewardStep = 0 // 恢复随机步数为0
                }
        },
        // 90s倒计时
        countDown() {
            let that = this;
            that.timer = setInterval(() => {
                if (that.time > 0) {
                    that.time--;
                } else {
                    that.time = 0
                    clearInterval(that.timer);
                    that.show = true
                    that.reward = '时间到，挑战失败，生命-1'
                }
            }, 1000);
        },
        // 判断每次停止后是否中奖
        isWin() {
            let that = this;
            let step = that.totalCount;
            console.log(step)
            switch (step) {
                case 3:
                    that.showQuan = true
                    that.quan1 = '解锁苹果5手表优惠券1张！'
                    that.quan2 = '（请至【我的奖品】中查看）'
                    receiveOtherCoupon(1).then(res => {
                        console.log(res)
                    })
                    break;
                case 6:
                    that.showQuan = true
                    that.quan1 = '解锁小米手表优惠券1张！'
                    that.quan2 = '（请至【我的奖品】中查看）'
                    receiveOtherCoupon(2).then(res => {
                        console.log(res)
                    })
                    break;
                case 9:
                    that.showQuan = true
                    that.quan1 = '解锁阿巴町V328e手表优惠券1张！'
                    that.quan2 = '（请至【我的奖品】中查看）'
                    receiveOtherCoupon(3).then(res => {
                        console.log(res)
                    })
                    break;
                case 14:
                    that.showQuan = true
                    that.quan1 = '解锁孝心环智能健康手表优惠券1张！'
                    that.quan2 = '（请至【我的奖品】中查看）'
                    receiveOtherCoupon(4).then(res => {
                        console.log(res)
                    })
                    break;
                case 23:
                    that.showQuan = true
                    that.quan1 = 'AMAZFIT 智能手表 2：'
                    that.quan2 = '向世界重新说“你好”！内置eSIM模块，心电测量功能+米动健康服务，随时随地，健康监测。'
                    break;
                case 27:
                    that.showQuan = true
                    that.quan1 = '华为WATCH 2 2018版：'
                    that.quan2 = '让运动更自由。接打电话、跑步听歌、有表就够了。采用eSIM技术，无需实体卡，即使不带手机，也不用担心漏接来电！'
                    break;
                case 30:
                    that.showQuan = true
                    that.quan1 = 'TicWatch Pro 4G版：'
                    that.quan2 = '双屏双系统，省电更持久。谷歌官方全智能手表系统。商务运动，硬朗有型，重塑经典，荣获德国iF Design Award 2018设计奖。'
                    break;
                case 34:
                    that.isShow = true;
                    that.showBig = true
                    clearInterval(that.timer);
                    that.isOver = true;
                    that.rewardBig = '恭喜您到达终点成功解锁神秘奖励，快点进去看看吧~~'
                    Cookies.set("isOver", true);       // 到达终点记录
                    gameOver().then(res => {
                        console.log(res)
                    })
                    break;
                default:
                    randomReward().then(res => {
                        console.log(res)
                        let reward = res.data.reward
                        if(reward.id == 1){
                            that.show = true
                            that.reward = reward.reward
                            that.play_num++     // 随机次数+1
                        }else if (reward.id == 2) {
                            that.show = true
                            that.reward = reward.reward
                            if (that.play_num > 0) {
                                that.play_num--     // 随机次数-1
                            } else {
                                that.play_num = 0
                            }
                            
                        } else if (reward.id == 3){
                            that.show = true
                            that.reward = reward.reward
                            that.rewardStep = 2 // 随机步数+2
                            that.isReward = true
                        }else if(reward.id == 4){
                            that.show = true
                            that.reward = reward.reward   
                            that.rewardStep = 1 // 随机步数-1
                            that.isReward = true
                        } else {
                            that.showBig = true
                            that.rewardBig = reward.reward
                        }
                    })
                    break;
            }


        },
        // 关闭小弹窗
        closeShow() {
            let isReward = this.isReward;
            if (isReward) {
                this.show = false;
                this.getSteps()
                this.isReward = false
            } else {
                this.show = false;
            }
            
        },
        // 关闭大弹窗
        closeShowBig() {
            this.showBig = false;
        },
        closeShowQuan() {
            this.showQuan = false;
        },
        // 分享打开模态框
        myFen() {
            this.isFen = true
        },
        // 分享关闭模态框
        onClickHide() {
            this.isFen = false
        },

        // 我的奖品
        myPrize() {
            this.$router.push({
                path: "/prize"
            });
            // window.location.href= "http://esimwx.10010sh.cn:8999/wxunicom/twelve_game/game/index.html#/prize"
        },
        // 神秘惊喜进入特价专场
        goJing() {
            this.$router.push({
                path: "/preferential"
            });
            // window.location.href= "http://esimwx.10010sh.cn:8999/wxunicom/twelve_game/game/index.html#/preferential"
        },

    }

}



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
@media screen and (orientation: portrait) {
    .home {
        -webkit-transform:rotate(90deg);
        -moz-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        transform: rotate(90deg);
        // width: 100vh;
        // height: 100vh;
        /*去掉overflow 微信显示正常，但是浏览器有问题，竖屏时强制横屏缩小*/
        overflow: hidden;
        background: url(./../assets/img/game/bg.png) no-repeat;
        background-size: cover;
        
        .game {
            width: 98%;
            height: 75%;
            margin: 0 auto;
            background: url(./../assets/img/game/bg1.png) no-repeat;
            background-size: 100% 100%; 
            position: relative;
            .life {
                position: absolute;
                left: 20px;
                top: 40px;
            }
            .track {
                width: 90%;
                height: 100%;
                margin: 0 auto;
                position: relative;
                // background: url(./../assets/img/game/track.png) no-repeat;
                // background-size: 100% 100%; 
                .fiveG {
                    position: absolute;
                    display: block;
                    width: 100px;
                    height: 200px;
                    left: 6%;
                    top: 10%;
                }
                .tu5 {
                    position: absolute;
                    display: block;
                    width: 150px;
                    height: 150px;
                    left: 28%;
                    top: 13%;
                }
                .wifi {
                    position: absolute;
                    display: block;
                    width: 60px;
                    height: 160px;
                    left: 42%;
                    top: 0%;
                }
                .eSIM {
                    position: absolute;
                    display: block;
                    width: 200px;
                    height: 150px;
                    left: 14%;
                    top: 71%;
                }
                
                .tu2 {
                    position: absolute;
                    display: block;
                    width: 250px;
                    height: 350px;
                    left: 30%;
                    top: 22%;
                    z-index: 9;
                }
                .e {
                    position: absolute;
                    display: block;
                    width: 350px;
                    height: 350px;
                    left: 40%;
                    top: 9%;
                    z-index: 8;
                }
                .tu3 {
                    position: absolute;
                    display: block;
                    width: 50px;
                    height: 100px;
                    left: 83%;
                    top: 1%;
                    z-index: 9;
                }
                .tu1 {
                    position: absolute;
                    display: block;
                    width: 350px;
                    height: 250px;
                    left: 64%;
                    top: 52%;
                    z-index: 9;
                }
                .ren {
                    position: absolute;
                    display: block;
                    width: 80px;
                    height: 100px;
                    left: 5.5%;
                    top: 37%;
                    z-index: 10;
                }
                .start {
                    position: absolute;
                    display: block;
                    width: 80px;
                    height: 50px;
                    left: 0;
                    top: 59%;
                }
                .one {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_1.png) no-repeat;
                    background-size: 100% 100%;
                }
                .two {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .three {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .four {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_apple.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .six {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .mi {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_mi.png) no-repeat;
                    background-size: 100% 100%;
                }
                .seven {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .eight {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .hua {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_abating.png) no-repeat;
                    background-size: 100% 100%;
                }
                .nine {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .ten {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .eleven {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .twelve {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .jeep {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_keqiang.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_one {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_two {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_three {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_four {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_five {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_six {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_seven {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .five_eight {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .ruiheng {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_huami.png) no-repeat;
                    background-size: 100% 100%;
                }
                .six_one {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .six_two {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .six_three {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .sanxing {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_huawei.png) no-repeat;
                    background-size: 100% 100%;
                }
                .seven_one {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .seven_two {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .huami {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_wenwen.png) no-repeat;
                    background-size: 100% 100%;
                }
                .eight_one {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .eight_two {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .eight_three {
                    position: absolute;
                    width: 70px;
                    height: 50px;
                    background: url(./../assets/img/game/square_2.png) no-repeat;
                    background-size: 100% 100%;
                }
                .wenwen {
                    position: absolute;
                    width: 90px;
                    height: 70px;
                    background: url(./../assets/img/game/square_1.png) no-repeat;
                    background-size: 100% 100%;
                }
                #dizhi {
                    position: absolute;
                    width: 40px;
                    height: 80px;
                    background: url(./../assets/img/game/dizhi.png) no-repeat;
                    background-size: 100% 100%;
                    left: 95%;
                    top: 28%;
                }
                #jingxi {
                    position: relative;
                    width: 120px;
                    height: 150px;
                    background: url(./../assets/img/game/jingxi.png) no-repeat;
                    background-size: 100% 100%;
                    left: 46%;
                    top: 22%;
                    .guang {
                        position: absolute;
                        width: 30px;
                        height: 15px;
                        left: 34%;
                        top: 52%;
                        animation: guang 2s linear  infinite ;
                    }
                    .shou_1 {
                        position: absolute;
                        width: 50px;
                        height: 50px;
                        left: 40%;
                        top: 19%;
                        animation: jingxi 2s linear  infinite ;
                    }
                }

            }
        }
        
        @keyframes jingxi {
            0% {
                top: 19%;
            }
            25% {
                top: 23%;
            }
            50% {
                top: 19%;
            }
            75% {
                top: 23%;
            }
            100% {
                top: 19%;
            }
        }
        @keyframes guang {
            0% {
                transform: scale(1);
            }
            25% {
                transform: scale(1.3);
            }
            50% {
                transform: scale(1);
            }
            75% {
                transform: scale(1.3);
            }
            100% {
                transform: scale(1);
            }
        }

        // 底部
        .foot {
            width: 90%;
            // height: 20%;
            margin: 20px auto 0 auto;
            .foot-left {
                width: 40%;
                .wrap {
                    position: relative;
                    /*最外层设置为每一帧需要显示的骰子的宽高*/
                    width: 1.51rem;
                    height: 1.59rem;
                    .dice {
                        /*设定骰子的宽高*/
                        width: 1.51rem;
                        height: 1.59rem;
                    
                        cursor: pointer;
                    
                        background: url(./../assets/img/game/dice.png) no-repeat;
                        -webkit-background-size: 1.51rem auto;
                                background-size: 1.51rem auto;
                    }
                    /*对每一帧最外层的背景图进行位移，由于此处生成的雪碧图是垂直方向的，因此只需要改变背景图y轴的位移，即可以改变下一帧的显示内容。后三帧为骰子转动过程中的作了模糊处理的图片。*/
                    .dice_1 {
                        background-position: 0 0;
                    }
                    .dice_2 {
                        background-position: 0 -1.59rem;
                    }
                    .dice_3 {
                        background-position: 0 -3.18rem;
                    }
                    .dice_4 {
                        background-position: 0 -4.77rem;
                    }
                    .dice_5 {
                        background-position: 0 -6.36rem;
                    }
                    .dice_6 {
                        background-position: 0 -7.95rem;
                    }
                    .dice_t {
                        background-position: 0 -9.54rem;
                    }
                    .dice_s {
                        background-position: 0 -11.13rem;
                    }
                    .dice_e {
                        background-position: 0 -12.72rem;
                    }
                }
                .forward {
                    width: 50%;
                    height: 100%;
                    margin-left: 60px;
                    .forward-btn {
                        width: 100%;
                        height: 100px;
                        margin: 10px auto 0 auto;
                        background: url(./../assets/img/game/button_1.png) no-repeat;
                        background-size: 100% 100%; 
                        position: relative;
                        .icon {
                            position: absolute;
                            width: 120px;
                            height: 60px;
                            right: 20px;
                            top: -30px;
                            color: #7c07ec;
                            text-align: center;
                            line-height: 40px;
                            font-size: 20px;
                            letter-spacing: 5px;
                            background: url(./../assets/img/game/icon.png) no-repeat;
                            background-size: 100% 100%;
                            span {
                                font-size: 30px;
                                font-weight: 900;
                            }
                        }
                        .shou {
                            position: absolute;
                            width: 60px;
                            height: 80px;
                            right: 20px;
                            top: 40%;
                        }
                    }
                    .forward-count {
                        width: 50%;
                        height: 60px;
                        background: url(./../assets/img/game/count.png) no-repeat;
                        background-size: 100% 100%;
                        text-align: center;
                        line-height: 60px;
                        color: #fff;
                        letter-spacing: 5px;
                        font-size: 30px;
                        font-weight: 900;
                    }
                }
            }
            
            .foot-right {
                width: 60%;
                .right-img {
                    width: 100%;
                    img {
                        width: 40%;
                    }
                }
                .word {
                    width: 100%;
                    text-align: center;
                    // line-height: 100px;
                    color: #fff;
                    font-size: 26px;
                    margin-top: 20px;
                    letter-spacing: 2px;
                    span {
                        color: red;
                        font-size: 40px;
                        font-weight: 600;
                    }
                }
            }
        }
        // 小弹框
        .van-popup.vanpopup {
            width: 20%;
            padding: 20px 10px;
            border-radius: 20px;
            .popup {
                padding:  30px 20px 20px;
                div {
                    text-align: center;

                }
                .popupRen {
                    display: block;
                    width: 80px;
                    height: 80px;
                    margin: 10px auto 0 auto;
                }
                .popupBtn {
                    display: block;
                    width: 60%;
                    margin: 30px auto 0 auto;
                }
            }
        }
        // 大弹框
        .van-popup.vanpopupBig {
            width: 50%;
            padding: 30px 10px;
            border-radius: 20px;
            .popup {
                div {
                    width: 90%;
                    margin: 0 auto;
                }
                .popupBtn {
                    display: block;
                    width: 25%;
                    margin: 30px auto 0 auto;
                }
            }
        }
        // 优惠券弹窗
        .van-popup.vanpopupQuan {
            width: 40%;
            padding: 30px 10px;
            border-radius: 20px;
            .popup {
                p {
                    width: 90%;
                    text-align: center;
                    line-height: 40px;
                    margin: 0 auto;
                }
                .popupBtn {
                    display: block;
                    width: 35%;
                    margin: 30px auto 0 auto;
                }
            }
        }
        .share {
            position: relative;
            top: 50px;
            left: 20px;
            .shareImg {
                transform: rotate(-90deg);
            }
            .shareText {
                transform: rotate(-90deg);
                width: 200px;
                color: #fff;
                text-align: left;
                margin-left: 60px;
                font-size: 23px;
            }
        }
    }
        
}
@media screen and (orientation: landscape) {
    .home {
        -webkit-transform:rotate(0);
        -moz-transform: rotate(0);
        -ms-transform: rotate(0);
        transform: rotate(0);
        width: 100%;
        height: 100vh;
        background: url(./../assets/img/game/bg.png) no-repeat;
        background-size: cover;
    }
}
</style>