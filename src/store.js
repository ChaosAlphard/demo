import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    playing: false,
    playList: [],
    currentPlaying: 0,
    mode: 0,
    snackText: '',
    snackShow: false
  },
  mutations: {
    showTopMsg(state, msg) {
      state.snackText = msg
      state.snackShow = true
    }
  },
  actions: {

  }
})
