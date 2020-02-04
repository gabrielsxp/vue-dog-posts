<template>
    <div class="wrapper">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
    </div>
</template>

<script>
export default {
    name: "Loader"
}
</script>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 50px;
    }
</style>