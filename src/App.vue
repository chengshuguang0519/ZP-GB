<template>
  <div id="app" >
    <router-view />
    <Side-show></Side-show>
  </div>
</template>

<script>
import SideShow from './components/SideShow.vue'
export default ({
  components:{
    SideShow
  }
})
</script>

<style lang='less' >
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
</style>
