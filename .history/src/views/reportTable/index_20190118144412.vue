<template>
  <div>
    <tips
      v-if="tips.show"
      :title="tips.title"
      :content="tips.content"
      @close="closeTips"
    ></tips>
    <div
      align="center"
      style="padding-top:15px;height:50px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);"
    >
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
          <span class="black" :class="{blue:type==1}" @click="getLoadIng(1)">全部</span>
        </van-col>
        <van-col span="8" align="center">
          <span class="black" :class="{blue:type==2}" @click="getLoadIng(2)">运输中</span>
        </van-col>
        <van-col span="8" align="center">
          <span class="black" :class="{blue:type==3}" @click="getLoadIng(3)">已完成</span>
        </van-col>
      </van-row>
      <router-view v-if="isRouterAlive">
        <van-row style="padding-top:25px;" v-show="type==1">
          <div
            style="height:245px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.3) 0px 4px 6px 2px;"
            v-for="(item, index) in shippingLists"
          >
            <div
              style="width:100%;height: 15%;padding-top: 15px;margin-bottom: 15px;padding-left: 20px;"
            >
              <div style="width: 70%;float: left;text-align: left;">
                <span style="color:rgb(30, 131, 255)">{{item.site_name}}</span>
                <span style="color:rgb(30, 131, 255)">→</span>
                <span style="color:rgb(30, 131, 255)">{{item.recipient_name}}</span>
              </div>
              <div style="width: 30%;float: right;">
                <span style="color:rgb(30, 131, 255)">{{item.statusval}}</span>
              </div>
            </div>
            <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
            <div style="width:100%;height: 55px;">
              <p style="float: left;width: 50%;">{{item.shipping_no}}</p>
            </div>
            <div style="width:100%;height: 55px;">
              <span
                style="float: left;width: 33%;font-size: 19px;color:rgb(30, 131, 255)"
              >{{item.license}}</span>
              <div :class="item.bname=='配载完成'||item.bname=='已中转'||item.bname=='配送在途'?'isNoClick':'isOkClick'" :status='item.upstatus' @click="item.bname=='配载完成'||item.bname=='已中转'?updateStatus(0,1):updateStatus(item.id,item.upstatus)">{{item.bname}}</div>
            </div>
            <div style="width:100%;height: 30px;">
              <span style="font-size: 14px;float: left;width: 65%;">开始时间：{{item.create_time}}</span>
            </div>
            <div style="font-size: 14px;width:100%;height: 30px;">
              <button
                style="background-color:rgb(240, 238, 242);border:none;margin-right:185px;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;"
              >查看详情</button>
              <button
                style="background-color:#4169E1;color:#fff;border:none;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;"
                @click="$router.push({path:'/orderList'})"
              >运单({{item.countorder}})</button>
            </div>
          </div>
        </van-row>
        <van-row style="padding-top:25px;" v-show="type==2">
          <div
            style="height:245px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.3) 0px 4px 6px 2px;"
            v-for="(item, index) in shippingLists"
          >
            <div
              style="width:100%;height: 15%;padding-top: 15px;margin-bottom: 15px;padding-left: 20px;"
            >
              <div style="width: 70%;float: left;text-align: left;">
                <span style="color:rgb(30, 131, 255)">{{item.site_name}}</span>
                <span style="color:rgb(30, 131, 255)">→</span>
                <span style="color:rgb(30, 131, 255)">{{item.recipient_name}}</span>
              </div>
              <div style="width: 30%;float: right;">
                <span style="color:rgb(30, 131, 255)">{{item.statusval}}</span>
              </div>
            </div>
            <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
            <div style="width:100%;height: 55px;">
              <p style="float: left;width: 50%;">{{item.shipping_no}}</p>
            </div>
            <div style="width:100%;height: 55px;">
              <span
                style="float: left;width: 33%;font-size: 19px;color:rgb(30, 131, 255)"
              >{{item.license}}</span>
              <div :class="item.bname=='配载完成'||item.bname=='已中转'||item.bname=='配送在途'?'isNoClick':'isOkClick'" :status='item.upstatus' @click="item.bname=='配载完成'||item.bname=='已中转'?updateStatus(0,1):updateStatus(item.id,item.upstatus)">{{item.bname}}</div>
            </div>
            <div style="width:100%;height: 30px;">
              <span style="font-size: 14px;float: left;width: 65%;">开始时间：{{item.create_time}}</span>
            </div>
            <div style="font-size: 14px;width:100%;height: 30px;">
              <button
                style="background-color:rgb(240, 238, 242);border:none;margin-right:185px;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;"
              >查看详情</button>
              <button
                style="background-color:#4169E1;color:#fff;border:none;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;"
                @click="$router.push({path:'/orderList'})"
              >运单({{item.countorder}})</button>
            </div>
          </div>
        </van-row>
        <van-row style="padding-top:25px;" v-show="type==3">
          <div
            style="height:245px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.3) 0px 4px 6px 2px;"
            v-for="(item, index) in shippingLists"
          >
            <div
              style="width:100%;height: 15%;padding-top: 15px;margin-bottom: 15px;padding-left: 20px;"
            >
              <div style="width: 70%;float: left;text-align: left;">
                <span style="color:rgb(30, 131, 255)">{{item.site_name}}</span>
                <span style="color:rgb(30, 131, 255)">→</span>
                <span style="color:rgb(30, 131, 255)">{{item.recipient_name}}</span>
              </div>
              <div style="width: 30%;float: right;">
                <span style="color:rgb(30, 131, 255)">{{item.statusval}}</span>
              </div>
            </div>
            <hr style="width: 95%;border: 0.6px solid rgba(128, 128, 128, 0.13);">
            <div style="width:100%;height: 55px;">
              <p style="float: left;width: 50%;">{{item.shipping_no}}</p>
            </div>
            <div style="width:100%;height: 55px;">
              <span
                style="float: left;width: 33%;font-size: 19px;color:rgb(30, 131, 255)"
              >{{item.license}}</span>
              <div :class="item.bname=='配载完成'||item.bname=='已中转'||item.bname=='配送在途'?'isNoClick':'isOkClick'" :status='item.upstatus' @click="item.bname=='配载完成'||item.bname=='已中转'?updateStatus(0,1):updateStatus(item.id,item.upstatus)">{{item.bname}}</div>
            </div>
            <div style="width:100%;height: 30px;">
              <span style="font-size: 14px;float: left;width: 65%;">开始时间：{{item.create_time}}</span>
            </div>
            <div style="font-size: 14px;width:100%;height: 30px;">
              <button
                style="background-color:rgb(240, 238, 242);border:none;margin-right:185px;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;"
              >查看详情</button>
              <button
                style="background-color:#4169E1;color:#fff;border:none;height: 30px;width: 80px;font-size: 13px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);border-radius: 6px;"
                @click="$router.push({path:'/orderList'})"
              >运单({{item.countorder}})</button>
            </div>
          </div>
        </van-row>
      </router-view>
    </div>
  </div>
</template>
<script>
import tips from "../../components/tips";
export default {
  components: {
    tips
  },
  data() {
    return {
      type: 1,
      shippingLists: [],
      tips: { title: '提示', content: "提示内容", show: false},
      isRouterAlive: true
    };
  },
  provide() { // 注册一个方法
    return {
      reload: this.reload
    }
  },
  mounted() {
    this.getShippingLists({ sign: "qazwsxedc", type: 2, bizId: "5" });
    this.$store.commit("changeParame", {
      headerBack: true,
      hederContent: "干线配载单",
      bottom: "1",
      bottomShow: false
    });
  },
  methods: {
    cancel () {
      this.$emit("close", "");
    },
    closeTips(data) {
      this.tips.show = false;
      this.reload();
    },
    getLoadIng(type) {
      if (type == 1) {
        this.type = 1;
        this.getShippingLists({ sign: "qazwsxedc", type: 2, bizId: "5" });
      } else if (type == 2) {
        this.type = 2;
        this.getShippingLists({
          sign: "qazwsxedc",
          type: 2,
          bizId: "5",
          status: 422,
          status2: 423
        });
      } else {
        this.type = 3;
        this.getShippingLists({
          sign: "qazwsxedc",
          type: 2,
          bizId: "5",
          status: 424
        });
      }
    },
    getShippingLists(param) {
      var this_ = this;
      this.utils.request.stowageList(param, function(data) {
        this_.shippingLists = data;
      });
    },
    updateStatus(id,val){
      var this_ = this;
      if(id!=0){
        var param={sign:'qazwsxedc',type:2,bizId:id,status:val};
        this.utils.request.noticeOperate(param, function(data) {
          this_.tips={title: '提示',content: "提交成功", show:true};
        });
      }
    },
    reload() {
      this.isRouterAlive = false
      this.$nextTick(function() {
        this.isRouterAlive = true
        console.log('reload')
      })
    }
  }
};
</script>
<style lang="less" scoped>
.ewm {
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
.black {
  color: #333;
}
.blue {
  color: rgb(30, 131, 255);
}
.isOkClick {
  width: 28%;
  float: right;
  line-height: 51px;
  line-height: 51px;
  margin-right: 25px;
  background-color: red;
  margin-top: -15px;
  color: #fff;
  border-radius: 6px;
  cursor: pointer;
}
.isNoClick {
  width: 28%;
  float: right;
  line-height: 51px;
  line-height: 51px;
  margin-right: 25px;
  background-color: #d3d3d3;
  margin-top: -15px;
  color: #fff;
  border-radius: 6px;
}
</style>