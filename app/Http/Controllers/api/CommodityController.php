<?php

namespace App\Http\Controllers\Api;

use App\Commodity;
use App\CommodityIn;
use App\CommodityOut;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CommodityController extends BaseController
{
	/**
	 * 商品信息
	 * @param Request $request
	 * @param $id
	 * @return array
	 * @author lilou
	 */
	public function getCommodityInfo(Request $request, $id)
	{
		$data = Commodity::select('id', 'CommodityFull', 'StandardPrice')
			->where('id', $id)
			->get();
		if ($data->count() != 0) {
			return $this->successResponse($data);
		}

		return $this->errorResponse('获取商品信息失败');

	}


	/**
	 * 商品列表
	 * @param Request $request
	 * @return array
	 * @author lilou
	 */
	public function getCommodityList(Request $request)
	{
		$page = $request->input('page', 1);
		$page = $page > 1 ? $page : 1;
		$size = $request->input('size', 5);

		$list = Commodity::select('id', 'CommodityFull', 'StandardPrice', 'image')
			->orderBy('id', 'asc')
			->offset(($page - 1) * $size)
			->limit($size)
			->get();
		if ($list) {
			$data['list'] = $list;
			$data['count'] = Commodity::count();
			return $this->successResponse($data);
		}

		return $this->errorResponse('获取商品列表失败');
	}


	/**
	 * 商品入库
	 * @param Request $request
	 * @return array
	 * @author lilou
	 */
	public function CommodityIn(Request $request)
	{
		$data['list'] = '';
		$requestData = $request->input('data');

		$rules = [
			'id' => 'required',
			'number' => 'required',
		];
		$commodity_in_id = CommodityIn::max('id') + 1;
		foreach ($requestData as $i) {
			//验证有效性
			$validatorData = Validator::make($i, $rules);
			if ($validatorData->fails()) {
				$msg = $validatorData->errors()->first();
				return $this->errorResponse($msg);
			}

			//修改商品数量
			$commodity_id = $i['id'];
			$result = Commodity::where('id', $commodity_id)->value('Num');
			$result = Commodity::find($commodity_id)->update(['Num' => $result + $i['number']]);

			if ($result == null) {
				return $this->errorResponse('商品库存修改失败');
			}

			//添加商品入库记录
			$sell_data['id'] = $commodity_in_id;
			$sell_data['CommodityId'] = $commodity_id;
			$sell_data['Num'] = $i['number'];
			$result = CommodityIn::create($sell_data);

			if ($result->count() == 0) {
				return $this->errorResponse('商品入库记录失败');
			}
		}
		return $this->successResponse($commodity_in_id);
	}

	/**
	 * 销售商品
	 * @param Request $request
	 * @return array
	 * @author lilou
	 */
	public function CommodityOut(Request $request)
	{
		$data['list'] = '';
		$requestData = $request->input('data');

		$rules = [
			'id' => 'required',
			'number' => 'required',
		];
		$commodity_out_id = CommodityOut::max('id') + 1;
		foreach ($requestData as $i) {
			//验证有效性
			$validatorData = Validator::make($i, $rules);
			if ($validatorData->fails()) {
				$msg = $validatorData->errors()->first();
				return $this->errorResponse($msg);
			}

			//修改商品数量
			$commodity_id = $i['id'];
			$result = Commodity::find($commodity_id);
			if ($result == null) {
				return $this->errorResponse('商品不存在');
			}
			$num = Commodity::where('id', $commodity_id)->value('Num');
			if ($num - $i['number'] < 0) {
				return $this->errorResponse('商品库存不足');
			}

			$result = Commodity::find($commodity_id)->update(['Num' => $num - $i['number']]);

			if ($result == null) {
				return $this->errorResponse('商品库存修改失败');
			}

			//添加商品销售记录

			$sell_data['id'] = $commodity_out_id;
			$sell_data['CommodityId'] = $commodity_id;
			$sell_data['Num'] = $i['number'];
			$result = CommodityOut::create($sell_data);

			if ($result->count() == 0) {
				return $this->errorResponse('商品销售记录添加失败');
			}
		}

		return $this->successResponse($commodity_out_id);

	}

	/**
	 * 订单查询
	 * @param Request $request
	 * @param $id
	 * @return array
	 */
	public function searchOrder(Request $request, $id)
	{
		$data['list'] = [];
		$requestData = $request->input('data');
		$type = $requestData['type'];
		$type = $type > 0 ? $type : 1;
		if ($type == 1) {
			$commodity = CommodityOut::select('CommodityId', 'Num')
				->where('id', $id)
				->get();
			if ($commodity->count() != 0) {
				foreach ($commodity as $i) {
					$result = Commodity::select('id', 'CommodityFull', 'StandardPrice')
						->where('id', $i['CommodityId'])
						->get();

					$result[0]['number'] = $i['Num'];
					array_push($data['list'], $result[0]);
				}
				$data['count'] = $commodity->count();
				return $this->successResponse($data);
			} else {
				return $this->errorResponse('error');
			}
		} else if ($type == 2) {
			$commodity = CommodityIn::select('CommodityId', 'Num')
				->where('id', $id)
				->get();
			if ($commodity->count() != 0) {
				$data['list'] = $commodity;
				$data['count'] = $commodity->count();
				return $this->successResponse($data);
			} else {
				return $this->errorResponse('error');
			}
		}

		return $this->errorResponse('error');
	}

}
