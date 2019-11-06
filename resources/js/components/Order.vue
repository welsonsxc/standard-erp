<template>
	<div>
		<div>
			<el-form :model="numberValidateForm" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
				<el-form-item
						label="订单id"
						prop="age"
						:rules="[
                          { required: true, message: '订单id不能为空'},
                          { type: 'number', message: '订单id必须为数字值'}
                        ]"
				>
					<el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
				</el-form-item>
				<el-form-item>
					<template>
						<el-radio v-model="type" label="1">销售订单</el-radio>
						<el-radio v-model="type" label="2">入库订单</el-radio>
					</template>
					<span>订单金额：{{total}}元</span>
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
						align="center">
				</el-table-column>
				<el-table-column
						prop="CommodityFull"
						label="商品名称"
						align="center">
				</el-table-column>
				<el-table-column
						prop="StandardPrice"
						label="单价"
						align="center">
				</el-table-column>
				<el-table-column
						label="数量"
						align="center">
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
			</el-table>
		</div>
	</div>


</template>

<script>
	export default {
		data() {
			return {
				tableData: [],
				numberValidateForm: {
					age: ''
				},
				total: 0,
				type: '1'
			}
		},
		methods: {
			//表格操作
			count: function () {
				let totalPrice = 0;
				this.tableData.forEach(function (val) {
					totalPrice += val.number * val.StandardPrice;
				});
				this.total = parseFloat(totalPrice).toFixed(2);
			},
			handleDelete(index) {
				this.tableData.splice(index, 1);
				this.$message({
					type: 'success',
					message: '删除成功!'
				});
				this.count();
			},
			handleInput: function (value) {
				if (null == value.number || value.number === "") {
					value.number = 1;
				}
				value.goodTotal = (value.number * value.StandardPrice).toFixed(2);//保留两位小数
				this.count();
			},
			add: function (value) {
				if (typeof value.number == 'string') {
					value.number = parseInt(value.number);
				}
				value.number += 1;
				value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
				this.count();
			},
			del: function (value) {
				if (typeof value.number == 'string') {
					value.number = parseInt(value.number);
				}
				if (value.number > 1) {
					value.number -= 1;
				}
				value.goodTotal = (value.number * value.StandardPrice).toFixed(2);
				this.count();
			},

			//提交表单
			submitForm(formName) {

				this.$refs[formName].validate((valid) => {
					if (valid) {
						this.tableData = [];
						const url = 'searchOrder/' + this.numberValidateForm.age + '?type=' + this.type;
						axios.get(url).then((res) => {
							if (res.data.message === '') {
								const count = res.data.data['count'];
								for (let i = 0; i < count; i++) {
									const exam = new Array(res.data.data['list'][i]);
									exam[0]['number'] = 1;
									exam[0]['goodTotal'] = exam[0]['StandardPrice'];
									this.tableData.push(exam[0]);
								}
								this.count();
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
			//重置表格
			resetForm(formName) {
				this.$refs[formName].resetFields();
				this.tableData = '';
			},

		},
	}
</script>
