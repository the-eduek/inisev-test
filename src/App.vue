<script>
import MenuBar from './components/MenuBar.vue';

export default{
  components: {
    MenuBar
  }
}
</script>

<template>
  <section class="app">
    <MenuBar />

    <div class="app__content">
      <router-view></router-view>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__content {
    background-color: #fff;
    width: 100%;
  }
}

@media (min-width: 768px) {
  .app {
    flex-direction: row;
  }
}
</style>