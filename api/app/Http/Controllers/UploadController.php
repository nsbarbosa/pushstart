<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Repositories\UserRepository;
use App\Http\Requests\ImageRequest;
// use Illuminate\Support\Str;

class UploadController extends Controller
{
    protected $user;

    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct(UserRepository $user)
    {
        $this->user = $user;

    }
    public function upload(ImageRequest $request){

        $user_id = Auth::id();
        $user = $this->user->findOrFail($user_id);

        $upload_path = 'uploads/' . $user->id;
        $extension = request()->image->getClientOriginalExtension();
        request()->image->move($upload_path, 'image.'.$extension);
        $url = '/'.$upload_path.'/image.'.$extension;
        $image = $this->user->uploadImage($user,$url);

        return $this->success(compact('url','image'));
    }
}
