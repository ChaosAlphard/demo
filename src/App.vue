<template>
<v-app id="app">
  <div id="top-bar">
    <div>
      Logo Here
    </div>
    <div class="controller">
      <button data="ctrl"><v-icon>menu</v-icon></button>
      <button data="ctrl"><v-icon>flip_to_back</v-icon></button>
      <button data="ctrl"><v-icon>fullscreen</v-icon></button>
      <button data="ctrl"><v-icon>close</v-icon></button>
    </div>
  </div>

  <div id="main-content">
    <div id="leftcontent"></div>
    <div id="rghtcontent">
      <router-view/>
      <v-btn color="primary" @click="show = !show"> toggle </v-btn>
      <v-alert :value="show" icon="check_circle" transition="fade-transition" v-model="show">123123</v-alert>

      <v-btn depressed="" color="primary" @click="snackbar = true"> snack </v-btn>
      <v-snackbar v-model="snackbar" :timeout='3000' top>
        floatbar
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
  </div>

  <div id="bottom-bar"></div>


</v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      show: true,
      snackbar: false
    }
  }
}
</script>

<style>
:root{
  --parmiryColor: #68788C
}

#app{
  min-width: 1024px;
  min-height: 768px;
}

#top-bar{
  width: 100%;
  height: 64px;
  font-size: 24px;
  background-color: var(--parmiryColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}

#main-content{
  width: 100%;
  height: calc(100vh - 136px);
  overflow: auto;
}

#bottom-bar{
  width: 100%;
  height: 72px;
  background-color: var(--parmiryColor);
}

.controller>button[data="ctrl"]{
  cursor: pointer;
  min-width: 16px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  margin: 5px;
  background: #FAA
}
</style>
