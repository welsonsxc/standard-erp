<template>
	<el-container>
		<el-aside width="200px">
			<el-menu :default-openeds="['1','2']" default-active="1-1">
				<el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>商品管理</template>
					<el-menu-item-group>
						<router-link to="/shopcar">
						<el-menu-item index="1-1">商品销售</el-menu-item>
						</router-link>
						<router-link to="/CommodityIn">
						<el-menu-item index="1-2">商品入库</el-menu-item>
						</router-link>
					</el-menu-item-group>
				</el-submenu>
				<el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>订单管理</template>
					<el-menu-item-group>
						<router-link to="/Order">
							<el-menu-item index="2-1">订单查询</el-menu-item>
						</router-link>
					</el-menu-item-group>
					<el-menu-item-group>
						<router-link to="/Inlist">
							<el-menu-item index="2-2">销售排行</el-menu-item>
						</router-link>
					</el-menu-item-group>
				</el-submenu>
			</el-menu>
		</el-aside>
		<el-container>
			<el-header>小型超市管理系统</el-header>
			<el-main>
				<div>
					<router-view>
						<!--路由引入的组件将在这里被渲染-->
					</router-view>
				</div>

			</el-main>
			<el-footer>copyright@lilou</el-footer>
		</el-container>
	</el-container>
</template>

<style>
	a {
		text-decoration: none
	}

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
		min-height: 600px;
		max-height: 600px;
		overflow-y:auto;
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

	 .el-table__header tr{
		 max-height: 60px;
	 }
	.el-table__header th {
		max-height: 60px;
	}

</style>