<template>
  <div>
     <tips
      v-if="tips.show"
      :title="tips.title"
      :content="tips.content"
      @close="closeTips"
    ></tips>
    <div style='float: right;transform: translate(-15px,-42px);'><img @click="getBeCode" style='width:36px;height:36px;' src="../../assets/images/ewm.png"/></div>
    <div align="center" style="padding-top: 40px;">
      <van-row>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255);">
          <div style="
    position: absolute;
    color: rgb(255, 255, 255);
    z-index: 99;
    font-size: 1.2em;
    background-color: red;
    width: 24px;
    height: 24px;
    left: 19%;
    text-align: center;
    border-radius: 2.75em;">{{queryPickupCount}}</div>
          <img src="../../assets/images/t1.png" @click="$router.push({name:'pickup'})"/>
          <div @click="$router.push({name:'pickup'})">提货配载单</div>
        </van-col>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
                    <div style="
    position: absolute;
    color: rgb(255, 255, 255);
    z-index: 99;
    font-size: 1.2em;
    background-color: red;
    width: 24px;
    height: 24px;
    left:53%;
    text-align: center;
    border-radius: 2.75em;">{{queryVehicleCount}}</div>
          <img src="../../assets/images/t2.png"  @click="$router.push({name:'reporting'})"/>
          <div  @click="$router.push({name:'reporting'})">干线配载单</div>
        </van-col>
        <van-col span="8" align="center" style="color:rgb(30, 131, 255)">
                    <div style="
    position: absolute;
    color: rgb(255, 255, 255);
    z-index: 99;
    font-size: 1.2em;
    background-color: red;
    width: 24px;
    height: 24px;
    left: 88%;
    text-align: center;
    border-radius: 2.75em;">{{deliverCount}}</div>
          <img src="../../assets/images/t3.png" @click="$router.push({name:'deliver'})"/>
          <div @click="$router.push({name:'deliver'})">送货配载单</div>
        </van-col>
      </van-row>
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
      deliverCount:0,
      queryPickupCount:0,
      queryVehicleCount:0,
      tips: { title: '提示', content: "提示内容", show: false},
      token:this.utils.getRequestParam('token')
    };
  },
   created(){
    var this_=this;
    window.getToAddress = (address='') => {
      if(null!=address){
          var barcode=address;
          this.utils.request.queryOrderByDriver({'order_no':barcode,'driver_id':localStorage.getItem('id')},function(data){
            if(null!=data && data=='0001'){
               this_.tips={title: '提示',content: '该运单和司机不匹配，无法查看', show:true};
            }else{
              this_.$router.push({name:'orderInfo',query:{id:data.id}})
            }
         });
      }
    };
  },
  mounted() {
    var this_=this;
    this.$store.commit("changeParame", {
      headerBack: false,
      hederContent: "运输管理",
      bottom: "1",
      bottomShow: false
    });
    this.utils.request.quertUserInfoByToken({token:this.token},function(data){
        localStorage.setItem('token',data.token);
        localStorage.setItem('siteId',data.site_id);
        localStorage.setItem('id',data.id);
        localStorage.setItem('isLogin','true');
        this_.utils.request.queryShippingByDriver({'driver_id':localStorage.getItem('id')},function(data){
          if(null!=data){
            this_.deliverCount=data.deliverCount;
            this_.queryPickupCount=data.queryPickupCount;
            this_.queryVehicleCount=data.queryVehicleCount;
          }
        });
    });
  },
  methods:{
    getBeCode (){
      var this_=this;
      this.utils.request.getCamera();
    },
     closeTips(data) {
      this.tips.show = false;
    },
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
</style>