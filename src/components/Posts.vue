<template>
    <section id="posts">
        <div v-if="initialLoading">
            <div class="title">
                <span class="md-display-2">Posts</span>
                <hr>
            </div>
            <div class="md-layout md-gutter md-alignment-center grid">
                <div 
                    class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 align"
                    v-for="(post, index) in posts" :key="index"
                    >
                    <Post :post="post" :index="index"/>
                </div>
            </div>
            <Loader v-if="loading"/>
        </div>
        <Loader v-else/>
    </section>
</template>

<script>
import axios from '../axios.js';
import Post from './Post';
import Loader from './Loader';
export default {
    name: 'Posts',
    data(){
        return {
            posts: [],
            error: '',
            loading: false,
            limit: 10,
            page: 1,
            bottom: false,
            initialLoading: true
        }
    },
    methods: {
        async fetchPosts(start){
            if(start){
                this.initialLoading = true;
            }
            try {
                this.loading = true;
                const response = await axios.get('post');
                if(response.data){
                    const posts = [...this.posts,...response.data.data];
                    this.posts = posts;
                    
                    this.page++;
                }
            } catch(error){
                this.error = error;
            }
            if(start){
                this.initialLoading = false;
            }
            this.loading = false;
        },
        bottomVisible(){
            const scrollY = window.scrollY;
            const visible = document.documentElement.clientHeight;
            const pageHeight = document.documentElement.scrollHeight;
            const bottomOfPage = visible + scrollY >= pageHeight;
            return bottomOfPage || pageHeight < visible;
        },
        getPost(index){
            // eslint-disable-next-line no-console
            console.log('clicked');
            this.postIndex = index;
        }
    },
    watch: {
        bottom(bottom){
            if(bottom){
                this.fetchPosts();
            }
        }
    },
    async created(){
        window.addEventListener('scroll', () => {
            this.bottom = this.bottomVisible();
        });
        await this.fetchPosts();
    },
    destroyed(){
        window.removeEventListener('scroll', this.handleScroll);
    },
    components: {
        Post,
        Loader
    }
}
</script>

<style>
    #posts {
        width: 100%;
        overflow: hidden;
        padding: 80px 0;
    }
    .grid {
        min-height: 100vh;
        padding: auto;
    }
    .align {
        display: flex;
        justify-content: center;
    }
    .md-display-2 {
        text-align: center;
    }
    .md-layout {
        width: '100%';
    }
    .title {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .title hr {
        width: 100%;
        border: 0;
        border-top: 3px double #72b5b7;
        max-width: 10%;
        margin-bottom: 50px;
    }
</style>