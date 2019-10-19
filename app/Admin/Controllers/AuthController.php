<?php

namespace App\Admin\Controllers;

use Illuminate\Http\Response;
use Encore\Admin\Controllers\AuthController as BaseAuthController;
use Illuminate\Http\Request;

class AuthController extends BaseAuthController
{


    /**
     * Send the response after the user was authenticated.
     *
     * @param Request $request
     *
     * @return Response
     */
    protected function sendLoginResponse(Request $request)
    {
        $username = $request->input('username');

        admin_toastr(trans('admin.login_successful'));

        $request->session()->regenerate();

        return redirect()->to($this->redirectPath());
    }


}
