<template>
    <md-dialog :md-active.sync="showModal" v-if="post" md-fullscreen>
        <md-dialog-title>
            <md-avatar>
                <img :src="post.owner.image" :alt="post.owner.firstName + ' ' + post.owner.lastName">
            </md-avatar>
            <span class="md-body-1">{{post.owner.firstName + ' ' + post.owner.lastName}}</span>
        </md-dialog-title>
        <div class="content">
            <hr>
            <img :src="post.image" alt="post image">
            <div class="message">
                <div class="md-body-1">{{post.message}}</div>
            </div>
        </div>
        <md-dialog-actions>
          <md-button class="md-dense md-primary" @click="showModal = !showModal">Close</md-button>
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
    .content {
        display: flex;
        flex-direction: column;
        padding: 20px;
        overflow-y: auto;
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
    }
    .md-dialog .md-body-1 {
        margin-left: 20px;
    }
</style>