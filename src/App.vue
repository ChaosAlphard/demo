<template>
<v-app id="app">
  <TopBar id="top-bar"/>

  <div id="main-content">
    <LeftContent id="left-content"/>

    <div id="right-content">
      <router-view/>
    </div>
  </div>

  <BottomBar id="bottom-bar" @postMsg="showTopMsg($event)"/>

  <v-snackbar v-model="snackShow" :timeout='3000' top>
    {{snackText}}
    <v-btn @click="snackShow = false" flat>关闭</v-btn>
  </v-snackbar>
</v-app>
</template>

<script>
import TopBar from './components/TopBar.vue'
import LeftContent from './components/LeftContent.vue'
import BottomBar from './components/BottomBar.vue'

export default {
  name: 'App',
  data: () => ({
    snackText: 'error',
    snackShow: false
  }),
  methods: {
    showTopMsg(msg) {
      this.snackText = msg
      this.snackShow = true
    }
  },
  components: {
    TopBar,
    LeftContent,
    BottomBar
  }
}
</script>

<style>
:root{
  --primaryColor: #68788C;
  --primaryColorHighlight: #7A8CA3;
  --primaryColorHHL: #9CB4D1;
}

html,body{
  overflow: hidden;
}

#app{
  min-width: 1024px;
  min-height: 768px;
  width: 100%;
  height: 100%;
}

#main-content{
  width: 100%;
  height: calc(100vh - 136px);
  display: flex;
  justify-content: flex-start;
}
#right-content{
  width: 100%;
  box-sizing: border-box;
  overflow: auto;
}

.list-btn>.v-btn__content{
  justify-content: flex-start;
  font-size: 24px;
  /* align-items: flex-end; */
}
.list-btn>.v-btn__content>i{
  line-height: 36px;
  vertical-align: baseline;
  transform: translateY(4px);
}

.no-sel{
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  user-select: none;
}
.font-18px{
  font-size: 18px;
}
.font-21px{
  font-size: 21px;
}
.font-24px{
  font-size: 24px;
}
</style>
