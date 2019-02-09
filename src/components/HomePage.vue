<template>
<v-container>
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
      recList: [],
      recNewSong: [],
      recDJ: [],
      snackText: 'error',
      snackShow: false
    }
  },
  methods: {
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
    }
  },
  created() {
    //推荐歌单
    axios.get('/api/personalized?limit=10')  // top/playlist?limit=10&order=hot
    .then(res => {
      if(res.data.code===200){
        this.recList = res.data.result
      } else {
        this.snackText = '获取失败'
        this.snackShow = true
      }
    })

    //最新音乐
    axios.get('/api/personalized/newsong')
    .then(res => {
      console.log("newsong: "+res.data)
      if(res.data.code===200){
        // this.recList = res.data.result
      } else {
        this.snackText = '获取失败'
        this.snackShow = true
      }
    })

    //推荐电台
    axion.get('/api/personalized/djprogram')
    .then(res => {
      console.log("djprogram"+res.data)
      if(res.data.code===200){
        // this.recList = res.data.result
      } else {
        this.snackText = '获取失败'
        this.snackShow = true
      }
    })
  },
}
</script>

<style scoped>
/* .container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
} */
#rec-playlist{
  width:80%;
  margin: 0 auto;
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

