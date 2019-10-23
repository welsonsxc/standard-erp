<template>
    <div>
        <div>
            <h1>小型超市管理系统</h1>
        </div>
        <div>
            <el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
                <el-form-item
                        label="商品id"
                        prop="age"
                        :rules="[
                          { required: true, message: '商品id不能为空'},
                          { type: 'number', message: '商品id必须为数字值'}
                        ]"
                >
                    <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                    <el-button @click="resetForm('numberValidateForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <div>
            <el-table
                    :data="tableData"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="id"
                        label="id"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="CommodityFull"
                        label="商品名称"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="StandardPrice"
                        label="单价">
                </el-table-column>
                <el-table-column
                        label="数量"
                        width="200">
                    <template slot-scope="scope">
                        <div>
                            <el-input
                                    v-model="scope.row.number" @change="handleInput(scope.row)">
                                <el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i>
                                </el-button>
                                <el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i>
                                </el-button>
                            </el-input>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column
                        label="小计"
                        width="150"
                        prop="goodTotal">
                </el-table-column>
                <el-table-column
                        fixed="right"
                        label="操作"
                        width="100">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>


</template>

<script>
    export default {
        data() {
            return {

                tableData:
                    [
                        {
                            id: 1,
                            CommodityFull: "康师傅冰红茶",
                            StandardPrice: 5.78,
                            number: 1,
                            goodTotal: 5.78,
                        },
                        {
                            id: 2,
                            CommodityFull: "农夫山泉矿泉水",
                            StandardPrice: 2,
                            number: 1,
                            goodTotal: 2,
                        },
                        {
                            id: 4,
                            CommodityFull: "测试商品",
                            StandardPrice: 1,
                            number: 1,
                            goodTotal: 1,
                        }],
                numberValidateForm: {
                    age: ''
                }
            }
        },
        methods: {
            //表格操作
            handleDelete(index) {
                this.tableData.splice(index, 1);
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            },
            handleInput: function (value) {
                if (null == value.number || value.number === "") {
                    value.number = 1;
                }
                value.goodTotal = (value.number * value.StandardPrice).toFixed(2);//保留两位小数
            },
            add: function (value) {
                if (typeof value.number == 'string') {
                    value.number = parseInt(value.number);
                }
                value.number += 1;
                value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
            },
            del: function (value) {
                if (typeof value.number == 'string') {
                    value.number = parseInt(value.number);
                }
                if (value.number > 1) {
                    value.number -= 1;
                }
                value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
            },

            //表单
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        // eslint-disable-next-line no-undef
                        axios.get('commodity/' + this.numberValidateForm.age).then((res) => {
                            if (res.data.message === '') {
                                var exam = new Array(res.data.data[0]);
                                exam[0]['number'] = 1;
                                exam[0]['goodTotal'] = res.data.data[0].StandardPrice;
                                this.tableData.push(exam[0]);
                            } else {
                                this.$message({
                                    type: 'error',
                                    message: '查找失败!'
                                });
                            }
                        }).catch(function (err) {
                            // eslint-disable-next-line no-console
                            console.log(err)
                        })
                    } else {
                        this.$message({
                            type: 'error',
                            message: '验证失败!'
                        });
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        },
    }
</script>
