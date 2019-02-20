<template>
<div id="top-bar">
  <div>
    Logo Here
  </div>
    <div class="controller">
    <button><v-icon dark>menu</v-icon></button>
    <button><v-icon dark>flip_to_back</v-icon></button>
    <button><v-icon dark>fullscreen</v-icon></button>
    <button><v-icon dark>close</v-icon></button>
  </div>
</div>
</template>

<script>
export default {
  name: 'TopBar',
}
</script>

<style scoped>
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
  .controller>button{
    cursor: pointer;
    min-width: 16px;
    width: 32px;
    height: 32px;
    line-height: 32px;
    margin: 5px;
    color: #FFF;
  }
  .controller>button:hover{
    background: var(--primaryColorHighlight)
  }
</style>
