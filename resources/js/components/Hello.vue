<template>
    <div>
        <h1>Test</h1>
        <el-button @click="visible = true">测试</el-button>
        <el-dialog v-model="visible">
            <p>hello</p>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                visible: false
            }
        }
    }
</script>
