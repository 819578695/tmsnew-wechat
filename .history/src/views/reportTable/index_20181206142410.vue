<template>
    <div>
      <div align="center" style="padding-top:120px;">
       <span>点击扫码<b style="color:red">发</b>车</span>
       <img src="../../assets/images/tm.jpg" alt="">
      </div>
      <div align="center" style="padding-top:120px;">
        <span>点击扫码<b style="color:red">到</b>车</span>
       <img src="../../assets/images/tm.jpg" alt="">
      </div>
    </div>
</template>
<script>
export default {
  data(){
    return {
    }
  },
  mounted(){
      this.$store.commit('changeParame', {headerBack:false,hederContent:'扫描条形码',bottom:'1',bottomShow:true})
      this.utils.request.queryOrderInfoByNo('',function(data){

      });
  },
  methods:{
    toggleDate(){
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