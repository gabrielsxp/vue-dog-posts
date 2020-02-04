<template>
  <div class="hero">
    <div class="content">
      <span class="md-display-2">Find out many posts of people that also likes dogs !</span>
      <div class="search">
        <md-button @click="scrollToElement()" class="md-raised md-primary">Click to see posts</md-button>
      </div>
    </div>
    <Posts />
    <Modal />
  </div>
</template>

<script>
import Posts from '../components/Posts';
import Modal from '../components/Modal';
export default {
  name: "MainPage",
  components: {
      Posts,
      Modal
  },
  methods: {
    scrollToElement(){
      const el = this.$el.querySelector("#posts");
      if(el){
        el.scrollIntoView();
      }
    }
  }
};
</script>

<style>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #c0ffb3;
  background-image: url('https://kofastools.com/images/bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  z-index: 1;
  color: #633a82;
  background-color: rgba(222, 221, 250, 0.7);
  padding: 0 20px;
}
.content .md-display-2 {
  color: #633a82 !important;
  margin-bottom: 20px;
}
</style>
