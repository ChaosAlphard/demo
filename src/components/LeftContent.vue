<template>
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

    <v-list class="song-list">
      <v-list-group value="true">

        <v-list-tile slot="activator">
          <v-list-tile-title class="font-24px no-sel">
            <v-icon>queue_music</v-icon>我的歌单
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile v-for="item in 3" :key="item" class="nav-list-item">
          <v-btn block flat>
            <!-- <v-list-tile-action><v-icon>home</v-icon></v-list-tile-action> -->
            <v-list-tile-content>
              <v-list-tile-title class="font-21px"><v-icon>audiotrack</v-icon>title</v-list-tile-title>
            </v-list-tile-content>
          </v-btn>
        </v-list-tile>

      </v-list-group>
    </v-list>

    <v-list class="song-list">
      <v-list-group value="true">

        <v-list-tile slot="activator">
          <v-list-tile-title class="font-24px no-sel">
            <v-icon>queue_music</v-icon>歌单收藏
          </v-list-tile-title>
        </v-list-tile>

        <v-list-tile v-for="item in 3" :key="item" class="nav-list-item">
          <v-btn block flat>
            <v-list-tile-content>
              <v-list-tile-title class="font-21px">
                <v-icon>audiotrack</v-icon>title
              </v-list-tile-title>
            </v-list-tile-content>
          </v-btn>
        </v-list-tile>

      </v-list-group>
    </v-list>

  </v-navigation-drawer>
</div>
</template>

<script>
export default {
  name: 'LeftContent'
}
</script>

<style scoped>
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
</style>
