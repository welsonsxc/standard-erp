<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class BaseController extends Controller
{
    public $response = [
        'message' => '',
        'data' => [],
    ];

    public function errorResponse($message)
    {
        $this->response['message'] = $message;
        return $this->response;
    }

    public function successResponse($data)
    {
        $this->response['data'] = $data;
        return $this->response;
    }
}
