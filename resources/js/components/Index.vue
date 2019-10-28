<template>
    <div>

        <el-container>
            <el-header>小型超市管理系统</el-header>
            <el-main>
                <el-row :gutter="12">
                    <el-col :span="12">
                        <div class="grid-content bg-purple" align="center">
                            <el-button type="primary" plain>
                                <router-link to="/CommodityIn" >
                                    入库管理
                                </router-link>
                            </el-button>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple" align="center">
                            <el-button type="primary" plain>
                                <router-link to="/shopcar">
                                    销售商品
                                </router-link>
                            </el-button>
                        </div>
                    </el-col>
                </el-row>
                <el-row :gutter="12">
                    <el-col :span="12">
                        <div class="grid-content bg-purple" align="center">
                            <el-button type="primary" plain>
                                <router-link to="/shopcar">
                                    订单查询
                                </router-link>
                            </el-button>
                        </div>
                    </el-col>
                </el-row>
            </el-main>
            <el-footer>俺是页脚</el-footer>
        </el-container>


    </div>
</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

    a:link {
        font-size: 12px;
        color: #000000;
        text-decoration: none;
    }
    a:visited {
        font-size: 12px;
        color: #000000;
        text-decoration: none;
    }
    a:hover {
        font-size: 12px;
        color: #999999;
        text-decoration: underline;
    }
</style>
