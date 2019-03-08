<template>
  <div id="bottom-bar">
    <audio id="audio" ref="audio" :src="audioSrc" hidden>
      Sorry Your Broswer Not Suppot Audio Tag
    </audio>
    <div class="song-info">
      <img :src="audioInfo.picUrl" :alt="audioInfo.name">
      <div class="song-name">{{audioInfo.name}}</div>
      <div class="song-auth">{{audioInfo.picUrl}}</div>
    </div>
    <div class="audio-control">
      <v-btn dark flat icon @click="changePlayStat()"><v-icon large>{{playIcon}}</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>pause_circle_outline</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>play_circle_outline</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>skip_next</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>skip_previous</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>slow_motion_video</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>playlist_play</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>volume_up</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>volume_down</v-icon></v-btn>
      <v-btn dark flat icon><v-icon large>volume_off</v-icon></v-btn>
      <v-icon></v-icon>
      <v-icon></v-icon>
    </div>
    <div class="song-control"></div>
  </div>
</template>

<script>

export default {
  name: 'BottomBar',
  data: () => ({
    audioInfo: [],
    audioSrc: '',
    audio: null,
    playIcon: 'play_circle_outline'
  }),
  methods:{
    getMusicByID(ID) {
      this.axios.get(`/api/song/url?id=${ID}`)
      .then(res => {
        if(res.data.code===200){
          this.audioSrc = res.data.data[0].url
        } else {
          this.$emit('postMsg',`获取歌曲失败, 错误代码${res['data']['code']}`)
        }
      }).catch((err) => {
        this.$emit('postMsg',`服务异常, ${err}`)
      })
    },
    getMusicInfo(ID) {
      this.axios.get(`/api/song/detail?ids=${ID}`)
      .then(res => {
        if(res.data.code===200) {
          this.audioInfo = res.data.songs[0].al
        } else {
          this.$emit('postMsg', `获取歌曲信息失败, 错误代码${res['data']['code']}`)
        }
      }).catch((err) => {
        this.$emit('postMsg',`服务异常, ${err}`)
      })
    },
    changePlayIcon() {
      this.playIcon === 'play_circle_outline'&&
      (this.playIcon = 'pause_circle_outline')||
      (this.playIcon = 'play_circle_outline')
    },
    changePlayStat() {
      this.audio.paused ? this.audio.play() : this.audio.pause()
      this.changePlayIcon()
    },
    timeControl() {
      let long = this.audio.duration
      let progess = `${Math.floor(long/60)}:${Math.floor(long%60)}`
      console.log(progess)
    }
  },
  beforeMount() {
    this.getMusicByID(468176711)
    this.getMusicInfo(468176711)
  },
  mounted() {
    this.audio = this.$refs.audio
    this.audio.addEventListener('canplay', this.timeControl, false)
  },
  beforeDestroy() {
    this.audio.removeEventListener('canplay', this.timeControl, false)
  }
}
</script>

<style scoped>
#bottom-bar{
  width: 100%;
  height: 72px;
  background-color: var(--primaryColor);
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
  .song-info{
    width: 240px;
    height: 100%;
    display: grid;
    grid-template-columns: 72px auto;
    grid-template-rows: 50% auto;
    align-items: center;
    grid-column-gap: 4px
  }
  .song-info>img {
    height: 72px;
    grid-row-start: 1;
    grid-row-end: 3;
  }
  .song-info>div {
    color: #FFF;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .song-info>.song-name {
    font-size: 18px;
  }
  .song-info>.song-auth {
    font-size: 12px;
  }

  .audio-control {
    width: 100%;
    height: 100%;
    box-shadow: 0 0 5px 5px burlywood inset;
  }

  .song-control {
    width: 280px;
    height: 100%;
    box-shadow: 0 0 5px 5px burlywood inset;
  }
</style>
