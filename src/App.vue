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
      <v-btn class="list-btn white--text" to="/" block flat>
        <v-icon dark>home</v-icon>发现
      </v-btn>
      <v-btn class="list-btn white--text" to="/search" block flat>
        <v-icon dark>search</v-icon>搜索
      </v-btn>
      <v-btn class="list-btn white--text" to="" block flat>
        <v-icon dark>radio</v-icon>私人FM
      </v-btn>
      <v-btn class="list-btn white--text" to="" block flat>
        <v-icon>radio</v-icon>发现
      </v-btn>

      <v-navigation-drawer permanent height="auto" dark style="background-color: var(--primaryColorHighlight)">

        <v-list class="song-list"><v-list-group value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title class="font-24px no-sel"><v-icon>queue_music</v-icon>我的歌单</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="item in 3" :key="item" class="nav-list-item"><v-btn block flat>
            <!-- <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action> -->
            <v-list-tile-content>
              <v-list-tile-title class="font-21px"><v-icon>audiotrack</v-icon>title</v-list-tile-title>
            </v-list-tile-content>
          </v-btn></v-list-tile>
        </v-list-group></v-list>

        <v-list class="song-list"><v-list-group value="true">
          <v-list-tile slot="activator">
            <v-list-tile-title class="font-24px no-sel"><v-icon>queue_music</v-icon>歌单收藏</v-list-tile-title>
          </v-list-tile>
          <v-list-tile v-for="item in 3" :key="item" class="nav-list-item"><v-btn block flat>
            <v-list-tile-content>
              <v-list-tile-title class="font-21px"><v-icon>audiotrack</v-icon>title</v-list-tile-title>
            </v-list-tile-content>
          </v-btn></v-list-tile>
        </v-list-group></v-list>

      </v-navigation-drawer>

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
    color: #FFF;
    font-size: 24px;
    overflow: auto;
  }
    #left-content>div{
      box-sizing: border-box;
      margin-top: 5px;
      margin-bottom: 5px;
      /* padding-left: 5px; */
      /* padding-right: 5px; */
      cursor: pointer;
    }
    /* #left-content>div:hover{
      box-shadow: 0 0 0 2px var(--primaryColorHHL) inset;
    } */
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
      .song-list{
        padding: 0;
        overflow: hidden;
        border: none;
        height: auto;
      }
      .nav-list-item>div{
        padding: 0;
      }
      .nav-list-item>div>button{
        margin: 0;
        height: 86%;
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
