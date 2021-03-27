<template>
  <div class="container">
      <nuxt-link to="/">Retour à l'acceuil</nuxt-link>
    <Article class="article" v-for="item in $store.state.articles" :key="item.data.key" v-show="item.data.itemType != 'note'" :item="item" ></Article>
    
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [],
    };
  }
};
</script>

<style lang="scss" >
.container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}


</style>