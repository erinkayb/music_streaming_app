<template>
<div>
    <div class="head">
        <h1>Music Streaming Stats</h1>
    </div>
    <div class="granient"></div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .head{
        background-color: #232323;
        border-bottom-right-radius: 200px;
        position: relative;
        z-index: 1;
        padding: 90px;
        display: block;
        overflow:hidden;
    }
    .granient {
        padding: calc(200px + 2rem) 2rem 0 2rem;
        margin-top: -200px;
        overflow: hidden;
        background-image: linear-gradient(to left,#3ada1b,#1baada);
        position: relative;
    }
    h1{
        color: #eee;
    }
</style>