<template>
	<div>
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
						prop="number"
						label="数量"
						align="center">
				</el-table-column>
<!--				<el-table-column-->
<!--						label="数量"-->
<!--						align="center">-->
<!--					<template slot-scope="scope">-->
<!--						<div>-->
<!--							<el-input-->
<!--									v-model="scope.row.number" @change="handleInput(scope.row)">-->
<!--								<el-button slot="prepend" @click="del(scope.row)"><i class="el-icon-minus"></i>-->
<!--								</el-button>-->
<!--								<el-button slot="append" @click="add(scope.row)"><i class="el-icon-plus"></i>-->
<!--								</el-button>-->
<!--							</el-input>-->
<!--						</div>-->
<!--					</template>-->
<!--				</el-table-column>-->
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
				total: 0,
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
			submitForm(formName) {
				this.tableData = [];
				const url = 'Commodity_out_list/';
				axios.get(url).then((res) => {
					if (res.data.message === '') {
						const count = res.data.data['count'];
						for (let i = 0; i < count; i++) {
							const exam = new Array(res.data.data['list'][i]);
							exam[0]['goodTotal'] = (exam[0]['number'] * exam[0]['StandardPrice']).toFixed(2);
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
			},
		},
		created() {
			this.submitForm();
		}
	}
</script>
