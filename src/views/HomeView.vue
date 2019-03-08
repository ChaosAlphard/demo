<template>
  <v-container class="container">

    <Banner @postMsg="postMsg($event)"/>
    <RecPlaylist @postMsg="postMsg($event)" @playSong="playSong($event)"/>
    <NewSong @postMsg="postMsg($event)"/>
    <d-j-program @postMsg="postMsg($event)"/>

    <v-snackbar v-model="homeSnackShow" :timeout='3000' top>
      {{homeSnackText}}
      <v-btn @click="homeSnackShow = false" flat>关闭</v-btn>
    </v-snackbar>
  </v-container>
</template>

<script>
import Banner from '../components/HomePage/Banner.vue'
import RecPlaylist from '../components/HomePage/RecPlaylist.vue'
import NewSong from '../components/HomePage/NewSong.vue'
import DJProgram from '../components/HomePage/DJProgram.vue'

export default {
  name: 'HomeView',
  data: () => ({
    homeSnackText: 'error',
    homeSnackShow: false
  }),
  methods: {
    postMsg(msg) {
      // 传递给父级
      this.$emit('postMsg',msg)
    },
    playSong(id){
      this.$emit('playSong',id)
    }
  },
  components: {
    Banner,
    RecPlaylist,
    NewSong,
    DJProgram
  }
}
</script>

<style scoped>
.container>div{
  width: 80%;
  margin-left: auto;
  margin-right: auto;
}
.container>div:not(#banner){
  margin-top: 20px;
}
</style>

