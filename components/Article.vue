<template>
  <div>
    <h4>{{ item.data.title }}</h4>
        <div class="tags">
          <span v-for="(tag, i) in item.data.tags" :key="i" class="tag">{{ tag.tag }}</span>
        </div>
        <h5 v-show="item.data.abstractNote">Abstract</h5>
        <p v-show="item.data.abstractNote">{{ item.data.abstractNote }}</p>
        <h5 v-show="item.data.note">Note</h5>
        <div v-html="item.data.note" v-show="item.data.note"></div>
        <a :href="item.data.url">Lien de l'article</a>
  </div>
</template>

<script >
export default {
  props : ['item']
}
</script>

<style lang="scss" scoped>
.article {
  box-shadow: 0px 4px 5px 4px rgba(33, 95, 255, 0.02);
  padding: 30px 40px;
  max-width: 700px;
  margin: 20px 0;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transition: all 0.3s;

  &:hover {
    box-shadow: 0px 4px 14px 4px rgba(33,95,255, 0.07);
  }
}

.article a {
  text-decoration: none;
  font-weight: 700;
  font-size: 0.8rem;
  align-self: flex-end;
}

.tags {
  display: flex;
  flex-wrap: wrap;
}

.tag {
  font-size: 0.8rem;
  font-weight: 600;
  color: #215fff;
  border: 2px solid rgb(33, 95, 255);
  padding: 5px 10px;
  border-radius: 100px;
  margin-right: 10px;
  margin-bottom: 10px;
}
</style>