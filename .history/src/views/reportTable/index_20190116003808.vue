<template>
    <div>
      <div align="center" style="padding-top:15px;height:50px;box-shadow:2px 4px 6px rgba(0, 0, 0, 0.3);">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)" @click="beginScan(1)">全部</van-col>
        <van-col span="8" align="center" @click="beginScan(2)">运输中</van-col>
        <van-col span="8" align="center" @click="beginScan(3)">已完成</van-col>
      </van-row>
      <van-row style="padding-top:25px;">
        <div style="height:240px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.3) 0px 4px 6px 2px;">
          <div style="width:100%;height: 15%;padding-top: 15px;margin-bottom: 15px;">
            <div style="width: 60%;float: left;">
              <span style="color:rgb(30, 131, 255)">乌鲁木齐网点</span><span style="color:rgb(30, 131, 255)"> → </span><span style="color:rgb(30, 131, 255)">济南网点</span>
            </div>
            <div style="width: 30%;float: right;">
              <span style="color:rgb(30, 131, 255)">待发运</span>
            </div>
          </div>
          <hr style="width: 95%;"/>
          <div style="width:100%;height: 55px;"><p style="float: left;width: 45%;">P5323232343532</p></div>
          <div style="width:100%;height: 55px;">
            <span style="float: left;width: 33%;font-size: 19px;color:rgb(30, 131, 255)">沪F99999</span>
            <div style="width: 28%;float: right;line-height: 51px;line-height: 51px;margin-right: 25px;background-color: red;margin-top: -15px;color:#fff;border-radius: 6px;">确认发车</div>
          </div>
          <div style="width:100%;height: 30px;">
            <span style="font-size: 14px;float: left;width: 65%;">开始时间：2019-02-11 19:25:12</span>
          </div>
          <div style="font-size: 14px;width:100%;height: 30px;">
            <button style="background-color:#E6E6FA;border:none;margin-right: 200px;">查看详情</button>
            <button>运单(12)</button>
          </div>
        </div>
        <div style="height:200px;width:95%;margin-bottom:15px;box-shadow:rgba(0, 0, 0, 0.3) 0px 4px 6px 2px;">
          <div style="width:100%;height: 15%;padding-top: 15px;margin-bottom: 15px;">
            <div style="width: 60%;float: left;">
              <span>乌鲁木齐网点</span><span> → </span><span>济南网点</span>
            </div>
            <div style="width: 30%;float: right;">
              <span>待发运</span>
            </div>
          </div>
          <hr style="width: 95%;"/>
          <p style="float: left;width: 45%;">P5323232343532</p>

        </div>
      </van-row>
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
      type:'',
      orderNo:''
    }
  },
  created(){
    var this_=this;
  },
  mounted(){
    this.$store.commit('changeParame', {headerBack:true,hederContent:'干线配载单',bottom:'1',bottomShow:false})
  },
  methods:{
    beginScan(type){
      if(type==1){
        this.$router.push({ name: "orderDetailsPut", query: { type:1}});
      }else{
        this.$router.push({ name: "orderDetailsOut", query: { type:2}});
      }
    },
    outLogin(){
      localStorage.removeItem("isLogin");
      localStorage.removeItem("siteId");
      localStorage.removeItem("token");
      this.$router.push({ name: "login"});
    }
  }
}
</script>
<style lang="less" scoped>
  .ewm{
  position: fixed;
  right: 4%;
  top: 12px;
  width: 1.5rem;
}
</style>