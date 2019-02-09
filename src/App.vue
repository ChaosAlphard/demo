<template>
<v-app id="app">
  <div id="top-bar">
    <div>
      Logo Here
    </div>
    <div class="controller">
      <button data="ctrl"><v-icon dark>menu</v-icon></button>
      <button data="ctrl"><v-icon dark>flip_to_back</v-icon></button>
      <button data="ctrl"><v-icon dark>fullscreen</v-icon></button>
      <button data="ctrl"><v-icon dark>close</v-icon></button>
    </div>
  </div>

  <div id="main-content">
    <div id="left-content">
      <div><v-icon>home</v-icon>发现</div>
      <div><v-icon>search</v-icon>搜索</div>
      <div><v-icon></v-icon>私人FM</div>
    </div>
    <div id="right-content">
      <router-view/>
    </div>
  </div>

  <div id="bottom-bar"></div>
</v-app>
</template>

<script>
export default {
  name: 'App',
  
}
</script>

<style>
:root{
  --primaryColor: #68788C;
  --primaryColorHighlight: #7A8CA3;
}

#app{
  min-width: 1024px;
  min-height: 768px;
  width: 100%;
  height: 100%;
}

#top-bar{
  width: 100%;
  height: 64px;
  font-size: 24px;
  background-color: var(--primaryColor);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
}
  .controller>button[data="ctrl"]{
    cursor: pointer;
    min-width: 16px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    margin: 5px;
    color: #FFF;
  }
  .controller>button[data="ctrl"]:hover{
    background: var(--primaryColorHighlight)
  }

#main-content{
  width: 100%;
  height: calc(100vh - 136px);
  display: flex;
  justify-content: flex-start;
}
  #left-content{
    min-width: 180px;
    height: 100%;
    background: var(--primaryColorHighlight);
  }
  #right-content{
    width: 100%;
    box-sizing: border-box;
    overflow: auto;
  }

#bottom-bar{
  width: 100%;
  height: 72px;
  background-color: var(--primaryColor);
}
</style>
