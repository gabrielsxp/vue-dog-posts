<template>
    <md-dialog :md-active.sync="showModal" v-if="post" md-fullscreen>
        <md-dialog-title>
            <md-avatar>
                <img :src="post.owner.image" :alt="post.owner.firstName + ' ' + post.owner.lastName">
            </md-avatar>
            <span class="md-body-1">{{post.owner.firstName + ' ' + post.owner.lastName}}</span>
        </md-dialog-title>
        <div 
            class="content" 
            :style="{
                width: '728px', 
                height: '100vh', 
                backgroundImage: 'url('+post.image+')', 
                backgroundRepeat: 'no-repeat', 
                backgroundSize: '100%', 
                backgroundPosition: 'center'
            }">
        </div>
        <md-dialog-actions>
            <div class="md-body-1">{{post.message}}</div>
          <md-button class="md-raised md-primary" @click="showModal = !showModal">Close</md-button>
        </md-dialog-actions>
      </md-dialog>
</template>

<script>
import { eventBus } from '../main';
export default {
    data() {
        return {
            post: null,
            showModal: false
        }
    },
    created(){
        eventBus.$on('getFullPost', (post) => {
            // eslint-disable-next-line no-console
            console.log('post getted');
            this.showModal = post !== null;
            this.post = post;
        });
    }
}
</script>

<style>
    * {
       font-family: 'Roboto', sans-serif;
    }
    .content {
        display: flex;
        flex-direction: column;
        overflow-y: auto;
        width: 100%;
        height: 100%;
    }
    .content img {
        width: 100%;
        height: auto;
    }
    .user {
        width: 100%;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .md-dialog {
        max-width: 768px;
        z-index: 999;
    }
    .md-dialog .md-body-1 {
        margin-left: 20px;
    }
    .md-dialog-actions {
        display: flex;
        justify-content: space-between!important;
        padding: 2px 5px!important;
        width: 100%;
    }
</style>