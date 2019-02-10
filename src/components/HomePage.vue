<template>
<v-container class="container">
  <div id="banner">
    <v-window v-model="bannerShow" class="banner-window">
      <v-window-item v-for="item in banner" :key="item.adid" class="ban-win-item">
        <img :src="item.imageUrl">
      </v-window-item>
    </v-window>
    <div class="banner-dot">
      <span v-for="(v, i) in banner" :key="i" @click="bannerGoTO(i)"
      class="dot" :class="{'dot-selected':i===bannerShow}">
      </span>
    </div>
  </div>

  <div id="rec-playlist">

    <div class="rec-title">
      <span>推荐歌单</span>
      <span>更多>></span>
    </div>

    <div class="rec-lists">
      <div v-for="item in recList" :key="item.id" class="list" @click="getPlayList(item.id)">
        <img :src="item.picUrl" :alt="item.description">
        <div class="rec-info">
          <div><v-icon dark small>headset</v-icon>{{filtePlayCount(item.playCount)}}</div>
          <div><v-icon dark small>music_note</v-icon>{{item.trackCount}}</div>
        </div>
        <div>{{item.name}}</div>
      </div>
    </div>

  </div>

  <v-snackbar v-model="snackShow" :timeout='3000' top>
    {{snackText}}
    <v-btn @click="snackShow = false" flat>关闭</v-btn>
  </v-snackbar>
</v-container>
</template>

<script>
import axios from "axios"

export default {
  name: 'HomePage',
  data() {
    return {
      banner: [],
      bannerShow: 0,
      bannerTimer: void 0,
      recList: [],
      recNewSong: [],
      recDJ: [],
      snackText: 'error',
      snackShow: false
    }
  },
  methods: {
    bannerAutoPay() {
      if(this.bannerShow >= this.banner.length-1){
        this.bannerShow = 0
      } else {
        this.bannerShow++
      }
    },
    bannerPlay() {
      this.bannerTimer = setInterval(this.bannerAutoPay, 10000)
    },
    bannerGoTO(bannWin) {
      this.bannerShow = bannWin
      clearInterval(this.bannerTimer)
      this.bannerPlay()
    },
    getPlayList(id) {
      console.log(id)
    },
    filtePlayCount(count) {
      let res = String(count)
      if(res.indexOf('.') !== -1) {
        res = res.substring(0,res.indexOf('.'))
      }
      if(res.length>5){
        res = res.substring(0,res.length-4)
        return `${res}万`
      }
      return res
    },
  },
  beforeMount() {
    //轮播图
    axios.get('/api/banner')
    .then(res => {
      if(res.data.code===200){
        this.banner = res.data.banners
        this.bannerShow = this.banner.length
      } else {
        this.snackText = `获取失败, 错误代码${res['data']['code']}`
        this.snackShow = true
      }
    }, err => {
      this.snackText = `服务异常, ${err}`
      this.snackShow = true
    })

    //推荐歌单
    axios.get('/api/personalized?limit=10')  // top/playlist?limit=10&order=hot
    .then(res => {
      if(res.data.code===200){
        this.recList = res.data.result
      } else {
        this.snackText = `获取失败, 错误代码${res['data']['code']}`
        this.snackShow = true
      }
    }, err => {
      this.snackText = `服务异常, ${err}`
      this.snackShow = true
    })

    //最新音乐
    axios.get('/api/personalized/newsong')
    .then(res => {
      console.warn(res.data)
      if(res.data.code===200){
        // this.recList = res.data.result
      } else {
        this.snackText = `获取失败, 错误代码${res['data']['code']}`
        this.snackShow = true
      }
    }, err => {
      this.snackText = `服务异常, ${err}`
      this.snackShow = true
    })

    //推荐电台
    axios.get('/api/personalized/djprogram')
    .then(res => {
      console.warn(res.data)
      if(res.data.code===200){
        // this.recList = res.data.result
      } else {
        this.snackText = `获取失败, 错误代码${res['data']['code']}`
        this.snackShow = true
      }
    }, err => {
      this.snackText = `服务异常, ${err}`
      this.snackShow = true
    })
  },
  mounted() {
    this.bannerPlay()
  }
}
</script>

<style scoped>
/* .container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
.container>div{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.container>div:not(#banner){
  margin-top: 20px;
}
#banner{
  width: 80%;
  position: relative;
}
  .banner-window{
    margin-left: auto;
    margin-right: auto;
    /* width: calc(80vw - 240px); */
    /* height: calc(40vw - 240px); */
    width: 80%;
    height: 0;
    padding-bottom: 30%;
    box-sizing: border-box;
    overflow: hidden;
  }
    .ban-win-item>img {
      width: 100%;
      height: 100%;
    }
  .banner-dot{
    position: absolute;
    bottom: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 36px;
    z-index: 8;
  }
    .dot{
      width: 16px;
      height: 16px;
      box-shadow: 0 0 0 1px #000 inset;
      background-color: #CCC;
      border-radius: 16px;
      margin-left: 5px;
      margin-right: 5px;
      cursor: pointer;
    }
    .dot-selected,.dot:hover{
      background-color: #FFF;
    }

#rec-playlist{
  width:80%;
}
  .rec-title{
    width: 100%;
    height: 36px;
    border-bottom: 2px solid var(--primaryColor);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  .rec-title>span:nth-of-type(1) {
    font-size: 24px;
  }
  .rec-lists{
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    grid-template-rows: 50% 50%;
    margin: 0 auto;
  }
  .list{
    /* height: auto; */
    overflow: hidden;
    margin: 15px;
    position: relative;
    cursor: pointer;
  }
  .list>img{
    width: 100%;
    height: auto;
  }
  .list>.rec-info{
    position: absolute;
    top:0; left:0;
    width: 100%;
    color: #FFF;
    background-color: #0008;
    font-size: 18px;
    padding: 0 5px 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
