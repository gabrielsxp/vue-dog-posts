<template>
  <md-card data-aos="fade-up" delay="200" v-on:click.native="getPost()">
      <md-card-header>
        <md-avatar>
          <img :src="post.owner.image" :alt="post.owner.firstName + ' ' + post.owner.lastName">
        </md-avatar>

        <div class="md-title">{{post.owner.firstName + ' ' + post.owner.lastName}}</div>
        <div class="md-subhead">Infinite Posts</div>
      </md-card-header>

      <md-card-media>
        <img :src="post.image" alt="post-caption">
      </md-card-media>

      <md-card-content>
        {{post.message}}
      </md-card-content>

      <md-card-actions>
        <div class="tags">
          <Tag v-for="(tag, index) in post.tags" :key="index" :tag="tag"/>
        </div>
      </md-card-actions>
    </md-card>
</template>

<script>
import Tag from '../components/Tag';
import { eventBus } from '../main';
export default {
    name: 'Post',
    props: {
        post: Object,
        index: Number
    },
    components: {
        Tag
    },
    methods: {
      getPost(){
        eventBus.$emit('getFullPost', this.post);
      }
    }
}
</script>

<style>
  .md-card {
    width: 320px;
    display: inline-block;
    vertical-align: top;
    margin: 10px;
    cursor: pointer;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
</style>