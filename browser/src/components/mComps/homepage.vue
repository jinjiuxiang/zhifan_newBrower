<template>
    <div class="m-homepage-container">
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <img class="m-search-hold-image" src="../../assets/mimage/search1.svg" slot="right" alt="">
      </van-nav-bar>
      <div class="m-homepage-content">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <p>刷新次数: {{ count }}</p>
          <div class="m-homepage-content-main">

          </div>
        </van-pull-refresh>
      </div>
    </div>
</template>

<script>
    export default {
        name: "homepage",
        data(){
          return {
            count: 0,
            isLoading: false
          }
        },
        methods: {
          onClickLeft() {
            this.$toast('返回');
          },
          onClickRight() {
            this.$toast('按钮');
          },
          onRefresh() {
            //this.count++;
            setTimeout(() => {
              this.$toast('刷新成功');
              this.isLoading = false;
              this.count++;
            }, 500);
          }
        }
    }
</script>

<style scoped>
.m-homepage-container{
  width: 100%;
}
.m-search-hold-image{
  display: flex;
  margin-bottom: 12px;
}
.m-homepage-content{
  width: 100%;
}
  .m-homepage-content-main{
    width: 100%;
    height: 10rem;
  }

</style>
