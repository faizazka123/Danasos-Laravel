<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;
use App\Http\Requests\LoginRequest;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(LoginRequest $request) {

    }

    public function logout(Request $request) {
        $user = Auth::user();

        $user->currentAccessToken()->delete();

        return response( [
            'success' => true
        ]);
    }
}
