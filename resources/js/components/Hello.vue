<template>
    <div>
        <p class="hello">{{ msg }}</p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'just test index  ~~~'
            }
        }
    }
</script>

<style>
    .hello {
        font-size: 2em;
        color: green;
    }
</style>