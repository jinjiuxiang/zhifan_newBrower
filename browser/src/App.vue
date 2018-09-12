<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted(){
    const that = this;
    console.log($(window).width());
    if($(window).width() <= 1024){
      that.$router.push({name:"mHome"})
    }else {
      that.$router.push({name:"pcHome"})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
  *{
    padding: 0;
    margin: 0;
  }
</style>
