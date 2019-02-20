<template>
  <div id="bottom-bar">
    <v-snackbar v-model="snackShow" :timeout='3000' top>
      {{snackText}}
    </v-snackbar>
    <audio id="audio" :src="audioSrc" controls>
      Sorry Your Broswer Not Suppot Audio Tag
    </audio>
  </div>
</template>

<script>

export default {
  name: 'BottomBar',
  data: () => ({
    audioSrc: '',
  }),
  methods:{
    getMusicByID() {
      this.axios.get('/api/song/url?id=468176711')
      .then(res => {
        if(res.data.code===200){
          console.log(res.data.data[0].url)
          this.audioSrc = res.data.data[0].url
        } else {
          this.$emit('postMsg',`获取失败, 错误代码${res['data']['code']}`)
        }
      }).catch((err) => {
        this.$emit('postMsg',`服务异常, ${err}`)
      })
    }
  },
  beforeMount() {
    this.getMusicByID()
  }
}
</script>

<style scoped>
#bottom-bar{
  width: 100%;
  height: 72px;
  background-color: var(--primaryColor);
}
</style>
