<template>
  <div id="app">
    <MainPage />
  </div>
</template>

<script>
import MainPage from './components/MainPage';
export default {
  name: 'app',
  components: {
    MainPage,
  }
}
</script>

<style>
@import url('./css/reset.css');
#app {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
</style>
