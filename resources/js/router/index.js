import Vue from 'vue';
import VueRouter from 'vue-router';
import ShopCar from "../components/ShopCar";
import CommodityIn from "../components/CommodityIn";
import Order from "../components/Order";

Vue.use(VueRouter);

export default new VueRouter({
	saveScrollPosition: true,
	routes: [
		{
			name: 'index',
			path: '/',
			component: ShopCar
		},
		{
			name: 'shopcar',
			path: '/shopcar',
			component: ShopCar
		},
		{
			name: 'CommodityIn',
			path: '/CommodityIn',
			component: CommodityIn
		},
		{
			name: 'Order',
			path: '/Order',
			component: Order
		}

	]
});