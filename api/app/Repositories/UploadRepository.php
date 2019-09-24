<?php
namespace App\Repositories;

use App\User;
use Illuminate\Validation\ValidationException;
use Illuminate\Support\Facades\File;

class UploadRepository
{
    protected $user;

    /**
     * Instantiate a new instance.
     *
     * @return void
     */
    public function __construct(User $user)
    {
        $this->user = $user;
    }
    public function uploadImage($url,$user){
        $path = asset($url);
        if (file_exists($path))
            File::delete($path);
 
        $user->image = $path;
        $user->save();
        
        return $user->url;
    }
}
