<template>
    <span class="tag" v-if="tag && tag.length > 0">
        {{ tag }}
    </span>
</template>

<script>
    export default {
        name: 'Tag',
        props: {
            tag: String
        }
    }
</script>

<style>
    .tag {
        padding: 5px 15px;
        border-radius: 20px;
        color: #fff;
        background-color: #3e206d;
        margin: 10px;
    }
</style>